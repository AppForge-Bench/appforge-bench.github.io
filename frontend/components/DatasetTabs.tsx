
'use client';
import { useState } from "react";
export default function DatasetTabs({ datasets }: { datasets: string[] }) {
  const [active, setActive] = useState(datasets[0]);
  return (
    <div className="flex flex-wrap gap-2">
      {datasets.map(d => (
        <button key={d} onClick={()=>setActive(d)} className={"badge " + (active === d ? "bg-gray-100" : "")}>
          {d}
        </button>
      ))}
    </div>
  );
}
