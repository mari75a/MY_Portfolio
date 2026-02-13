"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import bg from "../../assets/images/bg.png";
import portrait from "../../assets/images/me2.png";

import { FaReact, FaJava, FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { HiOutlineSignal } from "react-icons/hi2";

/* Floating Badge */
function FloatingBadge({
  icon,
  text,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay }}
      className={`absolute flex items-center gap-1 px-2 py-1 text-[10px] sm:text-xs
      rounded-full bg-white/5 backdrop-blur-xl border border-white/10
      text-gray-200 shadow-md whitespace-nowrap ${className}`}
    >
      {icon}
      <span className="hidden sm:inline">{text}</span>
    </motion.div>
  );
}

export default function Hero() {
  /* Mouse-follow glow */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/75 backdrop-blur-sm" />

      {/* Mouse Glow (hidden on mobile for performance) */}
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="hidden md:block pointer-events-none absolute w-[400px] h-[400px] 
        bg-[#E6FF00]/10 blur-[120px] rounded-full -z-10"
      />

      {/* Content */}
      <div className="w-full px-5 sm:px-8 lg:px-20 xl:px-32 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl text-center md:text-left"
        >
          <p className="text-gray-400 text-sm mb-2">
            Hello, I'm
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#E6FF00] via-[#bfff00] to-[#8cff00] 
            bg-clip-text text-transparent">
              Sangeeth Lakshan
            </span>
          </h1>

          <h2 className="mt-3 text-gray-300 text-base sm:text-xl">
            Full-Stack Engineer & Systems Builder
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            I build scalable web platforms, real-time systems, and modern
            developer tools focused on performance and clean architecture.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start flex-wrap">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-[#E6FF00] text-black font-semibold rounded-xl
              transition hover:scale-105"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 border border-white/20 rounded-xl
              hover:bg-white/10 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex justify-center items-center mt-6 md:mt-0"
        >
          {/* Floating badges */}
          <FloatingBadge
            icon={<FaReact className="text-cyan-400 text-xs" />}
            text="React"
            className="-top-4 left-6 sm:-top-6 sm:left-10"
          />

          <FloatingBadge
            icon={<FaJava className="text-red-400 text-xs" />}
            text="Java"
            className="top-6 -right-4 sm:top-10 sm:-right-6"
            delay={0.5}
          />

          <FloatingBadge
            icon={<SiMysql className="text-blue-400 text-xs" />}
            text="MySQL"
            className="bottom-6 -left-4 sm:bottom-10 sm:-left-6"
            delay={1}
          />

          <FloatingBadge
            icon={<HiOutlineSignal className="text-green-400 text-xs" />}
            text="WebSocket"
            className="-bottom-4 right-6 sm:-bottom-6 sm:right-10"
            delay={1.5}
          />

          {/* Glow */}
          <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] bg-[#E6FF00]/15 blur-3xl rounded-full" />

          {/* Portrait */}
          <div className="relative rounded-full overflow-hidden border border-white/10 shadow-2xl w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72">
            <img
              src={portrait.src}
              alt="Sangeeth Lakshan"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
