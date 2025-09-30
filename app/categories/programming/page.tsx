"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Sidebar, { SidebarToggle } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  Code, 
  ArrowLeft,
  Clock,
  Users,
  Star,
  Play,
  CheckCircle,
  GitBranch,
  Bug,
  TestTube,
  Calendar,
  Eye,
  Heart,
  MessageCircle,
  TrendingUp,
  Bookmark
} from "lucide-react";
import Link from "next/link";

const modules = [
  {
    id: 1,
    title: "Programming Languages Fundamentals",
    description: "Master multiple programming languages including Python, Java, C/C++, and JavaScript",
    duration: "12 weeks",
    lessons: 36,
    difficulty: "Beginner",
    completed: false,
    topics: [
      "Python basics and syntax",
      "Java object-oriented programming", 
      "C/C++ memory management",
      "JavaScript and ES6+ features",
      "Language comparison and selection"
    ]
  },
  {
    id: 2,
    title: "Object-Oriented Programming (OOP)",
    description: "Learn OOP principles and design patterns used across all major programming languages",
    duration: "8 weeks",
    lessons: 24,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "Classes and objects",
      "Inheritance and polymorphism",
      "Encapsulation and abstraction",
      "Design patterns",
      "SOLID principles"
    ]
  },
  {
    id: 3,
    title: "Functional Programming Basics",
    description: "Explore functional programming paradigms and their applications",
    duration: "6 weeks",
    lessons: 18,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "Pure functions",
      "Immutability",
      "Higher-order functions",
      "Lambda expressions",
      "Map, filter, reduce"
    ]
  },
  {
    id: 4,
    title: "Version Control with Git",
    description: "Master Git and GitHub for professional software development",
    duration: "4 weeks",
    lessons: 12,
    difficulty: "Beginner",
    completed: false,
    topics: [
      "Git fundamentals",
      "Branching and merging",
      "GitHub workflows",
      "Pull requests and code review",
      "Collaborative development"
    ]
  },
  {
    id: 5,
    title: "Debugging & Testing",
    description: "Learn professional debugging techniques and testing methodologies",
    duration: "6 weeks",
    lessons: 18,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "Debugging strategies",
      "Unit testing",
      "Integration testing",
      "Test-driven development",
      "Debugging tools and techniques"
    ]
  }
];

// Mock posts data - will be replaced with real data in the future
const featuredPosts = [
  {
    id: 1,
    title: "Python vs JavaScript: Which Language Should You Learn First?",
    excerpt: "A comprehensive comparison of Python and JavaScript for beginners. Understand the strengths, use cases, and career opportunities for each language.",
    author: "Alex Thompson",
    date: "2024-01-16",
    readTime: "10 min read",
    views: 2150,
    likes: 156,
    comments: 34,
    category: "Languages",
    image: "/api/placeholder/400/200",
    trending: true
  },
  {
    id: 2,
    title: "Object-Oriented Programming: Best Practices and Common Pitfalls",
    excerpt: "Master OOP principles with real-world examples. Learn about encapsulation, inheritance, polymorphism, and abstraction with practical code samples.",
    author: "Maria Garcia",
    date: "2024-01-14",
    readTime: "14 min read",
    views: 1890,
    likes: 134,
    comments: 28,
    category: "OOP",
    image: "/api/placeholder/400/200",
    trending: false
  },
  {
    id: 3,
    title: "Git Workflow: Professional Development Practices",
    excerpt: "Learn professional Git workflows used in top tech companies. From branching strategies to code review processes and deployment pipelines.",
    author: "David Kim",
    date: "2024-01-13",
    readTime: "12 min read",
    views: 1675,
    likes: 98,
    comments: 19,
    category: "Version Control",
    image: "/api/placeholder/400/200",
    trending: true
  },
  {
    id: 4,
    title: "Debugging Techniques: From Console.log to Advanced Tools",
    excerpt: "Essential debugging strategies for every programmer. Learn to use browser dev tools, IDE debuggers, and systematic debugging approaches.",
    author: "Sarah Wilson",
    date: "2024-01-11",
    readTime: "11 min read",
    views: 1420,
    likes: 87,
    comments: 22,
    category: "Debugging",
    image: "/api/placeholder/400/200",
    trending: false
  }
];

