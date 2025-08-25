
export default function Page() {
  const models = [
    { key: "deepseekv3", title: "deepseekv3" },
    { key: "kimik2", title: "kimik2" },
    { key: "qwen3coder", title: "qwen3coder" }
  ];
  const shots = ["shot1.jpg","shot2.jpg","shot3.jpg","shot4.jpg"];

  const gridStyle = { display: "grid", gridTemplateColumns: "160px repeat(4, 168px)", gap: "12px" };
  const thumbWrapStyle = { width: "168px", height: "100px", borderRadius: "10px", border: "2px solid #e5e7eb", overflow: "hidden", background: "#fff" };
  const imgStyle = { width: "100%", height: "100%", objectFit: "cover", display: "block" };

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

      {/* Demo: comparison grid with fixed-size thumbnails */}
      <section className="section">
        <div className="container space-y-4">
          <h2 className="h2">Demo</h2>
          <p className="text-gray-600">
            Upload 12 screenshots to <code>frontend/public/demo/&lt;model&gt;/shot1.jpg..shot4.jpg</code>.
            The gallery below enforces fixed-size thumbnails (168×100) so large images won't overflow.
          </p>

          <div className="overflow-x-auto">
            <div style={gridStyle}>
              <div></div>
              {shots.map((s, i)=>(
                <div key={s} style={{ textAlign: "center", fontSize: "12px", color: "#6b7280", paddingTop: "4px" }}>Shot {i+1}</div>
              ))}

              {models.map((m)=> (
                <>
                  {/* label cell */}
                  <div key={m.key + '-label'} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "8px" }}>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontWeight: 600 }}>{m.title}</div>
                      <div style={{ fontSize: "12px", color: "#6b7280" }}>LLM output screenshots</div>
                    </div>
                  </div>

                  {/* 4 thumbnails */}
                  {shots.map((s)=> (
                    <div key={m.key + '-' + s} style={thumbWrapStyle}>
                      <img
                        src={`/demo/${m.key}/${s}`}
                        alt={`${m.title} ${s}`}
                        style={imgStyle}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", fontSize: "12px", color: "#6b7280", marginTop: "8px" }}>
            Suggested original image size: ≥ 336×200. Thumbnails render at 168×100.
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
