"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Sidebar, { SidebarToggle } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    console.log('Sidebar toggle clicked, current state:', sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen w-full bg-gray-900 overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Top Header */}
      <header className="w-full h-20 bg-gray-800 backdrop-blur-sm border-b border-gray-700 flex items-center justify-between px-8">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image src="/official-logo.png" alt="ByteFlux" width={40} height={40} className="w-10 h-10 object-contain" />
          </div>
          <div className="text-white">
            <div className="text-xl font-bold">BYTEFLUX</div>
            <div className="text-sm text-gray-300">INSIGHT</div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <SidebarToggle onClick={handleSidebarToggle} />
        </div>
      </header>

      {/* Main Content Area - Hero Section */}
      <main className="h-[calc(100vh-5rem)]">
        <div className="h-full flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700">
          <div className="text-center px-8">
            <h2 className="text-6xl font-bold mb-6 text-white">
              Master Programming
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              From beginner to expert. Structured courses, hands-on projects.
            </p>
            <div className="flex gap-6 justify-center">
              <Button size="lg" className="text-xl px-12 py-8">
                Start Learning
                <ChevronRight className="ml-3 w-6 h-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-12 py-8">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
