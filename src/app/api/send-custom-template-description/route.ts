import { NextResponse } from "next/server";
import { Resend } from "resend";

interface CustomTemplateRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  description: string;
}

const NOTIFY_EMAIL = "anesseddiki879@gmail.com";

export async function POST(request: Request) {
  // TEMPORARY diagnostic logging — tracking down Meta Pixel "Lead" events that have
  // no matching Resend send attempt. Logs every stage so Netlify's function logs show
  // definitively whether a given submission ever reached the server at all. Safe to
  // remove once that's resolved.
  const startedAt = new Date().toISOString();
  console.log(`[custom-template-request] Incoming request at ${startedAt}, UA: ${request.headers.get("user-agent")}`);

  const body = (await request.json().catch(() => null)) as Partial<CustomTemplateRequest> | null;
  console.log(
    `[custom-template-request] Parsed body: name="${body?.name ?? ""}" email="${body?.email ?? ""}"${body ? "" : " (FAILED TO PARSE)"}`
  );

  if (!body?.name || !body.email || !body.description) {
    console.log(`[custom-template-request] Rejected: missing required fields.`);
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[custom-template-request] RESEND_API_KEY is not set — email not sent.");
    return NextResponse.json({ ok: false, error: "Email service not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const contactLines = [
    `From: ${body.name} <${body.email}>`,
    body.phone ? `Phone: ${body.phone}` : null,
    body.company ? `Company: ${body.company}` : null,
  ].filter(Boolean);
  const bodyText = `${body.description}\n\n—\n${contactLines.join("\n")}`;

  console.log(`[custom-template-request] Calling Resend...`);
  const { data, error } = await resend.emails.send({
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

  console.log(`[custom-template-request] Resend accepted the send, id: ${data?.id}`);
  return NextResponse.json({ ok: true });
}
