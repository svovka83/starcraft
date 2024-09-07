"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLogin, formLoginSchema } from "./form-schema";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui";
import { FormInput } from "..";
import { login } from "@/service/user";
import toast from "react-hot-toast";
import { useUserStore } from "@/store/user";

interface Props {
  openLogin: boolean;
  setOpenLogin: (openLogin: boolean) => void;
  showRegister?: VoidFunction;
}

export const Login: React.FC<Props> = ({
  openLogin,
  setOpenLogin,
  showRegister,
}) => {
  const form = useForm<FormLogin>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(formLoginSchema),
  });

  const loginUser = useUserStore((state) => state.loginUser);

  const onSubmit = (data: FormLogin) => {
    login(data.username, data.password)
      .then((data) => {
        loginUser(data.username);
        setOpenLogin(false);
        toast.success(`Welcome to Starcraft ${data.username} !!!`, {
          duration: 5000,
          icon: "👏",
        });
      })
      .catch((error) => {
        console.log("[LOGIN]", error.response.data.message);
        toast.error(error.response.data.message, {
          duration: 3000,
          icon: "😢",
        });
      });
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
            <Button type="submit" className="w-full mt-4">
              LOGIN
            </Button>
          </form>
        </FormProvider>
        <span>Have no account? Go to register.</span>
        <Button
          variant="outline"
          className="w-full font-bold text-[16px]"
          onClick={showRegister}
        >
          REGISTER
        </Button>
      </DialogContent>
    </Dialog>
  );
};
