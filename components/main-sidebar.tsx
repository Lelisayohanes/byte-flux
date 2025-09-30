"use client";

import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Code, 
  Globe, 
  Smartphone, 
  Settings, 
  Building2, 
  Shield, 
  Brain, 
  Wrench, 
  Users,
  X,
  Menu
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "foundations",
    title: "Foundations of Computer Science",
    icon: BookOpen,
    description: "Master the fundamental concepts that form the backbone of computer science",
    difficulty: "Beginner",
    duration: "6-8 months"
  },
  {
    id: "programming",
    title: "Programming & Development",
    icon: Code,
    description: "Learn multiple programming languages and development practices",
    difficulty: "Beginner to Intermediate",
    duration: "8-12 months"
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: Globe,
    description: "Build modern, responsive web applications from frontend to backend",
    difficulty: "Intermediate",
    duration: "10-14 months"
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    icon: Smartphone,
    description: "Create cross-platform mobile applications for iOS and Android",
    difficulty: "Intermediate",
    duration: "6-10 months"
  },
  {
    id: "software-engineering",
    title: "Software Engineering Principles",
    icon: Settings,
    description: "Learn industry best practices and software development methodologies",
    difficulty: "Intermediate to Advanced",
    duration: "8-12 months"
  },
  {
    id: "system-design",
    title: "System Design & Architecture",
    icon: Building2,
    description: "Design scalable systems and understand architectural patterns",
    difficulty: "Advanced",
    duration: "6-10 months"
  },
  {
    id: "security",
    title: "Security & Ethics",
    icon: Shield,
    description: "Protect applications and understand ethical considerations in tech",
    difficulty: "Intermediate to Advanced",
    duration: "4-6 months"
  },
  {
    id: "specialized",
    title: "Specialized Fields",
    icon: Brain,
    description: "Explore cutting-edge technologies and specialized domains",
    difficulty: "Advanced",
    duration: "8-16 months"
  },
  {
    id: "tools",
    title: "Tools & Productivity",
    icon: Wrench,
    description: "Master essential development tools and productivity techniques",
    difficulty: "Beginner to Intermediate",
    duration: "2-4 months"
  },
  {
    id: "career",
    title: "Career Growth & Soft Skills",
    icon: Users,
    description: "Develop professional skills and advance your tech career",
    difficulty: "All Levels",
    duration: "Ongoing"
  }
];

interface MainSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MainSidebar({ isOpen, onClose }: MainSidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-10 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Main Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Categories</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="p-2">
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Categories List */}
        <div className="overflow-y-auto h-full pb-20">
          <div className="p-3 space-y-1">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-600 rounded-md flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-500 transition-colors flex-shrink-0">
                    <IconComponent className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors text-sm">
                    {category.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export function MainSidebarToggle({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="ghost" size="sm" onClick={onClick} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
      <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
    </Button>
  );
}
