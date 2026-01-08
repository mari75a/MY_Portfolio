"use client";

import { motion } from "framer-motion";
import bg from "../../assets/images/bg.png";
import portrait from "../../assets/images/me2.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ===== BACKGROUND ===== */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

      {/* ===== RING + PORTRAIT ===== */}
      <div className="relative flex items-center justify-center mt-10 sm:mt-16 md:mt-20">
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="
            absolute rounded-full border border-[#E6FF00]/25
            h-[280px] w-[280px]
            sm:h-[360px] sm:w-[360px]
            md:h-[460px] md:w-[460px]
            lg:h-[540px] lg:w-[540px]
          "
        />

        {/* Inner ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="
            absolute rounded-full border-[4px] sm:border-[5px] md:border-[6px]
            border-[#E6FF00]
            shadow-[0_0_60px_rgba(230,255,0,0.35)]
            h-[240px] w-[240px]
            sm:h-[320px] sm:w-[320px]
            md:h-[400px] md:w-[400px]
            lg:h-[460px] lg:w-[460px]
          "
        />

        {/* Portrait */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="
            relative z-10 rounded-full overflow-hidden
            border border-[#E6FF00]/20
            h-[180px] w-[180px]
            sm:h-[220px] sm:w-[220px]
            md:h-[280px] md:w-[280px]
            lg:h-[330px] lg:w-[330px]
          "
        >
          <img
            src={portrait.src}
            alt="Sangeeth Lakshan"
            className="
              h-full w-full object-cover object-center
              grayscale-[10%] contrast-110 brightness-95
            "
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
        </motion.div>
      </div>

      {/* ===== NAME ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="
          mt-10 sm:mt-14 md:mt-20
          text-2xl sm:text-3xl md:text-5xl lg:text-6xl
          font-semibold text-[#E6FF00]
          font-tech tracking-widest text-center
        "
      >
        SANGEETH&nbsp;LAKSHAN
      </motion.h1>

      {/* ===== ROLE ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="
          mt-3 sm:mt-4
          text-xs sm:text-sm md:text-lg
          text-gray-400 tracking-wide text-center px-6
        "
      >
        Software Engineer · Full Stack · Systems Builder
      </motion.h2>
    </section>
  );
}
