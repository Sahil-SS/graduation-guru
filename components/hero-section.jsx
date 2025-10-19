// /components/hero-section.js
"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/banner.jpg"
          alt="Graduation and learning"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Overlay text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-indigo-900 mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Graduation Guru
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-indigo-800 mb-8 max-w-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Your one-stop platform for online courses, guidance, and learning resources to ace your degree.
        </motion.p>

        <motion.a
          href="#courses"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Explore Top Courses
        </motion.a>
      </div>
    </section>
  );
}
