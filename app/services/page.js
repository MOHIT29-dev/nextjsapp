import Link from "next/link";

const services = [
  {
    title: "Web Development",
    desc: "Fast, scalable, and SEO-friendly web apps.",
    slug: "web-development",
  },
  {
    title: "App Development",
    desc: "Cross-platform mobile applications.",
    slug: "app-development",
  },
];

export default function ServicesPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-10 text-gray-900">
        Our Services
      </h1>

      <div className="grid gap-8 sm:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.desc}</p>

            <span className="inline-block mt-4 text-sm font-medium text-blue-600">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
