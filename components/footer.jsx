"use client";

import { Mail, MapPin, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 md:w-1/4">
          <h3 className="text-2xl font-bold">Graduation Guru</h3>
        </div>

        {/* Center: Contact Info */}
        <div className="flex flex-col items-center md:items-center md:w-1/2 space-y-2 text-indigo-200 text-center">
          <div className="flex items-center space-x-2">
            <MapPin size={18} className="text-pink-400" />
            <span>Rajouri Garden, New Delhi</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={18} className="text-pink-400" />
            <span>info.graduationguru@gmail.com</span>
          </div>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex space-x-4 md:w-1/4 justify-center md:justify-end">
          <a href="#" className="hover:text-pink-400 transition"><Instagram size={20} /></a>
          <a href="#" className="hover:text-pink-400 transition"><Twitter size={20} /></a>
          <a href="#" className="hover:text-pink-400 transition"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-pink-400 transition"><Facebook size={20} /></a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-indigo-200 mt-6 text-sm">
        &copy; {new Date().getFullYear()} Graduation Guru. All rights reserved.
      </div>
    </footer>
  );
}
