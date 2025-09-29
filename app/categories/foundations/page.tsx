"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Sidebar, { SidebarToggle } from "@/components/sidebar";
import { 
  BookOpen, 
  ArrowLeft,
  Clock,
  Users,
  Star,
  Play,
  CheckCircle,
  Target,
  Zap
} from "lucide-react";
import Link from "next/link";

const modules = [
  {
    id: 1,
    title: "Introduction to Computers & Programming",
    description: "Learn the fundamental concepts of how computers work and basic programming principles",
    duration: "4 weeks",
    lessons: 12,
    difficulty: "Beginner",
    completed: false,
    topics: [
      "Computer hardware basics",
      "Operating systems overview", 
      "Programming concepts",
      "Problem-solving approaches"
    ]
  },
  {
    id: 2,
    title: "Algorithms & Data Structures",
    description: "Master essential algorithms and data structures used in computer science",
    duration: "8 weeks",
    lessons: 24,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "Arrays and linked lists",
      "Sorting algorithms",
      "Search algorithms",
      "Trees and graphs",
      "Hash tables",
      "Dynamic programming"
    ]
  },
  {
    id: 3,
    title: "Computational Thinking",
    description: "Develop logical thinking and problem-solving skills essential for programming",
    duration: "6 weeks",
    lessons: 18,
    difficulty: "Beginner",
    completed: false,
    topics: [
      "Decomposition",
      "Pattern recognition",
      "Abstraction",
      "Algorithm design"
    ]
  },
  {
    id: 4,
    title: "Mathematics for Computer Science",
    description: "Essential mathematical concepts for computer science and programming",
    duration: "10 weeks",
    lessons: 30,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "Discrete mathematics",
      "Logic and proofs",
      "Probability and statistics",
      "Linear algebra basics",
      "Number theory"
    ]
  },
  {
    id: 5,
    title: "Operating Systems Basics",
    description: "Understand how operating systems manage computer resources",
    duration: "6 weeks",
    lessons: 18,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "Process management",
      "Memory management",
      "File systems",
      "Device drivers",
      "System calls"
    ]
  },
  {
    id: 6,
    title: "Computer Networks Fundamentals",
    description: "Learn the basics of computer networking and internet protocols",
    duration: "8 weeks",
    lessons: 24,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "Network protocols",
      "TCP/IP model",
      "HTTP and HTTPS",
      "DNS and routing",
      "Network security basics"
    ]
  }
];

export default function FoundationsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/official-logo.png" alt="ByteFlux" width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Foundations of Computer Science
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">Beginner</Badge>
              <Badge variant="outline">6-8 months</Badge>
              <SidebarToggle onClick={() => setSidebarOpen(true)} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Master the Fundamentals
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Build a solid foundation in computer science with comprehensive modules covering 
              essential concepts, algorithms, and mathematical principles.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">6</div>
                <div className="text-gray-600">Modules</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto mb-3">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">126</div>
                <div className="text-gray-600">Lessons</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto mb-3">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">2,500+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto mb-3">
                  <Star className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-gray-600">Rating</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Preview Content
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Your Learning Journey
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow this structured path to build a strong foundation in computer science
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {modules.map((module, index) => (
                <Card key={module.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                            <span className="text-lg font-bold text-gray-600">{index + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-xl group-hover:text-gray-600 transition-colors">
                              {module.title}
                            </CardTitle>
                            {module.completed && (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            )}
                          </div>
                          <CardDescription className="text-gray-600 mb-4">
                            {module.description}
                          </CardDescription>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary" className="text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {module.duration}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {module.lessons} lessons
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {module.difficulty}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {module.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2 flex-shrink-0" />
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Button variant="outline" size="sm" className="group-hover:bg-gray-50 group-hover:border-gray-200 group-hover:text-gray-600 transition-colors">
                          {module.completed ? "Review" : "Start"}
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose This Path?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum designed by industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Structured Learning</h4>
              <p className="text-gray-600">
                Follow a carefully designed curriculum that builds knowledge progressively
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Hands-on Practice</h4>
              <p className="text-gray-600">
                Apply concepts through coding exercises and real-world projects
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Expert Support</h4>
              <p className="text-gray-600">
                Get help from experienced instructors and a supportive community
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Build Your Foundation?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start your computer science journey with confidence. Join thousands of students who have mastered the fundamentals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-gray-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
