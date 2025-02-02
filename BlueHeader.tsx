import React from 'react'; // Import React
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'; // Importing icons

export default function BlueHeader() {
  return (
    <div className='bg-blue-950 text-white p-4'>
      <h1 className='flex flex-wrap items-center justify-between space-x-4 md:space-x-6'>
        {/* Phone Number and Email */}
        <span className='flex items-center space-x-4 mb-4 md:mb-0'>
          <FaPhone />
          <span>(225) 555-0118</span>
          <FaEnvelope />
          <span>michelle.rivera@example.com</span>
        </span>

        {/* Follow Us Text */}
        <span className='hidden md:block mb-4 md:mb-0 text-center md:text-left'>
          Follow us to get a chance to win 80% off
        </span>

        {/* Social Media Icons */}
        <span className='flex items-center space-x-4'>
          <span className='mr-2 hidden md:block'>Follow:</span>
          <FaInstagram />
          <FaFacebook  />
          <FaYoutube  />
          <FaTwitter />
        </span>
      </h1>
    </div>
  );
}
