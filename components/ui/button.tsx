
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
const buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 border text-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2",{
  variants:{ variant:{ default:"bg-black text-white border-black/10 hover:opacity-90", ghost:"bg-white text-black border-black/10 hover:bg-zinc-50", chrome:"border-zinc-300 bg-gradient-to-b from-zinc-50 to-zinc-200 text-black"}, size:{ default:"h-10", sm:"h-9 text-sm", lg:"h-11 text-base"}}, defaultVariants:{ variant:"default", size:"default" } })
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
export function Button({ className, variant, size, ...props }: ButtonProps) { return <button className={cn(buttonVariants({ variant, size }), className)} {...props} /> }
