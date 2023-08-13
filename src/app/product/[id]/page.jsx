import Price from "@/components/Price";
import Image from "next/image";
import React from "react";


const getSingleProduct = async (id) => {
  const res = await fetch(
    `http://localhost:3000/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const ProductPage = async ({params}) => {

  const singleProduct = await getSingleProduct(params.id)
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col md:flex-row justify-around md:gap-8 md:items-center text-red-500">
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      <div className="h-1/2 flex flex-col gap-4 md:gap-6 xl:gap-8 md:h-[70%] justify-center">
        <h1 className="text-3xl xl:text-5xl font-bold uppercase">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>

        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default ProductPage;
