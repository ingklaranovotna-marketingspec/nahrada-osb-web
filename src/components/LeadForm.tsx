"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { pushEvent } from "@/lib/gtm";

const useTypes = ["Stavebnictví / dřevostavba", "Podlahy", "Obaly / průmysl", "Jiné"];

export default function LeadForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    useType: "", area: "", environment: "suché", name: "", company: "",
    email: "", phone: "", message: "",
  });

  function set(key: string, val: string) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    pushEvent("form_submit", { form_type: "lead" });
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      pushEvent("lead_submit");
      router.push("/dekujeme");
    } catch {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" onClick={() => pushEvent("form_start")}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Typ použití</label>
          <select
            value={form.useType}
            onChange={(e) => set("useType", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Vyberte...</option>
            {useTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Přibližná plocha (m²)</label>
          <input
            type="number"
            value={form.area}
            onChange={(e) => set("area", e.target.value)}
            placeholder="např. 120"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Jméno a příjmení *</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Firma</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => set("company", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Zpráva / popis projektu</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          placeholder="Popište váš projekt, typ konstrukce, prostředí..."
        />
      </div>

      <p className="text-xs text-gray-400">
        Odesláním formuláře souhlasíte se zpracováním osobních údajů dle{" "}
        <a href="/gdpr" className="underline hover:text-gray-600">GDPR</a>.
      </p>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 text-white font-semibold rounded-xl text-sm shadow transition-opacity disabled:opacity-60"
        style={{ backgroundColor: "var(--brand)" }}
      >
        {loading ? "Odesílám..." : "Odeslat poptávku"}
      </button>
    </form>
  );
}
