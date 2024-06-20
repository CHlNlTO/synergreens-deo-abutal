import Image from "next/image";
import personPortrait from "@/assets/person-portrait.png";
import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.jpeg";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-green-950 sm:text-6xl">
              Live Long Abundantly.
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Synergreens International is committed to helping its distributors
              reach their goals, to providing an innovative environment, and to
              making a difference.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          src={product1}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={product3}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={1000}
                          height={1000}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={product2}
                          alt=""
                          className="h-56 w-full mt-12"
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={personPortrait}
                          alt=""
                          className="hidden sm:flex h-full w-full object-cover object-center"
                          width={841}
                          height={1280}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={product2}
                          alt=""
                          className="w-full object-cover object-center"
                          width={1024}
                          height={1024}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={product4}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={2000}
                          height={2000}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src={product1}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-green-700"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
