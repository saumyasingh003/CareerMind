"use client";

import HeroSection from "@/components/HeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { ArrowRight } from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 blur-3xl opacity-30 -z-10" />

      <div className="grid-background"></div>

      {/* Hero */}
      <HeroSection />

      {/* Trusted Companies */}
      <section className="py-14 border-y border-red-100 bg-[#fffaf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-center text-sm font-medium tracking-[0.3em] text-red-400 uppercase mb-10">
            Trusted By Learners & Professionals From
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 text-2xl font-semibold text-gray-400">
            <span>Google</span>
            <span>Microsoft</span>
            <span>Amazon</span>
            <span>Netflix</span>
            <span>Meta</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-24 lg:py-32 bg-gradient-to-b from-[#fff5f5] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-red-500 mb-4">
              Features
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Powerful AI Tools for{" "}
              <span className="text-red-500">Career Growth</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to prepare, improve, and accelerate your
              professional journey with AI-powered guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="
                group
                rounded-3xl
                border
                border-red-100
                bg-white
                hover:-translate-y-2
                hover:border-red-300
                hover:shadow-[0_20px_60px_rgba(239,68,68,0.12)]
                transition-all
                duration-300
                "
              >
                <CardContent className="p-8 flex flex-col items-center text-center">

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {feature.description}
                  </p>

                  <div className="mt-6 h-1 w-12 rounded-full bg-red-100 group-hover:w-20 group-hover:bg-red-500 transition-all duration-300" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    

      {/* How It Works */}
      <section className="w-full py-24 lg:py-32 bg-[#fffaf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-red-500 mb-4">
              Process
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              How It Works
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Four simple steps to accelerate your professional growth with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="
                relative
                rounded-3xl
                border
                border-red-100
                bg-white
                p-8
                hover:shadow-xl
                transition-all
                "
              >
                <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>

                <span className="absolute top-6 right-6 text-5xl font-bold text-red-50">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-red-500 mb-4">
              Testimonials
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              What Our Users Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonial.map((testimonial, index) => (
              <Card
                key={index}
                className="
                rounded-3xl
                border
                border-red-100
                bg-white/80
                backdrop-blur-xl
                shadow-lg
                hover:shadow-2xl
                transition-all
                "
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      width={60}
                      height={60}
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="rounded-full object-cover border-2 border-red-100"
                    />

                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.author}
                      </p>

                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>

                      <p className="text-sm text-red-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic leading-8">
                    “{testimonial.quote}”
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-24 bg-[#fffaf9]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-red-500 mb-4">
              FAQ
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="
                rounded-2xl
                border
                border-red-100
                bg-white
                px-6
                shadow-sm
                "
              >
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-gray-600 leading-7">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative  mx-20 mt-16 mb-10 overflow-hidden rounded-[40px]">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banner2.webp"
            alt="Career Illustration"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Blur Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 py-28">
          <div className="max-w-3xl mx-auto text-center">

            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-red-300 mb-5">
              Start Your Journey
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Build Your Future With
              <span className="block text-red-400">
                AI-Powered Career Guidance
              </span>
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-8 text-gray-200">
              Join thousands of students and professionals accelerating their careers
              with personalized AI tools, interview preparation, and smart career insights.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">

              <Button
                size="lg"
                className="
                h-14
                px-8
                rounded-xl
                bg-red-500
                hover:bg-red-600
                text-white
                shadow-[0_10px_40px_rgba(239,68,68,0.35)]
                transition-all
                duration-300
                "
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="
                h-14
                px-8
                rounded-xl
                border-white/30
                bg-white/10
                backdrop-blur-xl
                text-white
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
                "
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}