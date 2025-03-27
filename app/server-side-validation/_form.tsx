'use client'

import { useForm } from "react-hook-form"
import { formInitialState, RegisterSchema, RegisterType } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerUser } from "./actions"
import { useActionState, useEffect } from "react"
import { Github } from "lucide-react"

export function RegisterForm() {
  const [formState, formAction, isFormPending] = useActionState<RegisterType, FormData>(registerUser, formInitialState)

  const form = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema)
  })

  useEffect(() => {
    form.setValue('username', formState.username)
    form.setValue('email', formState.email)
    form.clearErrors()

    if (formState.errors) {
      Object.keys(formState.errors).forEach((k) => {
        const errkey = k as keyof RegisterType

        if (formState.errors && errkey in formState.errors) {
          form.setError(
            errkey,
            {
              message: formState.errors ? formState.errors[errkey.toString()] : ''
            }
          )
        } else {
          form.setError(
            "root",
            {
              message: formState.errors ? formState.errors[errkey.toString()] : ''
            }
          )
        }
      })
    }
  }, [formState])

  return (
    <>
      <form 
        className="w-[400px] flex flex-col gap-4 bg-slate-900 p-4 pb-8 mt-12 border-2 border-gray-400 rounded-md"
        action={formAction}
      >
        <h2 className="text-center font-bold text-xl">Register User</h2>

        <div className="flex flex-col gap-1">
          <span className="text-red-600">
              {form.formState.errors.root?.message}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            className="border rounded-sm bg-slate-200 p-1 text-slate-700 disabled:bg-slate-400"
            disabled={isFormPending}
            {...form.register('username')}
          />
          <span className="text-red-600">
            {form.formState.errors.username?.message}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="border rounded-sm bg-slate-200 p-1 text-slate-700 disabled:bg-slate-400"
            disabled={isFormPending}
            {...form.register('email')} 
          />
          <span className="text-red-600">
            {form.formState.errors.email?.message}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            className="border rounded-sm bg-slate-200 p-1 text-slate-700 disabled:bg-slate-400"
            disabled={isFormPending}
            {...form.register('password')}
          />
          <span className="text-red-600">
            {form.formState.errors.password?.message}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            className="border rounded-sm bg-slate-200 p-1 text-slate-700 disabled:bg-slate-400"
            disabled={isFormPending}
            {...form.register('confirmPassword')}
          />
          <span className="text-red-600">
            {form.formState.errors.confirmPassword?.message}
          </span>
        </div>

        <button 
          type="submit"
          className="bg-amber-600 p-1 rounded-sm hover:bg-amber-700"
        >
          Submit
        </button>

        <a href="https://github.com/eantz/useactionstate-sample/app/server-side-validation" 
          className="text-gray-400 hover:text-gray-500 text-center mt-6" 
          target="_blank"
        >
          <Github className="h-6 w-6 inline border rounded-xl p-1 bg-black" /> Source Code
        </a>
      </form>
    </>
  )
}