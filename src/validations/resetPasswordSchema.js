import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const resetPasswordSchema = toTypedSchema(
  z
    .object({
      password: z
        .string({ required_error: "*Password is required" })
        .min(6, "*Password must be at least 6 characters"),
      confirmPassword: z.string({
        required_error: "*Confirm Password is required",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "*Passwords do not match",
    }),
);

export { resetPasswordSchema };