export default function ProgrammingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-800 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/official-logo.png" alt="ByteFlux" width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <h1 className="text-2xl font-bold text-white">
                  Programming & Development
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-gray-700 text-gray-300">Beginner to Intermediate</Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">8-12 months</Badge>
              <ThemeToggle />
              <SidebarToggle onClick={() => setSidebarOpen(true)} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Master Programming Languages
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Learn multiple programming languages and development practices used in the industry. 
              Build real-world projects and develop professional coding skills.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Code className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-gray-300">Modules</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Clock className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">108</div>
                <div className="text-gray-300">Lessons</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Users className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">3,200+</div>
                <div className="text-gray-300">Students</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Star className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">4.9</div>
                <div className="text-gray-300">Rating</div>
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
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Programming Mastery Path
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From language fundamentals to professional development practices
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {modules.map((module, index) => (
                <Card key={module.id} className="group hover:shadow-lg transition-all duration-300 bg-gray-700 border-gray-600">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center group-hover:bg-gray-500 transition-colors">
                            <span className="text-lg font-bold text-gray-300">{index + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-xl group-hover:text-gray-300 transition-colors text-white">
                              {module.title}
                            </CardTitle>
                            {module.completed && (
                              <CheckCircle className="w-5 h-5 text-green-400" />
                            )}
                          </div>
                          <CardDescription className="text-gray-300 mb-4">
                            {module.description}
                          </CardDescription>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary" className="text-xs bg-gray-600 text-gray-300">
                              <Clock className="w-3 h-3 mr-1" />
                              {module.duration}
                            </Badge>
                            <Badge variant="outline" className="text-xs border-gray-500 text-gray-300">
                              {module.lessons} lessons
                            </Badge>
                            <Badge variant="outline" className="text-xs border-gray-500 text-gray-300">
                              {module.difficulty}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {module.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center text-sm text-gray-300">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0" />
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Button variant="outline" size="sm" className="group-hover:bg-gray-600 group-hover:border-gray-500 group-hover:text-gray-200 transition-colors border-gray-600 text-gray-300">
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
            <h3 className="text-3xl font-bold text-white mb-4">
              What You&apos;ll Master
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Essential skills for professional software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <GitBranch className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Version Control</h4>
              <p className="text-gray-300">
                Master Git workflows and collaborative development practices
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bug className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Debugging Skills</h4>
              <p className="text-gray-300">
                Learn professional debugging techniques and problem-solving approaches
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <TestTube className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Testing Practices</h4>
              <p className="text-gray-300">
                Implement comprehensive testing strategies and quality assurance
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code className="w-8 h-8 text-green-400" />
              <h3 className="text-3xl font-bold text-white">
                Programming Insights
              </h3>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest programming trends, best practices, and expert insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-2xl transition-all duration-300 bg-gray-700 border-gray-600 hover:border-gray-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-green-600 to-blue-700 flex items-center justify-center">
                    <Code className="w-16 h-16 text-white opacity-50" />
                  </div>
                  {post.trending && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 text-white border-0">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="ghost" className="bg-gray-800/80 hover:bg-gray-700 text-white border-0">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs border-green-500 text-green-400">
                      {post.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-500 text-gray-400">
                      {post.readTime}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-green-400 transition-colors text-white line-clamp-2">
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-300 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-300 font-medium">{post.author}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white px-8">
              View All Articles
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Become a Programmer?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start your journey to mastering multiple programming languages and professional development practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-gray-700 hover:bg-gray-600 text-white">
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
