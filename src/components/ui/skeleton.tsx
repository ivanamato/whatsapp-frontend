import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("wa:bg-accent wa:animate-pulse wa:rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
