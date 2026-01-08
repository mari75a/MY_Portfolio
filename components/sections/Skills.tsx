"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 90 },
  { name: "Spring Boot / Hibernate", level: 85 },
  { name: "React / Next.js", level: 85 },
  { name: "JavaScript / TypeScript", level: 80 },
  { name: "MySQL / PostgreSQL", level: 75 },
  { name: "REST APIs / JWT", level: 80 },
  { name: "IoT / RFID Systems", level: 70 },
  { name: "Docker / Deployment", level: 65 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-28 px-6 bg-[#0B0B0D] text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* ===== LEFT: TITLE ===== */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-tech tracking-widest text-[#E6FF00]"
          >
            SKILLS
          </motion.h2>

          <p className="mt-6 text-gray-400 max-w-md leading-relaxed">
            A system-level overview of my technical capabilities — focused on
            building scalable, reliable, and production-ready software.
          </p>
        </div>

        {/* ===== RIGHT: SKILL BARS ===== */}
        <div className="space-y-6">
          {skills.map((skill, i) => (
            <div key={i}>
              {/* Label */}
              <div className="flex justify-between mb-2 text-sm tracking-widest">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>

              {/* Bar */}
              <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-[#E6FF00]
                  shadow-[0_0_20px_rgba(230,255,0,0.4)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
