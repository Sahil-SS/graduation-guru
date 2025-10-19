"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [
    {
      num: "01",
      title: "Experienced Mentors",
      desc: "Our mentors are university toppers and subject experts who know how to simplify concepts.",
    },
    {
      num: "02",
      title: "Student-Centric Learning",
      desc: "Courses designed with feedback from students to ensure maximum clarity and results.",
    },
    {
      num: "03",
      title: "Flexible and Affordable",
      desc: "Learn at your own pace without burning your pocket — high quality meets accessibility.",
    },
  ];

  return (
    <section id="why-choose-us" className="bg-muted py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all"
            >
              <span className="text-5xl font-extrabold text-primary/30">
                {r.num}
              </span>
              <h3 className="text-xl font-semibold mt-4 mb-2">{r.title}</h3>
              <p className="text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
