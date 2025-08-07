"use client";

import Link from 'next/link';
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Github,
  ArrowRight,
  Sparkles,
  Heart
} from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "YouTube Transcript", href: "/" },
        { name: "YouTube Summarizer", href: "/" },
        { name: "AI Presentation Maker", href: "/" },
        { name: "AI Homework Helper", href: "/" },
        { name: "AI Math Solver", href: "/" },
        { name: "AI Detector", href: "/" },
        { name: "AI Humanizer", href: "/" },
        { name: "ChatPDF", href: "/" },
        { name: "ASK AI", href: "/" },
        { name: "Text to Speech", href: "/" }
      ]
    },
    {
      title: "AI Tools",
      links: [
        { name: "AI Presentation Maker", href: "/" },
        { name: "AI Mind Map Generator", href: "/" },
        { name: "AI Flashcard Maker", href: "/" },
        { name: "AI Answer Generator", href: "/" },
        { name: "AI Diagram Generator", href: "/" },
        { name: "AI Flowchart Generator", href: "/" },
        { name: "AI Podcast Generator", href: "/" },
        { name: "AI Paper Writer", href: "/" },
        { name: "AI Worksheet Generator", href: "/" },
        { name: "Word to PDF", href: "/" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "About Us", href: "/" },
        { name: "Contact Us", href: "/" },
        { name: "Privacy", href: "/" },
        { name: "Terms", href: "/" },
        { name: "Extension Privacy", href: "/" },
        { name: "Interviews", href: "/" },
        { name: "Blog", href: "/" },
        { name: "Free Tools", href: "/" },
        { name: "Smart Tab", href: "/" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "/" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "/" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "/" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "/" },
    { name: "YouTube", icon: <Youtube className="h-5 w-5" />, href: "/" },
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "/" }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Brand & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Globe className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">AI Notes Taker</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              AI note taking tool for Clever Learning. AI Summary for YouTube, Podcast, Book, PDF, Audio, Video and taking notes. Save your time and improve learning efficiency by 10x.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">Powered by Advanced AI Technology</span>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="text-gray-300">
              Get the latest updates on new features and AI tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">support@ainotestaker.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110 text-gray-300 hover:text-blue-400"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} AI Notes Taker. All rights reserved.</span>
              <span>•</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for learners worldwide</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/" className="hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/" className="hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-4 left-4 hidden lg:block">
        <div className="w-8 h-8 bg-blue-600/20 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-4 right-4 hidden lg:block">
        <div className="w-6 h-6 bg-purple-600/20 rounded-full animate-pulse delay-1000"></div>
      </div>
    </footer>
  );
};

export default FooterSection;
