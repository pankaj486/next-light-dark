'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMounted(true);
      const storedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      let initialTheme;
      if (storedTheme) {
        initialTheme = storedTheme;
      } else {
        initialTheme = prefersDark ? 'dark' : 'light';
        localStorage.setItem('theme', initialTheme);
      }
      
      setTheme(initialTheme);
      applyTheme(initialTheme);
      console.log('Theme initialized to:', initialTheme);
    }
  }, []);
  const applyTheme = (newTheme) => {
    if (typeof document !== 'undefined') {
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      console.log('Applied theme class:', newTheme, 'Dark class exists:', document.documentElement.classList.contains('dark'));
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    console.log('Theme toggled to:', newTheme);
  };
  if (!mounted) {
    return null;
  }

  return (
    <nav className="flex justify-between items-center w-full">
      <Link href="/" className="text-xl font-bold">
        MyApp
      </Link>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <Link href="/login">
          <button className="px-4 py-2 text-sm border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
}