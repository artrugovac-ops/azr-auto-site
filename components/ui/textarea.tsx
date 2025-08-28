
import * as React from "react"; import { cn } from "@/lib/utils"
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (<textarea ref={ref} className={cn("px-3 py-2 rounded-lg border border-zinc-300 w-full", className)} {...props} />)); Textarea.displayName="Textarea"
