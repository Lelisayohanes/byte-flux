"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import MainSidebar from "@/components/main-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  ArrowLeft,
  Play
} from "lucide-react";
import Link from "next/link";

// C++ specific sidebar data
const cppData = {
  title: "C++ Programming",
  icon: "⚡",
  topics: [
    "C++ Basics & Syntax",
    "Variables & Data Types",
    "Control Flow & Loops",
    "Functions & Function Overloading",
    "Object-Oriented Programming",
    "Classes & Objects",
    "Inheritance & Polymorphism",
    "Pointers & References",
    "Memory Management",
    "Dynamic Memory Allocation",
    "STL (Standard Template Library)",
    "Templates & Generic Programming",
    "Exception Handling",
    "File I/O Operations",
    "C++11/14/17/20 Features",
    "Performance Optimization",
    "Debugging & Profiling"
  ]
};

export default function CppPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mainSidebarOpen, setMainSidebarOpen] = useState(false);
  const currentCategory = cppData;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentCategory={currentCategory} 
        showSubCategories={true}
        onShowMainSidebar={() => setMainSidebarOpen(true)}
      />
      <MainSidebar isOpen={mainSidebarOpen} onClose={() => setMainSidebarOpen(false)} />
      
      {/* Header */}
      <header className="border-b border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/categories/programming">
                <Button variant="outline" size="sm" className="border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Programming
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/official-logo.png" alt="ByteFlux" width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {currentCategory.title}
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Coming Soon */}
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <div className="text-8xl mb-8">{currentCategory.icon}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We&apos;re working hard to bring you comprehensive C++ programming content. 
            Check out the sidebar to see what topics we&apos;ll be covering!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Get Notified
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Explore Other Languages
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
