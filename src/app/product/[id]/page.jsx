import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const ProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col md:flex-row justify-around text-red-500">
      {singleProduct.img && (
        <div className="relative h-1/2">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      <div className="h-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold uppercase">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
      </div>
      <Price
        price={singleProduct.price}
        id={singleProduct.id}
        options={singleProduct.options}
      />
    </div>
  );
};

export default ProductPage;
