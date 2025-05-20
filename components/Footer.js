"use client";

import * as motion from "motion/react-client";
import { Github, Twitter, Linkedin } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-600 dark:text-gray-300">
        <motion.div custom={0} variants={fadeInUp}>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            About MyApp
          </h4>
          <p className="leading-relaxed">
            MyApp is a modern platform built with Next.js and Tailwind CSS.
            Enjoy a seamless, animated, and responsive UI with built-in dark
            mode.
          </p>
        </motion.div>
        <motion.div custom={1} variants={fadeInUp}>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {["Home", "Privacy Policy", "Terms of Service", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div custom={2} variants={fadeInUp}>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Follow Us
          </h4>
          <div className="flex space-x-5 mt-2">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label={`Social icon ${i}`}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        custom={3}
        variants={fadeInUp}
        className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-xs text-gray-500 dark:text-gray-400"
      >
        &copy; {year} MyApp. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
