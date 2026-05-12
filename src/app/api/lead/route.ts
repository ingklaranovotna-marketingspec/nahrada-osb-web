import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Log for now – replace with CRM webhook / email / Supabase in Phase 3
  console.log("New lead:", body);

  // TODO: send to CRM webhook
  // await fetch(process.env.CRM_WEBHOOK_URL!, { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } });

  return NextResponse.json({ ok: true });
}
