import Image from "next/image";
import Link from "next/link";
import { findCar } from "@/lib/cars";

export default function VehiclePage({ params }:{ params: { id: string } }){
  const car = findCar(params.id);
  if (!car) return <main className="container-x px-4 py-12">Not found.</main>;
  return (
    <main className="container-x px-4 py-10">
      <nav className="text-sm text-zinc-500"><Link href="/inventory" className="hover:underline">Inventory</Link> / <span>{car.title}</span></nav>
      <div className="mt-6 grid lg:grid-cols-2 gap-10">
        <div className="rounded-2xl overflow-hidden border border-black/10">
          <div className="relative aspect-[4/3] bg-zinc-100">
            <Image src={car.image} alt={car.title} fill className="object-cover" sizes="50vw" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">{car.title}</h1>
          <div className="mt-2 text-2xl font-semibold">{car.priceDisplay}</div>
          <div className="mt-2 text-sm text-zinc-600">{car.odometer.toLocaleString()} miles</div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl border border-black/10"><span className="text-zinc-500">VIN:</span> {car.vin}</div>
            <div className="p-4 rounded-xl border border-black/10"><span className="text-zinc-500">Body:</span> {car.type}</div>
            <div className="p-4 rounded-xl border border-black/10"><span className="text-zinc-500">Drivetrain:</span> {car.drivetrain}</div>
            <div className="p-4 rounded-xl border border-black/10"><span className="text-zinc-500">Transmission:</span> {car.transmission}</div>
          </div>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-primary" href="/contact">Get this car</a>
            <a className="btn" href="/financing">Apply for financing</a>
          </div>
          <div className="mt-8 text-zinc-700">{car.description}</div>
        </div>
      </div>
    </main>
  );
}
