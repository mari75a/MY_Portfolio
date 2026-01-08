"use client";

import { motion } from "framer-motion";

const education = [
  {
    period: "2022 – Present",
    title: "BSc (Hons) Software Engineering",
    place: "Birmingham City University",
    note: "UK Degree Programme · Graduating 2026",
  },
  {
    period: "2022 – Present",
    title: "BSc Computer Science",
    place: "University of Ruhuna",
    note: "Final Year · Current GPA: 3.74",
  },
  {
    period: "2008 – 2021",
    title: "Secondary Education",
    place: "Dharmaraja College, Kandy",
    note: "Advanced Level & Ordinary Level Education",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full py-28 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* ===== SECTION HEADER ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-tech tracking-widest text-[#E6FF00]"
        >
          EDUCATION
        </motion.h2>

        <p className="mt-4 text-gray-400 max-w-xl">
          Academic background and formal training that built my foundation
          in engineering, mathematics, and problem solving.
        </p>

        {/* ===== EDUCATION CARDS ===== */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-[#E6FF00]/20
              bg-[#0B0B0D] p-8"
            >
              <p className="text-xs tracking-widest text-gray-500">
                {edu.period}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#E6FF00] font-tech">
                {edu.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {edu.place}
              </p>

              <p className="mt-4 text-xs tracking-wide text-gray-500">
                {edu.note}
              </p>

              <div className="absolute inset-0 rounded-2xl pointer-events-none
                shadow-[0_0_40px_rgba(230,255,0,0.08)]" />
            </motion.div>
          ))}
        </div>

        {/* ===== EXAM RESULTS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          {/* O/L */}
          <div className="rounded-2xl border border-[#E6FF00]/20 bg-[#0B0B0D] p-8">
            <p className="text-xs tracking-widest text-gray-500">
              G.C.E. ORDINARY LEVEL · 2018
            </p>
            <h4 className="mt-3 text-lg font-tech text-[#E6FF00]">
              RESULTS
            </h4>
            <p className="mt-4 text-sm text-gray-300">
              9 A Passes (A9)
            </p>
          </div>

          {/* A/L */}
          <div className="rounded-2xl border border-[#E6FF00]/20 bg-[#0B0B0D] p-8">
            <p className="text-xs tracking-widest text-gray-500">
              G.C.E. ADVANCED LEVEL · 2022
            </p>
            <h4 className="mt-3 text-lg font-tech text-[#E6FF00]">
              RESULTS
            </h4>
            <ul className="mt-4 text-sm text-gray-300 space-y-2">
              <li>Combined Mathematics — A</li>
              <li>Physics — B</li>
              <li>Chemistry — C</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
