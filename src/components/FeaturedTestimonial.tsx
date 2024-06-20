import Image from "next/image";
import Logo from "@/components/Logo";
import personAvatar from "@/assets/person-avatar.jpg";

export default function FeaturedTestimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="flex justify-center items-center">
          <Logo className="z-50" />
        </div>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-green-950 sm:text-2xl sm:leading-9">
            <p>
              “Synergreens has boosted my energy and improved my digestion
              significantly. With its organic ingredients and versatile use,
              it&apos;s now an essential part of my daily health regimen.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="h-8 w-8 rounded-full bg-white flex justify-center items-center mx-auto">
              <Image
                className="h-full w-full object-cover object-center rounded-full"
                src={personAvatar}
                alt="Rodeo Teodorico Abutal Avatar"
                width={80}
                height={80}
              />
            </div>
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-green-950">Juan Dela Cruz</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-green-600">CEO of Some Company</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
