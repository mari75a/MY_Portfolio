"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// ===== PROJECT IMAGES =====
import ampora1 from "../../assets/projects/ampora-1.png";
import ampora2 from "../../assets/projects/ampora-2.png";
import ampora3 from "../../assets/projects/ampora-3.png";

import safari1 from "../../assets/projects/udawalawa-safari.jpg";
import safari2 from "../../assets/projects/udawalawa-safari.jpg";
import safari3 from "../../assets/projects/udawalawa-safari.jpg";

import fishing1 from "../../assets/projects/fishing-1.png";
import fishing2 from "../../assets/projects/fishing-2.png";

import classMgmt1 from "../../assets/projects/adayapan-1.png";
import classMgmt2 from "../../assets/projects/adyapana-2.png";

import ecommerce1 from "../../assets/projects/ecommerce-1.jpeg";
import ecommerce2 from "../../assets/projects/ecommerce-2.jpeg";

import garage1 from "../../assets/projects/garage-management.png";
import garage2 from "../../assets/projects/garage-management.png";

import iotBoat1 from "../../assets/projects/distance-alarm.jpg";
import iotBoat2 from "../../assets/projects/distance-alarm.jpg";

import roboCar1 from "../../assets/projects/iot-robo-car.jpg";
import roboCar2 from "../../assets/projects/iot-robo-car.jpg";

import roboArm1 from "../../assets/projects/iot-robo-arm.jpg";
import roboArm2 from "../../assets/projects/iot-robo-arm.jpg";

import distanceAlarm1 from "../../assets/projects/distance-alarm.jpg";

import mobile1 from "../../assets/projects/mobile-apps.jpg";
import mobile2 from "../../assets/projects/mobile-2.jpeg";


import perfume1 from "../../assets/projects/perfume1.jpeg";
import perfume2 from "../../assets/projects/perfume2.jpeg";
import perfume3 from "../../assets/projects/perfume3.jpeg";

import udawalaApp1 from "../../assets/projects/udawalaApp1.jpeg";
import udawalaApp2 from "../../assets/projects/udawalaApp2.jpeg";
import udawalaApp3 from "../../assets/projects/udawalaApp3.jpeg";


// ===== PROJECT DATA =====
const projects = [
  {
    title: "AMPORA – Smart EV Charging Platform",
    images: [ampora1, ampora2, ampora3],
    desc: "Smart EV charging platform with RFID authentication, real-time charging session tracking, energy usage monitoring, and secure payment workflows.",
    tech: "Java · Spring Boot · IoT · ESP32 · RFID · MySQL",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Garage Management System",
    images: [garage1, garage2],
    desc: "C#-based garage management system integrated with IoT devices to manage vehicle servicing, job cards, billing, and real-time service tracking.",
    tech: "C# · .NET · IoT · SQL Server",
  },

  {
    title: "Udawalwa Safari Website",
    images: [safari1, safari2, safari3],
    desc: "Live safari tourism website providing detailed tour information, wildlife galleries, travel tips, and a fully mobile-optimized experience.",
    tech: "HTML · Tailwind CSS · PHP · Responsive Web Design",
    links: {
      demo: "https://udawalwasafari.com",
    },
  },

  {
    title: "Smart Fishing Dashboard",
    images: [fishing1, fishing2],
    desc: "Professional Java Swing dashboard for monitoring fishing operations, tracking daily catch volumes, compliance alerts, report generation, and data visualization.",
    tech: "Java · Swing · MySQL · JFreeChart",
  },
  {
    title: "E-Commerce Web Platform (Hibernate Backend)",
    images: [perfume1, perfume2, perfume3], // no images – video based


    desc: "Full-stack e-commerce platform built using HTML, CSS, JavaScript, and Hibernate. Includes email verification, cart management, checkout with payments, seller panel, advanced search, and secure authentication.",
    tech: "HTML · CSS · JavaScript · Hibernate · Java · MySQL",
    links: {
      github: "#",
    },
  },

  {
    title: "Class Management System (QR Based)",
    images: [classMgmt1, classMgmt2],
    desc: "Desktop-based class management system with student, teacher, and staff management, QR-based attendance, payment tracking, and detailed reports.",
    tech: "Java · JDBC · MySQL · QR Code Integration",
  },
  {
    title: "Udawalawa Safari Mobile App",
    images: [udawalaApp1, udawalaApp2, udawalaApp3],
    desc: "Native Android application developed to enhance the Udawalawa Safari experience. The app provides safari tour details, wildlife information, booking-related content, and real-time updates using Firebase.",
    tech: "Android · Java · Firebase · Firebase Auth · Firestore · Android Studio",
    links: {
      github: "#",
      demo: "#", // optional (Play Store / video later)
    },
  },
  {
    title: "Cross-Platform Chat Mobile Applications",
    images: [mobile1, mobile2],
    desc: "Multiple mobile applications focused on performance, clean UI, and REST API integration.",
    tech: "React Native · REST APIs",
  },

  {
    title: "E-Commerce Web Platform",
    images: [ecommerce1, ecommerce2],
    desc: "Full-featured e-commerce platform with authentication, product management, cart system, checkout, payment integration, and admin dashboard.",
    tech: "HTML · CSS · JavaScript · PHP · MySQL",
  },

  

  

  {
    title: "IoT Robo Car",
    images: [roboCar1, roboCar2],
    desc: "Remote-controlled IoT robotic car with obstacle detection and real-time control via wireless communication.",
    tech: "Arduino · IoT · Embedded C",
  },

  {
    title: "IoT Robotic Arm",
    images: [roboArm1, roboArm2],
    desc: "Programmable robotic arm capable of precise movements, controlled via microcontroller and sensor inputs.",
    tech: "Arduino · Embedded Systems · IoT",
  },

  {
    title: "Distance Alarm System",
    images: [distanceAlarm1],
    desc: "Sensor-based distance alarm system that triggers alerts when objects come within a predefined range.",
    tech: "Arduino · Ultrasonic Sensors · Embedded C",
  },

  
];


