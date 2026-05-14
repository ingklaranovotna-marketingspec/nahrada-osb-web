import type { Metadata } from "next";
import SmartBoardCalculator from "@/components/SmartBoardCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka spotřeby OSB – výpočet množství desek JSD P5 a HSD P7",
  description:
    "Spočítejte si přesné množství náhrady OSB desek JSD P5 nebo HSD P7 pro podlahy nebo dřevostavby. Kalkulačka prořezu a hmotnosti zdarma.",
  alternates: { canonical: "https://nahradaosb.cz/kalkulacka" },
  keywords: ["kalkulačka spotřeby OSB", "výpočet množství desek", "kolik desek JSD", "výpočet spotřeby OSB", "kalkulačka dřevostavba", "náhrada OSB kalkulačka"],
};

export default function KalkulackaPage() {
  return (
    <section className="py-10 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kalkulačka spotřeby desek – náhrada OSB</h1>
          <p className="text-gray-500">Výpočet množství desek JSD P5 a HSD P7 pro váš projekt – výrobce DDL Lukavec</p>
        </div>
        <SmartBoardCalculator />
      </div>
    </section>
  );
}
