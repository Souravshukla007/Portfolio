"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollFloat from '../../components/ScrollFloat';
import Image from "next/image";
import potholeImage from "../assets/pothole.png";
import jarvisImage from "../assets/jarvis.png";
import foodImage from "../assets/food.png";
import ssbImage from "../assets/ssb.jpg";
import todoImage from "../assets/todo.png";
import dashDriveImage from "../assets/dashhdrive.png";

const projects = [
  {
    title: "lakshyaSSB",
    color: "#d41e1eff",
    desc: "An SSB preparation web platform designed to help defence aspirants systematically prepare for the Services Selection Board (SSB) process with structured resources and practice materials.",
    image: ssbImage,
    link: "https://www.lakshyassb.online/",
    category: "Full Stack Development | 2026"
  },
  {
    title: "DashDrive",
    color: "#1dd14aff",
    desc: "A modern ride-booking web application built with Next.js, Tailwind CSS, MongoDB, and Rust, featuring a skeuomorphic 3D dashboard UI, real-time booking, EV-focused mobility, and smart features like “Hospital on Road” and “No Pin No Pay.",
    image: dashDriveImage,
    link: "https://dash-drive95.vercel.app/",
    category: "MERN Stack Development | 2026"
  },
  {
    title: "SadakSathi",
    color: "#3452bdff",
    desc: "A Smart pothole detection web platform developed using React, Flask, Python, and machine learning, integrating Geopy for location services and Firebase. It automates pothole detection and provides real-time reporting.",
    image: potholeImage,
    link: "https://sadak-sathi-chi.vercel.app/",
    category: "ML & Web Development | 2026"
  },
  {
    title: "Memoirly",
    color: "#2196F3",
    desc: "A Simple and efficient ToDo List web application designed to help users organize tasks, manage priorities, and track progress easily through a clean and intuitive interface.",
    image: todoImage,
    link: "https://memoirly-alpha.vercel.app/login",
    category: "Full Stack Development | 2026"
  },
  {
    title: "Food Wagon",
    color: "#FF9800",
    desc: "A Responsive food-ordering website built using HTML, CSS, JavaScript, and Bootstrap, featuring an intuitive user interface for seamless menu browsing and order placement.",
    image: foodImage,
    link: "https://food-wagon-nu.vercel.app/",
    category: "Frontend Development | 2024"
  },
  {
    title: "J.A.R.V.I.S",
    color: "#dc13e3ff",
    desc: "A Multi-lingual AI chatbot designed to enable seamless cross-language communication through intelligent conversational flows and integrated language processing modules.",
    image: jarvisImage,
    link: "https://multilingual-chatbot-nine.vercel.app/",
    category: "AI & NLP | 2025"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white dark:bg-[#040D12] py-24 px-4">
      <p className="text-center text-sm text-nature-blue tracking-[0.3em] uppercase opacity-70 mb-2">
          What I have Contribute
        </p>
      <ScrollFloat containerClassName="font-black text-gray-900 dark:text-white text-center mb-16" textClassName="text-8xl md:text-7xl">Projects</ScrollFloat>
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {projects.map((project, i) => (
          <ProjectCard key={i} i={i} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, color, desc, image, link, i, likes, category }: any) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9 - i * 0.05]);

  // Convert hex color to rgba with 80% opacity for transparency
  const hexToRgba = (hex: string, alpha: number = 0.8) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const transparentColor = hexToRgba(color, 0.65);

  return (
    <div ref={container} className="h-screen sticky top-24 flex items-center justify-center">
      <motion.div
        style={{ scale, backgroundColor: transparentColor, top: `calc(-5% + ${i * 25}px)` }}
        className="relative h-auto md:h-[550px] w-full rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden border border-white/30 backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-8 text-white"
      >

        <div className="flex flex-col flex-1">
          <p className="text-sm font-medium opacity-80 mb-2 uppercase tracking-wider">{category}</p>
          <h3 className="text-4xl md:text-7xl font-bold mb-4 text-nature-white">{title}</h3>

          <div className="w-full h-[5px] bg-white/30 mb-6" />

          <p className="text-lg md:text-2xl leading-relaxed opacity-90 mb-2 line-clamp-6">
            {desc}
          </p>

          <div className="flex justify-start mt-auto">
            <a
              href={link}
              target="_blank"
              className="bg-white text-black px-8 py-3 rounded-full w-fit font-bold text-2xl hover:bg-nature-blue transition-colors shadow-lg"
            >
              Website ↗
            </a>
          </div>
        </div>

        <div className="relative h-48 md:h-64 group flex-shrink-0">
          <div className="relative md:mt-35 w-full h-full rounded-2xl overflow-hidden border-4 border-black/20 shadow-2xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
