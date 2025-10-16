"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import MainSidebar from "@/components/main-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  BookOpen,
  ArrowLeft,
  Clock,
  Star
} from "lucide-react";
import Link from "next/link";
import { foundationsData } from "@/lib/content-data";

// Legacy category data for sidebar compatibility
const categoryData = {
  foundations: {
    title: foundationsData.title,
    icon: foundationsData.icon,
    topics: foundationsData.subCategories.map(subCategory => subCategory.title)
  }
};

export default function FoundationsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mainSidebarOpen, setMainSidebarOpen] = useState(false);
  const currentCategory = categoryData.foundations;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentCategory={currentCategory} 
        showSubCategories={true}
        onShowMainSidebar={() => setMainSidebarOpen(true)}
        categoryData={foundationsData}
      />
      <MainSidebar isOpen={mainSidebarOpen} onClose={() => setMainSidebarOpen(false)} />
      
      {/* Header */}
      <header className="border-b border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm" className="border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
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

      {/* Main Content */}
      <main className="flex-1 py-8">
        <div className="ml-80"> {/* Offset for sidebar */}
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Category Overview */}
              <div className="space-y-8">
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-5xl">{foundationsData.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {foundationsData.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 text-lg">
                        {foundationsData.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Difficulty: {foundationsData.difficulty}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Duration: {foundationsData.duration}</span>
                    </div>
                    <span>{foundationsData.subCategories.length} learning modules</span>
                  </div>
                </div>

                {/* Learning Objectives */}
                {foundationsData.learningObjectives && foundationsData.learningObjectives.length > 0 && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                      Learning Objectives
                    </h3>
                    <ul className="space-y-2">
                      {foundationsData.learningObjectives.map((objective, index) => (
                        <li key={index} className="flex items-start space-x-2 text-blue-800 dark:text-blue-200">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Prerequisites */}
                {foundationsData.prerequisites && foundationsData.prerequisites.length > 0 && (
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                      Prerequisites
                    </h3>
                    <ul className="space-y-2">
                      {foundationsData.prerequisites.map((prerequisite, index) => (
                        <li key={index} className="flex items-start space-x-2 text-yellow-800 dark:text-yellow-200">
                          <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                          <span>{prerequisite}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* SubCategories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {foundationsData.subCategories.map((subCategory) => (
                    <Link
                      key={subCategory.id}
                      href={`/categories/foundations/${subCategory.id}`}
                      className="group"
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-3xl">{subCategory.icon}</span>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {subCategory.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {subCategory.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <span>Difficulty: {subCategory.difficulty}</span>
                          <span>{subCategory.topics.length} topics</span>
                        </div>
                        <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                          <BookOpen className="w-4 h-4 mr-1" />
                          Explore Module →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
