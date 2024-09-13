"use client";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          © 2024 Geek Room Student Chapter, KRMU. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-500">
            <span>Facebook</span>
          </a>
          <a href="#" className="hover:text-blue-500">
            <span>Twitter</span>
          </a>
          <a href="#" className="hover:text-blue-500">
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
