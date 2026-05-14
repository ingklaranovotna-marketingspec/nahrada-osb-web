import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů (GDPR)",
  description: "Informace o zpracování osobních údajů na webu nahradaosb.cz dle nařízení GDPR.",
  alternates: { canonical: "https://nahradaosb.cz/gdpr" },
  robots: { index: false, follow: false },
};

export default function GdprPage() {
  return (
    <section className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto prose prose-gray">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ochrana osobních údajů</h1>
        <p className="text-gray-500 mb-10">Poslední aktualizace: květen 2026</p>

        <div className="space-y-8 text-gray-700 text-sm leading-relaxed">

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">1. Správce osobních údajů</h2>
            <p>
              Správcem osobních údajů zpracovávaných prostřednictvím tohoto webu je společnost
              <strong> Kili, s.r.o.</strong>, Hybešova 1647, 664 51 Šlapanice,
              IČO: (doplňte), e-mail: <a href="mailto:obchod@kili.cz" className="text-green-700">obchod@kili.cz</a>,
              tel.: +420 544 228 155.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">2. Jaké osobní údaje zpracováváme</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Kontaktní údaje:</strong> jméno, příjmení, e-mailová adresa, telefonní číslo</li>
              <li><strong>Firemní údaje:</strong> název firmy (nepovinné)</li>
              <li><strong>Údaje o poptávce:</strong> typ použití, přibližná plocha, zpráva</li>
              <li><strong>Analytické údaje:</strong> IP adresa, typ prohlížeče, navštívené stránky (Google Analytics 4)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">3. Účel a právní základ zpracování</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Účel</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Právní základ</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Doba uchování</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200">Vyřízení poptávky / obchodní komunikace</td>
                    <td className="p-3 border border-gray-200">Oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR)</td>
                    <td className="p-3 border border-gray-200">3 roky</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Analytika webu (Google Analytics 4)</td>
                    <td className="p-3 border border-gray-200">Souhlas (čl. 6 odst. 1 písm. a) GDPR)</td>
                    <td className="p-3 border border-gray-200">26 měsíců</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">4. Cookies a analytické nástroje</h2>
            <p className="mb-3">
              Web používá nástroj <strong>Google Analytics 4</strong> prostřednictvím Google Tag Manageru.
              Analytické cookies jsou aktivovány pouze po udělení vašeho souhlasu prostřednictvím lišty cookies.
            </p>
            <p>
              Cookies můžete kdykoli spravovat v nastavení svého prohlížeče nebo odvolat souhlas
              kliknutím na odkaz „Nastavení cookies" v patičce webu.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">5. Předávání třetím stranám</h2>
            <p>
              Osobní údaje neprodáváme ani neposkytujeme třetím stranám, s výjimkou:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Google LLC</strong> – analytická data (Google Analytics 4), server v EU/USA (Standard Contractual Clauses)</li>
              <li><strong>Google LLC</strong> – Tag Manager (správa skriptů), bez přenosu osobních dat</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">6. Vaše práva</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Právo na přístup k osobním údajům</li>
              <li>Právo na opravu nebo výmaz</li>
              <li>Právo na omezení zpracování</li>
              <li>Právo na přenositelnost údajů</li>
              <li>Právo vznést námitku proti zpracování</li>
              <li>Právo odvolat souhlas kdykoli</li>
              <li>Právo podat stížnost u Úřadu pro ochranu osobních údajů (uoou.cz)</li>
            </ul>
            <p className="mt-3">
              Pro uplatnění svých práv nás kontaktujte na <a href="mailto:obchod@kili.cz" className="text-green-700">obchod@kili.cz</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">7. Zabezpečení</h2>
            <p>
              Web je provozován přes zabezpečené HTTPS připojení. Poptávky jsou ukládány do interního
              systému s omezeným přístupem.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
