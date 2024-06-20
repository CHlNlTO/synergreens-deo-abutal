import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Boost your metabolism with Synergreens",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "Health", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Improve your skin with Gluta Deluxe",
    href: "#",
    description:
      "Doloremque reprehenderit et harum quas explicabo. Quisquam excepturi consequatur doloremque doloribus. Quisquam excepturi consequatur doloremque doloribus. Quisquam excepturi consequatur doloremque doloribus. Quisquam excepturi consequatur doloremque doloribus.",
    date: "Apr 12, 2020",
    datetime: "2020-04-12",
    category: { title: "Skincare", href: "#" },
    author: {
      name: "Sarah Johnson",
      role: "Lead Developer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1554384645-13eab165c24b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Master the art of your own well-being",
    href: "#",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi. Sint libero mollitia voluptas doloribus. Sint libero mollitia voluptas doloribus. Sint libero mollitia voluptas doloribus. Sint libero mollitia voluptas doloribus.",
    date: "May 20, 2020",
    datetime: "2020-05-20",
    category: { title: "Well-being", href: "#" },
    author: {
      name: "John Smith",
      role: "UI/UX Designer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how our products change people&apos;s lives.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-green-100 hover:text-green-950"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-green-950 group-hover:text-green-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                  width={500}
                  height={500}
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-green-950">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
