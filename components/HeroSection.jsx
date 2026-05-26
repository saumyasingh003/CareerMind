"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (imageElement) {
        if (scrollPosition > 80) {
          imageElement.classList.add(
            "scale-[0.98]",
            "translate-y-2",
            "opacity-90"
          );
        } else {
          imageElement.classList.remove(
            "scale-[0.98]",
            "translate-y-2",
            "opacity-90"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden mt-10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/40 to-white -z-10" />

      {/* Blur Effects */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        <div className="flex flex-col items-center text-center">



          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1]">
            Your{" "}
            <span className="bg-gradient-to-r from-[#ed4a09] to-orange-500 bg-clip-text text-transparent">
              AI Career
            </span>{" "}
            Coach for
            <span className="block">
              Professional Success
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8  text-lg leading-8 text-gray-600 md:text-xl">
            Accelerate your career with AI-powered interview preparation,
            resume optimization, personalized roadmaps, and smart career
            insights built for modern professionals.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="h-14 px-8 text-base rounded-xl bg-[#ed4a09] hover:bg-[#d84306] shadow-lg shadow-orange-500/20 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-xl border-gray-300 hover:bg-gray-100 transition-all duration-300"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative mt-20 w-full max-w-6xl">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-orange-400/20 blur-3xl rounded-[40px]" />

            {/* Main Image */}
         <div
  ref={imageRef}
  className="relative transition-all duration-500 ease-out max-w-5xl mx-auto"
>
  <div className="overflow-hidden rounded-[28px] border-[6px] border-black bg-white shadow-2xl">
    <Image
      src="/banner1.avif"
      width={900}
      height={500}
      alt="AI Career Dashboard"
      priority
      className="w-full object-cover"
    />
  </div>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;