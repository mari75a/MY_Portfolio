"use client";

import { motion } from "framer-motion";

export default function ProjectDeepDive({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#0B0B0D] text-white"
    >
      {/* ===== TOP BAR ===== */}
      <div className="h-[64px] flex items-center justify-between px-8
        border-b border-[#E6FF00]/20 bg-black/80 backdrop-blur">
        <h2 className="font-tech tracking-widest text-[#E6FF00] text-lg">
          {project.title}
        </h2>
        <button
          onClick={onClose}
          className="px-4 py-1 border border-[#E6FF00]/40
          text-xs tracking-widest text-[#E6FF00]
          hover:bg-[#E6FF00] hover:text-black transition"
        >
          CLOSE
        </button>
      </div>

      {/* ===== MAIN LAYOUT ===== */}
      <div className="h-[calc(100vh-64px)] grid grid-cols-[320px_1fr]">

        {/* ===== LEFT METADATA PANEL ===== */}
        <aside className="border-r border-[#E6FF00]/20 p-6 space-y-8 overflow-y-auto">

          <Section title="TECH STACK">
            {project.tech.split("·").map((t: string, i: number) => (
              <Tag key={i}>{t.trim()}</Tag>
            ))}
          </Section>

          <Section title="ARCHITECTURE">
            <List items={project.architecture} />
          </Section>

          <Section title="SYSTEM FLOW">
            <OrderedList items={project.flow} />
          </Section>

          <Section title="CHALLENGES">
            <List items={project.challenges} />
          </Section>

          <Section title="SOLUTIONS">
            <List items={project.solutions} />
          </Section>

          <Section title="LINKS">
            {project.links?.demo && <LinkBtn href={project.links.demo} label="LIVE DEMO" />}
            {project.links?.github && <LinkBtn href={project.links.github} label="GITHUB" />}
          </Section>
        </aside>

        {/* ===== RIGHT CONTENT AREA ===== */}
        <main className="p-10 overflow-hidden">
          <div className="grid grid-cols-2 gap-6 h-full">
            {project.images.map((img: any, i: number) => (
              <motion.img
                key={i}
                src={img.src}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl border border-[#E6FF00]/20
                object-cover w-full h-full"
              />
            ))}
          </div>
        </main>
      </div>
    </motion.div>
  );
}

/* ===== SMALL COMPONENTS ===== */

function Section({ title, children }: any) {
  return (
    <div>
      <h3 className="text-xs tracking-widest text-[#E6FF00] mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-gray-300">
      {items.map((i, idx) => (
        <li key={idx}>• {i}</li>
      ))}
    </ul>
  );
}

function OrderedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2 text-sm text-gray-300">
      {items.map((i, idx) => (
        <li key={idx}>{idx + 1}. {i}</li>
      ))}
    </ol>
  );
}

function Tag({ children }: any) {
  return (
    <span className="inline-block mr-2 mb-2 px-3 py-1
      border border-[#E6FF00]/30 text-xs text-[#E6FF00]">
      {children}
    </span>
  );
}

function LinkBtn({ href, label }: any) {
  return (
    <a
      href={href}
      target="_blank"
      className="block mb-2 px-4 py-2 border border-[#E6FF00]/40
      text-xs tracking-widest text-[#E6FF00]
      hover:bg-[#E6FF00] hover:text-black transition"
    >
      {label}
    </a>
  );
}
