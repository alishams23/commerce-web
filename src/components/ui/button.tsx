import { ButtonHTMLAttributes, forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
  "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-2xl text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring focus-visible:ring-offset-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-dark active:bg-primary/80",
        outline:
          "border-primary hover:bg-secondary/25 text-primary active:bg-secondary/50 border bg-transparent",
        secondary:
          "bg-muted text-title hover:bg-muted-foreground/50 active:bg-muted-foreground",
        glass:
          "border border-white/25 bg-white/33 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[9.3px] hover:bg-white/58 hover:backdrop-blur-[20px] active:bg-white/15",
      },
      size: {
        default: "h-10 px-4 py-2",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
