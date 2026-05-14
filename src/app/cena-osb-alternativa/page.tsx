import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Levná alternativa OSB desek – JSD P5 a HSD P7 až o 20 % levnější",
  description:
    "Hledáte levnou náhradu OSB? Desky JSD P5 a HSD P7 jsou až o 20 % levnější než srovnatelné OSB – s lepší vlhkoodolností a hladším povrchem. Zjistěte cenu.",
  alternates: { canonical: "https://nahradaosb.cz/cena-osb-alternativa" },
  keywords: [
    "levná OSB alternativa",
    "OSB deska cena",
    "levnější než OSB",
    "cena náhrady OSB",
    "JSD P5 cena",
    "HSD P7 cena",
    "levná konstrukční deska",
    "OSB cena srovnání",
  ],
};

const pricePoints = [
  {
    label: "OSB/3",
    price: "Referenční cena",
    note: "Standardní tržní cena",
    highlight: false,
  },
  {
    label: "JSD P5",
    price: "Až o 20 % levnější",
    note: "Stejná třída vlhkoodolnosti jako OSB/3, hladší povrch",
    highlight: true,
  },
  {
    label: "HSD P7",
    price: "Až o 20 % levnější",
    note: "Vyšší pevnost než OSB/3, vhodná pro průmysl",
    highlight: true,
  },
];

const reasons = [
  "Homogennější výroba bez orientovaných třísek – nižší výrobní náklady",
  "Český výrobce DDL Lukavec – žádné importní příplatky",
  "Přímá distribuce přes Kili s.r.o. – kratší řetězec = nižší cena",
  "Hladší povrch = méně odpadu při opracování",
];

const faqs = [
  {
    q: "O kolik procent je JSD P5 levnější než OSB?",
    a: "JSD P5 je přibližně o 20 % levnější než srovnatelná OSB/3. Přesná cena závisí na tloušťce a formátu – kontaktujte nás pro aktuální ceníkovou nabídku.",
  },
  {
    q: "Je levnější JSD stejně kvalitní jako OSB?",
    a: "Ano, v mnoha parametrech JSD P5 OSB překonává – má hladší povrch, homogennější strukturu a srovnatelnou vlhkoodolnost dle EN 312 P5. Nižší cena je dána efektivnější výrobou, ne horší kvalitou.",
  },
  {
    q: "Kde zjistím aktuální cenu desek JSD a HSD?",
    a: "Aktuální ceník závisí na tloušťce, formátu a odebíraném množství. Vyplňte poptávkový formulář a obratem vám pošleme nabídku.",
  },
  {
    q: "Platí sleva i pro menší odběry?",
    a: "Ceny jsou dostupné i pro menší odběry přes prodejce Kili a Delfy Staviva. Pro větší projekty se obraťte přímo na obchodní oddělení pro množstevní slevy.",
  },
];

export default function CenaOsbAlternativaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white border-b border-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            <TrendingDown size={14} /> Až o 20 % levnější než OSB
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Levná alternativa OSB desek
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Desky <strong>JSD P5 a HSD P7</strong> jsou až o 20 % levnější než srovnatelné OSB desky —
            při zachování vlhkoodolnosti, pevnosti a lepším povrchu. Stejná aplikace, nižší cena.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm shadow"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Zjistit aktuální cenu <ArrowRight size={16} />
            </Link>
            <Link
              href="/srovnani-osb-jsd-hsd"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl text-sm border border-gray-200 hover:bg-gray-50"
            >
              Srovnání OSB vs JSD vs HSD
            </Link>
          </div>
        </div>
      </section>

      {/* Cenové srovnání */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Cena OSB vs. levnější alternativy</h2>
          <p className="text-gray-500 text-center mb-10">Proč platit víc za stejnou nebo nižší kvalitu?</p>
          <div className="grid md:grid-cols-3 gap-5">
            {pricePoints.map((p) => (
              <div
                key={p.label}
                className={`rounded-xl border p-6 text-center ${
                  p.highlight
                    ? "border-green-300 bg-green-50/50 shadow-sm"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className={`text-sm font-bold uppercase tracking-widest mb-2 ${p.highlight ? "text-green-700" : "text-gray-400"}`}>
                  {p.label}
                </div>
                <div className={`text-2xl font-bold mb-2 ${p.highlight ? "text-green-800" : "text-gray-700"}`}>
                  {p.price}
                </div>
                <p className="text-sm text-gray-500">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            * Přesná cena závisí na tloušťce, formátu a odebíraném množství. Kontaktujte nás pro aktuální nabídku.
          </p>
        </div>
      </section>

      {/* Proč jsou levnější */}
      <section className="py-14 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Proč jsou JSD a HSD levnější než OSB?</h2>
          <p className="text-gray-600 mb-6">
            Nižší cena není výsledkem horší kvality — jde o efektivnější výrobní proces a kratší distribuční řetězec.
          </p>
          <ul className="space-y-3">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Produkty */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Vyberte levnou náhradu OSB</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-green-200 bg-green-50/30 rounded-xl p-6">
              <div className="font-bold text-green-800 text-lg mb-2">JSD P5</div>
              <p className="text-sm text-gray-600 mb-4">
                Levná náhrada OSB/3 pro stavebnictví, dřevostavby a podlahy. Třída P5 dle EN 312 —
                vhodná do vlhkého prostředí. Až o 20 % levnější.
              </p>
              <Link href="/jsd-p5" className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 hover:text-green-900">
                Více o JSD P5 <ArrowRight size={14} />
              </Link>
            </div>
            <div className="border border-blue-200 bg-blue-50/30 rounded-xl p-6">
              <div className="font-bold text-blue-800 text-lg mb-2">HSD P7</div>
              <p className="text-sm text-gray-600 mb-4">
                Levnější alternativa OSB pro průmyslové obaly, těžké podlahy a náročné konstrukce.
                Vyšší pevnost třídy P7 — stále až o 20 % levnější než srovnatelné OSB.
              </p>
              <Link href="/hsd-p7" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900">
                Více o HSD P7 <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Časté otázky o ceně</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="font-semibold text-gray-800 mb-2">{f.q}</div>
                <p className="text-sm text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-white border-t border-gray-100 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Chcete znát přesnou cenu?</h2>
          <p className="text-gray-600 mb-6">Pošleme vám ceníkovou nabídku na míru vašemu projektu.</p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm shadow"
            style={{ backgroundColor: "var(--brand)" }}
          >
            Poptávka zdarma <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
