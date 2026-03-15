import os

from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, create_engine
from sqlalchemy.orm import declarative_base, relationship, sessionmaker


DB_PATH = os.getenv("DB_PATH", os.path.join(os.path.dirname(__file__), "database.db"))
DATABASE_URL = f"sqlite:///{DB_PATH}"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False},
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class Register(Base):
    __tablename__ = "register"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True, index=True)
    password_hash = Column(String, nullable=False)

    logins = relationship("Login", back_populates="user")


class Login(Base):
    __tablename__ = "login"

    id = Column(Integer, primary_key=True, index=True)
    register_id = Column(Integer, ForeignKey("register.id"), nullable=True, index=True)
    email = Column(String, nullable=False, index=True)
    success = Column(Boolean, nullable=False, default=False)

    user = relationship("Register", back_populates="logins")


def init_db() -> None:
    Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
