"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-28 px-6 bg-black text-white overflow-hidden"
    >
      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[700px] w-[700px] rounded-full bg-[#E6FF00]/10 blur-[180px]" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* ===== LEFT: CTA ===== */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-tech tracking-widest text-[#E6FF00]"
          >
            LET’S BUILD
          </motion.h2>

          <p className="mt-6 text-gray-400 max-w-md leading-relaxed">
            Have a project, idea, or system that needs to be built right?
            I’m open to collaboration, freelance work, and full-time roles.
          </p>

          <p className="mt-4 text-gray-500 text-sm tracking-wide">
            You can also reach me directly via email or LinkedIn.
          </p>
        </div>

        {/* ===== RIGHT: FORM ===== */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-[#E6FF00]/20 bg-[#0B0B0D] p-8 space-y-6"
        >
          <div>
            <label className="block text-xs tracking-widest text-gray-400 mb-2">
              NAME
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3
              text-sm text-white outline-none
              focus:border-[#E6FF00]/60"
            />
          </div>

          <div>
            <label className="block text-xs tracking-widest text-gray-400 mb-2">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3
              text-sm text-white outline-none
              focus:border-[#E6FF00]/60"
            />
          </div>

          <div>
            <label className="block text-xs tracking-widest text-gray-400 mb-2">
              MESSAGE
            </label>
            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3
              text-sm text-white outline-none resize-none
              focus:border-[#E6FF00]/60"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 rounded-xl bg-[#E6FF00] px-6 py-3
            text-sm font-semibold tracking-widest text-black
            transition hover:shadow-[0_0_30px_rgba(230,255,0,0.6)]"
          >
            SEND MESSAGE
          </button>
        </motion.form>
      </div>
    </section>
  );
}
