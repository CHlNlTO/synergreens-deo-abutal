"use client";

import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section className="grid place-content-center gap-2 bg-green-300 px-8 py-24 text-black">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Linkedin</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
};

const DURATION = 1;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      animate="loop"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              loop: {
                y: ["0%", "-100%", "-100%", "-100%"],
              },
            }}
            transition={{
              duration: DURATION * 2,
              ease: "easeInOut",
              delay: STAGGER * i,
              repeat: Infinity,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              loop: {
                y: ["100%", "0%", "-100%", "-100%"],
              },
            }}
            transition={{
              duration: DURATION * 2,
              ease: "easeInOut",
              delay: STAGGER * i,
              repeat: Infinity,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              loop: {
                y: ["100%", "100%", "0%", "-100%"],
              },
            }}
            transition={{
              duration: DURATION * 2,
              ease: "easeInOut",
              delay: STAGGER * i,
              repeat: Infinity,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              loop: {
                y: ["100%", "100%", "100%", "-0%"],
              },
            }}
            transition={{
              duration: DURATION * 2,
              ease: "easeInOut",
              delay: STAGGER * i,
              repeat: Infinity,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
