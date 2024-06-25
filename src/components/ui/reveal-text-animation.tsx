"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

export function RevealTextAnimation({
  placeholders,
}: {
  placeholders: string[];
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  useEffect(() => {
    let interval: any;
    const startAnimation = () => {
      interval = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      }, 1500);
    };
    startAnimation();
    return () => clearInterval(interval);
  }, [placeholders.length]);

  return (
    <div className="relative w-full flex items-start justify-start">
      <AnimatePresence mode="wait">
        <motion.p
          initial={{
            y: 5,
            opacity: 0,
          }}
          key={`current-placeholder-${currentPlaceholder}`}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -15,
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "linear",
          }}
          className={cn(
            "text-4xl md:text-6xl lg:text-7xl text-green-800 font-black uppercase text-start"
          )}
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "rgb(22, 101, 52)",
            color: "white",
          }}
        >
          {placeholders[currentPlaceholder]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
