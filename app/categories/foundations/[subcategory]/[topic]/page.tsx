"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import MainSidebar from "@/components/main-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import Breadcrumb from "@/components/breadcrumb";
import ContentRenderer, { ContentList } from "@/components/content-renderer";
import { ArrowLeft, BookOpen, Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { foundationsData, SubCategory, Topic, Subtopic, MediaContent } from "@/lib/content-data";
import { notFound } from "next/navigation";

interface TopicPageProps {
  params: {
    subcategory: string;
    topic: string;
  };
}

export default function TopicPage({ params }: TopicPageProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mainSidebarOpen, setMainSidebarOpen] = useState(false);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  
  // Find the subcategory and topic
  const subCategory = foundationsData.subCategories.find(
    sub => sub.id === params.subcategory
  );
  
  const topic = subCategory?.topics.find(
    topic => topic.id === params.topic
  );

  if (!subCategory || !topic) {
    notFound();
  }

  // Flatten all content from all subtopics
  const allContent: MediaContent[] = [];
  topic.subtopics.forEach((subtopic, subtopicIndex) => {
    // Add a section header for each subtopic
    allContent.push({
      type: 'text',
      description: `## ${subtopic.title}\n\n${subtopic.description}`
    });
    
    // Add all content from this subtopic
    subtopic.content.forEach(content => {
      allContent.push(content);
    });
    
    // Add a separator between subtopics (except for the last one)
    if (subtopicIndex < topic.subtopics.length - 1) {
      allContent.push({
        type: 'text',
        description: '---'
      });
    }
  });

  // Legacy category data for sidebar compatibility
  const categoryData = {
    foundations: {
      title: foundationsData.title,
      icon: foundationsData.icon,
      topics: foundationsData.subCategories.map(subCategory => subCategory.title)
    }
  };

  const handleNext = () => {
    if (currentContentIndex < allContent.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1);
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
              <Link href={`/categories/foundations/${subCategory.id}`}>
                <Button variant="outline" size="sm" className="border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to {subCategory.title}
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/official-logo.png" alt="ByteFlux" width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {topic.title}
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
                  { label: subCategory.title, href: `/categories/foundations/${subCategory.id}` },
                  { label: topic.title }
                ]} 
              />
              
              {/* Topic Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl">{topic.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {topic.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {topic.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Difficulty: {topic.difficulty}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Duration: {topic.duration}</span>
                  </div>
                  <span>{topic.subtopics.length} sections available</span>
                </div>
              </div>

              {/* Learning Objectives */}
              {topic.learningObjectives && topic.learningObjectives.length > 0 && (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    Learning Objectives
                  </h3>
                  <ul className="space-y-2">
                    {topic.learningObjectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-2 text-blue-800 dark:text-blue-200">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Prerequisites */}
              {topic.prerequisites && topic.prerequisites.length > 0 && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                    Prerequisites
                  </h3>
                  <ul className="space-y-2">
                    {topic.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-start space-x-2 text-yellow-800 dark:text-yellow-200">
                        <span className="text-yellow-600 dark:text-yellow-400 mt-1">•</span>
                        <span>{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Button
                  onClick={handlePrevious}
                  disabled={currentContentIndex === 0}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Content {currentContentIndex + 1} of {allContent.length}
                  </span>
                  <div className="flex space-x-1">
                    {allContent.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentContentIndex
                            ? 'bg-blue-600'
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <Button
                  onClick={handleNext}
                  disabled={currentContentIndex === allContent.length - 1}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Content Display */}
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 min-h-[600px]">
                <ContentRenderer content={allContent[currentContentIndex]} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
