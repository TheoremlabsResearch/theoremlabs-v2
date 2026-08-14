import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_EMAIL = 'research@theoremlabs.io';

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (typeof body !== 'object' || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.firstName === 'string' && b.firstName.trim().length > 0 &&
    typeof b.lastName === 'string' && b.lastName.trim().length > 0 &&
    typeof b.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.company === 'string' && b.company.trim().length > 0 &&
    typeof b.message === 'string' && b.message.trim().length > 0
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set - contact form cannot send email.');
    return NextResponse.json(
      { error: 'The contact form is not configured yet. Please email us directly.' },
      { status: 500 }
    );
  }

  const { firstName, lastName, email, company, message } = body;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: 'Theoremlabs Website <onboarding@resend.dev>',
    to: TO_EMAIL,
    replyTo: email,
    subject: `New contact form submission from ${firstName} ${lastName} (${company})`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Company: ${company}`,
      '',
      'Message:',
      message,
    ].join('\n'),
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Something went wrong sending your message. Please try again or email us directly.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
