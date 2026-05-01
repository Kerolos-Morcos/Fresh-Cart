import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const baseAddressSchema = z.object({
  name: z
    .string()
    .min(3, "*Name must be at least 3 characters")
    .max(20, "*Name must not exceed 20 characters")
    .optional(),
  details: z
    .string({ required_error: "*Please enter address details" })
    .min(4, "*Details must be at least 4 characters")
    .max(100, "*Details must not exceed 100 characters"),
  phone: z
    .string({ required_error: "*Please enter your phone" })
    .transform((val) => val.replace(/\s+/g, ""))
    .refine((val) => /^(?:\+20|20|0)?1[0125][0-9]{8}$/.test(val), {
      message: "*Add valid Egyptian phone number",
    }),
  city: z
    .string({ required_error: "*Please enter your city" })
    .min(3, "*City must be at least 3 characters")
    .max(50, "*City must not exceed 50 characters"),
});

const addressesSchema = toTypedSchema(
  baseAddressSchema.extend({
    name: z
      .string({ required_error: "*Please enter address name" })
      .min(3, "*Name must be at least 3 characters")
      .max(20, "*Name must not exceed 20 characters"),
  }),
);

const shippingSchema = toTypedSchema(baseAddressSchema.omit({ name: true }));

export { addressesSchema, shippingSchema };
