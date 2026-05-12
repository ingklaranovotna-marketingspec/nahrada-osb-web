"use client";
import { useState, useCallback } from "react";
import { Plus, Trash2, Download, RotateCcw } from "lucide-react";
import { pushEvent } from "@/lib/gtm";

// ── Katalog ──────────────────────────────────────────────────────────────────
type Mat = "JSD" | "HSD";
type Edge = "ostrohrané" | "4PD";
type Variant = "probarvená" | "neprobarvená";
type UseType = "floor" | "heating" | "wall";

interface BoardFormat {
  code: string; thickness: number; width: number; height: number;
  type: Edge; variant?: Variant; weight: number; note?: string;
}

const boardFormats: Record<Mat, BoardFormat[]> = {
  JSD: [
    { code:"DTD JSD P5 8×2840×1830 probarvená",    thickness:8,  width:2840,height:1830,type:"ostrohrané",variant:"probarvená",   weight:5.90 },
    { code:"DTD JSD P5 10×2840×1830 probarvená",   thickness:10, width:2840,height:1830,type:"ostrohrané",variant:"probarvená",   weight:6.40 },
    { code:"DTD JSD P5 12×2840×1830 probarvená",   thickness:12, width:2840,height:1830,type:"ostrohrané",variant:"probarvená",   weight:8.55 },
    { code:"DTD JSD P5 15×2840×1830 probarvená",   thickness:15, width:2840,height:1830,type:"ostrohrané",variant:"probarvená",   weight:10.35},
    { code:"DTD JSD P5 18×2840×1830 probarvená",   thickness:18, width:2840,height:1830,type:"ostrohrané",variant:"probarvená",   weight:12.45},
    { code:"DTD JSD P5 22×2840×1830 probarvená",   thickness:22, width:2840,height:1830,type:"ostrohrané",variant:"probarvená",   weight:15.20},
    { code:"DTD JSD P5 8×2840×1830 neprobarvená",  thickness:8,  width:2840,height:1830,type:"ostrohrané",variant:"neprobarvená", weight:5.90 },
    { code:"DTD JSD P5 10×2840×1830 neprobarvená", thickness:10, width:2840,height:1830,type:"ostrohrané",variant:"neprobarvená", weight:6.40 },
    { code:"DTD JSD P5 12×2840×1830 neprobarvená", thickness:12, width:2840,height:1830,type:"ostrohrané",variant:"neprobarvená", weight:8.55 },
    { code:"DTD JSD P5 15×2840×1830 neprobarvená", thickness:15, width:2840,height:1830,type:"ostrohrané",variant:"neprobarvená", weight:10.35},
    { code:"DTD JSD P5 18×2840×1830 neprobarvená", thickness:18, width:2840,height:1830,type:"ostrohrané",variant:"neprobarvená", weight:12.45},
    { code:"DTD JSD P5 22×2840×1830 neprobarvená", thickness:22, width:2840,height:1830,type:"ostrohrané",variant:"neprobarvená", weight:15.20},
    { code:"DTD JSD P5/4PD 12×1800×900 probarvená", thickness:12,width:1800,height:900, type:"4PD",      variant:"probarvená",   weight:8.40 },
    { code:"DTD JSD P5/4PD 15×1800×900 probarvená", thickness:15,width:1800,height:900, type:"4PD",      variant:"probarvená",   weight:10.35},
    { code:"DTD JSD P5/4PD 18×1800×900 probarvená", thickness:18,width:1800,height:900, type:"4PD",      variant:"probarvená",   weight:12.45},
    { code:"DTD JSD P5/4PD 22×1800×900 probarvená", thickness:22,width:1800,height:900, type:"4PD",      variant:"probarvená",   weight:15.20},
    { code:"DTD JSD P5/4PD 15×1800×675 probarvená", thickness:15,width:1800,height:675, type:"4PD",      variant:"probarvená",   weight:10.35},
    { code:"DTD JSD P5/4PD 12×1800×675 neprobarvená",thickness:12,width:1800,height:675,type:"4PD",      variant:"neprobarvená", weight:8.40 },
    { code:"DTD JSD P5/4PD 15×1800×675 neprobarvená",thickness:15,width:1800,height:675,type:"4PD",      variant:"neprobarvená", weight:10.35},
    { code:"DTD JSD P5/4PD 18×1800×675 neprobarvená",thickness:18,width:1800,height:675,type:"4PD",      variant:"neprobarvená", weight:12.45},
    { code:"DTD JSD P5/4PD 22×1800×675 neprobarvená",thickness:22,width:1800,height:675,type:"4PD",      variant:"neprobarvená", weight:15.20},
    { code:"DTD JSD P5/4PD podl. vytápění CB16 28×1800×600",thickness:28,width:1800,height:600,type:"4PD",variant:"probarvená",weight:16.52,note:"MJ: ks" },
  ],
  HSD: [
    { code:"DTD HSD P7 10×2840×1830", thickness:10,width:2840,height:1830,type:"ostrohrané",weight:7.45 },
    { code:"DTD HSD P7 12×2840×1830", thickness:12,width:2840,height:1830,type:"ostrohrané",weight:8.55 },
    { code:"DTD HSD P7 15×2840×1830", thickness:15,width:2840,height:1830,type:"ostrohrané",weight:10.35},
    { code:"DTD HSD P7 18×2840×1830", thickness:18,width:2840,height:1830,type:"ostrohrané",weight:12.45},
    { code:"DTD HSD P7 22×2840×1830", thickness:22,width:2840,height:1830,type:"ostrohrané",weight:13.45},
    { code:"DTD HSD P7 25×2840×1830", thickness:25,width:2840,height:1830,type:"ostrohrané",weight:14.45},
    { code:"DTD HSD P7/4PD 15×1800×900", thickness:15,width:1800,height:900,type:"4PD",weight:10.35},
    { code:"DTD HSD P7/4PD 18×1800×900", thickness:18,width:1800,height:900,type:"4PD",weight:12.45},
    { code:"DTD HSD P7/4PD 22×1800×900", thickness:22,width:1800,height:900,type:"4PD",weight:15.20},
    { code:"DTD HSD P7/4PD 25×1800×900", thickness:25,width:1800,height:900,type:"4PD",weight:16.20},
    { code:"DTD HSD P7/4PD 15×1800×675", thickness:15,width:1800,height:675,type:"4PD",weight:10.35},
    { code:"DTD HSD P7/4PD 18×1800×675", thickness:18,width:1800,height:675,type:"4PD",weight:12.45},
    { code:"DTD HSD P7/4PD 22×1800×675", thickness:22,width:1800,height:675,type:"4PD",weight:15.20},
    { code:"DTD HSD P7/4PD 25×1800×675", thickness:25,width:1800,height:675,type:"4PD",weight:16.20},
  ],
};

