'use client';

import * as motion from "motion/react-client";
import { Sparkles, Moon, Sun, Rocket } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function HeroSection() {
  return (
    <main className="relative overflow-hidden bg-white dark:bg-black flex-grow flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="absolute w-[30rem] h-[30rem] bg-purple-300 opacity-30 rounded-full top-[-10rem] left-[-10rem] blur-3xl dark:bg-purple-700 z-0"></div>
      <div className="absolute w-[20rem] h-[20rem] bg-pink-300 opacity-30 rounded-full bottom-[-8rem] right-[-8rem] blur-2xl dark:bg-pink-700 z-0"></div>
      <div className="relative z-10">
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Welcome to Your Next.js App
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Smooth, theme-aware, animated and ready for production. Built with Tailwind CSS and Framer Motion.
        </motion.p>

        <motion.button
          className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[ 
            { icon: <Sparkles size={28} />, title: "Beautiful UI", desc: "Tailwind + animation = magic." },
            { icon: <Moon size={28} />, title: "Dark Mode", desc: "Respecting your theme preference." },
            { icon: <Rocket size={28} />, title: "Ready to Deploy", desc: "Optimized and scalable structure." }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={i + 2}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="mb-3 text-blue-600 dark:text-blue-400">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

