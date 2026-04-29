export const config = { runtime: "edge" };

function bufferToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.TO_EMAIL;

  if (!apiKey || !toEmail) {
    return new Response(JSON.stringify({ error: "Server misconfiguration" }), { status: 500 });
  }

  let body: FormData;
  try {
    body = await req.formData();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400 });
  }

  const name = body.get("name") as string;
  const company = body.get("company") as string;
  const email = body.get("email") as string;
  const phone = body.get("phone") as string;
  const businessType = body.get("businessType") as string;
  const volume = body.get("volume") as string;
  const program = body.get("program") as string;
  const notes = body.get("notes") as string;

  if (!name || !company || !email || !program) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
  }

  const fileEntries = body.getAll("files").filter((v): v is File => v instanceof File && v.size > 0);

  const attachments = await Promise.all(
    fileEntries.map(async (f) => {
      const buf = await f.arrayBuffer();
      return { filename: f.name, content: bufferToBase64(buf) };
    })
  );

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
      from: "Rider Quote Form <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: email,
      subject: `Quote Request from ${name} — ${company}`,
      html,
      attachments,
    }),
  });

  if (!res.ok) {
    const raw = await res.text();
    let detail: unknown = raw;
    try { detail = JSON.parse(raw); } catch { /* not JSON */ }
    console.error("Resend error:", res.status, detail);
    const message =
      (detail && typeof detail === "object" && "message" in detail && typeof (detail as { message: unknown }).message === "string")
        ? (detail as { message: string }).message
        : raw || "Failed to send email";
    return new Response(
      JSON.stringify({ error: `Resend ${res.status}: ${message}` }),
      { status: 500 }
    );
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
