"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroLoader from "./components/IntroLoader";
import Projects from "./components/Projects";
import FloatingMenu from "./components/FloatingMenu";
import { Education } from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Typewriter from "./components/Typewriter";
import profileImage from "./assets/profile.jpg";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {!showIntro && <Navbar />}
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroLoader key="intro" onComplete={handleIntroComplete} />
        ) : (
          <main key="main" className="min-h-screen">
            <section className="min-h-screen bg-white dark:bg-[#001F3D] flex items-center justify-center px-4">
              <div className="text-center text-gray-900 dark:text-white">
                <div className="mb-8">
                  <img
                    src={profileImage.src}
                    alt="Profile"
                    className="w-[300px] h-[300px] rounded-full object-cover mx-auto transition-all duration-300 hover:grayscale hover:[transform:rotateY(180deg)] active:grayscale active:[transform:rotateY(180deg)] cursor-pointer"
                  />
                </div>

                <h1 className="text-6xl md:text-8xl font-bold mb-6">
                  <Typewriter
                    text="Hello, I'm Full Stack Developer"
                    speed={150}
                    className="text-nature-green"
                  />
                </h1>
                <p className="text-xl md:text-2xl text-gray-900/80 dark:text-white/80 max-w-2xl mx-auto">
                  I’m a pre-final year Computer Science student specializing in Data Science & Analytics, passionate about building user-focused, data-driven web applications and intelligent systems. I enjoy turning ideas into scalable, impactful products using modern technologies and AI.
                </p>
              </div>
            </section>

            <Skills />

            <Projects />

            <Education />

            <Contact />

            <FloatingMenu />
          </main>
        )}
      </AnimatePresence>
    </>
  );
}
