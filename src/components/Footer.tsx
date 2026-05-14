"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="text-white font-bold text-lg mb-3">nahradaosb.cz</div>
            <p className="text-sm leading-relaxed">
              Informační web o konstrukčních deskách JSD P5 a HSD P7 jako alternativě k OSB.
              Výrobce DDL Lukavec, distributor Kili s.r.o.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Produkty</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/jsd-p5" className="hover:text-white transition-colors">JSD P5</Link></li>
              <li><Link href="/hsd-p7" className="hover:text-white transition-colors">HSD P7</Link></li>
              <li><Link href="/srovnani-osb-jsd-hsd" className="hover:text-white transition-colors">Srovnání s OSB</Link></li>
              <li><Link href="/cena-osb-alternativa" className="hover:text-white transition-colors">Cena vs. OSB</Link></li>
              <li><Link href="/kalkulacka" className="hover:text-white transition-colors">Kalkulačka spotřeby</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Použití</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/jsd-p5#stavebnictvi" className="hover:text-white transition-colors">Stavebnictví</Link></li>
              <li><Link href="/jsd-p5#podlahy" className="hover:text-white transition-colors">Podlahy</Link></li>
              <li><Link href="/hsd-p7#obaly" className="hover:text-white transition-colors">Obaly</Link></li>
              <li><Link href="/kde-koupit" className="hover:text-white transition-colors">Kde koupit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+420544228155" className="hover:text-white transition-colors">
                  +420 544 228 155
                </a>
              </li>
              <li>
                <a href="mailto:obchod@kili.cz" className="hover:text-white transition-colors">
                  obchod@kili.cz
                </a>
              </li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Poptávkový formulář</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>© {new Date().getFullYear()} Kili, s.r.o. | DDL Lukavec. Všechna práva vyhrazena.</p>
          <div className="flex gap-4">
            <Link href="/gdpr" className="hover:text-white transition-colors">GDPR</Link>
            <button
              onClick={() => { localStorage.removeItem("cookie_consent"); window.location.reload(); }}
              className="hover:text-white transition-colors"
            >
              Nastavení cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
