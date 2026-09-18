import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const title = subject?.trim()
      ? `Contact: ${subject.trim()}`
      : `Contact from ${name}`;

    const text = [
      `From: ${name} <${email}>`,
      subject ? `Subject: ${subject}` : null,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    // --- 1. Pushover ---
    const pushoverUser = process.env.PUSHOVER_USER_KEY;
    const pushoverToken = process.env.PUSHOVER_API_TOKEN;

    if (pushoverUser && pushoverToken) {
      const pushoverRes = await fetch('https://api.pushover.net/1/messages.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: pushoverToken,
          user: pushoverUser,
          title,
          message: text,
          priority: 0,
        }),
      });

      if (!pushoverRes.ok) {
        const errText = await pushoverRes.text();
        console.error('Pushover failed:', errText);
        // Continue to email even if Pushover fails
      }
    } else {
      console.warn('Pushover env vars missing — skipped');
    }

    // --- 2. Email via Resend ---
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@aiyer.digital';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'arun@aiyer.digital';

    if (resendKey) {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: title,
          text: text,
        }),
      });

      if (!emailRes.ok) {
        const errText = await emailRes.text();
        console.error('Resend failed:', errText);
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 502 }
        );
      }
    } else {
      console.warn('RESEND_API_KEY missing — email skipped');
    }

    // If neither service is configured, still accept for local testing
    if (!pushoverUser && !resendKey) {
      console.log('Contact form (dev, no keys):', { name, email, subject, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}