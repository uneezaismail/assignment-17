"use client";

import Link from "next/link";

function Home() {
 
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-10 p-24">
          <Link className="bg-black text-white hover:bg-gray-800 p-2 rounded-md" href={"/simpleForm"}>Next.Js Form</Link>
    <Link  className="bg-black text-white hover:bg-gray-800 p-2 rounded-md" href={"/reactHookForm"}>React-Hook Form</Link>
    <Link  className="bg-black text-white hover:bg-gray-800 p-2 rounded-md" href={"/zodReactForm"}>Zod + React-Hook Form</Link>
    </main>
  );
}

export default Home;