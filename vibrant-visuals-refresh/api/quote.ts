export const config = { runtime: "edge" };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.TO_EMAIL;

  if (!apiKey || !toEmail) {
    return new Response(JSON.stringify({ error: "Server misconfiguration" }), { status: 500 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400 });
  }

  const { name, company, email, phone, businessType, volume, program, notes } = body;

  if (!name || !company || !email || !program) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
  }

  const html = `
    <h2 style="margin:0 0 16px;font-family:sans-serif;">New Quote Request — Rider Shower Systems</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
      <tr><td style="padding:6px 12px 6px 0;color:#888;white-space:nowrap">Name</td><td style="padding:6px 0"><strong>${name}</strong></td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#888">Company</td><td style="padding:6px 0">${company}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#888">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#888">Phone</td><td style="padding:6px 0">${phone || "—"}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#888">Business Type</td><td style="padding:6px 0">${businessType || "—"}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#888">Annual Volume</td><td style="padding:6px 0">${volume || "—"}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#888">Program</td><td style="padding:6px 0">${program}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#888;vertical-align:top">Notes</td><td style="padding:6px 0;white-space:pre-wrap">${notes || "—"}</td></tr>
    </table>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "Rider Quote Form <noreply@yourdomain.com>",
      to: [toEmail],
      reply_to: email,
      subject: `Quote Request from ${name} — ${company}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
