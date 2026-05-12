import type { Metadata } from "next";
import DealerMap from "@/components/DealerMap";

export const metadata: Metadata = {
  title: "Kde koupit JSD a HSD desky – prodejci po celé ČR",
  description:
    "Mapa prodejců desek JSD P5 a HSD P7 – Kili, Dřevotrust a Delfy Staviva. Najděte nejbližší pobočku ve vašem kraji.",
  alternates: { canonical: "https://nahradaosb.cz/kde-koupit" },
  keywords: ["kde koupit JSD desky", "prodejce JSD HSD", "Kili pobočky", "Dřevotrust", "Delfy Staviva"],
};

export default function KdeKoupitPage() {
  return (
    <section className="py-10 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kde koupit JSD a HSD desky</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Desky JSD P5 a HSD P7 jsou dostupné u tří sítí prodejců rozmístěných po celé České republice.
          </p>
        </div>
        <DealerMap />
      </div>
    </section>
  );
}
