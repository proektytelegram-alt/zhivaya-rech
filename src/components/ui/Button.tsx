import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary-hover shadow-[0_4px_20px_-4px_rgba(212,73,26,0.4)] hover:shadow-[0_8px_30px_-4px_rgba(212,73,26,0.5)] hover:-translate-y-0.5",
        secondary:
          "bg-foreground text-background hover:bg-foreground/90",
        outline:
          "border border-foreground/20 bg-transparent hover:bg-foreground/5",
        ghost: "hover:bg-foreground/5",
      },
      size: {
        default: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        sm: "h-10 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
