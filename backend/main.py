from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.database import init_db
from backend.routers import login, register

app = FastAPI(title="Simple SQLite Auth API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def _startup():
    init_db()


app.include_router(register.router, prefix="/api", tags=["register"])
app.include_router(login.router, prefix="/api", tags=["login"])


@app.get("/")
def health_check():
    return {"status": "ok"}

