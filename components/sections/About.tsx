"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 bg-[#0B0B0D] text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* ===== LEFT: SYSTEM PROFILE ===== */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-tech tracking-widest text-[#E6FF00]"
          >
            ABOUT
          </motion.h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I’m a full stack software engineer with a strong focus on backend
            systems, architecture, and real-world problem solving.
            I enjoy building systems that are reliable, scalable, and clean —
            not just visually impressive.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            My background spans Java enterprise systems, modern frontend
            frameworks, and IoT-driven platforms. I approach development like
            engineering, not trial-and-error.
          </p>
        </div>

        {/* ===== RIGHT: SYSTEM STATS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { label: "FOCUS", value: "Full Stack Engineering" },
            { label: "PRIMARY STACK", value: "Java · React" },
            { label: "SYSTEMS", value: "Web · IoT · APIs" },
            { label: "APPROACH", value: "Clean Architecture" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#E6FF00]/20 bg-black/60 p-6"
            >
              <p className="text-xs tracking-widest text-gray-500">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-[#E6FF00] font-tech">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
