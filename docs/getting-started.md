# Getting Started

## Requirements
- Python 3.9+
- Docker (20.10+) and Docker Compose
- Java 17 (for Android builds)
- Android SDK (commandline-tools + build-tools)

## Install (placeholder repo)
```bash
git clone YOUR_REPO_URL appforge
cd appforge
pip install -e .
```

## Evaluate a model
```bash
appforge eval --model gpt-xxx --task lite --out results/run_001.json
```

## Local docs
```bash
pip install mkdocs-material
mkdocs serve
```
