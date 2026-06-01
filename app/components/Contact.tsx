"use client";
import React, { useState } from "react";
import Image from "next/image";
import ScrollFloat from "../../components/ScrollFloat";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import PixelTransition from "../../components/PixelTransition";
import kargilFlagImage from "../assets/kargil-flag.jpg";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type Status = "idle" | "loading" | "success" | "error";

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.message.trim() || data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    try {
      // Race against a 10-second timeout to prevent infinite loading
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out. Check Firestore rules or database setup.")), 10000)
      );
      await Promise.race([
        addDoc(collection(db, "contacts"), {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          timestamp: serverTimestamp(),
          read: false,
        }),
        timeoutPromise,
      ]);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Firestore error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-[#040D12] text-gray-900 dark:text-white py-24 px-6 md:px-20 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Pixel Transition Image ── */}
        <PixelTransition
          firstContent={
            <Image
              src={kargilFlagImage}
              alt="National Flag at Dras"
              fill
              className="object-cover"
              priority
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111",
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>
                Jai Hind{" "}
              </p>
            </div>
          }
          gridSize={12}
          pixelColor="#ffffff"
          once={false}
          animationStepDuration={0.7}
          className="h-[400px] md:h-[600px] w-full rounded-sm shadow-2xl"
          style={{
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "0.125rem",
          }}
        />

        {/* ── Right: Contact Form ── */}
        <div className="flex flex-col">
          <ScrollFloat
            tag="h2"
            containerClassName="font-black text-center tracking-tighter mb-10 text-gray-900 dark:text-white"
            textClassName="text-8xl md:text-7xl"
          >
            Contact Me
          </ScrollFloat>

          <div className="border border-gray-900 dark:border-white p-8 md:p-12 relative">

            {/* ── Success / Error Banners ── */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6 flex items-center gap-3 bg-green-50 dark:bg-green-900/30 border border-green-400 text-green-700 dark:text-green-300 px-5 py-4 rounded-xl"
                >
                  {/* Animated checkmark */}
                  <svg
                    className="w-6 h-6 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.path
                      d="M5 13l4 4L19 7"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </svg>
                  <span className="font-semibold text-sm">
                    Message sent! I&apos;ll get back to you soon. 🎉
                  </span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6 flex items-center gap-3 bg-red-50 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-300 px-5 py-4 rounded-xl"
                >
                  <svg
                    className="w-6 h-6 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span className="font-semibold text-sm">
                    Something went wrong. Please try again.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-15">

              {/* ── Form Fields ── */}
              <form
                onSubmit={handleSubmit}
                noValidate
                className="md:col-span-2 space-y-8"
              >
                {/* Name */}
                <div className="relative">
                  <label className="block text-sm font-bold uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "loading" || status === "success"}
                    placeholder="Sourav Shukla"
                    className={`w-full bg-transparent border-b pb-2 outline-none transition-colors placeholder:opacity-30 disabled:opacity-50
                      ${errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-900 dark:border-white focus:border-nature-blue"
                      }`}
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-sm font-bold uppercase mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "loading" || status === "success"}
                    placeholder="you@example.com"
                    className={`w-full bg-transparent border-b pb-2 outline-none transition-colors placeholder:opacity-30 disabled:opacity-50
                      ${errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-900 dark:border-white focus:border-nature-blue"
                      }`}
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block text-sm font-bold uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "loading" || status === "success"}
                    rows={3}
                    placeholder="Your message here..."
                    className={`w-full bg-transparent border-b pb-2 outline-none transition-colors resize-none placeholder:opacity-30 disabled:opacity-50
                      ${errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-900 dark:border-white focus:border-nature-blue"
                      }`}
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit Button — inside form so Enter submits */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="relative overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-12 py-4 rounded-full text-xl font-bold transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-nature-blue before:to-[#00BFFF] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-3">
                        {/* Spinner */}
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : status === "success" ? (
                      <span className="flex items-center gap-2">✓ Sent!</span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>

              {/* ── Info Column ── */}
              <div className="md:col-span-1 space-y-10">
                <div>
                  <h4 className="text-xl font-bold mb-1">Contact</h4>
                  <p className="text-lg opacity-80">souravshukla097@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Based in</h4>
                  <p className="text-lg opacity-80">
                    Hyderabad, Telangana
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* ── Social Icons Row ── */}
            <div className="mt-12 flex justify-end">
              <div className="flex gap-6 text-2xl">
                <div className="group relative">
                  <a href="#" className="transition-colors">
                    <FaLinkedin className="hover:scale-150 duration-300 hover:text-nature-red" />
                  </a>
                  <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    LinkedIn
                  </span>
                </div>
                <div className="group relative">
                  <a href="#" className="transition-colors">
                    <FaInstagram className="hover:scale-150 duration-300 hover:text-nature-yellow" />
                  </a>
                  <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    Instagram
                  </span>
                </div>
                <div className="group relative">
                  <a href="#" className="transition-colors">
                    <FaTwitter className="hover:scale-150 duration-300 hover:text-nature-blue" />
                  </a>
                  <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    Twitter
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