export default function Projects() {
  const [active, setActive] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const activeProject = projects[active];

  // ===== AUTO SLIDESHOW (ACTIVE PROJECT ONLY) =====
  useEffect(() => {
    if (!activeProject?.images?.length) return;

    const interval = setInterval(() => {
      setImageIndex((prev) =>
        prev === activeProject.images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // ⏱ 3 seconds

    return () => clearInterval(interval);
  }, [active, activeProject.images.length]);

  const next = () => {
    setActive((p) => (p + 1) % projects.length);
    setImageIndex(0);
  };

  const prev = () => {
    setActive((p) => (p === 0 ? projects.length - 1 : p - 1));
    setImageIndex(0);
  };

  return (
    <section id="projects" className="relative w-full py-20 bg-black">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-tech tracking-widest text-[#E6FF00]">
          PROJECTS
        </h2>
        <p className="mt-3 text-gray-400 text-sm md:text-base">
          Selected real-world systems and platforms.
        </p>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden mt-12 px-6">
        <div className="rounded-xl overflow-hidden border border-[#E6FF00]/20">
          <img
            src={activeProject.images[imageIndex].src}
            className="w-full h-[220px] object-contain bg-black"
          />
        </div>

        {/* indicators */}
        <div className="flex gap-2 mt-4">
          {activeProject.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setImageIndex(i)}
              className={`h-2 w-6 rounded-full ${
                i === imageIndex ? "bg-[#E6FF00]" : "bg-white/20"
              }`}
            />
          ))}
        </div>

        <h3 className="mt-6 text-xl font-tech text-[#E6FF00]">
          {activeProject.title}
        </h3>

        <p className="mt-3 text-sm text-gray-300">
          {activeProject.desc}
        </p>

        <p className="mt-4 text-xs tracking-widest text-gray-500">
          {activeProject.tech}
        </p>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block relative mt-20 max-w-7xl mx-auto px-6">
        <div className="flex gap-12">
          {/* CAROUSEL */}
          <div className="relative w-[70%] h-[460px]">
            <AnimatePresence initial={false}>
              {projects.map((p, i) => {
                const offset = i - active;
                if (Math.abs(offset) > 2) return null;

                return (
                  <motion.div
                    key={p.title}
                    animate={{
                      x: `${offset * 55}%`,
                      scale: offset === 0 ? 1 : 0.75,
                      opacity: offset === 0 ? 1 : 0.2,
                      filter: offset === 0 ? "blur(0)" : "blur(5px)",
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    className={`absolute rounded-xl overflow-hidden
                      ${offset === 0 ? "w-full h-full" : "w-[55%] h-[300px]"}
                      bg-[#0B0B0D] border border-[#E6FF00]/20`}
                  >
                    <img
                      src={p.images[offset === 0 ? imageIndex : 0].src}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* META */}
          <div className="w-[30%] flex flex-col justify-center">
            <h3 className="text-2xl font-tech text-[#E6FF00]">
              {activeProject.title}
            </h3>

            <p className="mt-4 text-sm text-gray-300">
              {activeProject.desc}
            </p>

            <p className="mt-6 text-xs tracking-widest text-gray-400">
              {activeProject.tech}
            </p>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="mt-12 flex justify-center gap-6">
        <button onClick={prev} className="btn-neon">PREV</button>
        <button onClick={next} className="btn-neon">NEXT</button>
      </div>
    </section>
  );
}
