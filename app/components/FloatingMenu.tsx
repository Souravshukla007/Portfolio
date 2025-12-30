"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const radius = 80;
  const angles = [70, 110, 150, 190];
  const socialLinks = [
    "https://github.com/Souravshukla007",
    "https://www.linkedin.com/in/sourav-shukla-baidya-6bb132316/",
    "https://www.instagram.com/souravshukla_51?utm_source=qr&igsh=d3VrbWx1ajQ0M3gz",
    "https://x.com/SSB_777"
  ];

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <AnimatePresence>
        {isOpen && (
          <>
            {[FaGithub, FaLinkedin, FaInstagram, FaTwitter].map((Icon, idx) => {
              const angle = angles[idx];
              const radian = (angle * Math.PI) / 180;
              const x = radius * Math.cos(radian);
              const y = -radius * Math.sin(radian);

              return (
                <motion.a
                  key={idx}
                  href={socialLinks[idx]}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="absolute text-gray-900 dark:text-white hover:text-nature-green transition-colors"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={isOpen ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={{
          scale: {
            repeat: isOpen ? Infinity : 0,
            repeatType: "reverse",
            duration: 0.6,
            ease: "easeInOut"
          }
        }}
        className="text-gray-900 dark:text-white flex items-center justify-center"
      >
        <span className="text-4xl">{isOpen ? "🔺" : "👩‍💻"}</span>
      </motion.button>
    </div>
  );
}
