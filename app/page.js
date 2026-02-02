export default function Home() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
        Build modern apps with{" "}
        <span className="text-blue-600">Next.js</span>
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Learn routing, layouts, and styling using the modern App Router
        and Tailwind CSS v4.
      </p>

      <div className="flex gap-4">
        <a
          href="/services"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          View Services
        </a>

        <a
          href="https://nextjs.org"
          className="px-6 py-3 rounded-xl border border-gray-300 font-medium hover:bg-gray-100 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
