import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import { BsTelephoneFill } from 'react-icons/bs'

const Navbar = () => {
    const user = false
  return (
    <div className="h-12 uppercase text-red-500 bg-white flex justify-between items-center p-4 border-b-2 border-b-red-500 md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 text-center">
        <Link href="/">yumrunner</Link>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-red-400 lg:bg-red-500 px-1 rounded-md text-white">
          <BsTelephoneFill />
          <span>123 456 7890</span>
        </div>
        {user ? (
          <Link href="/orders">Orders</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}

export default Navbar