# Run Doc — antariksha-web

Vite + React single-page site (no backend). Default dev port: **5173**.

## Reproduce the artifacts

1. Install dependencies with npm (lockfile: `package-lock.json`):
   ```bash
   npm install
   ```
2. No `.env*` files or other copied artifacts are needed — the app reads no environment
   variables at dev time.

## Run the server

```bash
npm run dev
```

Starts Vite on `http://localhost:5173/` (picks a free port automatically if 5173 is taken).

Detached start on Windows (logs to separate files, prints the pid):

```powershell
powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' -RedirectStandardOutput '.freebuff\preview.log' -RedirectStandardError '.freebuff\preview.log.err' -WindowStyle Hidden -PassThru).Id"
```

Then confirm it survived with `Get-Process -Id <pid>` and that
`http://localhost:5173/` answers HTTP 200 before registering the preview.
