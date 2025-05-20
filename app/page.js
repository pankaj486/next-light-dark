'use client';

import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="w-full shadow bg-white/70 dark:bg-gray-800/70 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Header />
        </div>
      </header>
      <HeroSection />
      <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </span>
          <div className="space-x-4">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}