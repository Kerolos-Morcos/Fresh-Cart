import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const updatePasswordSchema = toTypedSchema(
  z
    .object({
      currentPassword: z.string({
        required_error: "*Current Password is required",
      }),
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
      rePassword: z.string({
        required_error: "*Confirm Password is required",
      }),
    })
    .refine((data) => data.password === data.rePassword, {
      path: ["rePassword"],
      message: "*Passwords do not match",
    }),
);

export { updatePasswordSchema };
