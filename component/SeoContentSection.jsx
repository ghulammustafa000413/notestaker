"use client";

import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Brain, 
  Sparkles, 
  ArrowRight, 
  CheckCircle,
  Zap,
  BookOpen,
  PenTool,
  Search,
  Users,
  Briefcase,
  Palette,
  Globe,
  Shield,
  Clock,
  Target
} from "lucide-react";
import Image from "next/image";

const SeoContentSection = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "AI PDF Processing",
      description: "Advanced AI algorithms extract key information from PDFs, making document analysis faster and more accurate than traditional methods.",
      benefits: ["Instant text extraction", "Smart content summarization", "Multi-language support", "Batch processing"]
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Intelligent Note Taking",
      description: "AI-powered note organization that understands context and automatically categorizes information for better retention and recall.",
      benefits: ["Context-aware organization", "Smart tagging system", "Cross-reference linking", "Search optimization"]
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Writing Assistant",
      description: "Get real-time writing suggestions, grammar corrections, and style improvements powered by advanced language models.",
      benefits: ["Real-time suggestions", "Grammar correction", "Style enhancement", "Tone adjustment"]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Study Tools",
      description: "Comprehensive study aids including flashcard generation, quiz creation, and progress tracking for effective learning.",
      benefits: ["Auto-generated flashcards", "Custom quiz creation", "Progress tracking", "Spaced repetition"]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Save Time",
      description: "Reduce hours of manual work with AI-powered automation"
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Improve Accuracy",
      description: "Eliminate human errors with precise AI processing"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure & Private",
      description: "Enterprise-grade security with end-to-end encryption"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Access Anywhere",
      description: "Cloud-based platform works on all devices"
    }
  ];

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Advanced AI Technology
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Transform Your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Productivity with AI
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI Notes Taker combines cutting-edge artificial intelligence with intuitive design to revolutionize 
            how you process, organize, and utilize information across all your devices.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose AI Notes Taker?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our platform leverages state-of-the-art AI technology to provide you with intelligent note-taking, 
                document processing, and content organization tools that adapt to your workflow and enhance your productivity.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Features
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/1.webp"
                alt="AI Notes Taker Platform Interface"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features for Every Need
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From students to professionals, our comprehensive feature set adapts to your unique requirements 
              and helps you achieve more in less time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/2.webp"
                alt="AI Notes Taker Advanced Features"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Advanced AI Capabilities
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our AI engine continuously learns and adapts to your writing style, preferences, and workflow, 
                providing increasingly personalized and accurate assistance over time.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Natural Language Processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Machine Learning Algorithms</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Context-Aware Intelligence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Real-Time Processing</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Performance Metrics
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-bold text-blue-600 dark:text-blue-400">99.9%</div>
                  <div className="text-gray-600 dark:text-gray-400">Accuracy Rate</div>
                </div>
                <div>
                  <div className="font-bold text-purple-600 dark:text-purple-400">10x</div>
                  <div className="text-gray-600 dark:text-gray-400">Faster Processing</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 dark:text-green-400">24/7</div>
                  <div className="text-gray-600 dark:text-gray-400">AI Availability</div>
                </div>
                <div>
                  <div className="font-bold text-orange-600 dark:text-orange-400">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">Languages Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already revolutionized their productivity with AI Notes Taker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-2 border-gray-300 dark:border-gray-600 px-8 py-3 text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              View Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-4 lg:left-10 hidden lg:block">
        <div className="w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
      </div>
      <div className="absolute bottom-20 right-4 lg:right-10 hidden lg:block">
        <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default SeoContentSection;
