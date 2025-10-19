"use client";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold">Graduation Guru</h3>
          <p className="text-indigo-200 mt-2">Empowering students to succeed online and offline.</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="hover:text-pink-400 transition">Courses</a>
          <a href="#" className="hover:text-pink-400 transition">About</a>
          <a href="#" className="hover:text-pink-400 transition">Contact</a>
          <a href="#" className="hover:text-pink-400 transition">Careers</a>
        </div>
      </div>

      <div className="text-center text-indigo-200 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Graduation Guru. All rights reserved.
      </div>
    </footer>
  );
}
