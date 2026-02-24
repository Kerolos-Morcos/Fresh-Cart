import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const loginSchema = toTypedSchema(
  z.object({
    email: z.string({ required_error: "*Please enter your email" }),
    password: z.string({ required_error: "*Please enter your password" }),
  }),
);

export { loginSchema };
