import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const forgotPasswordSchema = toTypedSchema(
  z.object({
    email: z
      .string({ required_error: "*Email is required" })
      .min(1, "*Email is required")
      .email("*Please enter a valid email address"),
  }),
);

export { forgotPasswordSchema };
