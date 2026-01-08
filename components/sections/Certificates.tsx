"use client";

import { motion } from "framer-motion";
import oracleLogo from "../../assets/logos/oracle.png";
import microsoftLogo from "../../assets/logos/microsoft.png";
import googlelogo from "../../assets/logos/google.png";

const certificates = [
  {
    title: "Oracle 1Z0-922 – MySQL Implementation Associate",
    issuer: "Oracle",
    issued: "May 2025",
    focus:
      "MySQL installation, architecture, database design, replication, monitoring, high availability, and backup strategies",
    logo: oracleLogo,
    highlight: true,
  },
  {
    title: "Introduction to Responsible AI",
    issuer: "Microsoft",
    issued: "2024",
    focus: "Ethical AI, fairness, transparency, and responsible system design",
    logo: googlelogo,
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Microsoft",
    issued: "2024",
    focus: "Foundations of generative AI systems and real-world use cases",
    logo: googlelogo,
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "Microsoft",
    issued: "2024",
    focus: "Core C# programming concepts and application logic",
    logo: microsoftLogo,
  },
  {
    title: "Create and Run Simple C# Console Applications",
    issuer: "Microsoft",
    issued: "2024",
    focus: "Console application development and control flow",
    logo: microsoftLogo,
  },
  {
    title: "Add Logic to C# Console Applications",
    issuer: "Microsoft",
    issued: "2024",
    focus: "Conditional logic, loops, and structured programming",
    logo: microsoftLogo,
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative w-full py-28 px-6 bg-[#0B0B0D] text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* ===== HEADER ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-tech tracking-widest text-[#E6FF00]"
        >
          CERTIFICATIONS
        </motion.h2>

        <p className="mt-4 text-gray-400 max-w-xl">
          Industry-recognized certifications and verified technical credentials.
        </p>

        {/* ===== CERT GRID ===== */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {certificates.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-2xl border p-8 bg-black/60 transition
                ${
                  c.highlight
                    ? "border-[#E6FF00] shadow-[0_0_60px_rgba(230,255,0,0.25)]"
                    : "border-[#E6FF00]/20 hover:border-[#E6FF00]/50"
                }`}
            >
              {/* LOGO */}
              <div className="mb-6 h-10 flex items-center">
                <img
                  src={c.logo.src}
                  alt={`${c.issuer} logo`}
                  className="h-full object-contain opacity-90"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-[#E6FF00] font-tech leading-snug">
                {c.title}
              </h3>

              {/* META */}
              <p className="mt-2 text-sm text-gray-400">
                {c.issuer} · Issued {c.issued}
              </p>

              {/* FOCUS */}
              <p className="mt-4 text-xs tracking-wide text-gray-500 leading-relaxed">
                {c.focus}
              </p>

              {/* GLOW */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none
                shadow-[0_0_40px_rgba(230,255,0,0.08)]" />
            </motion.div>
          ))}
        </div>

        {/* ===== LINKEDIN VERIFICATION ===== */}
        <div className="mt-20 text-center">
          <a
            href="https://www.linkedin.com/in/sangeeth-lakshan-4ab930254"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl
            border border-[#E6FF00]/40 px-8 py-3
            text-sm tracking-widest text-[#E6FF00]
            transition hover:bg-[#E6FF00] hover:text-black"
          >
            VERIFY ON LINKEDIN →
          </a>
        </div>
      </div>
    </section>
  );
}
