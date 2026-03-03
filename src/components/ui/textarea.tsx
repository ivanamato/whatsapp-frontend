import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "wa:border-input placeholder:wa:text-muted-foreground focus-visible:wa:border-ring focus-visible:wa:ring-ring/50 aria-invalid:wa:ring-destructive/20 dark:aria-invalid:wa:ring-destructive/40 aria-invalid:wa:border-destructive dark:wa:bg-input/30 wa:flex wa:field-sizing-content wa:min-h-16 wa:w-full wa:rounded-md wa:border wa:bg-transparent wa:px-3 wa:py-2 wa:text-base wa:shadow-xs wa:transition-[color,box-shadow] wa:outline-none focus-visible:wa:ring-[3px] disabled:wa:cursor-not-allowed disabled:wa:opacity-50 md:wa:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
