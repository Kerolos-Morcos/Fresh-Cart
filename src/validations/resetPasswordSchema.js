import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const resetPasswordSchema = toTypedSchema(
  z
    .object({
      password: z
        .string({ required_error: "*Password is required" })
        .min(8, "*Password must be at least 8 characters")
        .regex(/[A-Z]/, "*Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "*Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "*Password must contain at least one number")
        .regex(
          /[^A-Za-z0-9]/,
          "*Password must contain at least one special character",
        ),
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
