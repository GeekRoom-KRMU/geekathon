"use client";

import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-screen w-full bg-slate-900 flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <div className="relative flex-grow flex items-center justify-center overflow-hidden">
        <Boxes />
        <div className="relative z-10 text-center space-y-6">
          {/* Large span for Geekathon'24 text */}
          <span className="text-white font-orbitron font-bold text-[4rem] md:text-[6rem] lg:text-[7rem] dark:text-white">
            Geekathon&apos;24
          </span>

          <h1 className="text-center text-white font-orbitron text-2xl lg:text-3xl font-bold dark:text-white">
            Join the Ultimate Hackathon Experience!
          </h1>

          <p className="text-center text-neutral-300 relative z-20 max-w-lg mx-auto">
            Unleash your creativity and innovation at Geekathon 2024, hosted by the
            Geek Room Student Chapter of KRMU.
          </p>

          {/* Updated Register Now button */}
          <a href="https://geekroom.krmu.ac.in/geekathon" className="inline-block mt-6">
            <button className="px-8 py-2 border border-white bg-transparent text-black dark:border-white relative group transition duration-200">
              {/* White outline with blue background hover */}
              <div className="absolute -bottom-2 -right-2 bg-blue-500 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200 border border-white" />
              <span className="relative text-black dark:text-white font-orbitron">Register Now</span>
            </button>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-neutral-400 py-4 bg-slate-800">
        © 2024 Geek Room Student Chapter, KRMU
      </footer>
    </div>
  );
}