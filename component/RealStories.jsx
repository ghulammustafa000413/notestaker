"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Quote, 
  Star, 
  ArrowLeft, 
  ArrowRight,
  GraduationCap,
  Search,
  Users,
  Briefcase,
  Palette,
  Sparkles
} from "lucide-react";

const RealStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Student",
      avatar: "EJ",
      content: "AI Notes Taker transformed my study routine. It summarizes lectures, makes flashcards, and gives instant writing feedback. My grades improved, and I feel confident before exams. A must-have for students!",
      rating: 5,
      icon: <GraduationCap className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      name: "Ling Chen",
      role: "Creator",
      avatar: "LC",
      content: "AI Notes Taker acts like my research assistant. It summarizes videos, drafts scripts, refines my writing, and even helps me brainstorm new content ideas. I also use it to manage ideas and plan content visually — it saves loads of time and boosts my overall productivity.",
      rating: 5,
      icon: <Palette className="h-5 w-5" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    },
    {
      name: "William Zhang",
      role: "Professional",
      avatar: "WZ",
      content: "Working in finance, I rely on AI Notes Taker to distill long reports, visualize trends, and refine client communications. It boosts clarity and speed. Highly recommend it for professionals.",
      rating: 5,
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      name: "David Smith",
      role: "Educator",
      avatar: "DS",
      content: "As a university lecturer, I use AI Notes Taker daily to create lecture summaries, slides, and custom test questions based on my students' needs. It saves me hours each week and finds relevant references faster than traditional search engines. It's become an essential tool in my teaching.",
      rating: 5,
      icon: <Users className="h-5 w-5" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      name: "Michael Brown",
      role: "Professional",
      avatar: "MB",
      content: "In consulting, efficiency matters. AI Notes Taker helps me grasp complex reports quickly and turn them into polished presentations. I especially value the visual note feature — it clarifies ideas for client meetings.",
      rating: 5,
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      name: "Jack Wilson",
      role: "Educator",
      avatar: "JW",
      content: "AI Notes Taker changed how I prepare lessons. I turn PDFs into presentations, clarify key points with AI, and engage students more. It's helped me teach more effectively and save valuable time.",
      rating: 5,
      icon: <Users className="h-5 w-5" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      name: "Rohan Mehta",
      role: "Researcher",
      avatar: "RM",
      content: "AI Notes Taker lets me quickly summarize academic PDFs, extract key ideas, and directly ask AI for insights. The visual tools are incredibly helpful for organizing and mapping out my research thoughts. It has made literature reviews, data analysis, and proposal writing much smoother and more efficient.",
      rating: 5,
      icon: <Search className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      name: "Priya Sharma",
      role: "Student",
      avatar: "PS",
      content: "AI Notes Taker is my daily study companion. It simplifies tough topics, summarizes recordings, and creates visuals for easy learning. My studies feel more structured now, and I remember more.",
      rating: 5,
      icon: <GraduationCap className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      name: "Olivia Thompson",
      role: "Researcher",
      avatar: "OT",
      content: "AI Notes Taker helps me review papers, organize insights, and brainstorm visually. Its translation keeps formatting intact. It's the ultimate academic toolkit — like a Swiss Army knife for research.",
      rating: 5,
      icon: <Search className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-20 bg-white dark:bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Testimonials
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Real Stories,
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how AI Notes Taker is transforming the way people work, study, and create. 
            These are real stories from our diverse community of users.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className={`p-8 md:p-12 rounded-3xl ${testimonials[currentIndex].bgColor} border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300`}>
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className={`p-4 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-2xl text-white`}>
                <Quote className="h-8 w-8" />
              </div>
            </div>
            
            {/* Testimonial Content */}
            <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed mb-8">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            {/* Author Info */}
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                {/* Avatar */}
                <div className={`w-16 h-16 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonials[currentIndex].avatar}
                </div>
                
                {/* Author Details */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    {testimonials[currentIndex].icon}
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-blue-600 dark:bg-blue-400 scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">98%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">4.9/5</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their productivity with AI Notes Taker.
          </p>
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Success Story
          </Button>
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

export default RealStories;
