import Link from "next/link";
import Image from "next/image";
import { Car } from "@/lib/types";

export default function CarCard({ car }: { car: Car }) {
  return (
    <Link href={`/vehicle/${car.id}`} className="block rounded-2xl overflow-hidden border border-black/10 bg-white hover:shadow-lg transition relative">
      <div className="absolute top-3 left-3 text-xs font-semibold rounded-lg px-2 py-1 border border-zinc-300 bg-zinc-100 text-black">{car.type}</div>
      <div className="aspect-[4/3] relative bg-zinc-100">
        <Image src={car.image} alt={car.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 50vw" />
      </div>
      <div className="p-4 flex items-start justify-between gap-2">
        <div>
          <div className="font-semibold">{car.title}</div>
          <div className="text-sm text-zinc-600">{car.odometer.toLocaleString()} mi • {car.transmission}</div>
        </div>
        <div className="text-right font-semibold">{car.priceDisplay}</div>
      </div>
    </Link>
  );
}
