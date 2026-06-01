"use client";
import { motion } from "framer-motion";
import ScrollFloat from '../../components/ScrollFloat';
import {
  FaPython,
  FaJs,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaAws,
  FaBootstrap,
  FaTable,
  FaFileExcel,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiTypescript,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiTailwindcss,
  SiJquery,
  SiTableau,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillsData = {
  languages: [
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "SQL", icon: FaDatabase, color: "#336791" },
    { name: "NoSQL", icon: SiMongodb, color: "#47A248" },
  ],
  frameworks: [
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "NextAuth", icon: SiNextdotjs, color: "#000000" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "REST APIs", icon: TbApi, color: "#FF6B6B" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "AWS EC2", icon: FaAws, color: "#FF9900" },
    { name: "AWS S3", icon: FaAws, color: "#FF9900" },
    { name: "jQuery", icon: SiJquery, color: "#0769AD" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "Tableau", icon: SiTableau, color: "#E97627" },
    { name: "Power BI", icon: FaTable, color: "#F2C811" },
    { name: "Excel", icon: FaFileExcel, color: "#217346" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  ],
};

const SkillBubble = ({ skill, index }: { skill: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { delay: index * 0.1, duration: 0.5 },
        scale: { delay: index * 0.1, duration: 0.5 },
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2 + (index % 3) * 0.5,
          delay: (index % 2) * 1,
        },
      }}
      whileHover={{
        scale: 1.4,
        transition: { duration: 0.09 },
      }}
      whileTap={{
        scale: 1.4,
        transition: { duration: 0.09 },
      }}
      className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gray-100/50 dark:bg-white/10 backdrop-blur-sm border border-gray-900/20 dark:border-white/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      <skill.icon
        size={24}
        className="mb-1 group-hover:scale-110 transition-transform duration-300"
        style={{ color: skill.color }}
      />
      <span className="text-xs font-medium text-gray-900 dark:text-white text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-[#040D12] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-nature-blue text-sm tracking-widest uppercase mb-2">
            What I work with
          </p>
          <ScrollFloat containerClassName="font-black text-gray-900 dark:text-white" textClassName="text-8xl md:text-7xl">
            Skills & Technologies
          </ScrollFloat>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <ScrollFloat tag="h3" containerClassName="font-bold text-gray-900 dark:text-white text-center mb-8" textClassName="text-2xl md:text-3xl">
            Languages
          </ScrollFloat>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {skillsData.languages.map((skill, index) => (
              <SkillBubble key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ScrollFloat tag="h3" containerClassName="font-bold text-gray-900 dark:text-white text-center mb-8" textClassName="text-2xl md:text-3xl">
            Frameworks & Tools
          </ScrollFloat>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {skillsData.frameworks.map((skill, index) => (
              <SkillBubble key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
