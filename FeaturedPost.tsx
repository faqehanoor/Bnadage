"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import fixed from '@/app/fixed-height (8).png';
import fixed2 from '@/app/fixed-height (9).png';
import fixed3 from '@/app/unsplash_tVEqStC2uz8.png';

function FeaturedPost() {
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger animation on page load
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Title with animation */}
      <h1
        className={`text-1xl uppercase px-10 py-10 text-blue-500 text-center font-bold transition-opacity duration-1000 ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Practice Advice
      </h1>
      <h1
        className={`text-4xl font-bold text-blue-950 text-center transition-transform duration-1000 ${
          fadeIn ? 'transform translate-y-0' : 'transform translate-y-10 opacity-0'
        }`}
      >
        Featured Post
      </h1>
      <p
        className={`text-gray-500 text-center px-5 py-5 transition-all duration-1000 ${
          fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        Problems trying to resolve the conflict between <br /> the two major realms of Classical Physics: Newtonian mechanics
      </p>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-6">
        {/* Card 1 */}
        <div
          className={`bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            <Image
              src={fixed}
              alt="Card Image 1"
              width={400}
              height={300}
              className="rounded-t-lg"
            />
          </div>
          <h3 className="text-xl font-semibold mt-4 text-blue-950">Card Title 1</h3>
          <p className="text-gray-500 mt-2">Some description about the post or article. Explaining the main points.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Read More
          </button>
        </div>

        {/* Card 2 */}
        <div
          className={`bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            <Image
              src={fixed2}
              alt="Card Image 2"
              width={400}
              height={300}
              className="rounded-t-lg"
            />
          </div>
          <h3 className="text-xl font-semibold mt-4 text-blue-950">Card Title 2</h3>
          <p className="text-gray-500 mt-2">Some description about the post or article. Explaining the main points.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Read More
          </button>
        </div>

        {/* Card 3 */}
        <div
          className={`bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            <Image
              src={fixed3}
              alt="Card Image 3"
              width={400}
              height={300}
              className="rounded-t-lg"
            />
          </div>
          <h3 className="text-xl font-semibold mt-4 text-blue-950">Card Title 3</h3>
          <p className="text-gray-500 mt-2">Some description about the post or article. Explaining the main points.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
