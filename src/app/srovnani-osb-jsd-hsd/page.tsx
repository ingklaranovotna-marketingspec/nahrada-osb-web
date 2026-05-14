import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "Srovnání OSB vs JSD P5 vs HSD P7 – JSD a HSD až o 20 % levnější",
  description:
    "Podrobné srovnání desek OSB, JSD P5 a HSD P7. JSD a HSD jsou až o 20 % levnější než srovnatelné OSB – s lepší pevností, vlhkoodolností a povrchem.",
  alternates: { canonical: "https://nahradaosb.cz/srovnani-osb-jsd-hsd" },
  keywords: ["srovnání OSB JSD HSD", "rozdíl OSB JSD", "JSD vs OSB", "HSD vs OSB", "která deska lepší"],
};

const differences = [
  {
    aspect: "Cena",
    osb: "Základní referenční cena",
    jsd: "Až o 20 % nižší cena než OSB srovnatelné třídy – lepší hodnota za peníze",
    hsd: "Až o 20 % nižší cena než OSB srovnatelné třídy – i při vyšší pevnosti třídy P7",
  },
  {
    aspect: "Norma a třída",
    osb: "EN 300 OSB/2, OSB/3, OSB/4 – specifická norma pro třískové desky z dlouhých třísek",
    jsd: "EN 312 P5 – dřevotřísková deska pro konstrukční použití ve vlhkém prostředí",
    hsd: "EN 312 P7 – dřevotřísková deska s vyšší pevností ve vlhkém prostředí",
  },
  {
    aspect: "Struktura",
    osb: "Vrstvená deska z orientovaných třísek (Oriented Strand Board) – viditelná textura",
    jsd: "Homogenní dřevotřísková deska – rovnoměrná hustota, hladší povrch",
    hsd: "Homogenní dřevotřísková deska s vyšší hustotou a pevností",
  },
  {
    aspect: "Vlhkoodolnost",
    osb: "OSB/3 vhodná do vlhkého prostředí, OSB/2 pouze pro suché prostředí",
    jsd: "Třída P5 – konstrukční použití ve vlhkém prostředí dle EN 312",
    hsd: "Třída P7 – konstrukční použití ve vlhkém prostředí s vyšší pevností",
  },
  {
    aspect: "Povrch",
    osb: "Hrubší, viditelné třísky, méně vhodné pro lepení a finální povrchy",
    jsd: "Hladší, rovnoměrný – lepší pro CNC opracování a finální povrchy",
    hsd: "Hladší, rovnoměrný – vhodný i pro technické obaly a průmysl",
  },
  {
    aspect: "Perodrážka",
    osb: "Výjimečně, záleží na výrobci",
    jsd: "Standardně dostupná (4PD) – ideální pro plovoucí podlahy",
    hsd: "Standardně dostupná (4PD)",
  },
];

export default function SrovnaniPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Srovnání OSB vs. JSD vs. HSD</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hledáte náhradu OSB? Porovnejte standardní OSB desky s konstrukčními deskami
            JSD P5 a HSD P7 od DDL Lukavec – až o 20 % levnější při lepších parametrech.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Přehledná srovnávací tabulka</h2>
          <ComparisonTable />
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Detailní srovnání vlastností</h2>
          <div className="space-y-6">
            {differences.map((d) => (
              <div key={d.aspect} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
                  <span className="font-semibold text-gray-800">{d.aspect}</span>
                </div>
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  <div className="px-5 py-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">OSB</div>
                    <p className="text-sm text-gray-600">{d.osb}</p>
                  </div>
                  <div className="px-5 py-4 bg-green-50/40">
                    <div className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2">JSD P5</div>
                    <p className="text-sm text-gray-700">{d.jsd}</p>
                  </div>
                  <div className="px-5 py-4 bg-blue-50/40">
                    <div className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">HSD P7</div>
                    <p className="text-sm text-gray-700">{d.hsd}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Kdy zvolit kterou desku?</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="font-bold text-gray-800 mb-2">OSB</div>
              <p className="text-sm text-gray-600">Standardní stavební aplikace, kde není potřeba specifická vlhkoodolnost ani vyšší pevnost. Cenově dostupná volba pro masové použití.</p>
            </div>
            <div className="border border-green-200 bg-green-50/30 rounded-xl p-5">
              <div className="font-bold text-green-800 mb-2">JSD P5 – vhodná když:</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Chcete ušetřit až 20 % oproti OSB</li>
                <li>• Stavba / dřevostavba s vlhkostí</li>
                <li>• Plovoucí podlahy (4PD)</li>
                <li>• Lepší povrch pro CNC</li>
              </ul>
            </div>
            <div className="border border-blue-200 bg-blue-50/30 rounded-xl p-5">
              <div className="font-bold text-blue-800 mb-2">HSD P7 – vhodná když:</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Chcete ušetřit až 20 % oproti OSB</li>
                <li>• Průmyslové obaly a exportní bedny</li>
                <li>• Těžké průmyslové podlahy</li>
                <li>• Náročné zatížení konstrukcí</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50 border-t border-gray-100 text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-gray-600 mb-5">Nejste si jistí, která deska je pro váš projekt správná?</p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm shadow"
            style={{ backgroundColor: "var(--brand)" }}
          >
            Doporučit vhodnou desku <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
