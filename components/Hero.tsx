import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* Text Content */}
        <div className="text-center space-y-6">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I’m <span className="text-purple-500">Devadh</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl">
            Building modern web experiences with Next.js, React,
            TypeScript, and scalable backend systems.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link
              href="https://portfolio.devadh.site"
              target="_blank"
              className="bg-purple-600 hover:bg-purple-500 transition-all duration-300 px-6 py-3 rounded-xl font-medium shadow-lg shadow-purple-900/40"
            >
              View Portfolio
            </Link>

            <Link
              href="#"
              className="border border-white/20 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 px-6 py-3 rounded-xl font-medium"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-16 max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-purple-700/20 blur-3xl rounded-full" />

          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={1400}
            height={800}
            priority
            className="relative rounded-3xl border border-white/10 shadow-2xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
