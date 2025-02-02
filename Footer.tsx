import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-white text-blue-950 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer Logo and Social Media Links */}
        <div className="flex justify-between items-center mb-12">
          {/* Logo */}
          <div className="footer-logo ">
            <Link href="/" className="text-2xl font-semibold text-blue-950 hover:text-blue-600">Bandage</Link>
          </div>

          {/* Social Media Links */}
          <div className="footer-follow flex space-x-6">
            <Link href="https://facebook.com" className="text-blue-500 hover:text-blue-600">
              <FaFacebook size={24} />
            </Link>
            <Link href="https://instagram.com" className="text-pink-500 hover:text-pink-600">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://twitter.com" className="text-blue-400 hover:text-blue-500">
              <FaTwitter size={24} />
            </Link>
            <Link href="https://linkedin.com" className="text-blue-700 hover:text-blue-800">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-8">
          {/* Company Info */}
          <div className="footer-column">
            <h6 className="text-lg font-semibold mb-4">Company Info</h6>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/career" className="hover:text-blue-400">Careers</Link></li>
              <li><Link href="/hiring" className="hover:text-blue-400">We Are Hiring</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h6 className="text-lg font-semibold mb-4">Legal</h6>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-blue-400">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div className="footer-column">
            <h6 className="text-lg font-semibold mb-4">Features</h6>
            <ul className="space-y-3">
              <li><Link href="/marketing" className="hover:text-blue-400">Business Marketing</Link></li>
              <li><Link href="/analytics" className="hover:text-blue-400">User Analytics</Link></li>
              <li><Link href="/live-chat" className="hover:text-blue-400">Live Chat</Link></li>
              <li><Link href="/support" className="hover:text-blue-400">Unlimited Support</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h6 className="text-lg font-semibold mb-4">Resources</h6>
            <ul className="space-y-3">
              <li><Link href="/ios-android" className="hover:text-blue-400">iOS & Android</Link></li>
              <li><Link href="/demo" className="hover:text-blue-400">Watch a Demo</Link></li>
              <li><Link href="/customers" className="hover:text-blue-400">Customers</Link></li>
              <li><Link href="/api" className="hover:text-blue-400">API</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="footer-column">
            <h6 className="text-lg font-semibold mb-4">Get In Touch</h6>
            <input type="email" placeholder="Your Email" className="w-full p-2 rounded-md mb-4 bg-white text-blue-950 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">Subscribe</button>
            <p className="text-sm mt-4">More info and updates</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center font-bold px-5 py-4 bg">
        <span className="text-sm text-gray-400">Made With Love By Finland. All Rights Reserved.</span>
      </div>
    </div>
  );
}
