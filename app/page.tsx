import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link"


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mt-12">
        <code className="text-red-400">useActionState</code> with <strong>React Hook Form</strong> and <strong>Zod</strong> Demo
      </h1>
      <div className="w-[400px] bg-slate-900 p-4 pb-8 mt-12 border-2 border-gray-400 rounded-md">
        <p className="my-4">
          This is a working demo on how to use <code className="text-red-400">useActionState</code>, <strong>React Hook Form</strong>, and <strong>Zod</strong> together. <br />
        </p>
        
        <p className="my-4">
          I write an article in <a href="" className="text-orange-500 hover:text-orange-600" target="_blank">
            <Image height="16" width="16" src="https://cdn.simpleicons.org/medium/f66602" alt="medium icon" 
              className="inline"
            />&nbsp;Medium
          </a> about this.
        </p>

        <p className="my-4">
          You can read the full source code in this&nbsp;
          <a href="https://github.com/eantz/useactionstate-sample" className="text-gray-400 hover:text-gray-500" target="_blank">
            <Github className="h-6 w-6 inline border rounded-xl p-1 bg-black" /> repo
          </a>.
        </p>
        
        <p className="mt-4 mb-2">
          In short, you can choose between : 
        </p>
        <ul className="list-disc ml-4">
          <li>
            <Link href="/client-side-validation" className="hover:underline">
              <span className="text-amber-500">Client Side</span> Validation
            </Link>
          </li>
          
          <li>
            <Link href="/server-side-validation" className="hover:underline">
              <span className="text-purple-600">Server Side</span> Validation
            </Link>
          </li>
        </ul>
        
      </div>
    </div>
    
  );
}
