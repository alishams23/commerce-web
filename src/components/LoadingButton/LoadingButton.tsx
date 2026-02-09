import { ComponentProps } from "react";

import { Level } from "iconsax-reactjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type LoadingButtonProps = ComponentProps<typeof Button> & {
  isLoading: boolean;
};

function LoadingButton({
  isLoading,
  children,
  className,
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      type="submit"
      className={cn("relative", className)}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <Level className="h-4 w-4 animate-spin" />
        </span>
      ) : (
        children
      )}
    </Button>
  );
}

export default LoadingButton;
