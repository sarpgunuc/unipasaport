# Admin Panel

This is a minimal React.js admin panel for managing courses, topics and videos.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

The app expects the backend API to provide the following endpoints:

- `POST /api/auth/login` returns `{ token: "JWT" }`.
- `GET/POST/DELETE /api/courses`
- `GET/POST/DELETE /api/topics`
- `GET/POST/DELETE /api/videos`

The JWT token is stored in `localStorage` and sent as `Authorization: Bearer <token>` in each request.
