
import * as React from "react"; import { cn } from "@/lib/utils"
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (<input ref={ref} className={cn("px-3 py-2 rounded-lg border border-zinc-300 w-full", className)} {...props} />)); Input.displayName="Input"
