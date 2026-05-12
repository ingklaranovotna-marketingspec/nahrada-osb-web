"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { pushEvent } from "@/lib/gtm";

const links = [
  { href: "/jsd-p5", label: "JSD P5" },
  { href: "/hsd-p7", label: "HSD P7" },
  { href: "/srovnani-osb-jsd-hsd", label: "Srovnání" },
  { href: "/kalkulacka", label: "Kalkulačka" },
  { href: "/kde-koupit", label: "Kde koupit" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl tracking-tight" style={{ color: "var(--brand)" }}>
          nahradaosb.cz
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => pushEvent("navbar_cta_click")}
            className="text-sm font-semibold text-white px-4 py-2 rounded-lg transition-colors"
            style={{ backgroundColor: "var(--brand)" }}
          >
            Doporučit desku
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="text-sm font-semibold text-white text-center px-4 py-2 rounded-lg mt-2"
            style={{ backgroundColor: "var(--brand)" }}
            onClick={() => { setOpen(false); pushEvent("navbar_cta_click"); }}
          >
            Doporučit desku
          </Link>
        </div>
      )}
    </header>
  );
}
