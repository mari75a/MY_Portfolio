"use client";

import { motion } from "framer-motion";

const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl 
border border-white/10 bg-[#111113]/90 px-6 py-4 backdrop-blur-xl">

          {/* Logo */}
          <div className="text-lg font-bold tracking-widest text-[#E6FF00]">
            Coding
          </div>

          {/* Navigation */}
          <ul className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm tracking-wide text-gray-400 hover:text-white"
                >
                  {item}
                </a>
                <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="rounded-xl border border-[#E6FF00]/40 px-4 py-2 
text-xs tracking-widest text-[#E6FF00] transition 
hover:bg-[#E6FF00] hover:text-black 
hover:shadow-[0_0_30px_rgba(230,255,0,0.6)]">
            CONNECT
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
