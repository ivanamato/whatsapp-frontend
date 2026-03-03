import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "wa:flex wa:items-center wa:gap-2 wa:text-sm wa:leading-none wa:font-medium wa:select-none group-data-[disabled=true]:wa:pointer-events-none group-data-[disabled=true]:wa:opacity-50 peer-disabled:wa:cursor-not-allowed peer-disabled:wa:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
