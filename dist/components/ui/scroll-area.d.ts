import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
declare function ScrollArea({ className, children, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.Root>): import("preact").JSX.Element;
declare function ScrollBar({ className, orientation, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>): import("preact").JSX.Element;
export { ScrollArea, ScrollBar };
