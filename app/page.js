"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <HeroSection />;
}
