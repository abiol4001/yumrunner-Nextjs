import Image from 'next/image'
import React from 'react'


const getFeaturedProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async () => {

  const featuredProducts = await getFeaturedProducts();
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      <div className="w-max flex">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen md:w-[50vw] lg:w-[33vw] h-[60vh] flex flex-col gap-4 hover:bg-fuchsia-50 transition-all py-6"
          >
            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-700">
              <Image
                src={item.img}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-4 flex-1">
              <p className="text-xl font-bold uppercase">{item.title}</p>
              <p className="p-4">{item.desc}</p>
              <p className="text-xl font-bold">{item.price}</p>
              <button className="bg-red-500 rounded-md text-white p-2">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured