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
  ArrowLeft,
  Clock,
  Users,
  Star,
  Play,
  CheckCircle,
  Target,
  Zap,
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

// Mock posts data - will be replaced with real data in the future
const featuredPosts = [
  {
    id: 1,
    title: "Understanding Algorithms: A Beginner's Guide",
    excerpt: "Learn the fundamental concepts of algorithms and how they form the backbone of computer science. Perfect for beginners starting their programming journey.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    views: 1250,
    likes: 89,
    comments: 23,
    category: "Algorithms",
    image: "/api/placeholder/400/200",
    trending: true
  },
  {
    id: 2,
    title: "Data Structures: Building Blocks of Programming",
    excerpt: "Explore essential data structures like arrays, linked lists, and trees. Master these concepts to write more efficient and scalable code.",
    author: "Prof. Michael Rodriguez",
    date: "2024-01-12",
    readTime: "12 min read",
    views: 980,
    likes: 67,
    comments: 15,
    category: "Data Structures",
    image: "/api/placeholder/400/200",
    trending: false
  },
  {
    id: 3,
    title: "Computational Thinking: Problem-Solving Approach",
    excerpt: "Develop your computational thinking skills with practical exercises and real-world examples. Learn to break down complex problems systematically.",
    author: "Dr. Emily Watson",
    date: "2024-01-10",
    readTime: "10 min read",
    views: 756,
    likes: 54,
    comments: 12,
    category: "Problem Solving",
    image: "/api/placeholder/400/200",
    trending: true
  },
  {
    id: 4,
    title: "Mathematics for Computer Science: Essential Concepts",
    excerpt: "Master the mathematical foundations that every programmer needs. From discrete mathematics to probability theory.",
    author: "Dr. James Liu",
    date: "2024-01-08",
    readTime: "15 min read",
    views: 654,
    likes: 42,
    comments: 8,
    category: "Mathematics",
    image: "/api/placeholder/400/200",
    trending: false
  }
];

export default function FoundationsPage() {
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
                  Foundations of Computer Science
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-gray-700 text-gray-300">Beginner</Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">6-8 months</Badge>
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
              Master the Fundamentals
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Build a solid foundation in computer science with comprehensive modules covering 
              essential concepts, algorithms, and mathematical principles.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">6</div>
                <div className="text-gray-300">Modules</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Clock className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">126</div>
                <div className="text-gray-300">Lessons</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Users className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">2,500+</div>
                <div className="text-gray-300">Students</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Star className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">4.8</div>
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
              Your Learning Journey
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Follow this structured path to build a strong foundation in computer science
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
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0" />
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
              Why Choose This Path?
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive curriculum designed by industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Structured Learning</h4>
              <p className="text-gray-300">
                Follow a carefully designed curriculum that builds knowledge progressively
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Hands-on Practice</h4>
              <p className="text-gray-300">
                Apply concepts through coding exercises and real-world projects
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Expert Support</h4>
              <p className="text-gray-300">
                Get help from experienced instructors and a supportive community
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
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h3 className="text-3xl font-bold text-white">
                Featured Articles
              </h3>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Dive deeper into computer science fundamentals with our curated collection of expert-written articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-2xl transition-all duration-300 bg-gray-700 border-gray-600 hover:border-gray-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white opacity-50" />
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
                    <Badge variant="outline" className="text-xs border-blue-500 text-blue-400">
                      {post.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-500 text-gray-400">
                      {post.readTime}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-blue-400 transition-colors text-white line-clamp-2">
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
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
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
                    
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
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
            Ready to Build Your Foundation?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start your computer science journey with confidence. Join thousands of students who have mastered the fundamentals.
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
