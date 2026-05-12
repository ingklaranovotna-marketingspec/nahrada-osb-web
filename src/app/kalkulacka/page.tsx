import type { Metadata } from "next";
import SmartBoardCalculator from "@/components/SmartBoardCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka spotřeby desek JSD a HSD – SmartBoard Advisor",
  description:
    "Spočítejte si přesné množství desek JSD P5 nebo HSD P7 pro podlahy, podlahové topení nebo dřevostavby. Kalkulačka prořezu a hmotnosti zdarma.",
  alternates: { canonical: "https://nahradaosb.cz/kalkulacka" },
  keywords: ["kalkulačka spotřeby desek", "kolik desek JSD", "výpočet spotřeby OSB", "kalkulačka dřevostavba"],
};

export default function KalkulackaPage() {
  return (
    <section className="py-10 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SmartBoard Advisor</h1>
          <p className="text-gray-500">Kalkulátor spotřeby desek JSD P5 a HSD P7 – výrobce DDL Lukavec</p>
        </div>
        <SmartBoardCalculator />
      </div>
    </section>
  );
}
