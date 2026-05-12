const rows = [
  { label: "Konstrukční použití",  osb: "✓",        jsd: "✓",         hsd: "✓" },
  { label: "Vlhké prostředí",      osb: "omezeně",  jsd: "✓ (P5)",    hsd: "✓ (P7)" },
  { label: "Vyšší zatížení",       osb: "omezeně",  jsd: "✓",         hsd: "✓✓" },
  { label: "Povrch",               osb: "hrubší",   jsd: "hladší",    hsd: "hladší" },
  { label: "Rozměrová stabilita",  osb: "standard", jsd: "vyšší",     hsd: "vysoká" },
  { label: "Obaly",                osb: "omezeně",  jsd: "✓",         hsd: "✓✓" },
  { label: "Perodrážka (4PD)",     osb: "✗",        jsd: "✓",         hsd: "✓" },
  { label: "Lokální výroba (CZ)",  osb: "různé",    jsd: "✓ DDL",     hsd: "✓ DDL" },
];

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="text-left px-4 py-3 font-semibold text-gray-700">Kritérium</th>
            <th className="text-center px-4 py-3 font-semibold text-gray-500">OSB</th>
            <th className="text-center px-4 py-3 font-semibold text-green-700 bg-green-50">JSD P5</th>
            <th className="text-center px-4 py-3 font-semibold text-blue-700 bg-blue-50">HSD P7</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-3 text-gray-700 font-medium">{row.label}</td>
              <td className="px-4 py-3 text-center text-gray-500">{row.osb}</td>
              <td className="px-4 py-3 text-center text-green-700 font-medium bg-green-50/40">{row.jsd}</td>
              <td className="px-4 py-3 text-center text-blue-700 font-medium bg-blue-50/40">{row.hsd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
