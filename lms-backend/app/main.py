"""
LMS Backend - Application Entry Point

Phase 1 (Project Setup): only a minimal FastAPI app with a health-check
route is wired up here. Routers will be registered (app.include_router)
starting from the phase where each module is actually implemented
(Auth -> Phase 4, Course -> Phase 7, Video -> Phase 8, etc.), per the
build order defined in does_and_dont_for_ai-lms.docx.
"""

from fastapi import FastAPI

from app.core.config import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
    version="0.1.0",
)


@app.get("/", tags=["Health"])
def read_root():
    """Basic health-check endpoint to confirm the server is running."""
    return {"status": "ok", "service": settings.PROJECT_NAME}


@app.get("/health", tags=["Health"])
def health_check():
    return {"status": "healthy"}
