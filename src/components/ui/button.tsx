import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "wa:inline-flex wa:items-center wa:justify-center wa:gap-2 wa:whitespace-nowrap wa:rounded-md wa:text-sm wa:font-medium wa:transition-all disabled:wa:pointer-events-none disabled:wa:opacity-50 [&_svg]:wa:pointer-events-none [&_svg:not([class*='size-'])]:wa:size-4 wa:shrink-0 [&_svg]:wa:shrink-0 wa:outline-none focus-visible:wa:border-ring focus-visible:wa:ring-ring/50 focus-visible:wa:ring-[3px] aria-invalid:wa:ring-destructive/20 dark:aria-invalid:wa:ring-destructive/40 aria-invalid:wa:border-destructive",
  {
    variants: {
      variant: {
        default: "wa:bg-primary wa:text-primary-foreground hover:wa:bg-primary/90",
        destructive:
          "wa:bg-destructive wa:text-white hover:wa:bg-destructive/90 focus-visible:wa:ring-destructive/20 dark:focus-visible:wa:ring-destructive/40 dark:wa:bg-destructive/60",
        outline:
          "wa:border wa:bg-background wa:shadow-xs hover:wa:bg-accent hover:wa:text-accent-foreground dark:wa:bg-input/30 dark:wa:border-input dark:hover:wa:bg-input/50",
        secondary:
          "wa:bg-secondary wa:text-secondary-foreground hover:wa:bg-secondary/80",
        ghost:
          "hover:wa:bg-accent hover:wa:text-accent-foreground dark:hover:wa:bg-accent/50",
        link: "wa:text-primary wa:underline-offset-4 hover:wa:underline",
      },
      size: {
        default: "wa:h-9 wa:px-4 wa:py-2 has-[>svg]:wa:px-3",
        sm: "wa:h-8 wa:rounded-md wa:gap-1.5 wa:px-3 has-[>svg]:wa:px-2.5",
        lg: "wa:h-10 wa:rounded-md wa:px-6 has-[>svg]:wa:px-4",
        icon: "wa:size-9",
        "icon-sm": "wa:size-8",
        "icon-lg": "wa:size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
