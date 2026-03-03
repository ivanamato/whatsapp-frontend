import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("wa:relative", className)}
      style={{ overflow: 'hidden', ...props.style }}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        style={{ width: '100%', height: '100%', overflowY: 'scroll' }}
        className="focus-visible:wa:ring-ring/50 wa:rounded-[inherit] wa:transition-[color,box-shadow] wa:outline-none focus-visible:wa:ring-[3px] focus-visible:wa:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      style={{
        display: 'flex',
        touchAction: 'none',
        userSelect: 'none',
        padding: '1px',
        ...(orientation === 'vertical' ? { height: '100%', width: '8px' } : { width: '100%', height: '8px', flexDirection: 'column' as const }),
      }}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        style={{ background: '#00a884', borderRadius: '9999px', position: 'relative', flex: 1 }}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
