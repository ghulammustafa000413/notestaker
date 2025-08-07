"use client";

import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Search, 
  Users, 
  Briefcase, 
  Palette,
  ArrowRight,
  Sparkles,
  BookOpen,
  FileText,
  Lightbulb,
  Target,
  Zap
} from "lucide-react";

const SecondHero = () => {
  const userTypes = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Students",
      description: "AI Notes Taker helps students master content faster, generate notes and flashcards, and receive writing suggestions, making study, assignments, and speeches more efficient.",
      features: ["Master content faster", "Generate notes & flashcards", "Writing suggestions", "Efficient study methods"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Researchers",
      description: "AI Notes Taker helps researchers summarize papers, build research structures, and write proposals and reports more efficiently, while providing detailed insights through AI.",
      features: ["Summarize papers", "Build research structures", "Write proposals", "Detailed AI insights"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Educators",
      description: "AI Notes Taker enables educators to extract key points, create teaching materials, and customize content and quizzes, enhancing the learning experience for students.",
      features: ["Extract key points", "Create teaching materials", "Customize content", "Enhanced learning"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Professionals",
      description: "AI Notes Taker aids professionals in reading reports, visualizing ideas, and quickly creating proposals, briefs, and reports, with AI assistance for better writing.",
      features: ["Read reports efficiently", "Visualize ideas", "Create proposals", "AI writing assistance"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creators",
      description: "AI Notes Taker helps creators by summarizing content for inspiration, visualizing ideas, generating scripts, and managing creative notes and materials efficiently.",
      features: ["Content summarization", "Idea visualization", "Script generation", "Creative note management"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
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
            Designed for You
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tailored for Every
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Need
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're a student, researcher, educator, professional, or creator, 
            AI Notes Taker adapts to your unique workflow and enhances your productivity.
          </p>
        </div>

        {/* User Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {userTypes.map((userType, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-2xl ${userType.bgColor} border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${userType.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {userType.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {userType.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {userType.description}
              </p>
              
              {/* Features List */}
              <div className="space-y-3">
                {userType.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${userType.color} rounded-full`}></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 text-lg font-semibold mb-8">
            <Zap className="h-5 w-5 mr-2" />
            And More
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Our AI-powered platform continues to evolve with new features and capabilities 
            to meet the growing needs of our diverse user base.
          </p>
          
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Features
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-4 lg:left-10 hidden lg:block">
          <div className="w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
        </div>
        <div className="absolute bottom-20 right-4 lg:right-10 hidden lg:block">
          <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="absolute top-1/2 left-2 xl:left-5 hidden xl:block">
          <div className="w-8 h-8 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
