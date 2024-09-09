"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormRegister, formRegisterSchema } from "./form-schema";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui";
import { FormInput } from "..";
import { register } from "@/service/user";
import toast from "react-hot-toast";
import { useUserStore } from "@/store/user";
import { welcome, wrong } from "@/constants";

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
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(formRegisterSchema),
  });

  const [loading, onLoading, offLoading] = useUserStore((state) => [
    state.loading,
    state.onLoading,
    state.offLoading,
  ]);

  const loginUser = useUserStore((state) => state.loginUser);

  const onSubmit = (data: FormRegister) => {
    onLoading();
    register(data.username, data.password)
      .then((data) => {
        welcome.play();
        loginUser(data.username);
        setOpenRegister(false);
        offLoading();
        toast.success(`Welcome to Starcraft ${data.username} !!!`, {
          duration: 5000,
          icon: "👏",
        });
      })
      .catch((error) => {
        console.log("[REGISTER]", error.response.data.message);
        wrong.play();
        offLoading();
        toast.error("Server error. Can not register.", {
          duration: 3000,
          icon: "😢",
        });
      });
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
            <Button type="submit" loading={loading} className="w-full mt-4">
              REGISTER
            </Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
