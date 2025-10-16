"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import MainSidebar from "@/components/main-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import Breadcrumb from "@/components/breadcrumb";
import { ArrowLeft, Play, Code, Image as ImageIcon, FileText, ExternalLink, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { foundationsData, SubCategory, Topic, Subtopic, MediaContent } from "@/lib/content-data";
import { notFound } from "next/navigation";

interface SubtopicPageProps {
  params: {
    subcategory: string;
    topic: string;
    subtopic: string;
  };
}

export default function SubtopicPage({ params }: SubtopicPageProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mainSidebarOpen, setMainSidebarOpen] = useState(false);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  
  // Find the subcategory, topic, and subtopic
  const subCategory = foundationsData.subCategories.find(
    sub => sub.id === params.subcategory
  );
  
  const topic = subCategory?.topics.find(
    topic => topic.id === params.topic
  );

  const subtopic = topic?.subtopics.find(
    subtopic => subtopic.id === params.subtopic
  );

  if (!subCategory || !topic || !subtopic) {
    notFound();
  }

  // Legacy category data for sidebar compatibility
  const categoryData = {
    foundations: {
      title: foundationsData.title,
      icon: foundationsData.icon,
      topics: foundationsData.subCategories.map(subCategory => subCategory.title)
    }
  };

  const nextContent = () => {
    setCurrentContentIndex((prev) => 
      prev < subtopic.content.length - 1 ? prev + 1 : 0
    );
  };

  const prevContent = () => {
    setCurrentContentIndex((prev) => 
      prev > 0 ? prev - 1 : subtopic.content.length - 1
    );
  };

  const goToContent = (index: number) => {
    setCurrentContentIndex(index);
  };

  const renderContentItem = (item: MediaContent, index: number) => {
    return (
      <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        {item.type === 'video' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Play className="w-5 h-5 text-red-600 dark:text-red-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
            </div>
            {item.description && (
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            )}
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center space-x-2 text-white">
                <Play className="w-8 h-8" />
                <span className="text-lg">Video Player</span>
              </div>
              <p className="text-gray-400 mt-2">Duration: {item.duration}</p>
            </div>
          </div>
        )}

        {item.type === 'image' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ImageIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title || 'Image Content'}
              </h3>
            </div>
            {item.description && (
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            )}
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                <ImageIcon className="w-8 h-8" />
                <span className="text-lg">Image Placeholder</span>
              </div>
              {item.caption && (
                <p className="text-gray-500 dark:text-gray-500 mt-2">{item.caption}</p>
              )}
            </div>
          </div>
        )}

        {item.type === 'code' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title || 'Code Example'}
              </h3>
            </div>
            {item.description && (
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            )}
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                <code>{item.code || '// Code example will be displayed here'}</code>
              </pre>
            </div>
            {item.caption && (
              <p className="text-gray-500 dark:text-gray-500 text-sm">{item.caption}</p>
            )}
          </div>
        )}

        {item.type === 'table' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title || 'Data Table'}
              </h3>
            </div>
            {item.description && (
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            )}
            {item.headers && item.rows && (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      {item.headers.map((header: string, idx: number) => (
                        <th key={idx} className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows.map((row: string[], rowIdx: number) => (
                      <tr key={rowIdx} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        {row.map((cell: string, cellIdx: number) => (
                          <td key={cellIdx} className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {item.type === 'text' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title || 'Text Content'}
              </h3>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        )}

        {item.type === 'link' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ExternalLink className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title || 'External Link'}
              </h3>
            </div>
            {item.description && (
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            )}
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Link</span>
            </a>
          </div>
        )}
      </div>
    );
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
              <Link href={`/categories/foundations/${subCategory.id}/${topic.id}`}>
                <Button variant="outline" size="sm" className="border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to {topic.title}
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/official-logo.png" alt="ByteFlux" width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {subtopic.title}
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
                  { label: topic.title, href: `/categories/foundations/${subCategory.id}/${topic.id}` },
                  { label: subtopic.title }
                ]} 
              />
              
              {/* Subtopic Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl">{subtopic.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {subtopic.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {subtopic.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <span>Difficulty: {subtopic.difficulty}</span>
                  <span>Duration: {subtopic.duration}</span>
                  <span>{subtopic.content.length} content items</span>
                </div>
              </div>

              {/* Content Navigation */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Content {currentContentIndex + 1} of {subtopic.content.length}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {Math.round(((currentContentIndex + 1) / subtopic.content.length) * 100)}% Complete
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
                  <div 
                    className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentContentIndex + 1) / subtopic.content.length) * 100}%` }}
                  />
                </div>

                {/* Content Display */}
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentContentIndex * 100}%)` }}
                  >
                    {subtopic.content.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        {renderContentItem(item, index)}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-6">
                  <Button
                    variant="outline"
                    onClick={prevContent}
                    className="flex items-center space-x-2"
                    disabled={subtopic.content.length <= 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </Button>

                  <div className="flex space-x-2">
                    {subtopic.content.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToContent(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === currentContentIndex
                            ? 'bg-blue-600 dark:bg-blue-400'
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    onClick={nextContent}
                    className="flex items-center space-x-2"
                    disabled={subtopic.content.length <= 1}
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Content Type Indicator */}
                <div className="mt-4 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    {subtopic.content[currentContentIndex]?.type?.toUpperCase()} Content
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
