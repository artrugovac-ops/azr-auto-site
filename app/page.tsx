export default function Home() {
  return (
    <main className="container-x px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold">
        Cars that run. Deals that make sense.
      </h1>
      <p className="text-zinc-600 mt-4 max-w-2xl">
        I’m Art. I keep things simple: reliable daily drivers and budget-friendly cash cars,
        straightforward numbers, and no runarounds. If I wouldn’t drive it myself, I won’t sell it.
      </p>

      <div className="mt-8 flex gap-3">
        <a href="/inventory" className="btn btn-primary">Browse Inventory</a>
        <a href="/financing" className="btn">Get Pre-Approved</a>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border">
          <div className="font-semibold">Straightforward</div>
          <p className="text-zinc-600 mt-2">No hidden fees. No manager tricks. Just a fair deal.</p>
        </div>
        <div className="p-6 rounded-2xl border">
          <div className="font-semibold">Checked & driven</div>
          <p className="text-zinc-600 mt-2">Cars are test-driven before they’re listed. No guessing.</p>
        </div>
        <div className="p-6 rounded-2xl border">
          <div className="font-semibold">Local & approachable</div>
          <p className="text-zinc-600 mt-2">Talk directly to me, not a sales floor. Same-day appointments.</p>
        </div>
      </div>
    </main>
  );
}
