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

// Category-specific sidebar data
const categoryData = {
  foundations: {
    title: "Foundations of Computer Science",
    icon: "🧠",
    topics: [
      "Introduction to Computers & Programming",
      "Algorithms & Data Structures",
      "Computational Thinking",
      "Mathematics for Computer Science (Discrete Math, Logic, Probability)",
      "Operating Systems Basics",
      "Computer Networks Fundamentals"
    ]
  },
  programming: {
    title: "Programming & Development",
    icon: "💻",
    topics: [
      "Python Programming",
      "Java Programming", 
      "C++ Programming",
      "JavaScript Programming",
      "Object-Oriented Programming (OOP)",
      "Functional Programming Basics",
      "Version Control (Git & GitHub/GitLab)",
      "Debugging & Testing Basics"
    ]
  },
  webDevelopment: {
    title: "Web Development",
    icon: "🌐",
    topics: [
      "HTML, CSS, JavaScript Fundamentals",
      "Frontend Frameworks (React, Angular, Vue)",
      "Backend Development (Node.js, Django, Spring Boot)",
      "REST APIs & GraphQL",
      "Databases (SQL, NoSQL)",
      "Authentication & Security Basics"
    ]
  },
  mobileDevelopment: {
    title: "Mobile Development",
    icon: "📱",
    topics: [
      "Android (Kotlin/Java)",
      "iOS (Swift)",
      "Cross-platform (Flutter, React Native)"
    ]
  },
  softwareEngineering: {
    title: "Software Engineering Principles",
    icon: "🛠️",
    topics: [
      "Software Development Life Cycle (SDLC)",
      "Agile & Scrum",
      "Requirements Engineering",
      "Software Design Patterns",
      "Code Quality & Clean Code",
      "Testing (Unit, Integration, System, Automation)",
      "DevOps & CI/CD"
    ]
  },
  systemDesign: {
    title: "System Design & Architecture",
    icon: "🏗️",
    topics: [
      "Design Principles (SOLID, DRY, KISS)",
      "Microservices & Monoliths",
      "APIs & Integration Patterns",
      "Scalability & Performance",
      "Cloud Computing (AWS, Azure, GCP basics)",
      "Containerization (Docker, Kubernetes)"
    ]
  },
  security: {
    title: "Security & Ethics",
    icon: "🔐",
    topics: [
      "Secure Coding Practices",
      "Web & Network Security Basics",
      "Authentication & Authorization",
      "Data Privacy & Ethics in Software"
    ]
  },
  specialized: {
    title: "Specialized Fields",
    icon: "🤖",
    topics: [
      "Artificial Intelligence & Machine Learning Basics",
      "Data Engineering & Big Data",
      "Blockchain Fundamentals",
      "Cybersecurity",
      "Internet of Things (IoT)"
    ]
  },
  tools: {
    title: "Tools & Productivity",
    icon: "📊",
    topics: [
      "IDEs (VS Code, IntelliJ, Eclipse)",
      "Collaboration Tools (Slack, Jira, Trello)",
      "Documentation & API Writing",
      "Code Review Practices"
    ]
  },
  careerGrowth: {
    title: "Career Growth & Soft Skills",
    icon: "🧭",
    topics: [
      "Problem-Solving & Critical Thinking",
      "Communication for Developers",
      "Collaboration & Teamwork",
      "Portfolio & Resume Building",
      "Interview Preparation (DSA + System Design)",
      "Open Source Contribution"
    ]
  }
};

// Mock posts data - will be replaced with real data in the future
// const featuredPosts = [
//   ... (removed for build optimization)
// ];

export default function ProgrammingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mainSidebarOpen, setMainSidebarOpen] = useState(false);
  const currentCategory = categoryData.programming;

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

      {/* Main Content - Coming Soon */}
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <div className="text-8xl mb-8">{currentCategory.icon}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Coming Soon
            </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We&apos;re working hard to bring you comprehensive content for {currentCategory.title}. 
            Check out the sidebar to see what topics we&apos;ll be covering!
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
              Get Notified
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Explore Other Categories
              </Button>
            </div>
          </div>
      </main>
    </div>
  );
}
