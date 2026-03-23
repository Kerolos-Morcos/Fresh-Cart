import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const shippingSchema = toTypedSchema(
  z.object({
    city: z
      .string({ required_error: "*Please enter your city" })
      .min(3, {
        message: "*City must be at least 3 characters",
      })
      .transform((val) => val.trim())
      .refine((val) => val.length > 0, {
        message: "*City is required",
      }),

    details: z
      .string({ required_error: "*Please enter your address" })
      .min(10, {
        message: "*Address must be at least 10 characters",
      })
      .transform((val) => val.trim())
      .refine((val) => val.length > 0, {
        message: "*Street address is required",
      }),

    phone: z
      .string({ required_error: "*Please enter your phone number" })
      .transform((val) => val.replace(/\s+/g, ""))
      .refine((val) => /^(?:\+20|0)?1[0125][0-9]{8}$/.test(val), {
        message: "*Please enter a valid Egyptian phone number",
      }),
  }),
);

export { shippingSchema };
