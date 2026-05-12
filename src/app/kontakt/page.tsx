import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Kontakt – poptávka desek JSD P5 a HSD P7",
  description:
    "Kontaktujte nás pro poptávku desek JSD P5 a HSD P7. Obratem doporučíme vhodný produkt a ceníkovou nabídku.",
  alternates: { canonical: "https://nahradaosb.cz/kontakt" },
};

export default function KontaktPage() {
  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kontakt a poptávka</h1>
          <p className="text-gray-500">Popište nám váš projekt a obratem se vám ozveme.</p>
        </div>
        <div className="grid md:grid-cols-[1fr_360px] gap-8 items-start">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <LeadForm />
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 mb-4">Přímý kontakt</h2>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-800">Kili s.r.o.</div>
                    <div>Hybešova 1647, 664 51 Šlapanice</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gray-400 flex-shrink-0" />
                  <a href="tel:+420544228155" className="hover:text-gray-900">+420 544 228 155</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gray-400 flex-shrink-0" />
                  <a href="mailto:obchod@kili.cz" className="hover:text-gray-900">obchod@kili.cz</a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 mb-2">Obchodní zástupce</h2>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="font-medium text-gray-800">Josef Jarý</div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-gray-400" />
                  <a href="tel:+420734699045" className="hover:text-gray-900">+420 734 699 045</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-gray-400" />
                  <a href="mailto:josef.jary@kili.cz" className="hover:text-gray-900">josef.jary@kili.cz</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
