"use client";

import { motion } from "framer-motion";

const insights = [
  {
    title: "CAP Theorem Explained Simply",
    subtitle: "Consistency · Availability · Partition Tolerance",
    platform: "Facebook Article",
    tags: ["Distributed Systems", "Databases", "Theory"],
    excerpt:
      "CAP Theorem explains why a distributed system cannot guarantee Consistency, Availability, and Partition Tolerance at the same time...",
    language: "Sinhala",
    link: "https://web.facebook.com/photo.php?fbid=1347652276957603",
  },
  {
    title: "How to Choose the Best Tech Stack for a Project",
    subtitle: "Engineering decisions that drive success",
    platform: "Facebook Article",
    tags: ["Architecture", "Tech Stack", "Scalability"],
    excerpt:
      "Choosing the right tech stack affects performance, scalability, security, development speed, and long-term maintenance...",
    language: "Sinhala",
    link: "https://web.facebook.com/photo.php?fbid=1299864898403008",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="relative w-full py-28 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-tech tracking-widest text-[#E6FF00]">
          INSIGHTS
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl">
          Engineering concepts, system design thinking, and practical knowledge
          shared through articles and videos.
        </p>

        <div className="mt-20 grid md:grid-cols-2 gap-10">
          {insights.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-xl bg-[#0B0B0D]
              border border-[#E6FF00]/20
              hover:border-[#E6FF00]
              hover:shadow-[0_0_50px_rgba(230,255,0,0.25)]
              transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest text-[#E6FF00]">
                  {post.platform}
                </span>
                <span className="text-xs text-gray-500">
                  {post.language}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-tech text-[#E6FF00]">
                {post.title}
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                {post.subtitle}
              </p>

              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full
                    border border-[#E6FF00]/30 text-[#E6FF00]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={post.link}
                target="_blank"
                className="inline-block mt-8 text-xs tracking-widest
                text-[#E6FF00] border border-[#E6FF00]/40
                px-5 py-2 rounded-lg
                hover:bg-[#E6FF00] hover:text-black transition"
              >
                READ FULL ARTICLE
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
