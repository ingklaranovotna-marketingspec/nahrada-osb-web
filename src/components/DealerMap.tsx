"use client";
import { useEffect, useRef, useState } from "react";
import { dealers, dealerConfig, type Dealer, type DealerType } from "@/lib/dealers";
import { ExternalLink, Phone, Mail, MapPin } from "lucide-react";

const FILTER_ALL = "all";
type Filter = DealerType | typeof FILTER_ALL;

export default function DealerMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<typeof import("leaflet") | null>(null);
  const markersRef = useRef<Map<string, import("leaflet").Marker>>(new Map());
  const mapInstanceRef = useRef<import("leaflet").Map | null>(null);
  const [filter, setFilter] = useState<Filter>(FILTER_ALL);
  const [selected, setSelected] = useState<Dealer | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    import("leaflet").then((L) => {
      leafletRef.current = L;

      // Fix default icon paths for Next.js
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: [49.8, 15.6],
        zoom: 7,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      mapInstanceRef.current = map;

      dealers.forEach((dealer) => {
        const cfg = dealerConfig[dealer.type];
        const icon = L.divIcon({
          className: "",
          html: `<div style="width:14px;height:14px;border-radius:50%;background:${cfg.color};border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.3)"></div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        });

        const marker = L.marker([dealer.lat, dealer.lng], { icon })
          .addTo(map)
          .on("click", () => setSelected(dealer));

        markersRef.current.set(dealer.id, marker);
      });
    });

    return () => {
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Show/hide markers based on filter
  useEffect(() => {
    const L = leafletRef.current;
    const map = mapInstanceRef.current;
    if (!L || !map) return;

    dealers.forEach((dealer) => {
      const marker = markersRef.current.get(dealer.id);
      if (!marker) return;
      if (filter === FILTER_ALL || dealer.type === filter) {
        marker.addTo(map);
      } else {
        marker.remove();
      }
    });
  }, [filter]);

  const visibleDealers = filter === FILTER_ALL ? dealers : dealers.filter(d => d.type === filter);

  return (
    <div className="space-y-4">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter(FILTER_ALL)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${filter === FILTER_ALL ? "bg-gray-800 text-white border-gray-800" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
        >
          Všichni ({dealers.length})
        </button>
        {(Object.entries(dealerConfig) as [DealerType, typeof dealerConfig[DealerType]][]).map(([type, cfg]) => {
          const count = dealers.filter(d => d.type === type).length;
          return (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${filter === type ? "text-white border-transparent" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
              style={filter === type ? { backgroundColor: cfg.color, borderColor: cfg.color } : {}}
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full mr-1.5" style={{ backgroundColor: filter === type ? "white" : cfg.color }} />
              {cfg.label} ({count})
            </button>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-4 items-start">
        {/* Map */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden h-72 sm:h-96 lg:h-[520px]">
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
          <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
        </div>

        {/* Sidebar */}
        <div className="space-y-3">
          {selected && (
            <div className="bg-white rounded-2xl border-2 border-green-300 shadow-sm p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-0.5"
                    style={{ color: dealerConfig[selected.type].color }}
                  >
                    {dealerConfig[selected.type].label}
                  </div>
                  <div className="font-bold text-gray-900 text-sm">{selected.name}</div>
                </div>
                <button onClick={() => setSelected(null)} className="text-gray-300 hover:text-gray-500 text-lg leading-none">×</button>
              </div>
              <div className="space-y-1.5 text-sm text-gray-600">
                <div className="flex items-start gap-1.5">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5 text-gray-400" />
                  <span>{selected.address}, {selected.city}</span>
                </div>
                {selected.phone && (
                  <div className="flex items-center gap-1.5">
                    <Phone size={14} className="text-gray-400" />
                    <a href={`tel:${selected.phone.replace(/\s/g,"")}`} className="hover:text-gray-900">{selected.phone}</a>
                  </div>
                )}
                {selected.email && (
                  <div className="flex items-center gap-1.5">
                    <Mail size={14} className="text-gray-400" />
                    <a href={`mailto:${selected.email}`} className="hover:text-gray-900 truncate">{selected.email}</a>
                  </div>
                )}
                {selected.url && (
                  <a href={selected.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold mt-2"
                    style={{ color: dealerConfig[selected.type].color }}>
                    Web prodejce <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden max-h-96 overflow-y-auto">
            {visibleDealers.map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  setSelected(d);
                  mapInstanceRef.current?.flyTo([d.lat, d.lng], 12, { duration: 0.8 });
                }}
                className={`w-full text-left px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors ${selected?.id === d.id ? "bg-green-50" : ""}`}
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: dealerConfig[d.type].color }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: dealerConfig[d.type].color }}>
                    {dealerConfig[d.type].label}
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-800">{d.city}</div>
                <div className="text-xs text-gray-500">{d.address}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
