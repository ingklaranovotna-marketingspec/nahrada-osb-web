"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie_consent";

function updateGtmConsent(granted: boolean) {
  if (typeof window === "undefined" || !window.gtag) return;
  const state = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    analytics_storage: state,
    ad_storage: state,
    functionality_storage: "granted",
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else {
      updateGtmConsent(stored === "granted");
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "granted");
    updateGtmConsent(true);
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "denied");
    updateGtmConsent(false);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-gray-200 px-4 py-4 shadow-2xl">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm flex-1">
          Používáme cookies pro analýzu návštěvnosti (Google Analytics). Analytické cookies aktivujeme
          pouze s vaším souhlasem.{" "}
          <Link href="/gdpr" className="underline hover:text-white">
            Více informací
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm font-medium text-gray-400 border border-gray-600 rounded-lg hover:border-gray-400 hover:text-gray-200 transition-colors"
          >
            Odmítnout
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-colors"
            style={{ backgroundColor: "var(--brand)" }}
          >
            Přijmout
          </button>
        </div>
      </div>
    </div>
  );
}
