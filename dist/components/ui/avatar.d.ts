import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
declare function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>): import("preact").JSX.Element;
declare function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>): import("preact").JSX.Element;
declare function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>): import("preact").JSX.Element;
export { Avatar, AvatarImage, AvatarFallback };
