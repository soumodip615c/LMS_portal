# LMS Backend

FastAPI + PostgreSQL backend for the LMS portal. Built strictly in the
phase order and layered architecture (Router → Service → Repository →
Database) defined in the project's own rules docs.

## Stack (locked — see does_and_dont_for_ai-lms.docx §21)
- Backend: FastAPI
- API style: REST
- Database: PostgreSQL
- ORM: SQLAlchemy
- Migrations: Alembic
- Auth: JWT + bcrypt
- File uploads: local storage (dev), cloud later
- Deployment: Docker

## Folder structure
```
backend/
├── app/
│   ├── main.py
│   ├── core/            # config, security, database
│   ├── models/          # SQLAlchemy models (one model = one table)
│   ├── schemas/         # Pydantic request/response schemas
│   ├── routers/         # route handlers only — no business logic
│   ├── services/        # business logic lives here
│   ├── repositories/    # DB queries only — no business logic
│   ├── middleware/
│   ├── utils/
│   ├── uploads/         # videos/, notes/, assignments/
│   └── tests/
├── alembic/
├── requirements.txt
├── .env.example
├── Dockerfile
└── docker-compose.yml
```

## Build order (does_and_dont_for_ai-lms.docx §22)
1. **Project setup** ← current phase
2. Database models
3. Authentication
4. User profiles
5. Course management
6. Video management
7. Notes/PDFs
8. Assignments
9. Attendance
10. Quiz integration
11. Notifications
12. Frontend integration
13. Testing
14. Docker
15. Deployment

## Phase 1 status: done
- Folder/file skeleton created to match techstack_arc_for_lms.docx exactly.
- `main.py` boots a minimal FastAPI app with `/` and `/health` checks.
- `core/config.py` loads `.env` via python-dotenv (no DB, no auth logic yet).
- `core/database.py`, `core/security.py`, and every file in `routers/` are
  intentionally empty stubs — each is implemented only when its phase is
  reached, so we never jump ahead of the approved build order.

## Run it
```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```
Visit `http://127.0.0.1:8000/health` — should return `{"status": "healthy"}`.

## Note
`Simplified_LMS_Backend_Requirements.docx` was referenced but didn't
come through in the upload — only `techstack_arc_for_lms.docx`,
`does_and_dont_for_ai-lms.docx`, and `libariesd_for_lms.docx` were
readable. Structure/rules/libraries above are taken from those three.
Re-upload the requirements doc if it has details (e.g. exact API fields,
grading rules) not covered here.
