
'use client'
import { Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Car } from "@/lib/types"
export default function Filters({ cars, onChange }:{ cars: Car[]; onChange:(f:{type:string; price:string; q:string})=>void }){
  const [type,setType] = useState('')
  const [price,setPrice] = useState('')
  const [q,setQ] = useState('')
  return (
    <div className="flex flex-wrap gap-3">
      <Select options={[{label:"All Types",value:""},{label:"Sedan",value:"Sedan"},{label:"SUV",value:"SUV"},{label:"Truck",value:"Truck"},{label:"Coupe",value:"Coupe"}]} value={type} onChange={(v)=>{setType(v); onChange({type:v, price, q})}} placeholder="All Types"/>
      <Select options={[{label:"Any Price",value:""},{label:"Under $10k",value:"0-10000"},{label:"$10k–$20k",value:"10000-20000"},{label:"$20k–$40k",value:"20000-40000"},{label:"$40k+",value:"40000-999999"}]} value={price} onChange={(v)=>{setPrice(v); onChange({type, price:v, q})}} placeholder="Any Price"/>
      <Input placeholder="Search make/model..." value={q} onChange={(e)=>{const v=e.target.value; setQ(v); onChange({type, price, q:v})}}/>
    </div>
  )
}
