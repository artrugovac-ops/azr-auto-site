"use client";
import { useState } from "react";

export default function FinancingPage(){
  const [sent, setSent] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await fetch("/api/financing", { method: "POST", body: formData });
    setSent(true);
  }
  return (
    <main className="container-x px-4 py-12">
      <div className="uppercase tracking-widest text-xs text-zinc-500">Financing</div>
      <h1 className="text-3xl md:text-4xl font-semibold">Get pre-approved</h1>
      <p className="text-zinc-600 mt-2 max-w-2xl">Quick approvals with local lenders. Fill out the short form and we’ll follow up.</p>
      {sent ? (
        <div className="mt-8 p-6 border rounded-2xl bg-zinc-50">Thanks! We’ll reach out shortly.</div>
      ) : (
        <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-4 max-w-2xl border rounded-2xl p-6 bg-white">
          <input name="name" placeholder="Full Name" required className="px-3 py-2 rounded-lg border border-zinc-300" />
          <input name="phone" placeholder="Phone" required className="px-3 py-2 rounded-lg border border-zinc-300" />
          <input name="email" placeholder="Email" type="email" required className="px-3 py-2 rounded-lg border border-zinc-300 md:col-span-2" />
          <input name="vehicle" placeholder="Vehicle of Interest (optional)" className="px-3 py-2 rounded-lg border border-zinc-300 md:col-span-2" />
          <textarea name="notes" rows={4} placeholder="Tell us about your situation..." className="px-3 py-2 rounded-lg border border-zinc-300 md:col-span-2"></textarea>
          <button type="submit" className="btn btn-primary md:col-span-2">Submit Application</button>
          <p className="text-xs text-zinc-500 md:col-span-2">Submitting this form does not impact your credit.</p>
        </form>
      )}
    </main>
  );
}
