import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ – časté otázky o JSD P5 a HSD P7 deskách",
  description:
    "Odpovědi na nejčastější otázky o deskách JSD P5 a HSD P7 – náhrada OSB, vlhkost, podlahy, formáty, dostupnost.",
  alternates: { canonical: "https://nahradaosb.cz/faq" },
};

const faqs = [
  { q: "Je JSD P5 přímou náhradou za OSB?", a: "V mnoha aplikacích ano. JSD P5 splňuje EN 312 P5 – konstrukční deska vhodná do vlhkého prostředí. Homogennější struktura a hladší povrch jsou bonusy oproti OSB. Pro standardní stavební použití (podlahy, stěny, dřevostavby) JSD P5 OSB plně nahrazuje." },
  { q: "Jaký je rozdíl mezi JSD P5 a HSD P7?", a: "Obě desky splňují normu EN 312 pro vlhké prostředí, ale HSD P7 má výrazně vyšší pevnost v ohybu a tlaku. HSD je vhodná pro náročnější aplikace – průmyslové obaly, těžší podlahy, exportní bedny. JSD P5 je cenově příznivější a pokryje stavební a podlahové aplikace." },
  { q: "Jsou desky vhodné do vlhkého prostředí?", a: "Ano. Obě desky jsou zařazeny do třídy pro vlhké prostředí dle EN 312 – JSD P5 (třída P5) a HSD P7 (třída P7). Jsou tedy vhodné pro aplikace, kde běžná dřevotříska nebo OSB/2 nestačí." },
  { q: "Co je perodrážka 4PD a kdy ji použít?", a: "4PD (perodrážka ze 4 stran) umožňuje spoje desek bez překrývání – typicky pro plovoucí podlahy. Deska s 4PD se snáze pokládá a tvoří pevnější spoj než ostrohrané verze. Pro podlahové aplikace (včetně podlahového topení) doporučujeme variantu 4PD." },
  { q: "Co je CB16 a pro co se používá?", a: "CB16 označuje variantu desky JSD P5/4PD v tloušťce 28 mm s frézovanými drážkami pro trubky podlahového vytápění. Tato deska je speciálně navržena pro systémy suché montáže podlahového topení." },
  { q: "Lze desky formátovat a CNC opracovávat?", a: "Ano. Homogenní struktura JSD a HSD je pro CNC opracování výrazně příznivější než OSB s vrstvou třísek. Desky lze řezat, frézovat, vrtat i brousit." },
  { q: "Jsou desky vhodné pro exportní obaly?", a: "Ano, zejména HSD P7. Vyšší hustota a pevnost zaručují odolnost přepravních beden při manipulaci. Pro lehčí obaly je vhodná i JSD P5." },
  { q: "Jaký je výrobce JSD a HSD desek?", a: "Výrobcem je DDL Lukavec – česká firma s dlouholetou tradicí výroby dřevotřískových desek. Distribuci zajišťuje Kili s.r.o. se sítí 10 obchodních center po ČR." },
  { q: "Kde jsou desky dostupné?", a: "U tří sítí prodejců: Kili (10 poboček), Dřevotrust (25 prodejen) a Delfy Staviva (4 prodejny v severních Čechách). Kompletní mapu najdete na stránce Kde koupit." },
  { q: "Jaká je dostupnost různých tloušťek?", a: "JSD P5 (ostrohrané): 8, 10, 12, 15, 18, 22 mm. JSD P5 (4PD): 12, 15, 18, 22 mm. HSD P7 (ostrohrané): 10, 12, 15, 18, 22, 25 mm. HSD P7 (4PD): 15, 18, 22, 25 mm. Pro podlahové topení CB16: 28 mm." },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-16 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Časté otázky</h1>
            <p className="text-gray-500">Vše co potřebujete vědět o deskách JSD P5 a HSD P7.</p>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
