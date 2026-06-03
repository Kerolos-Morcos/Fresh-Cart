import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const verifyCodeSchema = toTypedSchema(
  z.object({
    resetCode: z
      .string({ required_error: "*Verification code is required" })
      .min(1, "*Verification code is required")
      .regex(/^\d{6}$/, "*Verification code must be 6 digits"),
  }),
);

export { verifyCodeSchema };
