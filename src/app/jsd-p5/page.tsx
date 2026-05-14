import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "JSD P5 – konstrukční deska P5 jako náhrada OSB",
  description:
    "DTD JSD P5 – konstrukční dřevotřísková deska třídy P5 pro stavebnictví, podlahy a dřevostavby. Vhodná do vlhkého prostředí. Výrobce DDL Lukavec.",
  alternates: { canonical: "https://nahradaosb.cz/jsd-p5" },
  keywords: ["JSD P5", "konstrukční deska P5", "náhrada OSB stavba", "dřevotřísková deska P5", "DTD JSD"],
};

const specs = [
  { label: "Norma", value: "EN 312 P5" },
  { label: "Formáty (mm)", value: "2840×1830 (ostrohrané), 1800×900, 1800×675 (4PD)" },
  { label: "Tloušťky (mm)", value: "8, 10, 12, 15, 18, 22" },
  { label: "Cena vs. OSB", value: "Až o 20 % nižší než OSB srovnatelné třídy" },
  { label: "Hrana", value: "Ostrohrané nebo perodrážka ze 4 stran (4PD)" },
  { label: "Varianta", value: "Probarvená / neprobarvená" },
  { label: "Výrobce", value: "DDL Lukavec" },
  { label: "Distributor", value: "Kili s.r.o." },
];

const usages = [
  {
    id: "stavebnictvi",
    title: "Stavebnictví a dřevostavby",
    desc: "JSD P5 je ideální pro suchou výstavbu, opláštění stěn, stropní podhledy a podkladové konstrukce v dřevostavbách. Díky třídě P5 odolává vlhkosti lépe než běžná OSB.",
    items: ["Opláštění stěn a příček", "Podkladové desky pod obklady", "Stropní podhledy", "Dřevostavby – konstrukční prvek"],
  },
  {
    id: "podlahy",
    title: "Podlahy",
    desc: "Deska JSD P5/4PD s perodrážkou ze 4 stran je speciálně navržena pro suché plovoucí podlahy.",
    items: ["Plovoucí suché podlahy", "Nosné podlahové skladby", "Rekonstrukce podlah"],
  },
];

export default function JsdP5Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "DTD JSD P5",
    description: "Konstrukční dřevotřísková deska třídy P5 pro stavebnictví a podlahy.",
    brand: { "@type": "Brand", name: "DDL Lukavec" },
    manufacturer: { "@type": "Organization", name: "DDL Lukavec" },
    url: "https://nahradaosb.cz/jsd-p5",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-green-50 to-white border-b border-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2">Třída P5 | EN 312</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">DTD JSD P5</h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-6">
            Univerzální konstrukční dřevotřísková deska pro stavebnictví, podlahy a dřevostavby.
            Plnohodnotná náhrada OSB – <strong>až o 20 % levnější</strong> než srovnatelné OSB desky, s lepší stabilitou a hladším povrchem.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kalkulacka"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-xl text-sm shadow"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Spočítat spotřebu <ArrowRight size={16} />
            </Link>
            <Link
              href="#poptavka"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-xl text-sm border border-gray-200 hover:bg-gray-50"
            >
              Poptávka
            </Link>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Technické parametry</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            {specs.map((s, i) => (
              <div key={s.label} className={`flex gap-4 px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <span className="font-medium text-gray-500 w-36 flex-shrink-0">{s.label}</span>
                <span className="text-gray-800">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USAGE */}
      <section className="py-14 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto space-y-10">
          {usages.map((u) => (
            <div key={u.id} id={u.id}>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{u.title}</h2>
              <p className="text-gray-600 mb-4">{u.desc}</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {u.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA CALCULATOR */}
      <section className="py-12 px-4 bg-white text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Spočítejte spotřebu JSD P5 pro váš projekt</h2>
        <p className="text-gray-500 mb-5 text-sm">Kalkulačka podporuje podlahy i dřevostavby.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/kalkulacka"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm shadow"
            style={{ backgroundColor: "var(--brand)" }}
          >
            Otevřít kalkulačku <ArrowRight size={16} />
          </Link>
          <Link
            href="/cena-osb-alternativa"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl text-sm border border-gray-200 hover:bg-gray-50"
          >
            Srovnání cen s OSB <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="poptavka" className="py-14 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-2">Poptejte JSD P5</h2>
          <p className="text-gray-500 text-center text-sm mb-6">Obratem vám pošleme informace o dostupnosti a ceně.</p>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
