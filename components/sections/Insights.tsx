"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "ACID Properties in Databases Explained",
    excerpt:
      "A practical explanation of Atomicity, Consistency, Isolation, and Durability, and why ACID matters for reliable database transactions.",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/posts/sangeeth-lakshan-4ab930254_acid-database-activity-7341788293761548288-Mx9G",
  },
  {
    title: "React Fundamentals for Scalable Frontend Development",
    excerpt:
      "An overview of core React concepts, component-based architecture, state management, and how React improves frontend scalability.",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/posts/sangeeth-lakshan-4ab930254_react-activity-7330594600102887425-7A5i",
  },
  {
    title: "Understanding Java EE & Enterprise Application Architecture",
    excerpt:
      "Explaining Java EE concepts, enterprise application structure, and how components like Servlets, EJB, and JPA work together.",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/posts/sangeeth-lakshan-4ab930254_javaee-bcd-activity-7344667314425950208-f8QI",
  },
];

const videos = [
  {
    title: "Arduino Robot Arm",
    youtubeId: "O4st1Flvzk0",
  },
  {
    title: "Full project completed video || React Native Video 5",
    youtubeId: "lBNjlx9taE4",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="relative w-full py-28 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-tech tracking-widest text-[#E6FF00]"
        >
          INSIGHTS
        </motion.h2>

        <p className="mt-4 text-gray-400 max-w-xl">
          Articles, engineering thoughts, and video walkthroughs I share with
          the community.
        </p>

        {/* CONTENT */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ===== BLOG POSTS ===== */}
          <div>
            <h3 className="text-xl font-tech tracking-widest text-[#E6FF00]">
              BLOG POSTS
            </h3>

            <div className="mt-8 space-y-6">
              {posts.map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl bg-[#0B0B0D]
                  border border-[#E6FF00]/20
                  hover:shadow-[0_0_40px_rgba(230,255,0,0.15)]
                  transition"
                >
                  <h4 className="text-lg text-[#E6FF00]">
                    {p.title}
                  </h4>

                  <p className="mt-2 text-sm text-gray-300">
                    {p.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs tracking-widest text-gray-400">
                      {p.platform.toUpperCase()}
                    </span>

                    <a
                      href={p.link}
                      target="_blank"
                      className="text-xs tracking-widest text-[#E6FF00]
                      hover:underline"
                    >
                      READ POST →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ===== YOUTUBE VIDEOS ===== */}
          <div>
            <h3 className="text-xl font-tech tracking-widest text-[#E6FF00]">
              VIDEO CONTENT
            </h3>

            <div className="mt-8 space-y-8">
              {videos.map((v, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl overflow-hidden
                  border border-[#E6FF00]/20 bg-[#0B0B0D]"
                >
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-sm text-[#E6FF00]">
                      {v.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
