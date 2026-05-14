import type { Metadata } from "next";
import DealerMap from "@/components/DealerMap";

export const metadata: Metadata = {
  title: "Kde koupit náhradu OSB – prodejci JSD P5 a HSD P7 po celé ČR",
  description:
    "Kde koupit levnou náhradu OSB? Desky JSD P5 a HSD P7 u prodejců Kili (10 poboček) a Delfy Staviva. Najděte nejbližší pobočku.",
  alternates: { canonical: "https://nahradaosb.cz/kde-koupit" },
  keywords: ["kde koupit náhradu OSB", "kde koupit JSD desky", "levná OSB kde koupit", "prodejce JSD HSD", "Kili pobočky", "Delfy Staviva"],
};

export default function KdeKoupitPage() {
  return (
    <section className="py-10 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kde koupit náhradu OSB – JSD P5 a HSD P7</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Desky JSD P5 a HSD P7 jsou dostupné u dvou sítí prodejců rozmístěných po celé České republice.
          </p>
        </div>
        <DealerMap />
      </div>
    </section>
  );
}
