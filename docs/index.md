# AppForge — Benchmarking LLMs for Android App Generation

> A benchmark to evaluate large language models on generating **runnable Android apps** from task specs.

**AppForge provides:**

- ✅ Real-world Android tasks (UI & functionality)
- ✅ Reproducible evaluation harness (Docker + Gradle)
- ✅ Multiple dataset splits (Base, Lite, Verified)
- ✅ Leaderboards and baselines

:material-rocket-launch: **Get started** in minutes — see the **Quick Start** below.

---

## Quick Start

=== "pip"

    ```bash
    pip install mkdocs-material
    mkdocs serve
    ```

=== "Docker"

    ```bash
    docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
    ```

---

## Documentation Structure

- **Getting Started** — install, run the harness, and evaluate a model.
- **User Guides** — datasets, evaluation protocol, examples.
- **Reference** — CLI/API for the harness.
- **Leaderboard** — sortable table of results.
- **Cite** — how to reference this benchmark.
