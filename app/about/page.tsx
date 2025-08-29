export default function AboutPage() {
  return (
    <main className="container-x px-4 py-16">
      <div className="eyebrow">About</div>
      <h1 className="text-3xl md:text-4xl font-semibold">Keeping it simple, keeping it fair</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-zinc-700">
          <p>
            I’m Art, owner of AZR Auto Group in Fort Worth. I’m not here to sell you a fantasy car I don’t stock.
            I’m here to get you into a car that runs right, fits your budget, and won’t waste your time.
          </p>
          <p>
            You’ll see a mix on my lot — dependable daily drivers and budget-friendly cash cars.
            Nothing overhyped. Everything checked and driven. If I wouldn’t drive it myself, I won’t sell it.
          </p>
          <p>
            I’m straightforward, a little funny, and I like good deals. No hidden fees, no games —
            just an honest process start to finish.
          </p>
        </div>
        <aside className="p-6 rounded-2xl border">
          <div className="font-semibold">AZR Auto Group</div>
          <div className="text-zinc-600 mt-2">7801 Confederate Park Rd, Fort Worth, TX 76108</div>
          <div className="text-zinc-600">(682) 707-5776</div>
          <div className="text-zinc-600">Mon–Sat 10–6 • Sun Closed</div>
          <a href="/contact" className="btn btn-ghost mt-4">Contact</a>
        </aside>
      </div>
    </main>
  );
}
