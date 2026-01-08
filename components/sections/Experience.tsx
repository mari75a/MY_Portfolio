"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025",
    title: "Full Stack Software Engineer",
    org: "AMPORA EV Platform",
    desc: "Designed and developed a smart EV charging platform with RFID authentication, payment integration, and real-time monitoring.",
  },
  {
    year: "2024",
    title: "Java Software Developer",
    org: "Self-Employed",
    desc: "Built enterprise-style systems using Java, Hibernate, Spring Boot, JSP, and EJB, focusing on scalability and clean architecture.",
  },
  {
    year: "2024",
    title: "Final Year Undergraduate",
    org: "University of Ruhuna & Birmingham City University",
    desc: "Pursuing dual degrees in Computer Science and Software Engineering with a strong focus on backend systems and full-stack development.",
  },
  {
    year: "2023",
    title: "Start Bachelor in computer science",
    org: "University of Ruhuna",
    desc: "Developed multiple production-grade systems including e-commerce platforms, class management systems, and IoT-based applications.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-28 px-6 bg-black text-white"
    >
      {/* ===== SECTION HEADER ===== */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-tech tracking-widest text-[#E6FF00]"
        >
          EXPERIENCE
        </motion.h2>

        <p className="mt-4 text-gray-400 max-w-xl">
          A chronological view of my journey in building real-world software
          systems and scalable platforms.
        </p>
      </div>

      {/* ===== TIMELINE ===== */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#E6FF00]/0 via-[#E6FF00]/40 to-[#E6FF00]/0" />

        {/* Entries */}
        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              {/* LEFT / RIGHT CONTENT */}
              <div className={i % 2 === 0 ? "md:pr-12" : "md:pl-12 md:col-start-2"}>
                <div className="rounded-xl border border-[#E6FF00]/20 bg-[#0B0B0D] p-6">
                  <h3 className="text-lg font-semibold text-[#E6FF00] font-tech">
                    {exp.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {exp.org}
                  </p>

                  <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>

              {/* NODE */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <div className="h-4 w-4 rounded-full bg-[#E6FF00] shadow-[0_0_20px_rgba(230,255,0,0.6)]" />
                <div className="mt-2 text-xs tracking-widest text-[#E6FF00]">
                  {exp.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
