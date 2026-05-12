import { NextRequest, NextResponse } from "next/server";

const SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbzYRvq36mz-aQsVNP1nBB6RjnCtO8OqExHLbB932ORxMgC7-jJ74onBiUQ9eL6RsDWw/exec";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    await fetch(SHEET_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.error("Sheets webhook error:", err);
  }

  return NextResponse.json({ ok: true });
}
