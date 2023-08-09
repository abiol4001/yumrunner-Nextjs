import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] p-4  ">
      <div>
        <div className="relative w-full h-1/3">
          <Image src="/loginBg.png" alt="" fill className='object-cover'/>
        </div>
        <div className="p-10 flex flex-col gap-6">
          <h1 className='font-bold text-xl'>Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-green-600 rounded-md">
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <span>Sign in with Facebook</span>
          </button>
          <p>
            Have a problem? <Link href="/contact">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage