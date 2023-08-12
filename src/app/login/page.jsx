"use client"
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const {data, status} = useSession()
  console.log("data " + data)
  console.log("status " + status)
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] p-4 flex items-center justify-center">
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        <div className="relative w-full h-1/3 lg:h-full lg:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        <div className="p-10 flex flex-col gap-6">
          <h1 className="font-bold text-xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex items-center gap-4 p-4 ring-1 ring-green-100 hover:bg-fuchsia-50 rounded-md" onClick={()=> signIn("google")}>
            <FcGoogle size={20} />
            <span>Sign in with Google</span>
          </button>
          <button className="flex items-center gap-4 p-4 ring-1 ring-blue-100 hover:bg-fuchsia-50 rounded-md">
            <BsFacebook size={20} className='text-blue-600' />
            <span>Sign in with Facebook</span>
          </button>
          <p>
            Have a problem? <Link href="/contact" className='underline hover:text-gray-600'>Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage