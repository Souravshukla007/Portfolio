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

const projects = [
  {
    title: "eNivaran",
    color: "#4CAF50",
    desc: "A Smart pothole detection web platform developed using React, Flask, Python, and machine learning, integrating Geopy for location services and Firebase. It automates pothole detection and provides real-time reporting.",
    image: potholeImage,
    link: "#",
    category: "ML & Web Development | 2024"
  },
  {
    title: "J.A.R.V.I.S",
    color: "#2196F3",
    desc: "A Multi-lingual AI chatbot designed to enable seamless cross-language communication through intelligent conversational flows and integrated language processing modules.",
    image: jarvisImage,
    link: "https://multilingual-chatbot-nine.vercel.app/",
    category: "AI & NLP | 2025"
  },
  {
    title: "Food Wagon",
    color: "#FF9800",
    desc: "A Responsive food-ordering website built using HTML, CSS, JavaScript, and Bootstrap, featuring an intuitive user interface for seamless menu browsing and order placement.",
    image: foodImage,
    link: "https://food-wagon-nu.vercel.app/",
    category: "Frontend Development | 2023"
  },
  {
    title: "lakshyaSSB",
    color: "#d41e1eff",
    desc: "An SSB preparation web platform designed to help defence aspirants systematically prepare for the Services Selection Board (SSB) process with structured resources and practice materials.",
    image: ssbImage,
    link: "#",
    category: "Full Stack Development | 2025"
  },
  {
    title: "Todo-List",
    color: "#dc13e3ff",
    desc: "A Simple and efficient ToDo List web application designed to help users organize tasks, manage priorities, and track progress easily through a clean and intuitive interface.",
    image: todoImage,
    link: "#",
    category: "Backend Development | 2025"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white dark:bg-[#001F3D] py-20 px-4">
      <p className="text-center text-sm text-nature-green tracking-[0.3em] uppercase opacity-70 mb-2">
          What I have Contribute
        </p>
      <ScrollFloat containerClassName="font-bold text-gray-900 dark:text-white text-center mb-16" textClassName="text-5xl">Projects</ScrollFloat>
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

  return (
    <div ref={container} className="h-screen sticky top-24 flex items-center justify-center">
      <motion.div
        style={{ scale, backgroundColor: color, top: `calc(-5% + ${i * 25}px)` }}
        className="relative h-auto md:h-[550px] w-full rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden border border-white/20 grid grid-cols-1 md:grid-cols-2 gap-8 text-white"
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
            //   className="bg-white text-black px-8 py-3 rounded-full w-fit font-bold text-lg hover:bg-nature-green transition-colors shadow-lg"
            // >
              className="bg-white text-black px-10 py-5 rounded-full w-fit font-bold text-2xl bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
>
              Website <svg
    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg>
            </a>
          </div>
        </div>

        <div className="relative h-48 md:h-64 group flex-shrink-0">
          <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-black/20 shadow-2xl">
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
