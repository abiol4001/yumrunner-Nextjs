import Image from 'next/image'
import React from 'react'
import Countdown from './Countdown';

const Offer = () => {
  return (
    <div className="bg-black h-screen md:h-[70vh] flex flex-col md:flex-row md:bg-[url('/offerBg.png')]">
      <div className="flex-1 text-white flex flex-col items-center justify-center text-center gap-8 p-6">
        <h1 className=" text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <Countdown />
        <button className='bg-red-500 rounded-md px-8 py-4'>Order Now</button>
      </div>
      <div className="flex-1 relative">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}

export default Offer