import React, { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  errorMessage?: string;
}

export const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ label, type, errorMessage, ...rest }, ref) => {
    const id = useId();

    return (
      <>
        <label htmlFor={id} className="text-xl">
          {label}
        </label>
        <Input
          {...rest}
          ref={ref}
          type={type}
          id={id}
          className={cn(errorMessage && "border-red-500")}
        />
        {errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <p className="h-[24px]"></p>
        )}
      </>
    );
  }
);
