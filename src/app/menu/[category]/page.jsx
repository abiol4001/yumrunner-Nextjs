import Image from "next/image";
import Link from "next/link";
import React from "react";

const getProductsByCategory = async (category) => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/products?cat=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryPage = async ({ params }) => {
  const products = await getProductsByCategory(params.category)

  return (
    <div className="flex flex-wrap text-red-500">
      {products.map((item) => (
        <Link
          className="w-full h-[60vh] sm:w-1/2 group lg:w-1/3 border-r-2 border-b-2 border-red-500 p-4 even:bg-fuchsia-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {item.img && (
            <div className="relative w-full h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          <div className="flex justify-between items-center font-bold">
            <h1 className="text-2xl p-2 uppercase">{item.title}</h1>
            <h1 className="group-hover:hidden">${item.price}</h1>
            <button className="uppercase hidden rounded-md group-hover:block bg-red-500 text-white p-2">
              add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
