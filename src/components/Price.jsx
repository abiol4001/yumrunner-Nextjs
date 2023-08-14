"use client";

import { useCartStore } from "@/utils/store";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Price = ({ product }) => {
  const { price, id, options, title, img } = product;

  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  // console.log(typeof options[selected].additionalPrice);

  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      img,
      price: total,
      ...(options.length && { optionTitle: product.options[selected].title }),
      quantity: quantity,
    });
    toast.success("Item added to cart");
  };

  useEffect(() => {
    if (options.length) {
      setTotal(quantity * (Number(price) + options[selected].additionalPrice));
    }
  }, [quantity, selected, product]);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${Number(total).toFixed(2)}</h2>
      <div className="flex gap-4">
        {options.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "red" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4">
            <button
              onClick={() =>
                setQuantity((prev) => (prev > 1 ? prev - Number(1) : 1))
              }
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() =>
                setQuantity((prev) => (prev < 9 ? prev + Number(1) : 9))
              }
            >
              {">"}
            </button>
          </div>
        </div>
        <button
          className="uppercase p-3 w-56 bg-red-500 text-white"
          onClick={handleAddToCart}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
