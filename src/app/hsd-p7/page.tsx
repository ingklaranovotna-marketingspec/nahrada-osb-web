import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "HSD P7 – vysoce zatížitelná konstrukční deska P7",
  description:
    "DTD HSD P7 – konstrukční dřevotřísková deska třídy P7 pro náročné průmyslové aplikace, exportní obaly a těžké konstrukce. Výrobce DDL Lukavec.",
  alternates: { canonical: "https://nahradaosb.cz/hsd-p7" },
  keywords: ["HSD P7", "konstrukční deska P7", "deska pro obaly", "průmyslová konstrukční deska", "DTD HSD"],
};

const specs = [
  { label: "Norma", value: "EN 312 P7" },
  { label: "Formáty (mm)", value: "2840×1830 (ostrohrané), 1800×900, 1800×675 (4PD)" },
  { label: "Tloušťky (mm)", value: "10, 12, 15, 18, 22, 25" },
  { label: "Hrana", value: "Ostrohrané nebo perodrážka ze 4 stran (4PD)" },
  { label: "Výrobce", value: "DDL Lukavec" },
  { label: "Distributor", value: "Kili s.r.o." },
];

export default function HsdP7Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "DTD HSD P7",
    description: "Konstrukční dřevotřísková deska třídy P7 pro průmyslové aplikace a obaly.",
    brand: { "@type": "Brand", name: "DDL Lukavec" },
    manufacturer: { "@type": "Organization", name: "DDL Lukavec" },
    url: "https://nahradaosb.cz/hsd-p7",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-gradient-to-br from-blue-50 to-white border-b border-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">Třída P7 | EN 312</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">DTD HSD P7</h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-6">
            Vysoce zatížitelná konstrukční dřevotřísková deska pro náročné průmyslové aplikace,
            exportní obaly a těžké konstrukce. Vyšší pevnost a únosnost než JSD P5.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kalkulacka"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-xl text-sm shadow"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Spočítat spotřebu <ArrowRight size={16} />
            </Link>
            <Link href="#poptavka" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-xl text-sm border border-gray-200 hover:bg-gray-50">
              Poptávka
            </Link>
          </div>
        </div>
      </section>

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

      <section id="obaly" className="py-14 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Průmyslové a exportní obaly</h2>
            <p className="text-gray-600 mb-4">
              HSD P7 je volbou číslo jedna pro výrobu exportních beden, přepravních paletových beden
              a průmyslového balení. Vyšší hustota a pevnost zajišťují odolnost při manipulaci i přepravě.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {["Exportní přepravní bedny", "Paletové obaly", "Technické průmyslové balení", "Obaly pro stroje a zařízení"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Těžké konstrukce a podlahy</h2>
            <p className="text-gray-600 mb-4">
              Díky normě P7 zvládne HSD i silně namáhané podlahy ve výrobních halách, podkladové desky
              pod těžká zařízení a náročné konstrukční aplikace.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {["Průmyslové podlahy", "Podkladové desky pod stroje", "Nosné prvky konstrukcí", "Těžké stropní podhledy"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="poptavka" className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-2">Poptejte HSD P7</h2>
          <p className="text-gray-500 text-center text-sm mb-6">Obratem vám pošleme informace o dostupnosti a ceně.</p>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
