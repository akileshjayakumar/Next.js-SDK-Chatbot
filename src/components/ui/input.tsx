import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex items-center w-full space-x-2 border-2 border-gray-900 rounded-lg shadow-sm">
        <input
          type={type}
          className={cn(
            "w-full h-12 rounded-lg bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50",
            className // allows custom classes to be applied externally
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
