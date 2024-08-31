import React, { useId } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui";
import { useFormContext } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  errorMessage?: string;
}

export const FormInput: React.FC<Props> = ({
  name,
  label,
  type,
  errorMessage,
  ...props
}) => {
  const id = useId();
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor={id} className="text-xl">
        {label}
      </label>
      <Input
        id={id}
        type={type}
        {...register(name)}
        className={cn(errorMessage && "border-red-500")}
        {...props}
      />
      {errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <p className="h-[24px]"></p>
      )}
    </>
  );
};
