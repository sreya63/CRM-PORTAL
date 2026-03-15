from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from sqlalchemy.orm import Session

from backend.database import Login, Register, get_db
from backend.security import verify_password


router = APIRouter()


class LoginRequest(BaseModel):
    email: str
    password: str


@router.post("/login")
def login(req: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(Register).filter(Register.email == req.email).first()
    if not user:
        login_row = Login(
            register_id=None,
            email=req.email,
            success=False,
        )
        db.add(login_row)
        db.commit()
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No user found. Register first.",
        )

    ok = verify_password(req.password, user.password_hash)

    login_row = Login(
        register_id=user.id,
        email=req.email,
        success=ok,
    )
    db.add(login_row)
    db.commit()
    db.refresh(login_row)

    if not ok:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password.",
        )

    return {
        "message": "Login successful",
        "register_id": user.id,
        "login_id": login_row.id,
    }
