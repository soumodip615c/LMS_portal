"""
Quiz router.

STUB — implemented in Phase 13 (Google Form Quiz Integration).
Per the project rules: routers only receive the request, validate input,
call the matching service, and return the response. No business logic
or SQL queries belong in this file.
"""

from fastapi import APIRouter

router = APIRouter(prefix="/quiz", tags=["Quiz"])
