"use client";

import * as motion from "motion/react-client";
import { Sparkles, Moon, Sun, Rocket, Users, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const phrases = [
  "Build Next-Level Apps with Speed",
  "Craft Beautiful Interfaces Effortlessly",
  "Deploy Seamlessly to Production",
  "Scale with Confidence and Power",
];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeoutId;
    if (typing) {
      if (displayText.length < phrases[phraseIndex].length) {
        timeoutId = setTimeout(() => {
          setDisplayText(phrases[phraseIndex].slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, typing, phraseIndex]);

  return (
    <motion.main className="relative overflow-hidden bg-white dark:bg-black flex-grow flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="absolute w-[30rem] h-[30rem] bg-purple-300 opacity-30 rounded-full top-[-10rem] left-[-10rem] blur-3xl dark:bg-purple-700 z-0"></div>
      <div className="absolute w-[20rem] h-[20rem] bg-pink-300 opacity-30 rounded-full bottom-[-8rem] right-[-8rem] blur-2xl dark:bg-pink-700 z-0"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white min-h-[3rem]"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              {displayText}
              <span className="blinking-cursor">|</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Supercharged with Tailwind, Framer Motion, and responsive themes.
              Craft beautiful apps without the boilerplate.
            </motion.p>
          </div>
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <LottiePlayer />
          </motion.div>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mb-12"
        >
          <motion.button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
            Get Started
          </motion.button>
        </motion.div>
        <Card />
        <Info />
        <DisplayIcons />
        <TestoComment />
        <motion.div
          className="mt-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={8}
        >
          <button className="px-6 py-3 text-sm rounded-lg border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition">
            Join Waitlist
          </button>
        </motion.div>
      </div>
    </motion.main>
  );
}

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
      {[
        {
          icon: <Sparkles size={28} />,
          title: "Beautiful UI",
          desc: "Tailwind + animation = magic.",
        },
        {
          icon: <Moon size={28} />,
          title: "Dark Mode",
          desc: "Respecting your theme preference.",
        },
        {
          icon: <Rocket size={28} />,
          title: "Ready to Deploy",
          desc: "Optimized and scalable structure.",
        },
      ].map((feature, i) => (
        <motion.div
          key={feature.title}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={i + 2}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div className="mb-3 text-blue-600 dark:text-blue-400">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {feature.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

const Info = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-8 text-gray-800 dark:text-white mb-20"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      custom={5}
    >
      <div className="text-center">
        <h3 className="text-3xl font-bold">10K+</h3>
        <p className="text-sm">Developers onboarded</p>
      </div>
      <div className="text-center">
        <h3 className="text-3xl font-bold">99.9%</h3>
        <p className="text-sm">Uptime guaranteed</p>
      </div>
      <div className="text-center">
        <h3 className="text-3xl font-bold">24/7</h3>
        <p className="text-sm">Support availability</p>
      </div>
    </motion.div>
  );
};

const DisplayIcons = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-6 items-center opacity-70 mb-20"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      custom={6}
    >
      {["vercel", "stripe", "notion", "figma"].map((name) => (
        <img
          key={name}
          src={`https://cdn.jsdelivr.net/npm/simple-icons/icons/${name}.svg`}
          alt={`${name} logo`}
          className="h-8 w-8 sm:h-10 sm:w-10 opacity-60 hover:opacity-100 transition
                 dark:filter dark:invert dark:brightness-[1.2]"
        />
      ))}
    </motion.div>
  );
};

const TestoComment = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-md"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      custom={7}
    >
      <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
        “This boilerplate saved us weeks of work. It's fast, clean, and just
        works. Highly recommended!”
      </p>
      <div className="flex items-center gap-3 justify-center">
        <div className="w-10 h-10 bg-gray-400 rounded-full" />
        <div>
          <p className="font-semibold">Alex Johnson</p>
          <p className="text-xs text-gray-500">CTO, DevCorp</p>
        </div>
      </div>
    </motion.div>
  );
};

const LottiePlayer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex justify-center"
    >
      <DotLottieReact
        autoplay
        loop
        src="https://assets9.lottiefiles.com/packages/lf20_4kx2q32n.json"
        className="w-80 h-80"
      />
    </motion.div>
  );
};
