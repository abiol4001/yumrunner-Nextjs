import Link from 'next/link';
import React from 'react'

const getCategories = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store"
  })

  if(!res.ok) {
    throw new Error("Failed")
  }

  return res.json()
}

const MenuPage = async () => {

  const menu = await getCategories()
  return (
    <div className="p-4 lg:p-20 xl:p-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center justify-center">
      {menu.map((item) => (
        <Link
          key={item.id}
          href={`/menu/${item.slug}`}
          className="w-full h-1/3 p-8 bg-cover md:h-full"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className={`text-${item.color} w-1/2 md:w-2/3`}>
            <h1 className="uppercase font-bold text-3xl">{item.title}</h1>
            <p className="text-sm my-8">{item.desc}</p>
            <button
              className={`rounded-md px-4 py-2 ${
                item.color === "white"
                  ? "text-red-500 bg-white"
                  : "text-white bg-red-500"
              } hidden xl:block`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MenuPage