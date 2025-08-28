
'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Sheet } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function SiteHeader(){
  const [open,setOpen] = useState(false)
  return (
    <>
      <div className="hidden md:block bg-brand text-zinc-200 text-xs">
        <div className="container-x px-4 py-2 flex items-center justify-between">
          <div>7801 Confederate Park Rd, Fort Worth, TX 76108</div>
          <div>Call: (682) 707-5776</div>
        </div>
      </div>
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-white/10 text-zinc-200">
        <div className="container-x px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="AZR Auto Group" width={40} height={40} className="rounded-lg" />
            <div className="leading-tight">
              <div className="font-bold tracking-wide text-white">AZR Auto Group</div>
              <div className="text-xs text-zinc-400">Premium Pre-Owned Vehicles • Fort Worth, TX</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/inventory" className="px-3 py-2 rounded-md hover:bg-zinc-800/50">Inventory</Link>
            <Link href="/financing" className="px-3 py-2 rounded-md hover:bg-zinc-800/50">Financing</Link>
            <Link href="/about" className="px-3 py-2 rounded-md hover:bg-zinc-800/50">About</Link>
            <Link href="/contact" className="px-3 py-2 rounded-md hover:bg-zinc-800/50">Contact</Link>
            <Link href="/inventory"><Button className="ml-2">Shop Now</Button></Link>
          </nav>
          <Button variant="ghost" className="md:hidden text-white" onClick={()=>setOpen(true)}>Menu</Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <nav className="flex flex-col gap-2">
            <Link href="/inventory" className="px-3 py-2 rounded-md hover:bg-zinc-100">Inventory</Link>
            <Link href="/financing" className="px-3 py-2 rounded-md hover:bg-zinc-100">Financing</Link>
            <Link href="/about" className="px-3 py-2 rounded-md hover:bg-zinc-100">About</Link>
            <Link href="/contact" className="px-3 py-2 rounded-md hover:bg-zinc-100">Contact</Link>
          </nav>
        </Sheet>
      </header>
    </>
  )
}
