
'use client';
import { useMemo, useState } from "react";
type Row = { model: string; dataset: string; resolved: number; notes?: string };
export default function LeaderboardTable({ rows }: { rows: Row[] }){
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.toLowerCase();
    return rows.slice().sort((a,b)=> b.resolved - a.resolved)
      .filter(r => r.model.toLowerCase().includes(s) || r.dataset.toLowerCase().includes(s));
  }, [q, rows]);
  return (
    <div className="card overflow-hidden">
      <div className="p-3 border-b border-gray-200 flex items-center justify-between gap-3">
        <div className="h3">Leaderboard</div>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search models..."
          className="border border-gray-300 rounded-xl px-3 py-2 w-64"/>
      </div>
      <table className="tbl">
        <thead>
          <tr><th>Rank</th><th>Model / System</th><th>Dataset</th><th>% Resolved</th><th>Notes</th></tr>
        </thead>
        <tbody>
          {filtered.map((r, i)=>(
            <tr key={r.model + i}>
              <td className="font-mono text-sm">{i+1}</td>
              <td className="font-medium">{r.model}</td>
              <td>{r.dataset}</td>
              <td className="font-mono">{r.resolved.toFixed(1)}</td>
              <td className="text-gray-600">{r.notes || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
