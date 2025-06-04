# Student Web

This is a minimal React app for students. It provides:

- Email/password login with backend JWT
- Course/topic filtering and short video feed
- Instagram Reels style vertical navigation
- Ability to like or save videos
- A separate "Saved" tab showing saved videos

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The backend API endpoints expected by this app are:

- `POST /api/login` &rarr; `{ token: string }`
- `GET /api/videos` &rarr; list of videos
- `GET /api/videos/saved`
- `POST /api/videos/:id/like`
- `POST /api/videos/:id/save`
