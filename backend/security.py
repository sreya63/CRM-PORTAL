import base64
import hashlib
import hmac
import secrets


_ALGO = "pbkdf2_sha256"
_ITERATIONS = 120_000


def hash_password(password: str) -> str:
    salt = secrets.token_bytes(16)
    dk = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, _ITERATIONS)
    return "{}${}${}${}".format(
        _ALGO,
        _ITERATIONS,
        base64.urlsafe_b64encode(salt).decode("ascii"),
        base64.urlsafe_b64encode(dk).decode("ascii"),
    )


def verify_password(password: str, stored: str) -> bool:
    try:
        algo, iter_s, salt_b64, dk_b64 = stored.split("$", 3)
        if algo != _ALGO:
            return False
        iterations = int(iter_s)
        salt = base64.urlsafe_b64decode(salt_b64.encode("ascii"))
        expected = base64.urlsafe_b64decode(dk_b64.encode("ascii"))
    except Exception:
        return False

    dk = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, iterations)
    return hmac.compare_digest(dk, expected)

