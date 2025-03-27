import Link from "next/link";
import { RegisterForm } from "./_form";


export default async function ServerSideValidation() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-16 text-2xl">
        <code className="text-red-400">useActionState</code> with&nbsp; 
        <span className="text-purple-600">Server Side</span> Validation
      </h1>

      <RegisterForm />

      <div className="flex flex-col items-center mt-12">
        <hr className="border-2 border-gray-600 w-[300px] mb-4" />

        <div>
          <Link href="/client-side-validation" className="hovenr:underline">
            Check out <span className="text-amber-500">Client Side</span> Validation
          </Link>
        </div>
      </div>

    </div>
  )
}