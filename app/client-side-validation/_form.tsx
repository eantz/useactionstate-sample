'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useActionState, useEffect, useTransition } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterSchema, RegisterType, formInitialState } from "./schema"
import { registerUser } from "./actions"


export function RegisterForm() {
  const [formState, formAction, isFormPending] = useActionState<RegisterType, FormData>(registerUser, formInitialState)
  const [isTransitionPending, startTransition] = useTransition();

  const form = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema)
  })

  const submitHandler: SubmitHandler<RegisterType> = (data) => {
    const submissionData = new FormData()
    submissionData.set('username', data.username)
    submissionData.set('email', data.email)

    startTransition(async() => {
      formAction(submissionData);
    })
  }

  useEffect(() => {
    console.log(formState.errors)

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
        onSubmit={form.handleSubmit((data: RegisterType) => {
          submitHandler(data)
        })}
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
            {...form.register('username')} disabled={isFormPending || isTransitionPending} 
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
            {...form.register('email')} disabled={isFormPending || isTransitionPending} />
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
            {...form.register('password')} disabled={isFormPending || isTransitionPending} 
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
            {...form.register('confirmPassword')} disabled={isFormPending || isTransitionPending} 
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
      </form>
    </>
  )
}