// ── Typy ─────────────────────────────────────────────────────────────────────
interface Room { id: number; name: string; w: number; l: number }
interface Wall { id: number; name: string; w: number; h: number }
interface CalcResult {
  code?: string; width: number; height: number; boardArea: number;
  boards: number; waste: number; netArea: number; usedArea: number;
  totalWeight: number; isBest?: boolean;
}

// ── Výpočetní logika ──────────────────────────────────────────────────────────
function boardsForRect(fw: number, fh: number, rw: number, rh: number) {
  const a = Math.ceil(rw / fw) * Math.ceil(rh / fh);
  const b = Math.ceil(rw / fh) * Math.ceil(rh / fw);
  return Math.min(a, b);
}

function calcResults(formats: BoardFormat[], rects: { w: number; l: number }[], reservePct: number): CalcResult[] {
  const seen = new Set<string>();
  const unique = formats.filter(f => { const k=`${f.width}×${f.height}`; if(seen.has(k))return false; seen.add(k); return true; });
  const netArea = rects.reduce((s,r)=>s+(r.w/1000)*(r.l/1000),0);
  return unique.map(fmt => {
    const boardArea = (fmt.width/1000)*(fmt.height/1000);
    let raw = 0;
    rects.forEach(r=>{ raw+=boardsForRect(fmt.width,fmt.height,r.w,r.l); });
    const boards = Math.ceil(raw*(1+reservePct/100));
    const usedArea = boards*boardArea;
    const waste = usedArea>0?Math.max(0,(usedArea-netArea)/usedArea*100):0;
    return { width:fmt.width,height:fmt.height,boardArea,boards,waste,netArea,usedArea,totalWeight:+(boards*boardArea*fmt.weight).toFixed(1) };
  }).sort((a,b)=>a.waste-b.waste||a.boards-b.boards);
}

