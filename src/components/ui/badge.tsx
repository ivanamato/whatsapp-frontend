import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "wa:inline-flex wa:items-center wa:justify-center wa:rounded-md wa:border wa:px-2 wa:py-0.5 wa:text-xs wa:font-medium wa:w-fit wa:whitespace-nowrap wa:shrink-0 [&>svg]:wa:size-3 wa:gap-1 [&>svg]:wa:pointer-events-none focus-visible:wa:border-ring focus-visible:wa:ring-ring/50 focus-visible:wa:ring-[3px] aria-invalid:wa:ring-destructive/20 dark:aria-invalid:wa:ring-destructive/40 aria-invalid:wa:border-destructive wa:transition-[color,box-shadow] wa:overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "wa:border-transparent wa:bg-primary wa:text-primary-foreground [a&]:hover:wa:bg-primary/90",
        secondary:
          "wa:border-transparent wa:bg-secondary wa:text-secondary-foreground [a&]:hover:wa:bg-secondary/90",
        destructive:
          "wa:border-transparent wa:bg-destructive wa:text-white [a&]:hover:wa:bg-destructive/90 focus-visible:wa:ring-destructive/20 dark:focus-visible:wa:ring-destructive/40 dark:wa:bg-destructive/60",
        outline:
          "wa:text-foreground [a&]:hover:wa:bg-accent [a&]:hover:wa:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
