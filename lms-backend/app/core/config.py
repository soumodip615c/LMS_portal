"""
Core configuration.

Phase 1 (Project Setup) scope only:
- Loads environment variables from .env using python-dotenv.
- Exposes a simple `settings` object with the basics needed to boot the app.

Note: Pydantic-based settings validation (BaseSettings) is intentionally
NOT introduced here. Pydantic is brought in during Phase 3 (Data
Validation) per libariesd_for_lms.docx. This file will be upgraded then,
not before.
"""

import os

from dotenv import load_dotenv

load_dotenv()


class Settings:
    PROJECT_NAME: str = os.getenv("PROJECT_NAME", "LMS Backend")
    ENV: str = os.getenv("ENV", "development")

    # Placeholder only — real usage starts in Phase 2 (Database).
    DATABASE_URL: str = os.getenv("DATABASE_URL", "")

    # Placeholder only — real usage starts in Phase 4 (Authentication).
    SECRET_KEY: str = os.getenv("SECRET_KEY", "")


settings = Settings()
