import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:wa:text-foreground placeholder:wa:text-muted-foreground selection:wa:bg-primary selection:wa:text-primary-foreground dark:wa:bg-input/30 wa:border-input wa:h-9 wa:w-full wa:min-w-0 wa:rounded-md wa:border wa:bg-transparent wa:px-3 wa:py-1 wa:text-base wa:shadow-xs wa:transition-[color,box-shadow] wa:outline-none file:wa:inline-flex file:wa:h-7 file:wa:border-0 file:wa:bg-transparent file:wa:text-sm file:wa:font-medium disabled:wa:pointer-events-none disabled:wa:cursor-not-allowed disabled:wa:opacity-50 md:wa:text-sm",
        "focus-visible:wa:border-ring focus-visible:wa:ring-ring/50 focus-visible:wa:ring-[3px]",
        "aria-invalid:wa:ring-destructive/20 dark:aria-invalid:wa:ring-destructive/40 aria-invalid:wa:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
