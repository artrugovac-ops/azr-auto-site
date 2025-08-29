"use client";
import { useState } from "react";
export default function Filters({ onChange }:{ onChange:(f:{type:string; price:string; q:string})=>void }) {
  const [type,setType] = useState('');
  const [price,setPrice] = useState('');
  const [q,setQ] = useState('');
  return (
    <div className="flex flex-wrap gap-3">
      <select className="px-3 py-2 rounded-lg border border-zinc-300" value={type} onChange={(e)=>{setType(e.target.value); onChange({type:e.target.value, price, q})}}>
        <option value="">All Types</option><option>Sedan</option><option>SUV</option><option>Truck</option><option>Coupe</option>
      </select>
      <select className="px-3 py-2 rounded-lg border border-zinc-300" value={price} onChange={(e)=>{setPrice(e.target.value); onChange({type, price:e.target.value, q})}}>
        <option value="">Any Price</option>
        <option value="0-6000">Under $6k</option>
        <option value="6000-10000">$6k–$10k</option>
        <option value="10000-16000">$10k–$16k</option>
        <option value="16000-999999">$16k+</option>
      </select>
      <input className="px-3 py-2 rounded-lg border border-zinc-300" placeholder="Search make/model..." value={q} onChange={(e)=>{setQ(e.target.value); onChange({type, price, q:e.target.value})}} />
    </div>
  );
}
