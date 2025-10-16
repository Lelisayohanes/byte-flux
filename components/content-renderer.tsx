"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Code, BookOpen, FileText, Trophy, Clock } from "lucide-react";
import { MediaContent } from "@/lib/content-data";

interface ContentRendererProps {
  content: MediaContent;
  className?: string;
}

export default function ContentRenderer({ content, className = "" }: ContentRendererProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const renderContent = () => {
    switch (content.type) {
      case 'image':
        return (
          <div className="relative group">
            <Image
              src={content.src || ''}
              alt={content.alt || ''}
              width={content.width || 800}
              height={content.height || 600}
              className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            {content.caption && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                {content.caption}
              </p>
            )}
          </div>
        );

      case 'video':
        return (
          <div className="relative group">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              {!isVideoPlaying ? (
                <div className="relative">
                  <Image
                    src={content.thumbnail || content.src || ''}
                    alt={content.title || 'Video thumbnail'}
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <Button
                      onClick={() => setIsVideoPlaying(true)}
                      className="bg-white bg-opacity-90 hover:bg-opacity-100 text-black p-4 rounded-full shadow-lg"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </Button>
                  </div>
                </div>
              ) : (
                <video
                  src={content.src}
                  controls
                  autoPlay
                  className="w-full h-auto"
                  onEnded={() => setIsVideoPlaying(false)}
                />
              )}
            </div>
            <div className="mt-2">
              {content.title && (
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {content.title}
                </h4>
              )}
              {content.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {content.description}
                </p>
              )}
              {content.duration && (
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="w-3 h-3 mr-1" />
                  {content.duration}
                </div>
              )}
            </div>
          </div>
        );

      case 'link':
        return (
          <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {content.title}
                </h4>
                {content.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {content.description}
                  </p>
                )}
                <a
                  href={content.src}
                  target={content.external ? "_blank" : "_self"}
                  rel={content.external ? "noopener noreferrer" : ""}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  {content.src}
                </a>
              </div>
            </div>
          </div>
        );

      case 'code':
        return (
          <div className="p-4 bg-gray-900 dark:bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-gray-300">
                  {content.language || 'Code'}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(content.code || '')}
                className="text-gray-400 hover:text-gray-200"
              >
                Copy
              </Button>
            </div>
            <pre className="text-sm text-gray-100 overflow-x-auto">
              <code>{content.code}</code>
            </pre>
            {content.caption && (
              <p className="text-xs text-gray-400 mt-2 italic">
                {content.caption}
              </p>
            )}
          </div>
        );

      case 'text':
        // Handle special formatting for section headers and separators
        if (content.description?.startsWith('## ')) {
          const lines = content.description.split('\n');
          const title = lines[0].replace('## ', '');
          const description = lines.slice(2).join('\n');
          
          return (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                {title}
              </h2>
              {description && (
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          );
        }
        
        if (content.description === '---') {
          return (
            <div className="my-8 border-t border-gray-200 dark:border-gray-700"></div>
          );
        }
        
        return (
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.description}
            </p>
          </div>
        );

      case 'quiz':
        return (
          <div className="p-4 border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">
                Quiz Exercise
              </h4>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                {content.description}
              </p>
              <div className="flex items-center justify-between text-xs text-blue-600 dark:text-blue-300">
                <span>Difficulty: {content.difficulty}</span>
                <span>{content.points} points</span>
              </div>
            </div>
          </div>
        );

      case 'exercise':
        return (
          <div className="p-4 border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h4 className="font-semibold text-green-900 dark:text-green-100">
                Practice Exercise
              </h4>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-green-800 dark:text-green-200">
                {content.description}
              </p>
              <div className="flex items-center justify-between text-xs text-green-600 dark:text-green-300">
                <span>Difficulty: {content.difficulty}</span>
                <span>{content.points} points</span>
              </div>
            </div>
          </div>
        );

      case 'resource':
        return (
          <div className="p-4 border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">
                Additional Resource
              </h4>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-purple-800 dark:text-purple-200">
                {content.description}
              </p>
              {content.resources && (
                <div className="space-y-1">
                  {content.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs text-purple-600 dark:text-purple-300 hover:underline"
                    >
                      {resource.title} ({resource.type})
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 'table':
        return (
          <div className="overflow-x-auto">
            <div className="mb-4">
              {content.title && (
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {content.title}
                </h4>
              )}
              {content.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {content.description}
                </p>
              )}
            </div>
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              {content.headers && (
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    {content.headers.map((header, index) => (
                      <th
                        key={index}
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-600"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {content.rows?.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return (
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400">
              Unsupported content type: {content.type}
            </p>
          </div>
        );
    }
  };

  return (
    <div className={`content-item ${className}`}>
      {renderContent()}
    </div>
  );
}

// Component for rendering multiple content items
interface ContentListProps {
  contents: MediaContent[];
  className?: string;
}

export function ContentList({ contents, className = "" }: ContentListProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {contents.map((content, index) => (
        <ContentRenderer key={index} content={content} />
      ))}
    </div>
  );
}
