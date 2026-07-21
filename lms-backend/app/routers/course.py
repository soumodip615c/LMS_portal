"""
Course router.

STUB — implemented in Phase 7 (Course Management).
Per the project rules: routers only receive the request, validate input,
call the matching service, and return the response. No business logic
or SQL queries belong in this file.
"""

from fastapi import APIRouter

router = APIRouter(prefix="/course", tags=["Course"])
