"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormRegister, formRegisterSchema } from "./form-schema";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui";
import { FormInput } from "..";

interface Props {
  openRegister: boolean;
  setOpenRegister: (openLogin: boolean) => void;
}

export const Register: React.FC<Props> = ({
  openRegister,
  setOpenRegister,
}) => {
  const form = useForm<FormRegister>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(formRegisterSchema),
  });

  const onSubmit = (data: FormRegister) => {
    console.log(data);
  };

  return (
    <Dialog open={openRegister} onOpenChange={() => setOpenRegister(false)}>
      <DialogContent className="w-[380px] bg-white text-center  text-blue-700 font-bold">
        <DialogTitle></DialogTitle>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormInput
              name="username"
              label="username"
              type="text"
              errorMessage={form.formState.errors.username?.message}
            />
            <FormInput
              name="email"
              label="email"
              type="email"
              errorMessage={form.formState.errors.email?.message}
            />
            <FormInput
              name="password"
              label="password"
              type="password"
              errorMessage={form.formState.errors.password?.message}
            />
            <FormInput
              name="confirmPassword"
              label="confirm password"
              type="password"
              errorMessage={form.formState.errors.confirmPassword?.message}
            />
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              className="w-full mt-4"
            >
              REGISTER
            </Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
