import React from "react";
import Image from "next/image";
import { Boxes } from "@/components/ui/background-boxes";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { TimelineDemo } from "@/components/timeline";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 bg-opacity-80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/geekroom_logo.png" alt="GR-KRMU Logo" width={40} height={40} />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#about" className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link href="#timeline" className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium">Timeline</Link>
              <Link href="/community" className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium">Community</Link>
            </div>
          </div>
          <div>
            <a href="https://unstop.com/p/geekathon-kr-mangalam-universtiy-1152218" target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="px-4 py-2 border border-white bg-transparent text-white relative group transition duration-200">
                <div className="absolute -bottom-1 -right-1 bg-blue-500 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200 border border-white" />
                <span className="relative font-orbitron">Register Now</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Home: React.FC = () => {
  const words = [
    {
      text: "Geekathon'24",
      className: "text-white font-orbitron font-bold text-[3rem] md:text-[4rem] lg:text-[5rem] dark:text-white",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-900 flex flex-col">
      <Navbar />
      <div className="fixed inset-0 z-0">
        <Boxes />
      </div>
      <main className="relative z-10 flex-grow flex flex-col items-center justify-start pt-20 pb-10 px-4">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mt-8">
            <Image src="/KRMU_logo.png" alt="KRMU Logo" width={100} height={100} />
            <Image src="/geekroom_logo.png" alt="Geek Room Logo" width={100} height={100} />
            <Image src="/unstop-non.png" alt="Unstop Logo" width={100} height={100} />
          </div>
          <h1 className="text-center text-white font-orbitron text-xl lg:text-2xl font-bold dark:text-white">
            Join the Ultimate Hackathon Experience!
          </h1>
          <p className="text-center text-neutral-300 font-orbitron max-w-lg mx-auto">
            Unleash your creativity and innovation at Geekathon 2024, hosted by the
            Geek Room Student Chapter of KRMU.
          </p>
        </div>
        <div id="about" className="mt-20 w-full max-w-4xl">
          <About />
        </div>
        <div id="timeline" className="mt-20 w-full max-w-4xl">
          <TimelineDemo />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Home;