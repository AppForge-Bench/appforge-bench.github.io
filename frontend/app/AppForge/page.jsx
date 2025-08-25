
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

      {/* Demo: comparison grid */}
      <section className="section">
        <div className="container space-y-4">
          <h2 className="h2">Demo</h2>
          <p className="text-gray-600">
            Comparison-style layout: the left column shows the model label and the next four columns show thumbnails.
            Upload 12 screenshots to <code>frontend/public/demo/&lt;model&gt;/shot1.jpg..shot4.jpg</code>.
          </p>

          {/* Header row */}
          <div className="overflow-x-auto">
            <div className="grid grid-cols-[160px_repeat(4,168px)] gap-3 md:gap-4">
              <div></div>
              {shots.map((s, i)=>(
                <div key={s} className="text-center text-xs md:text-sm text-gray-500 pt-1">Shot {i+1}</div>
              ))}

              {models.map((m)=> (
                <>
                  {/* label cell */}
                  <div key={m.key + '-label'} className="flex items-center justify-end pr-2">
                    <div className="text-right">
                      <div className="font-semibold">{m.title}</div>
                      <div className="text-xs text-gray-500">LLM output screenshots</div>
                    </div>
                  </div>

                  {/* 4 thumbnails */}
                  {shots.map((s, i)=> (
                    <div key={m.key + '-' + s} className="border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
                      <img
                        src={`/demo/${m.key}/${s}`}
                        alt={`${m.title} ${s}`}
                        className="w-[168px] h-[100px] object-cover block"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mt-2">
            Suggested original image size: ≥ 336×200. Thumbnails render at 168×100 for a compact comparison grid.
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
