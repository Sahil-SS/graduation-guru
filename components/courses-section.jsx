"use client";

import { motion } from "framer-motion";

const courses = [
  { title: "Business Economics", desc: "Learn core concepts and excel in your BBE syllabus.", color: "from-indigo-50 to-indigo-100" },
  { title: "Data Science", desc: "Master Python, AI, and ML to boost your career.", color: "from-pink-50 to-pink-100" },
  { title: "Finance & Investment", desc: "Understand markets and investment strategies.", color: "from-purple-50 to-purple-100" },
  { title: "Soft Skills", desc: "Improve communication, leadership, and teamwork.", color: "from-green-50 to-green-100" },
];

export default function CoursesSection() {
  return (
    <section className="py-20 bg-gray-50" id="courses">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Popular Courses</h2>
        <p className="text-indigo-800 mt-4 max-w-2xl mx-auto">
          Hand-picked courses designed to help you succeed academically and professionally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className={`p-6 rounded-2xl bg-gradient-to-br ${course.color} shadow-lg hover:shadow-2xl hover:scale-105 transition-transform cursor-pointer`}
          >
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">{course.title}</h3>
            <p className="text-indigo-800">{course.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
