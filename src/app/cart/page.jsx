import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row  text-red-500">
      <div className="h-1/2 p-4 flex flex-col justify-center gap-4 overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:p-20 xl:p-40">
        <div className="relative flex justify-between items-center">
          <Image src="/temp/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="font-bold uppercase text-xl">title</h1>
            <span>option</span>
          </div>
          <h2 className="font-bold">$price</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="relative flex justify-between items-center ">
          <Image src="/temp/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="font-bold uppercase text-xl">title</h1>
            <span>option</span>
          </div>
          <h2 className="font-bold">$price</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="relative flex justify-between items-center ">
          <Image src="/temp/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="font-bold uppercase text-xl">title</h1>
            <span>option</span>
          </div>
          <h2 className="font-bold">$price</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="relative flex justify-between items-center ">
          <Image src="/temp/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="font-bold uppercase text-xl">title</h1>
            <span>option</span>
          </div>
          <h2 className="font-bold">$price</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="relative flex justify-between items-center ">
          <Image src="/temp/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="font-bold uppercase text-xl">title</h1>
            <span>option</span>
          </div>
          <h2 className="font-bold">$price</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>

      <div className="h-1/2 bg-fuchsia-50 p-4 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:p-20 xl:p-24">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
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
          <span className="text-green-600">$81.70</span>
        </div>
        <button className="bg-red-500 text-white rounded-md w-1/2 self-end p-4">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default page