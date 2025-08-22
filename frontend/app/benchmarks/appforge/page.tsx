
import Section from "@/components/Section";

export default function Page(){
  return (
    <main>
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container py-10 space-y-3">
          <h1 className="h1">AppForge Bench</h1>
          <p className="text-gray-600">AppForge Authors</p>
          <div className="flex flex-wrap gap-2">
            <a className="btn" href="#">Paper</a>
            <a className="btn" href="#">GitHub</a>
            <a className="btn" href="#">Dataset</a>
          </div>
        </div>
      </section>

      <Section title="Overview">
        <p>AppForge Bench overview text here. Replace with your real description next week.</p>
      </Section>

      <Section title="Resources">
        <ul className="list-disc pl-5 space-y-1">
          <li>Base dataset</li>
          <li>Retrieval datasets</li>
          <li>Model weights (optional)</li>
        </ul>
      </Section>

      <Section title="Citation">
        <pre className="bg-gray-50 p-3 rounded-xl overflow-x-auto text-sm"><code>@inproceedings{afb2025,...}</code></pre>
      </Section>
    </main>
  );
}
