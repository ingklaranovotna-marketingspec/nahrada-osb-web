import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import ComparisonTable from "@/components/ComparisonTable";
import FaqAccordion from "@/components/FaqAccordion";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Náhrada OSB desek – JSD P5 a HSD P7 konstrukční desky",
  description:
    "Hledáte náhradu za OSB? Konstrukční desky JSD P5 a HSD P7 od DDL Lukavec – lepší stabilita, vlhkoodolnost a povrch. Pro stavebnictví, podlahy i obaly.",
  alternates: { canonical: "https://nahradaosb.cz" },
};

const problems = [
  { title: "Stabilita", desc: "Pro náročnější konstrukce a vyšší zatížení." },
  { title: "Přesnost", desc: "Přesnější formát a homogennější struktura materiálu." },
  { title: "Podlahy", desc: "Vhodné pro podlahové skladby a suchou výstavbu." },
  { title: "Vlhkost", desc: "Konstrukční použití i ve vlhkém prostředí (třída P5/P7)." },
  { title: "Obaly", desc: "Pevné desky pro exportní a technické obaly." },
  { title: "CNC opracování", desc: "Lepší povrch a struktura pro technické zpracování." },
];

const useCases = [
  {
    title: "Stavebnictví",
    items: ["Suchá výstavba", "Dřevostavby", "Podkladové konstrukce", "Opláštění"],
  },
  {
    title: "Podlahy",
    items: ["Suché podlahy", "Podlahové topení", "Frézované desky", "Nosné skladby"],
  },
  {
    title: "Obaly",
    items: ["Exportní obaly", "Přepravní bedny", "Technické balení", "Průmyslové použití"],
  },
];

const homeFaqs = [
  {
    q: "Je JSD náhradou za OSB?",
    a: "V mnoha aplikacích ano. JSD P5 splňuje normu EN 312 P5 pro konstrukční desky do vlhkého prostředí a v řadě použití nahrazuje nebo překonává standardní OSB.",
  },
  {
    q: "Jaký je rozdíl mezi JSD a HSD?",
    a: "HSD P7 má vyšší mechanickou odolnost a je určena pro náročnější aplikace – průmyslové konstrukce, těžší obaly, silně namáhané podlahy.",
  },
  {
    q: "Jsou desky vhodné do vlhkého prostředí?",
    a: "Ano. JSD P5 i HSD P7 jsou klasifikovány pro vlhké prostředí dle EN 312.",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "nahradaosb.cz",
    url: "https://nahradaosb.cz",
    description: "Konstrukční desky JSD P5 a HSD P7 jako alternativa k OSB deskám.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full mb-6">
            Alternativa k OSB deskám
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Hledáte náhradu<br />za OSB desky?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Konstrukční desky <strong>JSD P5</strong> a <strong>HSD P7</strong> pro stavebnictví,
            podlahy a technické použití. Vyšší stabilita, lepší vlhkoodolnost, domácí výroba.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-base shadow transition-colors"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Doporučit vhodnou desku <ArrowRight size={18} />
            </Link>
            <Link
              href="/srovnani-osb-jsd-hsd"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl text-base border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Porovnat s OSB <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Kdy už OSB deska nemusí stačit?
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Existují aplikace, kde standardní OSB naráží na své limity. JSD a HSD jsou navrženy přesně pro ně.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="border border-gray-100 rounded-xl p-5 bg-gray-50">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">{p.title}</div>
                    <div className="text-sm text-gray-600">{p.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
            Moderní alternativa ke klasickým OSB deskám
          </h2>
          <p className="text-gray-500 text-center mb-10">Výrobce DDL Lukavec, distributor Kili s.r.o.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-green-700 mb-1">Třída P5</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">JSD P5</h3>
              <p className="text-gray-600 mb-5">
                Univerzální konstrukční deska pro stavebnictví, podlahy a technické aplikace.
              </p>
              <ul className="space-y-2 mb-6">
                {["Konstrukční použití EN 312 P5", "Vhodná do vlhkého prostředí", "Dobrý poměr cena/výkon", "Lokální výroba – DDL Lukavec", "Perodrážka (4PD) pro podlahy"].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/jsd-p5"
                className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 hover:text-green-800"
              >
                Detail JSD P5 <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-1">Třída P7</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">HSD P7</h3>
              <p className="text-gray-600 mb-5">
                Vysoce zatížitelná konstrukční deska pro náročné průmyslové aplikace.
              </p>
              <ul className="space-y-2 mb-6">
                {["Třída P7 – vyšší pevnost", "Průmyslové konstrukce", "Technické a exportní obaly", "Vyšší únosnost a tuhost", "Perodrážka (4PD) dostupná"].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/hsd-p7"
                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Detail HSD P7 <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
            OSB vs. JSD vs. HSD
          </h2>
          <p className="text-gray-500 text-center mb-8">Přehledné srovnání klíčových vlastností</p>
          <ComparisonTable />
          <div className="text-center mt-6">
            <Link
              href="/srovnani-osb-jsd-hsd"
              className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 hover:text-green-800"
            >
              Podrobné srovnání <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Kde lze JSD a HSD využít?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-4">{uc.title}</h3>
                <ul className="space-y-2">
                  {uc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Spočítejte si spotřebu desek
          </h2>
          <p className="text-gray-600 mb-6">
            Zadejte rozměry místností nebo stěn a kalkulačka vám spočítá přesný počet desek,
            prořez i hmotnost celé zakázky.
          </p>
          <Link
            href="/kalkulacka"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-base shadow transition-colors"
            style={{ backgroundColor: "var(--brand)" }}
          >
            Otevřít kalkulačku <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Nejčastější otázky
          </h2>
          <FaqAccordion items={homeFaqs} />
          <div className="text-center mt-6">
            <Link href="/faq" className="text-sm font-semibold text-green-700 hover:text-green-800">
              Všechny otázky →
            </Link>
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="py-16 px-4 bg-white border-t border-gray-100" id="kontakt">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
            Pomůžeme vám vybrat vhodnou desku
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Popište váš projekt a obratem se vám ozveme s doporučením.
          </p>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
