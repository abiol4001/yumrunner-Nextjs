import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className="h-12 uppercase text-red-500 bg-white flex justify-between items-center p-4 md:h-24 lg:px-20 xl:px-40">
        <Link href="/" className='font-bold text-xl'>Yumrunner</Link>
        <p>©️ All rights reserved</p>
    </div>
  );
}

export default Footer