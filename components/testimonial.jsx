"use client";

import { motion } from "framer-motion";

const testimonials = [
  { name: "Aarav Sharma", feedback: "Graduation Guru helped me ace my exams with excellent resources!", course: "BBE Semester 2" },
  { name: "Priya Kapoor", feedback: "The online courses are detailed and easy to follow. Highly recommend!", course: "Data Science" },
  { name: "Rohan Mehta", feedback: "Interactive and well-structured content. Truly valuable.", course: "Finance & Investment" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">What Our Students Say</h2>
        <p className="text-indigo-800 mt-4 max-w-2xl mx-auto">
          Hear directly from our students about how Graduation Guru has helped them excel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {testimonials.map((testi, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
          >
            <p className="text-indigo-800 mb-4">&quot;{testi.feedback}&quot;</p>
            <h4 className="text-indigo-900 font-semibold">{testi.name}</h4>
            <span className="text-indigo-600 text-sm">{testi.course}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
