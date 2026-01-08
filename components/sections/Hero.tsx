"use client";

import { motion } from "framer-motion";
import bg from "../../assets/images/bg.png";
import portrait from "../../assets/images/me2.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden "
    >
      {/* ===== BACKGROUND ===== */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center "
        style={{ backgroundImage: `url(${bg.src})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

      {/* ===== RING + PORTRAIT ===== */}
      <div className="relative flex mt-20 items-center justify-center">
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute h-[540px] w-[540px] rounded-full border border-[#E6FF00]/25"
        />

        {/* Inner ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute h-[460px] w-[460px] rounded-full border-[6px] border-[#E6FF00]
          shadow-[0_0_90px_rgba(230,255,0,0.45)]"
        />

        {/* Portrait */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 h-[330px] w-[330px] rounded-full overflow-hidden
          border items-center justify-center border-[#E6FF00]/20 bg-red"
        >
          <img
            src={portrait.src}
            alt="Sangeeth Lakshan"
            className="h-full ms-5 w-[80%] text-center object-cover object-center
            grayscale-[10%] contrast-110 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
        </motion.div>
      </div>

      {/* ===== NAME (BRAND MARK) ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 20, letterSpacing: "0.3em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "0.12em" }}
        transition={{ duration: 0.9 }}
        className="mt-20 text-4xl md:text-6xl font-semibold text-[#E6FF00]
        font-tech text-center"
      >
        SANGEETH&nbsp;LAKSHAN
      </motion.h1>

      {/* ===== ROLE ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-gray-400 text-base md:text-lg tracking-wide text-center"
      >
        Software Engineer · Full Stack · Systems Builder
      </motion.h2>
    </section>
  );
}
