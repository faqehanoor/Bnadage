import React from 'react'; // make it responsive
import Image from 'next/image';
import Pic from '@/app/hero-cover-1.png'

export default function Universe() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={Pic}
          alt="pic"
          layout="responsive"
          width={900}
          height={682}
          className="object-cover" // Ensures the image maintains aspect ratio
        />
      </div>

      {/* Text Section */}
      <div className="mt-6 md:mt-0 w-full md:w-1/2 text-center md:text-left px-4 md:px-10 py-4 md:py-40">
        <h1 className="text-3xl font-bold text-gray-400">Summer 2020</h1>
        <h2 className="font-bold py-5 text-blue-950 text-4xl mt-2">Part Of the Neural <br />Universe</h2>
        <p className="text-gray-500 py-5 font-bold text-lg mt-4">
          We know how large objects will act, <br />but things on a small scale
        </p>

        {/* Button Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-6">
          <button className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg transition mb-4 md:mb-0">
            BUY NOW
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-green-700 text-green-700 font-semibold rounded-lg hover:bg-green-700 hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
