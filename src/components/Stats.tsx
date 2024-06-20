const stats = [
  { id: 1, name: "Products sold every 24 hours", value: "500 hundred" },
  { id: 2, name: "worth of products sold", value: "₱119 million" },
  { id: 3, name: "New users annually", value: "46,000" },
];

export default function Stats() {
  return (
    <div className="bg-white py-24 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-green-950 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
