
'use client'
export function Sheet({ open, onOpenChange, children }:{ open:boolean; onOpenChange:(o:boolean)=>void; children:React.ReactNode }){
  return open ? (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={()=>onOpenChange(false)} />
      <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl p-6">
        <button className="mb-4 border px-3 py-1 rounded-md" onClick={()=>onOpenChange(false)}>Close</button>
        {children}
      </div>
    </div>
  ) : null
}
