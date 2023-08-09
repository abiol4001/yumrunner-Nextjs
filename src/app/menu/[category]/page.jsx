import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div>
      {pizzas.map((item) => (
        <Link
          className="w-full h-[60vh]"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {item.img && (
            <div className="relative w-full h-full">
              <Image src={item.img} alt="" width={50} height={50}/>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default CategoryPage