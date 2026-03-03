import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "wa:bg-border wa:shrink-0 data-[orientation=horizontal]:wa:h-px data-[orientation=horizontal]:wa:w-full data-[orientation=vertical]:wa:h-full data-[orientation=vertical]:wa:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
