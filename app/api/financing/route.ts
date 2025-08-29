import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const vehicle = String(form.get("vehicle") || "");
    const notes = String(form.get("notes") || "");

    if (!name || !phone || !email) {
      return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), { status: 400 });
    }

    const subject = `Financing Request – ${name}${vehicle ? " – " + vehicle : ""}`;
    const html = `
      <h2>New Financing Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${vehicle ? `<p><strong>Vehicle of Interest:</strong> ${vehicle}</p>` : ""}
      <p><strong>Notes:</strong></p>
      <p>${notes?.replace(/\n/g, "<br/>")}</p>
    `;
    const text = `New Financing Request
Name: ${name}
Phone: ${phone}
Email: ${email}
${vehicle ? `Vehicle: ${vehicle}\n` : ""}Notes:
${notes}`;

    await resend.emails.send({
      from: "AZR Auto Group <onboarding@resend.dev>",
      to: ["azrautogroup@hotmail.com"],
      subject,
      html,
      text,
      replyTo: email || undefined,
    });

    return Response.json({ ok: true });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}
