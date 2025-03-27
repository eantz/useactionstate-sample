import { z } from "zod";

export const RegisterSchema = z.object({
  username: z.string().min(5).max(20),
  email: z.string().email(),
  password: z.string().min(5),
  confirmPassword: z.string().min(5),
  errors: z.record(z.string(), z.string()).optional()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password don't match",
  path: ['confirmPassword']
})

export const formInitialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
}