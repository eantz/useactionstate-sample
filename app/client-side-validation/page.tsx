import { ClientSideForm } from "./_form";

export default async function ClientSideValidation() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-16 text-2xl"><code className="text-red-400">useActionState</code> with Client Side Validation</h1>

      <ClientSideForm />

    </div>
  )
}