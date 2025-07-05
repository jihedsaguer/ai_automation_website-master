import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "../../lib/utils.ts"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#3B82F6] text-primary-foreground hover:bg-[#ea580c]/90", // Bleu par défaut, hover orange foncé
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-[#ea580c] hover:text-white", // Hover orange foncé
        secondary:
          "bg-[#3B82F6]/20 text-[#3B82F6] hover:bg-[#ea580c]/20 hover:text-[#ea580c]", // Bleu clair vers orange
        ghost: "hover:bg-[#ea580c]/10 hover:text-[#ea580c]", // Hover orange transparent
        link: "text-[#3B82F6] underline-offset-4 hover:text-[#ea580c]", // Bleu vers orange
        accent: "bg-[#ea580c] text-white hover:bg-[#ea580c]/90", // Orange primaire
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
