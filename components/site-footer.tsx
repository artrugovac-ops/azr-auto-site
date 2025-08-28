
export default function SiteFooter(){
  return (
    <footer className="mt-20 bg-zinc-50 border-t">
      <div className="container-x px-4 py-14 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <div className="font-semibold">AZR Auto Group</div>
          <p className="text-zinc-600 mt-2">Premium Pre-Owned Vehicles • Fort Worth, TX</p>
          <p className="text-zinc-600 mt-2">7801 Confederate Park Rd, Fort Worth, TX 76108</p>
          <p className="text-zinc-600">Phone: (682) 707-5776</p>
          <p className="text-zinc-600">Email: azrautogroup@hotmail.com</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Shop</div>
          <ul className="space-y-2 text-zinc-700">
            <li><a href="/inventory" className="hover:underline">All Vehicles</a></li>
            <li><a href="/inventory#suv" className="hover:underline">SUVs</a></li>
            <li><a href="/inventory#sedan" className="hover:underline">Sedans</a></li>
            <li><a href="/inventory#truck" className="hover:underline">Trucks</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-zinc-700">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/financing" className="hover:underline">Financing</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Hours</div>
          <p className="text-zinc-700">Mon–Sat 10–6 • Sun Closed</p>
          <a href="/contact" className="btn btn-ghost mt-4">Get Directions</a>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-zinc-500">
        © AZR Auto Group {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  )
}
