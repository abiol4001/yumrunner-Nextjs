import Image from 'next/image'
import React from 'react'

const Slider = () => {
  return (
    <div className="flex flex-col">
      {/* TEXT CONTAINER */}
      <div className="h-1/2">
        <h1>Test</h1>
        <button className="">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="h-1/2">
        <Image src="" alt="" fill />
      </div>
    </div>
  );
}

export default Slider