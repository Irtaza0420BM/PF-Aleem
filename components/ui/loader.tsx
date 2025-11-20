import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoaderProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-6 w-6",
}

export function Loader({ className, size = "md" }: LoaderProps) {
  return (
    <Loader2 
      className={cn("animate-spin", sizeClasses[size], className)} 
      aria-label="Loading"
    />
  )
}

