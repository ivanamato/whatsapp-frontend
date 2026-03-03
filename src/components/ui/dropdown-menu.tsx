import * as React from "react"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "wa:z-50 wa:max-h-(--radix-dropdown-menu-content-available-height) wa:min-w-[8rem] wa:origin-(--radix-dropdown-menu-content-transform-origin) wa:overflow-x-hidden wa:overflow-y-auto wa:rounded-md wa:border wa:bg-popover wa:p-1 wa:text-popover-foreground wa:shadow-md data-[side=bottom]:wa:slide-in-from-top-2 data-[side=left]:wa:slide-in-from-right-2 data-[side=right]:wa:slide-in-from-left-2 data-[side=top]:wa:slide-in-from-bottom-2 data-[state=closed]:wa:animate-out data-[state=closed]:wa:fade-out-0 data-[state=closed]:wa:zoom-out-95 data-[state=open]:wa:animate-in data-[state=open]:wa:fade-in-0 data-[state=open]:wa:zoom-in-95",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "wa:relative wa:flex wa:cursor-default wa:items-center wa:gap-2 wa:rounded-sm wa:px-2 wa:py-1.5 wa:text-sm wa:outline-hidden wa:select-none focus:wa:bg-accent focus:wa:text-accent-foreground data-[disabled]:wa:pointer-events-none data-[disabled]:wa:opacity-50 data-[inset]:wa:pl-8 data-[variant=destructive]:wa:text-destructive data-[variant=destructive]:focus:wa:bg-destructive/10 data-[variant=destructive]:focus:wa:text-destructive dark:data-[variant=destructive]:focus:wa:bg-destructive/20 [&_svg]:wa:pointer-events-none [&_svg]:wa:shrink-0 [&_svg:not([class*='size-'])]:wa:size-4 [&_svg:not([class*='text-'])]:wa:text-muted-foreground data-[variant=destructive]:*:[svg]:wa:text-destructive!",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "wa:relative wa:flex wa:cursor-default wa:items-center wa:gap-2 wa:rounded-sm wa:py-1.5 wa:pr-2 wa:pl-8 wa:text-sm wa:outline-hidden wa:select-none focus:wa:bg-accent focus:wa:text-accent-foreground data-[disabled]:wa:pointer-events-none data-[disabled]:wa:opacity-50 [&_svg]:wa:pointer-events-none [&_svg]:wa:shrink-0 [&_svg:not([class*='size-'])]:wa:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="wa:pointer-events-none wa:absolute wa:left-2 wa:flex wa:size-3.5 wa:items-center wa:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="wa:size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "wa:relative wa:flex wa:cursor-default wa:items-center wa:gap-2 wa:rounded-sm wa:py-1.5 wa:pr-2 wa:pl-8 wa:text-sm wa:outline-hidden wa:select-none focus:wa:bg-accent focus:wa:text-accent-foreground data-[disabled]:wa:pointer-events-none data-[disabled]:wa:opacity-50 [&_svg]:wa:pointer-events-none [&_svg]:wa:shrink-0 [&_svg:not([class*='size-'])]:wa:size-4",
        className
      )}
      {...props}
    >
      <span className="wa:pointer-events-none wa:absolute wa:left-2 wa:flex wa:size-3.5 wa:items-center wa:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="wa:size-2 wa:fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "wa:px-2 wa:py-1.5 wa:text-sm wa:font-medium data-[inset]:wa:pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("-wa:mx-1 wa:my-1 wa:h-px wa:bg-border", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "wa:ml-auto wa:text-xs wa:tracking-widest wa:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "wa:flex wa:cursor-default wa:items-center wa:gap-2 wa:rounded-sm wa:px-2 wa:py-1.5 wa:text-sm wa:outline-hidden wa:select-none focus:wa:bg-accent focus:wa:text-accent-foreground data-[inset]:wa:pl-8 data-[state=open]:wa:bg-accent data-[state=open]:wa:text-accent-foreground [&_svg]:wa:pointer-events-none [&_svg]:wa:shrink-0 [&_svg:not([class*='size-'])]:wa:size-4 [&_svg:not([class*='text-'])]:wa:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="wa:ml-auto wa:size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "wa:z-50 wa:min-w-[8rem] wa:origin-(--radix-dropdown-menu-content-transform-origin) wa:overflow-hidden wa:rounded-md wa:border wa:bg-popover wa:p-1 wa:text-popover-foreground wa:shadow-lg data-[side=bottom]:wa:slide-in-from-top-2 data-[side=left]:wa:slide-in-from-right-2 data-[side=right]:wa:slide-in-from-left-2 data-[side=top]:wa:slide-in-from-bottom-2 data-[state=closed]:wa:animate-out data-[state=closed]:wa:fade-out-0 data-[state=closed]:wa:zoom-out-95 data-[state=open]:wa:animate-in data-[state=open]:wa:fade-in-0 data-[state=open]:wa:zoom-in-95",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
