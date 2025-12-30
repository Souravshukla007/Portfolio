"use client";
import React from "react";
import Image from "next/image";
import ScrollFloat from '../../components/ScrollFloat';
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import kargilFlagImage from "../assets/kargil-flag.jpg";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 dark:bg-[#001F3D] text-gray-900 dark:text-white py-24 px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="relative h-[400px] md:h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
          <Image
            src={kargilFlagImage}
            alt="National Flag at Dras"
            fill
            className="object-cover"
            priority
          />
        </div>

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
              <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-12 py-4 rounded-full text-lg font-bold hover:bg-nature-green transition-all transform active:scale-95">
                Contact Us
              </button>

              <div className="flex gap-6 text-xl">
                <a href="#" className="hover:text-nature-red transition-colors"><FaLinkedin /></a>
                <a href="#" className="hover:text-nature-yellow transition-colors"><FaInstagram /></a>
                <a href="#" className="hover:text-nature-green transition-colors"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
