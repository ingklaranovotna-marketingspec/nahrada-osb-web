import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Děkujeme za poptávku",
  robots: { index: false },
};

export default function DekujemePage() {
  return (
    <section className="py-24 px-4 bg-gray-50 min-h-screen flex items-start justify-center">
      <div className="max-w-md mx-auto text-center">
        <CheckCircle2 size={56} className="text-green-500 mx-auto mb-5" />
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Děkujeme za poptávku!</h1>
        <p className="text-gray-600 mb-8">
          Vaši zprávu jsme přijali. Obratem se vám ozveme s doporučením a nabídkou.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 text-white font-semibold rounded-xl text-sm shadow"
            style={{ backgroundColor: "var(--brand)" }}
          >
            Zpět na hlavní stránku
          </Link>
          <Link
            href="/kalkulacka"
            className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl text-sm border border-gray-200 hover:bg-gray-50"
          >
            Otevřít kalkulačku
          </Link>
        </div>
      </div>
    </section>
  );
}
