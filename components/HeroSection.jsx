"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // Ensure the code runs only on the client
    if (typeof window === "undefined") return;

    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (imageElement) {
        if (scrollPosition > scrollThreshold) {
          imageElement.classList.add("scrolled");
        } else {
          imageElement.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (

    <div className="striped-background">
 <section className="w-fit pt-36 mt:pt-48 pb-10 mx-auto   ">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>

        <div className="space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 bg-[#ed4a09]">
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" className="px-8" variant="outline">
              Watch Demo
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper  mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src={"/banner1.jpg"}
              width={1000}
              height={200}
              alt="dashboard image"
              className="text-center rounded-lg shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
   
  );
};

export default HeroSection;
