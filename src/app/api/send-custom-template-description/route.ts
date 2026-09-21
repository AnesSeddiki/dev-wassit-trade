import { NextResponse } from "next/server";
import { Resend } from "resend";

interface CustomTemplateRequest {
  name: string;
  email: string;
  company?: string;
  description: string;
}

const NOTIFY_EMAIL = "anesseddiki879@gmail.com";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Partial<CustomTemplateRequest> | null;

  if (!body?.name || !body.email || !body.description) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[custom-template-request] RESEND_API_KEY is not set — email not sent.");
    return NextResponse.json({ ok: false, error: "Email service not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const bodyText = body.company
    ? `${body.description}\n\n—\nFrom: ${body.name} <${body.email}>\nCompany: ${body.company}`
    : `${body.description}\n\n—\nFrom: ${body.name} <${body.email}>`;

  const { error } = await resend.emails.send({
    from: "Wassit DEV <onboarding@resend.dev>",
    to: NOTIFY_EMAIL,
    replyTo: body.email,
    subject: body.name,
    text: bodyText,
  });

  if (error) {
    console.error("[custom-template-request] Resend error:", error);
    return NextResponse.json({ ok: false, error: "Failed to send email." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
