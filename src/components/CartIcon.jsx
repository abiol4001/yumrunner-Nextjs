import Link from 'next/link'
import React from 'react'
import {BsFillCartFill} from "react-icons/bs"

const CartIcon = () => {
  return (
    <Link href="/cart">
      <div className="flex items-center gap-1">
        <BsFillCartFill className="mb-[3px]" />
        <p>Cart (3)</p>
      </div>
    </Link>
  );
}

export default CartIcon