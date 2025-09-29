"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Sidebar, { SidebarToggle } from "@/components/sidebar";
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
  Layers
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

export default function WebDevelopmentPage() {
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
                  Web Development
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">Intermediate</Badge>
              <Badge variant="outline">10-14 months</Badge>
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
              Build Modern Web Applications
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Master full-stack web development from frontend frameworks to backend APIs. 
              Learn to build scalable, secure, and responsive web applications.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto mb-3">
                  <Globe className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">6</div>
                <div className="text-gray-600">Modules</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto mb-3">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">162</div>
                <div className="text-gray-600">Lessons</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto mb-3">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4,800+</div>
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
              Full-Stack Development Path
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From frontend frameworks to backend APIs and database management
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
              Master Full-Stack Development
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build complete web applications from frontend to backend
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Frontend Frameworks</h4>
              <p className="text-gray-600">
                Master React, Angular, and Vue.js for building modern user interfaces
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Database Management</h4>
              <p className="text-gray-600">
                Work with SQL and NoSQL databases for scalable applications
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Security & Authentication</h4>
              <p className="text-gray-600">
                Implement secure authentication and protect web applications
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Build Web Applications?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start your journey to becoming a full-stack web developer with modern technologies and best practices.
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
