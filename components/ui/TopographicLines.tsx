"use client";

import { motion } from "framer-motion";

export default function TopographicLines() {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full opacity-[0.12]"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.path
        d="M0,300 C150,200 350,400 800,250"
        fill="none"
        stroke="#E6FF00"
        strokeWidth="1"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M0,350 C200,250 400,450 800,300"
        fill="none"
        stroke="#E6FF00"
        strokeWidth="0.8"
        animate={{ pathLength: [1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M0,250 C180,100 420,380 800,200"
        fill="none"
        stroke="#E6FF00"
        strokeWidth="0.6"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  );
}
