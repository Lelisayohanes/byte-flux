"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Sidebar, { SidebarToggle } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  Smartphone, 
  ArrowLeft,
  Clock,
  Users,
  Star,
  Play,
  CheckCircle,
  Apple,
  Monitor,
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
    title: "Android Development",
    description: "Build native Android apps using Kotlin and Java",
    duration: "10 weeks",
    lessons: 30,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "Kotlin programming language",
      "Android Studio and SDK", 
      "UI/UX design principles",
      "Activity lifecycle",
      "Data persistence"
    ]
  },
  {
    id: 2,
    title: "iOS Development",
    description: "Create native iOS applications with Swift and SwiftUI",
    duration: "10 weeks",
    lessons: 30,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "Swift programming language",
      "Xcode development environment",
      "SwiftUI framework",
      "Core Data",
      "App Store deployment"
    ]
  },
  {
    id: 3,
    title: "Cross-Platform Development",
    description: "Build apps for multiple platforms using Flutter and React Native",
    duration: "12 weeks",
    lessons: 36,
    difficulty: "Intermediate",
    completed: false,
    topics: [
      "Flutter with Dart",
      "React Native with JavaScript",
      "Platform-specific code",
      "State management",
      "Performance optimization"
    ]
  }
];

// Mock posts data - will be replaced with real data in the future
const featuredPosts = [
  {
    id: 1,
    title: "Flutter vs React Native: Choosing the Right Framework",
    excerpt: "Comprehensive comparison of Flutter and React Native for cross-platform mobile development. Performance, development experience, and ecosystem analysis.",
    author: "Sophie Anderson",
    date: "2024-01-18",
    readTime: "13 min read",
    views: 2890,
    likes: 234,
    comments: 47,
    category: "Cross-Platform",
    image: "/api/placeholder/400/200",
    trending: true
  },
  {
    id: 2,
    title: "iOS App Store Optimization: Complete Guide",
    excerpt: "Master ASO strategies to improve your app's visibility in the iOS App Store. Keywords, screenshots, reviews, and conversion optimization techniques.",
    author: "Marcus Johnson",
    date: "2024-01-16",
    readTime: "11 min read",
    views: 2156,
    likes: 167,
    comments: 32,
    category: "iOS",
    image: "/api/placeholder/400/200",
    trending: false
  },
  {
    id: 3,
    title: "Android Material Design 3: Implementation Guide",
    excerpt: "Learn to implement Material Design 3 in your Android apps. New components, theming system, and design principles with practical examples.",
    author: "Elena Rodriguez",
    date: "2024-01-14",
    readTime: "14 min read",
    views: 1876,
    likes: 145,
    comments: 28,
    category: "Android",
    image: "/api/placeholder/400/200",
    trending: true
  },
  {
    id: 4,
    title: "Mobile App Performance Optimization Techniques",
    excerpt: "Essential performance optimization strategies for mobile apps. Memory management, battery optimization, and smooth user experience best practices.",
    author: "Daniel Kim",
    date: "2024-01-12",
    readTime: "16 min read",
    views: 1634,
    likes: 128,
    comments: 24,
    category: "Performance",
    image: "/api/placeholder/400/200",
    trending: false
  }
];

export default function MobileDevelopmentPage() {
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
                  Mobile Development
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-gray-700 text-gray-300">Intermediate</Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">6-10 months</Badge>
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
              Build Mobile Applications
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Create native and cross-platform mobile applications for iOS and Android. 
              Learn modern mobile development frameworks and best practices.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-gray-300">Modules</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Clock className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">96</div>
                <div className="text-gray-300">Lessons</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Users className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">2,100+</div>
                <div className="text-gray-300">Students</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-3">
                  <Star className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-2xl font-bold text-white">4.7</div>
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
              Mobile Development Path
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose your platform: native iOS, Android, or cross-platform development
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
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 flex-shrink-0" />
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
              Platform Options
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the right approach for your mobile development needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Android Development</h4>
              <p className="text-gray-300">
                Build native Android apps with Kotlin and modern Android development practices
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Apple className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">iOS Development</h4>
              <p className="text-gray-300">
                Create native iOS applications using Swift and SwiftUI frameworks
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-gray-300" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Cross-Platform</h4>
              <p className="text-gray-300">
                Develop apps for multiple platforms using Flutter and React Native
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
              <Smartphone className="w-8 h-8 text-orange-400" />
              <h3 className="text-3xl font-bold text-white">
                Mobile Development Insights
              </h3>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Stay ahead in mobile development with cutting-edge tutorials and industry trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-2xl transition-all duration-300 bg-gray-700 border-gray-600 hover:border-gray-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-600 to-red-700 flex items-center justify-center">
                    <Smartphone className="w-16 h-16 text-white opacity-50" />
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
                    <Badge variant="outline" className="text-xs border-orange-500 text-orange-400">
                      {post.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-500 text-gray-400">
                      {post.readTime}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-orange-400 transition-colors text-white line-clamp-2">
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
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
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
                    
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
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
            Ready to Build Mobile Apps?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start your journey to creating mobile applications for iOS and Android platforms.
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
