"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLogin, formLoginSchema } from "./form-schema";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui";
import { FormInput } from "..";

interface Props {
  openLogin: boolean;
  setOpenLogin: (openLogin: boolean) => void;
}

export const Login: React.FC<Props> = ({ openLogin, setOpenLogin }) => {
  const form = useForm<FormLogin>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(formLoginSchema),
  });

  const onSubmit = (data: FormLogin) => {
    console.log(data);
  };

  return (
    <Dialog open={openLogin} onOpenChange={() => setOpenLogin(false)}>
      <DialogContent className="w-[360px] bg-white text-center  text-blue-700 font-bold">
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
              name="password"
              label="password"
              type="password"
              errorMessage={form.formState.errors.password?.message}
            />
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              className="w-full mt-4"
            >
              LOGIN
            </Button>
          </form>
        </FormProvider>
        <span>Have no account? Go to register.</span>
        <Button variant="outline" className="w-full font-bold">
          REGISTER
        </Button>
      </DialogContent>
    </Dialog>
  );
};
