"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-md w-full mx-auto border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md dark:shadow-lg space-y-6 my-20 px-4"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
        Sign In
      </h2>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Sign In
      </motion.button>
    </motion.form>
  );
}
