"use client";

import { RevealTextAnimation } from "./ui/reveal-text-animation";

export function RevealText() {
  const placeholders = [
    "Abundantly",
    "Prosperously",
    "Richly",
    "Plentifully",
    "Bountifully",
  ];

  return (
    <div className="flex flex-col justify-start items-start mx-12 lg:mx-0">
      <RevealTextAnimation placeholders={placeholders} />
    </div>
  );
}
