'use server';

import { RegisterType } from "./schema"

export async function registerUser(state: RegisterType, formData: FormData): Promise<RegisterType> {
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