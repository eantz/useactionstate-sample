import { RegisterForm } from "./_form";


export default async function ServerSideValidation() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-16 text-2xl">
        <code className="text-red-400">useActionState</code> with&nbsp; 
        <span className="text-amber-500">Server Side</span> Validation
      </h1>

      <RegisterForm />

    </div>
  )
}