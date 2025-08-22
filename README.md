
# AppForge Bench (combined site)

This repository structure mirrors SWE-bench's website pattern:
- **Root** (`/`) serves a static **Leaderboards** site.
- **Docs** live at **`/AppForge-Bench/`**, built with **Material for MkDocs**.

## Quick: upload via GitHub web UI (no terminal)

1. **Download the release ZIP produced by ChatGPT** and unzip it locally.
2. Open your repo on GitHub: `https://github.com/AppForge-Bench/appforge-bench.github.io`
3. Click **Add file ▸ Upload files**.
4. **Drag-and-drop all unzipped files/folders** (not the ZIP itself) into the upload area.
5. Scroll down, type a commit message like `feat: upload combined site`, choose **Commit directly to the main branch**, and **Commit changes**.
6. Go to **Actions** tab, wait for **Build & Deploy (Next export + MkDocs)** to finish.
7. Visit your site:
   - Root: `https://appforge-bench.github.io/`
   - Docs: `https://appforge-bench.github.io/AppForge-Bench/`

## Local preview (optional; can be skipped)
- Frontend: `cd frontend && npm install && npm run dev`
- Docs: `pip install mkdocs-material && mkdocs serve`

## Where to edit content later
- Leaderboard data: `frontend/lib/data/leaderboard.json`
- News: `frontend/lib/data/news.json`
- Citations: `frontend/lib/data/citations.json`
- Benchmarks text & links: `frontend/app/benchmarks/*/page.tsx`
- Docs: `docs/` + `mkdocs.yml` (builds into `/AppForge-Bench/` automatically)
