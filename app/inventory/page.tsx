"use client";
import { useMemo, useState } from "react";
import { allCars } from "@/lib/cars";
import CarCard from "@/components/CarCard";

export default function InventoryPage(){
  const [filters, setFilters] = useState<{type:string; price:string; q:string}>({type:'', price:'', q:''});

  const cars = useMemo(()=>{
    let list = allCars;
    if (filters.type) list = list.filter(c => c.type === filters.type);
    if (filters.price){
      const [min,max] = filters.price.split("-").map(Number);
      list = list.filter(c => c.price >= min && c.price <= max);
    }
    if (filters.q) {
      const q = filters.q.toLowerCase();
      list = list.filter(c => `${c.make} ${c.model} ${c.title}`.toLowerCase().includes(q));
    }
    return list;
  }, [filters]);

  return (
    <main className="container-x px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="uppercase tracking-widest text-xs text-zinc-500">Inventory</div>
          <h1 className="text-3xl md:text-4xl font-semibold">Available vehicles</h1>
          <p className="text-zinc-600 mt-1">Real-time availability. Call to confirm.</p>
        </div>
        <div className="w-full md:w-auto">
          {/* Filters */}
          <div id="filters" />
        </div>
      </div>

      {/* Inline filters to keep it simple */}
      <div className="mt-6">
        {/* we inline a simple Filters here to avoid extra imports for you */}
        <InlineFilters onChange={setFilters} />
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map(c => <CarCard key={c.id} car={c} />)}
      </div>
    </main>
  );
}

function InlineFilters({ onChange }:{ onChange:(f:{type:string; price:string; q:string})=>void }){
  return (
    <div className="flex flex-wrap gap-3">
      <select className="px-3 py-2 rounded-lg border border-zinc-300" onChange={(e)=>onChange({type:e.target.value, price:'', q:''})}>
        <option value="">All Types</option><option>Sedan</option><option>SUV</option><option>Truck</option><option>Coupe</option>
      </select>
      <select className="px-3 py-2 rounded-lg border border-zinc-300" onChange={(e)=>onChange({type:'', price:e.target.value, q:''})}>
        <option value="">Any Price</option>
        <option value="0-6000">Under $6k</option>
        <option value="6000-10000">$6k–$10k</option>
        <option value="10000-16000">$10k–$16k</option>
        <option value="16000-999999">$16k+</option>
      </select>
      <input className="px-3 py-2 rounded-lg border border-zinc-300" placeholder="Search make/model..." onChange={(e)=>onChange({type:'', price:'', q:e.target.value})} />
    </div>
  );
}
