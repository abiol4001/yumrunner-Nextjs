"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

const UserLinks = () => {
    const { data, status } = useSession();
    console.log(data, status);
  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href="/orders">Orders</Link>
          <span className="ml-3 cursor-pointer" onClick={() => signOut()}>Logout</span>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
}

export default UserLinks