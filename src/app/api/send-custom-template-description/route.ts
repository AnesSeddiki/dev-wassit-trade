import { NextResponse } from "next/server";

interface CustomTemplateRequest {
  name: string;
  email: string;
  company?: string;
  description: string;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Partial<CustomTemplateRequest> | null;

  if (!body?.name || !body.email || !body.description) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  // Demo endpoint — no backend wired up yet. Logged here so a submission is
  // visible during local development until this is connected to a real inbox/CRM.
  console.log("[custom-template-request]", {
    name: body.name,
    email: body.email,
    company: body.company ?? null,
    description: body.description,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
