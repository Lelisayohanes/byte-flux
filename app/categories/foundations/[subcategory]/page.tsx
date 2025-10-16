"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import MainSidebar from "@/components/main-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import Breadcrumb from "@/components/breadcrumb";
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { foundationsData, SubCategory, Topic } from "@/lib/content-data";
import { notFound } from "next/navigation";

interface SubCategoryPageProps {
  params: {
    subcategory: string;
  };
}

export default function SubCategoryPage({ params }: SubCategoryPageProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mainSidebarOpen, setMainSidebarOpen] = useState(false);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Find the subcategory
  const subCategory = foundationsData.subCategories.find(
    sub => sub.id === params.subcategory
  );

  if (!subCategory) {
    notFound();
  }

  const scrollToTopic = (index: number) => {
    if (scrollContainerRef.current) {
      const itemWidth = 400 + 24; // 400px width + 24px gap
      scrollContainerRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
    setCurrentTopicIndex(index);
  };

  const nextTopic = () => {
    const nextIndex = currentTopicIndex >= subCategory.topics.length - 1 ? 0 : currentTopicIndex + 1;
    scrollToTopic(nextIndex);
  };

  const prevTopic = () => {
    const prevIndex = currentTopicIndex <= 0 ? subCategory.topics.length - 1 : currentTopicIndex - 1;
    scrollToTopic(prevIndex);
  };

  // Legacy category data for sidebar compatibility
  const categoryData = {
    foundations: {
      title: foundationsData.title,
      icon: foundationsData.icon,
      topics: foundationsData.subCategories.map(subCategory => subCategory.title)
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentCategory={categoryData.foundations} 
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
              <Link href="/categories/foundations">
                <Button variant="outline" size="sm" className="border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Foundations
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/official-logo.png" alt="ByteFlux" width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {subCategory.title}
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
              {/* Breadcrumb */}
              <Breadcrumb 
                items={[
                  { label: "Foundations", href: "/categories/foundations" },
                  { label: subCategory.title }
                ]} 
              />
              
              {/* SubCategory Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl">{subCategory.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {subCategory.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {subCategory.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <span>Difficulty: {subCategory.difficulty}</span>
                  <span>Duration: {subCategory.duration}</span>
                  <span>{subCategory.topics.length} topics available</span>
                </div>
              </div>

              {/* Topics Carousel */}
              <div className="relative">
                {/* Navigation Controls */}
                {subCategory.topics.length > 1 && (
                  <div className="flex justify-end mb-4">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={prevTopic}
                        className="p-2"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={nextTopic}
                        className="p-2"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
                
                <div 
                  ref={scrollContainerRef}
                  className="overflow-x-auto scrollbar-hide scroll-smooth pb-4" 
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div className="flex space-x-6" style={{ width: `calc(400px * ${subCategory.topics.length} + 1.5rem * ${subCategory.topics.length - 1})` }}>
                    {subCategory.topics.map((topic) => (
                      <Link
                        key={topic.id}
                        href={`/categories/foundations/${subCategory.id}/${topic.id}`}
                        className="group flex-shrink-0 w-96"
                      >
                        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600 min-h-[300px] flex flex-col">
                          <div className="flex items-center space-x-4 mb-6">
                            <span className="text-4xl">{topic.icon}</span>
                            <div>
                              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {topic.title}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                                <span>Difficulty: {topic.difficulty}</span>
                                <span>{topic.subtopics.length} sections</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-lg leading-relaxed">
                            {topic.description}
                          </p>
                          <div className="flex items-center text-blue-600 dark:text-blue-400 text-lg font-medium">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Start Learning →
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Scroll indicator */}
                {subCategory.topics.length > 1 && (
                  <div className="flex justify-center mt-6">
                    <div className="flex space-x-2">
                      {subCategory.topics.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToTopic(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentTopicIndex
                              ? 'bg-blue-600 dark:bg-blue-400 w-6'
                              : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* All Topics Row */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  All Topics in {subCategory.title}
                </h3>
                <div className="overflow-x-auto scrollbar-hide scroll-smooth pb-4" 
                     style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <div className="flex space-x-6" style={{ width: `calc(320px * ${subCategory.topics.length} + 1.5rem * ${subCategory.topics.length - 1})` }}>
                    {subCategory.topics.map((topic) => (
                      <Link
                        key={topic.id}
                        href={`/categories/foundations/${subCategory.id}/${topic.id}`}
                        className="group flex-shrink-0 w-80"
                      >
                        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600 min-h-[280px] flex flex-col">
                          <div className="flex items-center space-x-3 mb-4">
                            <span className="text-3xl">{topic.icon}</span>
                            <div>
                              <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {topic.title}
                              </h4>
                              <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                <span>Difficulty: {topic.difficulty}</span>
                                <span>{topic.subtopics.length} sections</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-base leading-relaxed">
                            {topic.description}
                          </p>
                          <div className="flex items-center text-blue-600 dark:text-blue-400 text-base font-medium">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Start Learning →
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
