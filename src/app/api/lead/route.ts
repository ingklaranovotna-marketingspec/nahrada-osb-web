import { NextRequest, NextResponse } from "next/server";

const SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbz3hX6oUZLheB1oOZIigtqJQZ-xYuKLwoRMqzpfjeEWtUIQZi4IaF5HfQKk59vzwITm/exec";

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
