"use client";
import React from "react";
import Image from "next/image";
import ScrollFloat from '../../components/ScrollFloat';
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import PixelTransition from '../../components/PixelTransition';
import kargilFlagImage from "../assets/kargil-flag.jpg";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 dark:bg-[#001F3D] text-gray-900 dark:text-white py-24 px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

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
                backgroundColor: "#111"
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Jai Hind </p>
            </div>
          }
          gridSize={12}
          pixelColor='#ffffff'
          once={false}
          animationStepDuration={0.7}
          className="h-[400px] md:h-[600px] w-full rounded-sm shadow-2xl"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '0.125rem'
          }}
        />

        <div className="flex flex-col">
          <ScrollFloat tag="h2" containerClassName="font-black tracking-tighter mb-10 text-gray-900 dark:text-white" textClassName="text-7xl md:text-9xl">
            Contact Me
          </ScrollFloat>

          <div className="border border-gray-900 dark:border-white p-8 md:p-12 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-15">

              <form className="md:col-span-2 space-y-8">
                <div className="relative">
                  <label className="block text-sm font-bold uppercase mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-gray-900 dark:border-white pb-2 outline-none focus:border-nature-green transition-colors"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-bold uppercase mb-2">E-mail</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-gray-900 dark:border-white pb-2 outline-none focus:border-nature-green transition-colors"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-bold uppercase mb-2">Message</label>
                  <textarea
                    rows={1}
                    className="w-full bg-transparent border-b border-gray-900 dark:border-white pb-2 outline-none focus:border-nature-green transition-colors resize-none"
                  />
                </div>
              </form>

              <div className="md:col-span-1 space-y-10">
                <div>
                  <h4 className="text-xl font-bold mb-1">Contact</h4>
                  <p className="text-lg opacity-80">souravshukla097@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Based in</h4>
                  <p className="text-lg opacity-80">Hyderabad, Telangana<br/>India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-12 py-4 rounded-full text-xl font-bold relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#0000FF] before:to-[#00BFFF] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                Contact Me
              </button>

              <div className="flex gap-6 text-2xl">
                <div className="group relative">
                  <a href="#" className="transition-colors">
                    <FaLinkedin className="hover:scale-125 duration-200 hover:text-nature-red" />
                  </a>
                  <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">LinkedIn</span>
                </div>
                <div className="group relative">
                  <a href="#" className="transition-colors">
                    <FaInstagram className="hover:scale-125 duration-200 hover:text-nature-yellow" />
                  </a>
                  <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">Instagram</span>
                </div>
                <div className="group relative">
                  <a href="#" className="transition-colors">
                    <FaTwitter className="hover:scale-125 duration-200 hover:text-nature-green" />
                  </a>
                  <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">Twitter</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
