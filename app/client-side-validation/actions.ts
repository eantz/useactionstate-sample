'use server';

import { z } from "zod"
import { RegisterSchema } from "./schema"

export async function registerUser(state: z.infer<typeof RegisterSchema>, formData: FormData): Promise<z.infer<typeof RegisterSchema>> {
  const username = String(formData.get('username'))
  const email = String(formData.get('email'))

  const errors: Record<string, string> = {}

  if (username == 'abcde') {
    errors['username'] = "Don't use that value!"
  }
  

  return {
    username: username,
    email: email,
    password: "",
    confirmPassword: "",
    errors: errors
  }
}