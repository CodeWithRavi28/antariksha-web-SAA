# Run doc — antariksha-web

Vite + React single-page site. No env files required (none exist; nothing to copy).

## How to reproduce the artifacts

- Dependencies: `npm install` (run from the repo root `C:\Users\GGY\Desktop\SAA\antariksha-web`). A `package-lock.json` exists, so installs are reproducible.
- No `.env*` files are used by the app; `vite.config.js` is stock with no custom env wiring. Do not create or copy any env files.

## How to run the server

- Dev server (default port 5173): `npm run dev`
- Build: `npm run build` (outputs to `dist/`)
- Preview the built output: `npm run preview`

Detached start (Windows):

```
powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' -RedirectStandardOutput '<log>' -RedirectStandardError '<log>.err' -WindowStyle Hidden -PassThru).Id"
```

stdout and stderr must go to DIFFERENT files. The server listens on http://localhost:5173/ by default.
