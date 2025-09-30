"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MainSidebar, { MainSidebarToggle } from "@/components/main-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSidebarToggle = () => {
    console.log('Sidebar toggle clicked, current state:', sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Try to play video when component mounts
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log('Video autoplay blocked:', error);
        });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full bg-white dark:bg-gray-900 overflow-hidden">
      <MainSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Top Header */}
      <header className="w-full h-20 bg-gray-100 dark:bg-gray-800 backdrop-blur-sm border-b border-gray-300 dark:border-gray-700 flex items-center justify-between px-8">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image src="/official-logo.png" alt="ByteFlux" width={40} height={40} className="w-10 h-10 object-contain" />
          </div>
          <div className="text-gray-900 dark:text-white">
            <div className="text-xl font-bold">BYTEFLUX</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">INSIGHT</div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <MainSidebarToggle onClick={handleSidebarToggle} />
        </div>
      </header>

      {/* Main Content Area - Hero Section */}
      <main className="h-[calc(100vh-5rem)] relative overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100%', minWidth: '100%' }}
        >
          <source src="/vedio/bg-vedio-of-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 z-0">
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gray-300 dark:bg-gray-600 opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gray-300 dark:bg-gray-600 opacity-20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gray-300 dark:bg-gray-600 opacity-20 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30 z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-8">
            <h2 className="text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Master Programming
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              From beginner to expert. Structured courses, hands-on projects.
            </p>
            <div className="flex gap-6 justify-center">
              <Button size="lg" className="text-xl px-12 py-8 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white">
                Start Learning
                <ChevronRight className="ml-3 w-6 h-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-12 py-8 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
