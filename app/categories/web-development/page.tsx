"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Sidebar, { SidebarToggle } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  Globe, 
  ArrowLeft,
  Clock,
  Users,
  Star,
  Play,
  CheckCircle,
  Database,
  Shield,
  Layers,
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
    title: "HTML, CSS & JavaScript Fundamentals",
    description: "Master the core technologies that power the modern web",
    duration: "8 weeks",
    lessons: 24,
    difficulty: "Beginner",
    completed: false,
    topics: [
      "HTML5 semantic elements",
      "CSS3 flexbox and grid", 
      "JavaScript ES6+ features",
      "DOM manipulation",
      "Responsive design principles"
    ]
  },
  {
    id: 2,
    title: "Frontend Frameworks",
    description: "Build dynamic user interfaces with React, Angular, and Vue",
    duration: "12 weeks",
    lessons: 36,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "React components and hooks",
      "Angular services and routing",
      "Vue.js composition API",
      "State management",
      "Component libraries"
    ]
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Create robust server-side applications with Node.js, Django, and Spring Boot",
    duration: "14 weeks",
    lessons: 42,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "Node.js and Express",
      "Django REST framework",
      "Spring Boot microservices",
      "API design patterns",
      "Server deployment"
    ]
  },
  {
    id: 4,
    title: "REST APIs & GraphQL",
    description: "Design and implement modern API architectures",
    duration: "6 weeks",
    lessons: 18,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "RESTful API design",
      "GraphQL schemas and resolvers",
      "API documentation",
      "Authentication and authorization",
      "API testing strategies"
    ]
  },
  {
    id: 5,
    title: "Database Management",
    description: "Work with both SQL and NoSQL databases effectively",
    duration: "8 weeks",
    lessons: 24,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "SQL queries and optimization",
      "MongoDB and document databases",
      "Database design principles",
      "ORM and ODM tools",
      "Database migration strategies"
    ]
  },
  {
    id: 6,
    title: "Authentication & Security",
    description: "Implement secure authentication and protect web applications",
    duration: "6 weeks",
    lessons: 18,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "JWT and session management",
      "OAuth 2.0 and OpenID Connect",
      "HTTPS and SSL certificates",
      "Web security best practices",
      "Penetration testing basics"
    ]
  }
];

// Mock posts data - will be replaced with real data in the future
const featuredPosts = [
  {
    id: 1,
    title: "React 19: What's New and How to Upgrade",
    excerpt: "Explore the latest features in React 19 including Server Components, improved hydration, and new hooks. Complete upgrade guide with practical examples.",
    author: "Jessica Chen",
    date: "2024-01-17",
    readTime: "15 min read",
    views: 3420,
    likes: 287,
    comments: 56,
    category: "React",
    image: "/api/placeholder/400/200",
    trending: true
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Learn to create robust, scalable REST APIs using Node.js and Express. Best practices for authentication, validation, error handling, and performance optimization.",
    author: "Robert Martinez",
    date: "2024-01-15",
    readTime: "18 min read",
    views: 2890,
    likes: 198,
    comments: 42,
    category: "Backend",
    image: "/api/placeholder/400/200",
    trending: false
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which?",
    excerpt: "Master modern CSS layout techniques. Understand the differences between Grid and Flexbox, with practical examples and real-world use cases.",
    author: "Amanda Foster",
    date: "2024-01-13",
    readTime: "12 min read",
    views: 2456,
    likes: 167,
    comments: 31,
    category: "CSS",
    image: "/api/placeholder/400/200",
    trending: true
  },
  {
    id: 4,
    title: "Database Design Patterns for Web Applications",
    excerpt: "Essential database design patterns for modern web applications. Learn about normalization, indexing strategies, and NoSQL vs SQL considerations.",
    author: "Kevin Park",
    date: "2024-01-11",
    readTime: "16 min read",
    views: 1987,
    likes: 134,
    comments: 28,
    category: "Database",
    image: "/api/placeholder/400/200",
    trending: false
  }
];

export default function WebDevelopmentPage() {
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
                  Web Development
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-gray-700 text-gray-300">Intermediate</Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">10-14 months</Badge>
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
              Build Modern Web Applications
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Master full-stack web development from frontend frameworks to backend APIs. 
              Learn to build scalable, secure, and responsive web applications.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Globe className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">6</div>
                <div className="text-gray-300">Modules</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Clock className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">162</div>
                <div className="text-gray-300">Lessons</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Users className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">4,800+</div>
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
              Full-Stack Development Path
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From frontend frameworks to backend APIs and database management
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
              Master Full-Stack Development
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Build complete web applications from frontend to backend
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Frontend Frameworks</h4>
              <p className="text-gray-300">
                Master React, Angular, and Vue.js for building modern user interfaces
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Database Management</h4>
              <p className="text-gray-300">
                Work with SQL and NoSQL databases for scalable applications
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Security & Authentication</h4>
              <p className="text-gray-300">
                Implement secure authentication and protect web applications
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
              <Globe className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl font-bold text-white">
                Web Development Articles
              </h3>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Deep dive into modern web development with tutorials, best practices, and industry insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-2xl transition-all duration-300 bg-gray-700 border-gray-600 hover:border-gray-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-700 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-white opacity-50" />
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
                    <Badge variant="outline" className="text-xs border-purple-500 text-purple-400">
                      {post.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-500 text-gray-400">
                      {post.readTime}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-purple-400 transition-colors text-white line-clamp-2">
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
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
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
                    
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
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
            Ready to Build Web Applications?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start your journey to becoming a full-stack web developer with modern technologies and best practices.
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
