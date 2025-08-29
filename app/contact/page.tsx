"use client";
import { useState } from "react";

export default function ContactPage(){
  const [sent, setSent] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await fetch("/api/contact", { method: "POST", body: fd });
    setSent(true);
  }
  return (
    <main className="container-x px-4 py-12">
      <div className="uppercase tracking-widest text-xs text-zinc-500">Contact</div>
      <h1 className="text-3xl md:text-4xl font-semibold">Let’s talk</h1>
      <div className="grid md:grid-cols-2 gap-10 mt-6">
        {sent ? (
          <div className="p-6 rounded-2xl border bg-zinc-50">Thanks! We’ll get back to you ASAP.</div>
        ) : (
          <form onSubmit={onSubmit} className="border p-6 rounded-2xl space-y-3 bg-white">
            <input name="name" placeholder="Full Name" required className="px-3 py-2 rounded-lg border border-zinc-300" />
            <input name="phone" placeholder="Phone" required className="px-3 py-2 rounded-lg border border-zinc-300" />
            <input name="email" placeholder="Email" type="email" required className="px-3 py-2 rounded-lg border border-zinc-300" />
            <textarea name="message" rows={4} placeholder="Message..." className="px-3 py-2 rounded-lg border border-zinc-300"></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        )}
        <div className="space-y-4">
          <div className="p-6 rounded-2xl border">
            <div className="font-semibold">AZR Auto Group</div>
            <div className="text-zinc-600">7801 Confederate Park Rd, Fort Worth, TX 76108</div>
            <div className="text-zinc-600">(682) 707-5776</div>
            <div className="text-zinc-600">azrautogroup@hotmail.com</div>
            <div className="text-zinc-600">Mon–Sat 10–6 • Sun Closed</div>
          </div>
          <iframe className="w-full h-64 rounded-2xl border"
            loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=7801%20Confederate%20Park%20Rd%2C%20Fort%20Worth%2C%20TX%2076108&output=embed"></iframe>
        </div>
      </div>
    </main>
  );
}
