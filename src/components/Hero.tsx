"use client";

import Image from "next/image";
import personPortrait from "@/assets/person-portrait.png";
import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.jpeg";
import { motion } from "framer-motion";
import { AnimatedButton } from "./ui/animated-button";
import { RevealText } from "./RevealText";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative w-full flex flex-col gap-4 items-center justify-start pt-24 md:pt-36"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-5 w-full">
        <div className="col-span-1 text-4xl md:text-7xl lg:text-7xl text-green-800 font-black uppercase flex text-start justify-start lg:text-end lg:justify-end items-start">
          <span className="pl-12 pr-12 lg:pl-0 lg:pr-0 bg-clip-text text-transparent bg-gradient-to-br from-green-600 to-green-900">
            Live long
          </span>
        </div>
        <div
          className="col-span-1 text-4xl md:text-7xl lg:text-7xl text-green-800 font-black uppercase text-start"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "rgb(22, 101, 52)",
            color: "white",
          }}
        >
          <RevealText />
        </div>
      </div>
      <div className="text-xs md:text-lg lg:text-xl font-normal text-gray-950 text-start lg:text-center pl-12 pr-12 sm:pr-60 md:pr-60 lg:pl-0 lg:pr-0 mx-0 lg:mx-72">
        Empower Your Wellness Journey. Revitalize with premium supplements for a
        thriving lifestyle
      </div>
      <div className="flex w-full pl-12 pr-12 lg:pl-0 lg:pr-0 justify-start lg:justify-center">
        <AnimatedButton>Explore Products</AnimatedButton>
      </div>
    </motion.div>
  );
}
