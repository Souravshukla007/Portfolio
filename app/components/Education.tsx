"use client";
import React from "react";
import { motion } from "framer-motion";
import ScrollFloat from '../../components/ScrollFloat';

const educationData = [
  {
    institution: "Indian Institute of Information Technology Nagpur",
    degree: "Bachelor of Technology - BTech, Data Science & Analytics",
    date: "Aug 2023 - Jul 2027",
    skills: "Web Development · Python · C",
  },
  {
    institution: "Army Public School (APS), Golconda, Hyderabad",
    degree: "Senior Secondary Education (Class 9th-12th)",
    date: "2018 - 2022",
    activities: "Basketball, Badminton",
    skills: "Team Leadership",
  },
  {
    institution: "Army Public School (APS), Lansdowne, Uttarakhand",
    degree: "Primary & Secondary Education",
    date: "2014 - 2018",
    activities: "Football, Cricket, kabaddi",
  },
  {
    institution: "Army Public School (APS), Tibri Cantt, Gurdaspur",
    degree: "Primary Education",
    date: "2012 - 2014",
    activities: "Summer Camp, Social Work",
  },
  {
    institution: "Army Public School (APS), Tenga Valley, Arunachal Pradesh",
    degree: "Early Education",
    date: "Apr 2010 - May 2012",
    skills: "Acting",
  },
];

export function Education() {
  return (
    <section id="experience" className="bg-white dark:bg-[#040D12] text-gray-900 dark:text-white py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm tracking-[0.3em] uppercase opacity-70 mb-2 text-nature-blue">
          What I have studied so far
        </p>
        <ScrollFloat containerClassName="font-black text-center mb-20" textClassName="text-7xl md:text-7xl">Education</ScrollFloat>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-gray-900/20 dark:bg-white/20 h-full hidden md:block" />

          <div className="flex flex-col gap-12 md:gap-0">
            {educationData.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className="relative w-full h-32 md:h-40">
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`absolute w-full md:w-[45%] p-6 rounded-2xl border border-gray-900/10 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 backdrop-blur-sm hover:border-nature-green transition-colors group shadow-xl ${
                      isLeft
                        ? "left-0 md:left-0 md:mr-[55%]"
                        : "right-0 md:right-0 md:ml-[55%]"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-nature-blue group-hover:text-nature-green-light transition-colors">
                      {item.institution}
                    </h3>
                    <p className="text-nature-green font-medium mt-1 group-hover:text-nature-red transition-colors">{item.degree}</p>
                    <p className="text-sm opacity-60 italic mb-4">{item.date}</p>

                    {item.activities && (
                      <p className="text-sm mb-2">
                        <span className="opacity-60">Activities:</span> {item.activities}
                      </p>
                    )}

                    {item.skills && (
                      <p className="text-sm text-gray-900/90 dark:text-white/90">
                        <span className="text-nature-red font-semibold">Skills:</span> {item.skills}
                      </p>
                    )}
                  </motion.div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-[#001F3D] border-4 border-gray-900 dark:border-white z-10 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
