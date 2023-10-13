/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useCartStore } from '@/utils/store';
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const page = () => {
  const {products, totalPrice, totalItems, removeFromCart} = useCartStore()
  const {data:session} = useSession()
  const router = useRouter()

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    if(!session) {
      router.push("/login")
    } else {
      try {
        const res = await fetch(`${process.env.BASE_URL}/api/orders`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not Paid",
            userEmail: session.user.email,
          }),
        });
        const data = await res.json()
        router.push(`/pay/${data.id}`)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row  text-red-500">
      <div className="h-1/2 p-4 flex flex-col justify-center gap-4 overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:p-20 xl:p-40">
        {products?.map((product) => (
          <div
            key={product.id}
            className="relative flex justify-between items-center"
          >
            <Image src={product.img} alt="" width={100} height={100} />
            <div>
              <h1 className="font-bold uppercase text-xl">{product.title} {product.quantity}</h1>
              <span>{product.optionTitle}</span>
            </div>
            <h2 className="font-bold">${product.price}</h2>
            <span
              className="cursor-pointer"
              onClick={() => removeFromCart(product)}
            >
              X
            </span>
          </div>
        ))}
      </div>

      <div className="h-1/2 bg-fuchsia-50 p-4 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:p-20 xl:p-24">
        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} items)</span>
          <span className="">${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-600">FREE!</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="text-green-600">${totalPrice}</span>
        </div>
        <button className="bg-red-500 text-white rounded-md w-1/2 self-end p-4" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default page