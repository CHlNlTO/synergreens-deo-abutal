"use client";

import Image from "next/image";
import Link from "next/link";
import sgiLogo from "@/assets/sgi-green-logo.png";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Menu } from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#", current: true },
  { name: "Products", href: "#", current: false },
  { name: "Testimonials", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <header className="w-full h-12 flex justify-center absolute p-0 left-0 *:top-[-1px] sm:top-12 sm:p-4 z-[100]">
      <motion.nav
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        className="sticky rounded-none sm:rounded-full border-b sm:border sm:shadow-[0_4px_8px_rgba(0,0,0,0.03)] bg-green-200/60 border-gray-300/50 p-3 backdrop-blur-md w-full m-auto h-12 max-w-[920px] flex justify-between items-center"
      >
        <motion.div
          initial={{ opacity: "0%" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-shrink-0 items-center w-24">
            <Image
              className="relative flex h-8 w-full cursor-pointer object-contain"
              src={sgiLogo}
              alt="Synergreens International Logo"
              width={2400}
              height={1620}
            />
          </div>
        </motion.div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center sm:flex gap-4">
            <motion.div
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-green-50 text-green-800 font-medium w-fit px-3 py-2 text-xs hover:text-green-600"
                href="#"
              >
                Products
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-green-50 text-green-800 font-medium w-fit px-3 py-2 text-xs hover:text-green-600"
                href="#"
              >
                Testimonials
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-green-50 text-green-800  font-medium w-fit px-3 py-2 text-xs hover:text-green-600 "
                href="#"
              >
                Contact
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: "0%" }}
            animate={{ opacity: "100%" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-row justify-center items-center gap-4 pr-3"
          >
            <Drawer>
              <DrawerTrigger className="flex sm:hidden">
                <Menu className="text-gray-800  active:text-gray-600" />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerClose>
                  <div className="flex flex-col gap-2 pt-4 pb-16 mx-auto max-w-[740px]">
                    <motion.div
                      initial={{ opacity: "0%" }}
                      animate={{ opacity: "100%" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Link
                        className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-green-50 text-green-800  font-medium w-fit px-3 py-2 text-xs hover:text-green-600 "
                        href="#"
                      >
                        Work
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: "0%" }}
                      animate={{ opacity: "100%" }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Link
                        className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-green-50 text-green-800  font-medium w-fit px-3 py-2 text-xs hover:text-green-600 "
                        href="#"
                      >
                        Thoughts
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: "0%" }}
                      animate={{ opacity: "100%" }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Link
                        className="group flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin text-[13px] tracking-[0.2px] leading-none cursor-pointer select-none hover:bg-green-50 text-green-800  font-medium w-fit px-3 py-2 text-xs hover:text-green-600 "
                        href="#"
                      >
                        About
                      </Link>
                    </motion.div>
                  </div>
                </DrawerClose>
              </DrawerContent>
            </Drawer>
          </motion.div>
        </div>
      </motion.nav>
    </header>
  );
}
