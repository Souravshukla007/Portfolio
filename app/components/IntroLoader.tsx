"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const words = ["नमस्ते", "Hello", "Hola", "こんにちは","Привет"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length) {
      setTimeout(onComplete, 500);
      return;
    }
    const timeout = setTimeout(() => setIndex(index + 1), 500);
    return () => clearTimeout(timeout);
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-nature-blue flex items-center justify-center text-white text-6xl font-bold"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
