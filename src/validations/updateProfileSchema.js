import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const updateProfileSchema = toTypedSchema(
  z.object({
    name: z
      .string({ required_error: "*Please enter your name" })
      .min(3, "*Name must be at least 3 characters")
      .max(50, "*Name must not exceed 50 characters"),
    email: z
      .string({ required_error: "*Please enter your email" })
      .email("*Invalid email address"),
    phone: z
      .string({ required_error: "*Please enter your phone number" })
      .transform((val) => val.replace(/\s+/g, ""))
      .refine((val) => /^(?:\+20|0)?1[0125][0-9]{8}$/.test(val), {
        message: "*Please enter a valid Egyptian phone number",
      }),
  }),
);

export { updateProfileSchema };