// ── Pomocné UI ────────────────────────────────────────────────────────────────
function ToggleBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${
        active ? "text-white border-green-700" : "bg-white text-gray-700 border-gray-200 hover:bg-green-50 hover:border-green-400"
      }`}
      style={active ? { backgroundColor: "var(--brand)", borderColor: "var(--brand)" } : {}}
    >
      {children}
    </button>
  );
}

function barColor(w: number) {
  if (w < 15) return "bg-green-500";
  if (w < 30) return "bg-yellow-400";
  return "bg-red-500";
}

// ── Hlavní komponenta ─────────────────────────────────────────────────────────
export default function SmartBoardCalculator() {
  const [mat, setMat] = useState<Mat>("JSD");
  const [edge, setEdge] = useState<Edge>("ostrohrané");
  const [variant, setVariant] = useState<Variant>("probarvená");
  const [thickness, setThickness] = useState(15);
  const [useType, setUseType] = useState<UseType>("floor");
  const [reservePct, setReservePct] = useState(10);
  const [rooms, setRooms] = useState<Room[]>([
    { id:1, name:"Místnost 1", w:4000, l:4000 },
    { id:2, name:"Místnost 2", w:2000, l:8000 },
  ]);
  const [walls, setWalls] = useState<Wall[]>([
    { id:1, name:"Stěna 1", w:4000, h:2600 },
    { id:2, name:"Stěna 2", w:3500, h:2600 },
  ]);
  const [roomIdCnt, setRoomIdCnt] = useState(3);
  const [wallIdCnt, setWallIdCnt] = useState(3);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [results, setResults] = useState<CalcResult[]>([]);
  const [calculated, setCalculated] = useState(false);

  const getFiltered = useCallback(() =>
    boardFormats[mat].filter(f =>
      f.type === edge &&
      f.thickness === thickness &&
      (mat !== "JSD" || !f.variant || f.variant === variant)
    ), [mat, edge, thickness, variant]);

  const availableThicknesses = [...new Set(
    boardFormats[mat].filter(f => f.type === edge).map(f => f.thickness)
  )].sort((a,b)=>a-b);

  function calculate() {
    pushEvent("calculator_open");
    if (useType === "heating") {
      const fmt = boardFormats.JSD.find(f=>f.thickness===28);
      if (!fmt) return;
      const boardArea = (fmt.width/1000)*(fmt.height/1000);
      const netArea = rooms.reduce((s,r)=>s+(r.w/1000)*(r.l/1000),0);
      let raw=0; rooms.forEach(r=>{raw+=boardsForRect(fmt.width,fmt.height,r.w,r.l);});
      const boards=Math.ceil(raw*(1+reservePct/100));
      const usedArea=boards*boardArea;
      const waste=usedArea>0?Math.max(0,(usedArea-netArea)/usedArea*100):0;
      setResults([{code:fmt.code,width:fmt.width,height:fmt.height,boardArea,boards,waste,netArea,usedArea,totalWeight:+(boards*boardArea*fmt.weight).toFixed(1)}]);
      setSelectedIdx(0); setCalculated(true); return;
    }
    const rects = useType==="floor"
      ? rooms.map(r=>({w:r.w,l:r.l}))
      : walls.map(w=>({w:w.w,l:w.h}));
    const res = calcResults(getFiltered(), rects, reservePct);
    setResults(res); setSelectedIdx(0); setCalculated(true);
  }

  function resetAll() {
    setRooms([{id:1,name:"Místnost 1",w:4000,l:4000},{id:2,name:"Místnost 2",w:2000,l:8000}]);
    setWalls([{id:1,name:"Stěna 1",w:4000,h:2600},{id:2,name:"Stěna 2",w:3500,h:2600}]);
    setResults([]); setCalculated(false);
  }

  function exportCsv() {
    if (!results.length) return;
    const rows = [
      ["Formát šířka (mm)","Formát výška (mm)","Plocha desky (m²)","Počet desek (ks)","Prořez (%)","Hmotnost (kg)"],
      ...results.map(r=>[r.width,r.height,r.boardArea.toFixed(2),r.boards,r.waste.toFixed(1),r.totalWeight])
    ];
    const csv = rows.map(r=>r.map(c=>`"${c}"`).join(";")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob(["﻿"+csv],{type:"text/csv;charset=utf-8"}));
    a.download="smartboard-vysledky.csv"; document.body.appendChild(a); a.click(); a.remove();
  }

  const chosen = results[selectedIdx];

  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5 items-start">

      {/* ── LEFT PANEL ── */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">

        {/* Materiál */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Materiál</div>
          <div className="flex gap-2">
            <ToggleBtn active={mat==="JSD"} onClick={()=>{setMat("JSD");setCalculated(false);}}>JSD P5</ToggleBtn>
            <ToggleBtn active={mat==="HSD"} onClick={()=>{setMat("HSD");setCalculated(false);}}>HSD P7</ToggleBtn>
          </div>
        </div>

        {/* Hrana */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Hrana</div>
          <div className="flex gap-2">
            <ToggleBtn active={edge==="ostrohrané"} onClick={()=>{setEdge("ostrohrané");setCalculated(false);}}>Ostrohrané</ToggleBtn>
            <ToggleBtn active={edge==="4PD"} onClick={()=>{setEdge("4PD");setCalculated(false);}}>Perodrážka (4PD)</ToggleBtn>
          </div>
        </div>

        {/* Varianta (jen JSD) */}
        {mat==="JSD" && (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Varianta</div>
            <div className="flex gap-2">
              <ToggleBtn active={variant==="probarvená"} onClick={()=>{setVariant("probarvená");setCalculated(false);}}>Probarvená</ToggleBtn>
              <ToggleBtn active={variant==="neprobarvená"} onClick={()=>{setVariant("neprobarvená");setCalculated(false);}}>Neprobarvená</ToggleBtn>
            </div>
          </div>
        )}

        {/* Tloušťka */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">Tloušťka (mm)</label>
          <select
            value={thickness}
            onChange={e=>{
              const t=Number(e.target.value);
              setThickness(t); setCalculated(false);
            }}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {availableThicknesses.map(t=>(
              <option key={t} value={t}>{t} mm{t===28?" · CB16 topení":""}</option>
            ))}
          </select>
        </div>

        <hr className="border-gray-100" />

        {/* Typ výpočtu */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Typ výpočtu</div>
          <div className="flex flex-wrap gap-2">
            <ToggleBtn active={useType==="floor"} onClick={()=>{setUseType("floor");setCalculated(false);}}>Podlaha</ToggleBtn>
            <ToggleBtn active={useType==="heating"} onClick={()=>{setUseType("heating");setCalculated(false);}}>Podlahové vytápění</ToggleBtn>
            <ToggleBtn active={useType==="wall"} onClick={()=>{setUseType("wall");setCalculated(false);}}>Dřevostavba</ToggleBtn>
          </div>
          {useType==="heating" && (
            <div className="mt-2 text-xs text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              Deska JSD P5/4PD CB16 · 28×1800×600 mm · perodrážka ze 4 stran · pro suchou montáž podlahového topení
            </div>
          )}
        </div>

        {/* Místnosti nebo stěny */}
        {(useType==="floor"||useType==="heating") ? (
          <div className="space-y-3">
            {rooms.map(room=>(
              <div key={room.id} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-sm text-gray-700">{room.name}</span>
                  {rooms.length>1&&(
                    <button onClick={()=>setRooms(r=>r.filter(x=>x.id!==room.id))} className="text-red-400 hover:text-red-600 p-1">
                      <Trash2 size={15}/>
                    </button>
                  )}
                </div>
                <div className="flex gap-3">
                  <div>
                    <label className="text-xs text-gray-500 font-medium block mb-1">Šířka (mm)</label>
                    <input type="number" value={room.w} min={1}
                      onChange={e=>setRooms(r=>r.map(x=>x.id===room.id?{...x,w:Number(e.target.value)}:x))}
                      className="w-28 border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"/>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-medium block mb-1">Délka (mm)</label>
                    <input type="number" value={room.l} min={1}
                      onChange={e=>setRooms(r=>r.map(x=>x.id===room.id?{...x,l:Number(e.target.value)}:x))}
                      className="w-28 border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"/>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={()=>{const id=roomIdCnt;setRoomIdCnt(c=>c+1);setRooms(r=>[...r,{id,name:`Místnost ${id}`,w:4000,l:4000}]);}}
              className="flex items-center gap-1 text-sm text-green-700 font-semibold hover:text-green-800">
              <Plus size={16}/> Přidat místnost
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {walls.map(wall=>(
              <div key={wall.id} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-sm text-gray-700">{wall.name}</span>
                  {walls.length>1&&(
                    <button onClick={()=>setWalls(w=>w.filter(x=>x.id!==wall.id))} className="text-red-400 hover:text-red-600 p-1">
                      <Trash2 size={15}/>
                    </button>
                  )}
                </div>
                <div className="flex gap-3">
                  <div>
                    <label className="text-xs text-gray-500 font-medium block mb-1">Šířka (mm)</label>
                    <input type="number" value={wall.w} min={1}
                      onChange={e=>setWalls(w=>w.map(x=>x.id===wall.id?{...x,w:Number(e.target.value)}:x))}
                      className="w-28 border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"/>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-medium block mb-1">Výška (mm)</label>
                    <input type="number" value={wall.h} min={1}
                      onChange={e=>setWalls(w=>w.map(x=>x.id===wall.id?{...x,h:Number(e.target.value)}:x))}
                      className="w-28 border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"/>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={()=>{const id=wallIdCnt;setWallIdCnt(c=>c+1);setWalls(w=>[...w,{id,name:`Stěna ${id}`,w:3000,h:2600}]);}}
              className="flex items-center gap-1 text-sm text-green-700 font-semibold hover:text-green-800">
              <Plus size={16}/> Přidat stěnu
            </button>
          </div>
        )}

        {/* Rezerva */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">Rezerva materiálu</label>
          <select value={reservePct} onChange={e=>setReservePct(Number(e.target.value))}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
            {[5,8,10,12,15].map(v=><option key={v} value={v}>{v} %</option>)}
          </select>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-1">
          <button onClick={calculate}
            className="px-5 py-2.5 text-white font-semibold rounded-xl text-sm shadow"
            style={{backgroundColor:"var(--brand)"}}>
            Spočítat
          </button>
          <button onClick={resetAll} className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-xl text-sm hover:bg-gray-200">
            <RotateCcw size={14}/> Resetovat
          </button>
          <button onClick={exportCsv} disabled={!calculated} className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-xl text-sm hover:bg-gray-200 disabled:opacity-40">
            <Download size={14}/> Export CSV
          </button>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Výsledky</div>
        {!calculated ? (
          <p className="text-gray-400 text-sm">Vyplňte zadání a klikněte na <strong className="text-gray-600">Spočítat</strong>.</p>
        ) : chosen ? (
          <div className="space-y-5">
            {/* Summary metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{selectedIdx===0?"Nejlepší formát":"Vybraný formát"} – desek</div>
                <div className="text-3xl font-black text-gray-900">{chosen.boards} <span className="text-lg font-bold">ks</span></div>
                <div className="text-xs text-gray-500 mt-1">{chosen.width} × {chosen.height} mm</div>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Prořez</div>
                <div className="text-3xl font-black text-gray-900">{chosen.waste.toFixed(1)} <span className="text-lg font-bold">%</span></div>
                <div className="text-xs text-gray-500 mt-1">{chosen.totalWeight} kg celkem</div>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Čistá plocha</div>
                <div className="text-2xl font-bold text-gray-900">{chosen.netArea.toFixed(2)} m²</div>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Nakoupená plocha</div>
                <div className="text-2xl font-bold text-gray-900">{chosen.usedArea.toFixed(2)} m²</div>
                <div className="text-xs text-gray-500 mt-1">vč. rezervy {reservePct} %</div>
              </div>
            </div>

            {/* Format comparison (hide for heating with single result) */}
            {results.length > 1 && (
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Porovnání formátů <span className="font-normal normal-case tracking-normal text-gray-400">— kliknutím vyberte</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-gray-50 border border-gray-200 rounded-lg">
                        <th className="text-left px-3 py-2 font-semibold text-gray-500">Formát</th>
                        <th className="text-center px-2 py-2 font-semibold text-gray-500">m²/ks</th>
                        <th className="text-center px-2 py-2 font-semibold text-gray-500">Desek</th>
                        <th className="text-center px-2 py-2 font-semibold text-gray-500">Prořez</th>
                        <th className="text-center px-2 py-2 font-semibold text-gray-500">kg</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((r,i)=>{
                        const isBest=i===0; const isChosen=i===selectedIdx;
                        return (
                          <tr key={i} onClick={()=>setSelectedIdx(i)} className={`cursor-pointer border-b border-gray-100 last:border-0 transition-colors ${isChosen?"bg-green-50 border-l-2 border-l-green-600":"hover:bg-gray-50"}`}>
                            <td className="px-3 py-2">
                              <span className="font-semibold">{r.width}×{r.height}</span>
                              {isBest&&<span className="ml-1 text-green-600 text-[10px] font-bold">★</span>}
                            </td>
                            <td className="px-2 py-2 text-center text-gray-600">{r.boardArea.toFixed(2)}</td>
                            <td className="px-2 py-2 text-center font-semibold">{r.boards}</td>
                            <td className="px-2 py-2 text-center">
                              <div className="flex items-center gap-1">
                                <div className="flex-1 bg-gray-200 rounded-full h-1.5 min-w-10">
                                  <div className={`h-1.5 rounded-full ${barColor(r.waste)}`} style={{width:`${Math.min(r.waste/50*100,100)}%`}}/>
                                </div>
                                <span>{r.waste.toFixed(1)}%</span>
                              </div>
                            </td>
                            <td className="px-2 py-2 text-center text-gray-600">{r.totalWeight}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-2">Prořez = (nakoupená − čistá plocha) / nakoupená plocha.</p>
              </div>
            )}

            {/* Matching products */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Dostupné produkty</div>
              <div className="space-y-2">
                {getFiltered().map(p=>(
                  <div key={p.code} className="border border-gray-200 rounded-lg px-4 py-3">
                    <div className="font-semibold text-sm text-gray-800">{p.code}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{p.width} × {p.height} mm · tl. {p.thickness} mm · {p.weight} kg/m²{p.note?` · ${p.note}`:""}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-400 text-sm border border-dashed border-gray-200 rounded-xl">
            Pro tuto kombinaci nejsou dostupné žádné formáty.
          </div>
        )}
      </div>
    </div>
  );
}
