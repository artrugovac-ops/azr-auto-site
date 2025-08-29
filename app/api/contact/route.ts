import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    if (!name || !phone || !email) {
      return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), { status: 400 });
    }

    const subject = `New Contact – ${name} (${phone})`;
    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message?.replace(/\n/g, "<br/>")}</p>
    `;
    const text = `New Contact Message
Name: ${name}
Phone: ${phone}
Email: ${email}
Message:
${message}`;

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
