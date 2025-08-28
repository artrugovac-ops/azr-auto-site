
'use client'
type Option = { label:string; value:string }
export function Select({ options, value, onChange, placeholder }:{ options:Option[]; value:string; onChange:(v:string)=>void; placeholder?:string }){
  return (<select className="px-3 py-2 rounded-lg border border-zinc-300" value={value} onChange={(e)=>onChange(e.target.value)}>
    <option value="">{placeholder ?? "Select"}</option>{options.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select>)
}
