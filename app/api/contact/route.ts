import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot field: quietly accept submissions from bots without sending email.
    if (body.website) return NextResponse.json({ ok: true });

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
      return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "The contact form is ready, but email delivery has not been configured yet. Please email hello@elites-global.org directly." },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || "Elites Global Website <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO || "hello@elites-global.org"],
        reply_to: email,
        subject: `New website enquiry: ${service || "General enquiry"}`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
      })
    });

    if (!response.ok) {
      return NextResponse.json({ error: "We couldn't deliver your message right now. Please email hello@elites-global.org." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request. Please try again." }, { status: 400 });
  }
}