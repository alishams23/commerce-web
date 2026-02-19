import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const inputVariants = cva(
  "placeholder:text-title/70 flex h-10 w-full rounded-2xl px-3 py-2 text-base disabled:cursor-not-allowed disabled:opacity-50 lg:text-sm",
  {
    variants: {
      variant: {
        default: "border-input bg-background border",
        filled: "bg-muted border-0 hover:bg-gray-100 focus:bg-gray-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface InputProps
  extends React.ComponentProps<"input">, VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input, inputVariants };
