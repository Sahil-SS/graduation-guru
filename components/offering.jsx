"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Gift, MessageCircle, Briefcase } from "lucide-react";

const offerings = [
  { title: "Courses", desc: "Access our top-rated online courses.", icon: <BookOpen size={30} className="text-indigo-600" /> },
  { title: "Free Content", desc: "Explore free learning resources.", icon: <Gift size={30} className="text-pink-500" /> },
  { title: "Get in Touch", desc: "Reach out for guidance and support.", icon: <MessageCircle size={30} className="text-purple-600" /> },
  { title: "Careers", desc: "Kickstart your career with our programs.", icon: <Briefcase size={30} className="text-green-600" /> },
];

export default function OfferingsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">Best Offerings for You</h2>
        <p className="text-indigo-800 mt-4 max-w-2xl mx-auto">
          Explore a wide range of courses and resources tailored to help you excel in your studies and career.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
        {offerings.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <Card className="hover:shadow-xl hover:scale-105 transition-transform rounded-2xl border-none bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
              <CardHeader className="flex justify-center mb-4">{item.icon}</CardHeader>
              <CardContent className="text-center">
                <h3 className="text-xl font-semibold text-indigo-900">{item.title}</h3>
                <p className="text-indigo-800 mt-2">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
