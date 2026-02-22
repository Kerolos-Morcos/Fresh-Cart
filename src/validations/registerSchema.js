import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { ref } from "vue";

const passwordValue = ref("");
const registerSchema = toTypedSchema(
  z.object({
    name: z
      .string({ required_error: "*Please enter your name" })
      .min(3, "*Name must be at least 3 characters")
      .max(50, "*Name must not exceed 50 characters"),
    email: z
      .string({ required_error: "*Please enter your email" })
      .email("*Invalid email address"),
    password: z
      .string({ required_error: "*Please enter your password" })
      .min(8, "*Password must be at least 8 characters")
      .regex(/[A-Z]/, "*Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "*Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "*Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "*Password must contain at least one special character",
      ),
    rePassword: z
      .string({ required_error: "*Please confirm your password" })
      .refine((val) => val === passwordValue.value, {
        message: "*Passwords do not match",
      }),
    phone: z
      .string({ required_error: "*Please enter your phone number" })
      .transform((val) => val.replace(/\s+/g, ""))
      .refine((val) => /^(?:\+20|0)?1[0125][0-9]{8}$/.test(val), {
        message: "*Please enter a valid Egyptian phone number",
      }),
    terms: z
      .boolean({ required_error: "*You must accept the terms" })
      .refine((val) => val === true, {
        message: "*You must accept the terms",
      }),
  }),
);

export { registerSchema, passwordValue };
