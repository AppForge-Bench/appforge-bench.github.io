export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container py-12 space-y-4">
          <h1 className="h1">AppForge Bench</h1>
          <p className="text-gray-700 max-w-3xl">
            AppForge Bench evaluates large language models on real-world app engineering tasks.
            Given a project repo and an issue, a model is asked to produce a patch that resolves the problem —
            and we verify success with deterministic tests. (Layout inspired by SWE-bench.)
          </p>
          <div className="flex flex-wrap gap-2">
            <a className="btn" href="/">Open Leaderboards</a>
            <a className="btn" href="/analyze">Results Viewer</a>
            <a className="btn" href="/AppForge-Bench/">Docs</a>
          </div>
        </div>
      </section>

      {/* Variants grid */}
      <section className="section">
        <div className="container space-y-6">
          <h2 className="h2">All of the Projects</h2>
          <p className="text-gray-600">Explore benchmarks in the AppForge ecosystem.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/benchmarks/appforge" className="card p-4 hover:bg-gray-50 transition">
              <div className="h3 mb-1">AppForge Bench</div>
              <p className="text-sm text-gray-600">Full benchmark of real issues.</p>
            </a>
            <a href="/benchmarks/verified" className="card p-4 hover:bg-gray-50 transition">
              <div className="h3 mb-1">AppForge Verified</div>
              <p className="text-sm text-gray-600">Human-validated subset for reliable scoring.</p>
            </a>
            <a href="/benchmarks/lite" className="card p-4 hover:bg-gray-50 transition">
              <div className="h3 mb-1">AppForge Lite</div>
              <p className="text-sm text-gray-600">Cost-efficient subset for rapid iteration.</p>
            </a>
            <a href="/benchmarks/multimodal" className="card p-4 hover:bg-gray-50 transition">
              <div className="h3 mb-1">AppForge Multimodal</div>
              <p className="text-sm text-gray-600">Issues enriched with screenshots and visuals.</p>
            </a>
            <a href="/benchmarks/bash-only" className="card p-4 hover:bg-gray-50 transition">
              <div className="h3 mb-1">AppForge Bash Only</div>
              <p className="text-sm text-gray-600">Mini-agent environment for fast runs.</p>
            </a>
            <a href="/benchmarks/multilingual" className="card p-4 hover:bg-gray-50 transition">
              <div className="h3 mb-1">AppForge Multilingual</div>
              <p className="text-sm text-gray-600">Cross-language evaluation.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container space-y-4">
          <h2 className="h2">Overview</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Tasks are real issues curated from open-source projects.</li>
            <li>Agent/tool use is allowed; final scoring is execution-based.</li>
            <li>We provide Dockerized harnesses for reproducible evaluation.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <a className="btn" href="/">See Leaderboards</a>
            <a className="btn" href="/analyze">Analyze Results</a>
            <a className="btn" href="/AppForge-Bench/guides/datasets/">Datasets Guide</a>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section">
        <div className="container space-y-4">
          <h2 className="h2">Resources</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a className="hover:underline" href="/AppForge-Bench/">Documentation</a></li>
            <li><a className="hover:underline" href="https://github.com/AppForge-Bench" target="_blank">GitHub Organization</a></li>
            <li><a className="hover:underline" href="https://huggingface.co" target="_blank">Datasets on Hugging Face (placeholder)</a></li>
            <li><a className="hover:underline" href="/citations">Citations</a></li>
          </ul>
        </div>
      </section>

      {/* Citation */}
      <section className="section">
        <div className="container space-y-3">
          <h2 className="h2">Citation</h2>
          <p className="text-gray-600">If you use AppForge Bench in your work, please cite:</p>
          <pre className="bg-gray-50 p-3 rounded-xl overflow-x-auto text-sm">
            <code>{`@inproceedings{{appforge2025,
  title={{AppForge Bench}: Evaluating LLMs on Real-World App Tasks},
  author={{Your Team}},
  booktitle={{Conference}},
  year={{2025}},
  url={{https://appforge-bench.github.io}}
}`}</code>
          </pre>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section">
        <div className="container">
          <a className="btn" href="/">Back to Leaderboards</a>
        </div>
      </section>
    </main>
  );
}