"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const slideData = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => 
            setCurrentSlide(prev => (prev === slideData.length - 1 ? 0 : prev + 1))
        , 3000)

        return () => clearInterval(interval)
    }, [])
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full flex flex-col flex-1 items-center justify-center gap-8 text-red-500 font-bold  text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase px-4 md:p-10">
          {slideData[currentSlide].title}
        </h1>
        <button className="px-8 py-4 bg-red-500 rounded-md text-white">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full h-1/2 lg:h-full flex-1 relative">
        <Image
          src={slideData[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Slider