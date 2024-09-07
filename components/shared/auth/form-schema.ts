import { z } from "zod";

export const formLoginSchema = z.object({
  username: z
    .string()
    .min(4, { message: "very short name" })
    .max(9, { message: "very long name" }),
  password: z
    .string()
    .min(4, { message: "very short password" })
    .max(14, { message: "very long password" }),
});

export const formRegisterSchema = z
  .object({
    username: z
      .string()
      .min(4, { message: "very short name" })
      .max(9, { message: "very long name" }),
    password: z
      .string()
      .min(4, { message: "very short password" })
      .max(14, { message: "very long password" }),
    confirmPassword: z
      .string()
      .min(4, { message: "very short confirmPassword" })
      .max(14, { message: "very long confirmPassword" }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    path: ["confirmPassword"],
    message: "passwords don't match",
  });

export type FormLogin = z.infer<typeof formLoginSchema>;
export type FormRegister = z.infer<typeof formRegisterSchema>;
