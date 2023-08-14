"use client"
import { useCartStore } from '@/utils/store'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {BsFillCartFill} from "react-icons/bs"

const CartIcon = () => {
  const {totalItems} = useCartStore()

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <Link href="/cart">
      <div className="flex items-center gap-1">
        <BsFillCartFill className="mb-[3px]" />
        <p>Cart ({totalItems})</p>
      </div>
    </Link>
  );
}

export default CartIcon