import React from "react";
import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormLogin>({
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            {...register("username")}
            label="username"
            type="text"
            errorMessage={errors.username?.message}
          />
          <FormInput
            {...register("password")}
            label="password"
            type="password"
            errorMessage={errors.password?.message}
          />
          <Button type="submit" disabled={!isValid} className="w-full mt-4">
            LOGIN
          </Button>
        </form>
        <span>Have no account? Go to register.</span>
        <Button variant="outline" className="w-full font-bold">
          REGISTER
        </Button>
      </DialogContent>
    </Dialog>
  );
};
