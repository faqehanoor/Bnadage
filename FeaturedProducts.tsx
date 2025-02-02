'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Card1 from "@/app/fixed-height.png";
import Card2 from "@/app/fixed-height (1).png";
import Card3 from "@/app/fixed-height (3).png";
import Card4 from "@/app/fixed-height (2).png";
import Card5 from "@/app/fixed-height (4).png";
import Card6 from "@/app/fixed-height (5).png";
import Card7 from "@/app/fixed-height (7).png";
import Card8 from "@/app/fixed-height (6).png";

export default function FeaturedProduct() {
  const products = [
    { image: Card1, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card2, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card3, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card4, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card5, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card6, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card7, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card8, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
  ];

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="product-section py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Section Title */}
      <motion.div
        className="section-title text-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-3xl font-semibold text-blue-950"
          variants={textVariants}
        >
          Featured Products
        </motion.h1>
        <motion.p
          className="text-gray-500"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
          }}
        >
          Problems trying to resolve the conflicts between
        </motion.p>
      </motion.div>

      {/* Animated Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
        {products.map((product, index) => (
          <motion.div
            className="product-card bg-white shadow-md rounded-lg overflow-hidden p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg"
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative h-100 mb-4">
              <Image src={product.image} alt={product.title} layout="responsive" />
            </div>
            <div className="card-details text-center">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <span className="text-sm text-gray-600">{product.department}</span>
              <div className="price mt-2">
                <span className="original-price text-sm line-through text-gray-500">{product.price}</span>
                <span className="discount-price text-xl font-bold text-green-500 ml-2">{product.discount}</span>
              </div>
              <div className="color-dots flex justify-center space-x-2 mt-4">
                <span className="dot w-4 h-4 rounded-full bg-blue-500 cursor-pointer transition-transform duration-200 transform hover:scale-125"></span>
                <span className="dot w-4 h-4 rounded-full bg-red-500 cursor-pointer transition-transform duration-200 transform hover:scale-125"></span>
                <span className="dot w-4 h-4 rounded-full bg-green-500 cursor-pointer transition-transform duration-200 transform hover:scale-125"></span>
                <span className="dot w-4 h-4 rounded-full bg-orange-500 cursor-pointer transition-transform duration-200 transform hover:scale-125"></span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
