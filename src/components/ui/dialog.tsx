import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:wa:animate-in data-[state=closed]:wa:animate-out data-[state=closed]:wa:fade-out-0 data-[state=open]:wa:fade-in-0 wa:fixed wa:inset-0 wa:z-50 wa:bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "wa:bg-background data-[state=open]:wa:animate-in data-[state=closed]:wa:animate-out data-[state=closed]:wa:fade-out-0 data-[state=open]:wa:fade-in-0 data-[state=closed]:wa:zoom-out-95 data-[state=open]:wa:zoom-in-95 wa:fixed wa:top-[50%] wa:left-[50%] wa:z-50 wa:grid wa:w-full wa:max-w-[calc(100%-2rem)] wa:translate-x-[-50%] wa:translate-y-[-50%] wa:gap-4 wa:rounded-lg wa:border wa:p-6 wa:shadow-lg wa:duration-200 sm:wa:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="wa:ring-offset-background focus:wa:ring-ring data-[state=open]:wa:bg-accent data-[state=open]:wa:text-muted-foreground wa:absolute wa:top-4 wa:right-4 wa:rounded-xs wa:opacity-70 wa:transition-opacity hover:wa:opacity-100 focus:wa:ring-2 focus:wa:ring-offset-2 focus:wa:outline-hidden disabled:wa:pointer-events-none [&_svg]:wa:pointer-events-none [&_svg]:wa:shrink-0 [&_svg:not([class*='size-'])]:wa:size-4"
          >
            <XIcon />
            <span className="wa:sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("wa:flex wa:flex-col wa:gap-2 wa:text-center sm:wa:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "wa:flex wa:flex-col-reverse wa:gap-2 sm:wa:flex-row sm:wa:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("wa:text-lg wa:leading-none wa:font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("wa:text-muted-foreground wa:text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
