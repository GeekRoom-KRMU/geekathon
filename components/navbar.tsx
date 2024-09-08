"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold font-orbitron">Geekathon&apos;24</div>
        <div className="space-x-4">
          <a href="https://geekroom.in" className="hover:underline font-orbitron">
            <button className="px-2 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              About
            </button>
          </a>
          <a href="#timeline" className="hover:underline font-orbitron">
            <button className="px-2 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Timeline
            </button>
          </a>
          <a href="#contact" className="hover:underline font-orbitron">
            <button className="px-2 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Contact
            </button>
          </a>
          <a href="#venue" className="hover:underline font-orbitron">
            <button className="px-2 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Venue
            </button>
          </a>
          <a href="#venue" className="hover:underline font-orbitron">
            <button className="px-2 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Community
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
