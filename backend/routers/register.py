from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session

from backend.database import Register, get_db
from backend.security import hash_password


router = APIRouter()


class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str
    confirm_password: str


@router.post("/register")
def register(req: RegisterRequest, db: Session = Depends(get_db)):
    if req.password != req.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    if db.query(Register).filter(Register.email == req.email).first():
        raise HTTPException(status_code=400, detail="Email already registered")

    user = Register(
        name=req.name,
        email=req.email,
        password_hash=hash_password(req.password),
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    return {"message": "Registered successfully", "register_id": user.id}
