'use server';

import { z } from "zod"
import { RegisterSchema } from "./schema"

export async function registerUser(state: z.infer<typeof RegisterSchema>, formData: FormData): Promise<z.infer<typeof RegisterSchema>> {
  const username = String(formData.get('username'))
  const email = String(formData.get('email'))
  
  const validated = RegisterSchema.safeParse({
    username: username,
    email: email,
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword')
  })

  const errors: Record<string, string> = {}

  if (!validated.success) {
    validated.error.issues.map((issue) => {
      errors[issue.path[0]] = issue.message
    })
  }
  
  return {
    username: username,
    email: email,
    password: "",
    confirmPassword: "",
    errors: errors
  }
}