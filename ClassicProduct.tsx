import React from 'react';
import Image from 'next/image';
import Hero from '@/app/shop-hero-2-png-picture-1.png';

export default function ClassicProduct() {
  return (
    <div className='classic'>
    <div className="flex flex-col md:flex-row items-center justify-between p-6  text-white">
    
      <div className="text-container md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-xl font-bold mb-2 px-20">Summer 2020</h1>
        <h2 className="text-5xl px-20 py-5 font-bold mb-4">Vita Classic <br />Product</h2>
        <p className="text-sm md:text-base mb-6 px-20 py-5">
          We know how large will objects act,<br />
          We know how objects act.
        </p>
        <div className="flex px-20 py-5 justify-center md:justify-start items-center gap-4">
          <p className="text-xl font-bold">$16.48</p>
          <button className="bg-green-500 px-6 py-3 text-white rounded-md hover:bg-gray-200 transition-all">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Right Hero Image */}
      <div className="heropicture md:w-1/2 mb-6 md:mb-0">
        <Image src={Hero} alt="Classic Product Hero"  width={510} height={685}  />
      </div>
    </div>
    </div>
  );
}
