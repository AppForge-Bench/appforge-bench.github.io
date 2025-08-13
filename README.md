# AppForge Docs (MkDocs + Material)

This repository hosts the AppForge benchmark website.

## Local preview (optional)
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip mkdocs-material
mkdocs serve
```

## Deploy (GitHub Actions)
- Push changes to `main`. The workflow in `.github/workflows/deploy.yml` will build the site and publish to `gh-pages`.
- In **Settings → Pages**, set Source: **Deploy from a branch**, Branch: **gh-pages**.
- Your site will be live at: https://appforge-bench.github.io/
