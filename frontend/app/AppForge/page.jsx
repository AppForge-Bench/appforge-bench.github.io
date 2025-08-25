
export default function Page() {
  const models = [
    { key: "deepseekv3", title: "deepseekv3" },
    { key: "kimik2", title: "kimik2" },
    { key: "qwen3coder", title: "qwen3coder" }
  ];
  const shots = ["shot1.jpg","shot2.jpg","shot3.jpg","shot4.jpg"];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container py-12 space-y-4">
          <h1 className="h1">AppForge Bench</h1>
          <p className="text-gray-700 max-w-3xl">
            AppForge Bench evaluates large language models on real-world app engineering tasks.
            Given a project repo and an issue, a model is asked to produce a patch that resolves the problem —
            and we verify success with deterministic tests.
          </p>
          <div className="flex flex-wrap gap-2">
            <a className="btn" href="/">Open Leaderboards</a>
            <a className="btn" href="/analyze">Results Viewer</a>
            <a className="btn" href="/AppForge-Bench/">Docs</a>
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

      {/* Demo (3 x 4) */}
      <section className="section">
        <div className="container space-y-4">
          <h2 className="h2">Demo</h2>
          <p className="text-gray-600">Please upload the screenshots to <code>frontend/public/demo/&lt;model&gt;/shot1.jpg..shot4.jpg</code>. 3 models：deepseekv3、kimik2、qwen3coder.</p>

          {/* 3 columns (models) x 4 shots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((m) => (
              <div key={m.key} className="space-y-3">
                <div className="h3">{m.title}</div>
                <div className="grid grid-cols-1 gap-3">
                  {shots.map((s, i) => (
                    <div key={i} className="card overflow-hidden">
                      <img
                        src={`/demo/${m.key}/${s}`}
                        alt={`${m.title} ${s}`}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
    </main>
  );
}
