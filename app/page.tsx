"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Sidebar, { SidebarToggle } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
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
  ChevronRight,
  Star,
  Clock,
  Award
} from "lucide-react";

const learningCategories = [
  {
    id: "foundations",
    title: "Foundations of Computer Science",
    description: "Master the fundamental concepts that form the backbone of computer science",
    icon: BookOpen,
    color: "bg-gray-100",
    topics: [
      "Introduction to Computers & Programming",
      "Algorithms & Data Structures", 
      "Computational Thinking",
      "Mathematics for Computer Science",
      "Operating Systems Basics",
      "Computer Networks Fundamentals"
    ],
    difficulty: "Beginner",
    duration: "6-8 months"
  },
  {
    id: "programming",
    title: "Programming & Development",
    description: "Learn multiple programming languages and development practices",
    icon: Code,
    color: "bg-gray-100",
    topics: [
      "Programming Languages (Python, Java, C/C++, JavaScript)",
      "Object-Oriented Programming (OOP)",
      "Functional Programming Basics",
      "Version Control (Git & GitHub)",
      "Debugging & Testing Basics"
    ],
    difficulty: "Beginner to Intermediate",
    duration: "8-12 months"
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Build modern, responsive web applications from frontend to backend",
    icon: Globe,
    color: "bg-gray-100",
    topics: [
      "HTML, CSS, JavaScript Fundamentals",
      "Frontend Frameworks (React, Angular, Vue)",
      "Backend Development (Node.js, Django, Spring Boot)",
      "REST APIs & GraphQL",
      "Databases (SQL, NoSQL)",
      "Authentication & Security Basics"
    ],
    difficulty: "Intermediate",
    duration: "10-14 months"
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Create cross-platform mobile applications for iOS and Android",
    icon: Smartphone,
    color: "bg-gray-100",
    topics: [
      "Android (Kotlin/Java)",
      "iOS (Swift)",
      "Cross-platform (Flutter, React Native)"
    ],
    difficulty: "Intermediate",
    duration: "6-10 months"
  },
  {
    id: "software-engineering",
    title: "Software Engineering Principles",
    description: "Learn industry best practices and software development methodologies",
    icon: Settings,
    color: "bg-gray-100",
    topics: [
      "Software Development Life Cycle (SDLC)",
      "Agile & Scrum",
      "Requirements Engineering",
      "Software Design Patterns",
      "Code Quality & Clean Code",
      "Testing (Unit, Integration, System)",
      "DevOps & CI/CD"
    ],
    difficulty: "Intermediate to Advanced",
    duration: "8-12 months"
  },
  {
    id: "system-design",
    title: "System Design & Architecture",
    description: "Design scalable systems and understand architectural patterns",
    icon: Building2,
    color: "bg-gray-100",
    topics: [
      "Design Principles (SOLID, DRY, KISS)",
      "Microservices & Monoliths",
      "APIs & Integration Patterns",
      "Scalability & Performance",
      "Cloud Computing (AWS, Azure, GCP)",
      "Containerization (Docker, Kubernetes)"
    ],
    difficulty: "Advanced",
    duration: "6-10 months"
  },
  {
    id: "security",
    title: "Security & Ethics",
    description: "Protect applications and understand ethical considerations in tech",
    icon: Shield,
    color: "bg-gray-100",
    topics: [
      "Secure Coding Practices",
      "Web & Network Security Basics",
      "Authentication & Authorization",
      "Data Privacy & Ethics in Software"
    ],
    difficulty: "Intermediate to Advanced",
    duration: "4-6 months"
  },
  {
    id: "specialized",
    title: "Specialized Fields",
    description: "Explore cutting-edge technologies and specialized domains",
    icon: Brain,
    color: "bg-gray-100",
    topics: [
      "Artificial Intelligence & Machine Learning",
      "Data Engineering & Big Data",
      "Blockchain Fundamentals",
      "Cybersecurity",
      "Internet of Things (IoT)"
    ],
    difficulty: "Advanced",
    duration: "8-16 months"
  },
  {
    id: "tools",
    title: "Tools & Productivity",
    description: "Master essential development tools and productivity techniques",
    icon: Wrench,
    color: "bg-gray-100",
    topics: [
      "IDEs (VS Code, IntelliJ, Eclipse)",
      "Collaboration Tools (Slack, Jira, Trello)",
      "Documentation & API Writing",
      "Code Review Practices"
    ],
    difficulty: "Beginner to Intermediate",
    duration: "2-4 months"
  },
  {
    id: "career",
    title: "Career Growth & Soft Skills",
    description: "Develop professional skills and advance your tech career",
    icon: Users,
    color: "bg-gray-100",
    topics: [
      "Problem-Solving & Critical Thinking",
      "Communication for Developers",
      "Collaboration & Teamwork",
      "Portfolio & Resume Building",
      "Interview Preparation (DSA + System Design)",
      "Open Source Contribution"
    ],
    difficulty: "All Levels",
    duration: "Ongoing"
  }
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    console.log('Sidebar toggle clicked, current state:', sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src="/official-logo.png" alt="ByteFlux" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                ByteFlux
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">About</a>
              </nav>
              <ThemeToggle />
              <SidebarToggle onClick={handleSidebarToggle} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Master Programming & Computer Science
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Comprehensive learning platform designed to take you from beginner to expert. 
              Structured courses, hands-on projects, and real-world applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Learning Today
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Explore Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">10+</div>
              <div className="text-gray-600 dark:text-gray-300">Learning Categories</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Hours of Content</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Hands-on Projects</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">1000+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Learners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Learning Paths
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose your learning journey from foundational concepts to advanced specialization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${category.color} dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white dark:text-gray-300" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {category.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {category.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors dark:text-white">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.topics.slice(0, 3).map((topic, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full mr-3 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                      {category.topics.length > 3 && (
                        <li className="text-sm text-gray-500 dark:text-gray-400 italic">
                          +{category.topics.length - 3} more topics
                        </li>
                      )}
                    </ul>
                    <Button variant="outline" className="w-full group-hover:bg-gray-50 group-hover:border-gray-200 group-hover:text-gray-600 dark:group-hover:bg-gray-700 dark:group-hover:border-gray-600 dark:group-hover:text-gray-200 transition-colors" asChild>
                      <a href={`/categories/${category.id}`}>
                        Explore Path
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 flex items-center justify-center">
              <Image src="/official-logo.png" alt="ByteFlux" width={24} height={24} className="w-6 h-6 object-contain" />
            </div>
            <h4 className="text-lg font-bold">ByteFlux</h4>
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-sm mb-2">
            Free programming and computer science education platform
          </p>
          <p className="text-gray-500 dark:text-gray-600 text-xs">
            &copy; 2024 ByteFlux. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
