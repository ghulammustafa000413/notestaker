"use client";

import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Brain, 
  Sparkles, 
  ArrowRight, 
  Play,
  Zap,
  BookOpen,
  PenTool
} from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "AI PDF Processing",
      description: "Extract insights from PDFs with advanced AI"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Smart Notes",
      description: "AI-powered note taking and organization"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Tools",
      description: "Comprehensive suite of AI-powered tools"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Study Assistant",
      description: "Enhanced learning with AI assistance"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Note Taking Platform
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Experience
            </span>
            with AI
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Upload PDFs, create smart notes, and leverage AI tools to enhance your productivity. 
            From study materials to professional documents, we've got you covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/dashboard" className="flex items-center">
                Get Started Free
              </Link>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            {/* <Button 
              variant="outline" 
              size="lg" 
              className="group border-2 border-gray-300 dark:border-gray-600 px-8 py-3 text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AI Support</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-4">
            Trusted by students and professionals worldwide
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-gray-900 text-lg dark:text-gray-900 font-bold">Harvard</div>
            <div className="text-gray-900 text-lg dark:text-gray-900 font-bold">MIT</div>
            <div className="text-gray-900 text-lg dark:text-gray-900 font-bold">Stanford</div>
            <div className="text-gray-900 text-lg dark:text-gray-900 font-bold">Google</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-4 lg:left-10 hidden lg:block">
        <div className="w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
      </div>
      <div className="absolute bottom-20 right-4 lg:right-10 hidden lg:block">
        <div className="w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default HeroSection;
