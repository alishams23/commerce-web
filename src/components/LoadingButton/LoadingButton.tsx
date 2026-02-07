import { ComponentProps } from "react";

import { Level } from "iconsax-reactjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type LoadingButtonProps = ComponentProps<typeof Button> & {
  loading: boolean;
};

function LoadingButton({
  loading,
  children,
  className,
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      type="submit"
      className={cn("relative", className)}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
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
