// import React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { FormRegister, formRegisterSchema } from "./form-schema";
// import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
// import { Button } from "@/components/ui";
// import { FormInput } from "..";

// interface Props {
//   openRegister: boolean;
//   setOpenRegister: (openLogin: boolean) => void;
// }

// export const Register: React.FC<Props> = ({
//   openRegister,
//   setOpenRegister,
// }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//   } = useForm<FormRegister>({
//     defaultValues: {
//       username: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//     resolver: zodResolver(formRegisterSchema),
//   });

//   const onSubmit = (data: FormRegister) => {
//     console.log(data);
//   };

//   return (
//     <Dialog open={openRegister} onOpenChange={() => setOpenRegister(false)}>
//       <DialogContent className="w-[380px] bg-white text-center  text-blue-700 font-bold">
//         <DialogTitle></DialogTitle>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FormInput
//             {...register("username")}
//             label="username"
//             type="text"
//             errorMessage={errors.username?.message}
//           />
//           <FormInput
//             {...register("email")}
//             label="email"
//             type="email"
//             errorMessage={errors.email?.message}
//           />
//           <FormInput
//             {...register("password")}
//             label="password"
//             type="password"
//             errorMessage={errors.password?.message}
//           />
//           <FormInput
//             {...register("confirmPassword")}
//             label="confirm password"
//             type="password"
//             errorMessage={errors.confirmPassword?.message}
//           />
//           <Button type="submit" disabled={!isValid} className="w-full mt-4">
//             REGISTER
//           </Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };
