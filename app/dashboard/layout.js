import Sidebar from '@/app/dashboard/_components/Sidebar'
import React from 'react'
import Header from './_components/Header'


export const metadata = {
  title: "AI Notes Dashboard | Manage, Organize & Summarize Your Notes",
  description: 'Access your AI Notes Dashboard. Create, organize, and summarize notes with smart AI tools. Stay productive with cloud-based note management Our AI Notes Taking App helps you capture, organize, and summarize ideas instantly. Powered by Next.js and AI technology, it allows students, professionals, and teams to boost productivity with smart note organization, instant summaries, cloud sync, and easy sharing. Whether you’re studying, working, or collaborating, our AI-powered notes app keeps everything structured, searchable, and accessible anytime. I-powered SaaS notes app built with Next.js. Create, organize, and summarize notes instantly for students, teams, and professionals. Smart AI Notes Taking App for productivity. Take notes, auto-summarize, organize ideas & collaborate – powered by Next.js SaaS platform.Boost your productivity with our AI Notes Taking SaaS app. Built with Next.js, it helps you capture ideas, summarize instantly, and organize notes effortlessly. Perfect for students, professionals, and teams who need smart, cloud-based note management. Transform the way you take notes with our AI-powered SaaS app. Enjoy intelligent features like note summarization, cloud sync, instant search, and team collaboration. Built on Next.js, it’s fast, secure, and designed to keep your ideas organized. Our AI Notes Taking SaaS app is designed to make note-taking smarter, faster, and more organized. Powered by advanced AI and developed with Next.js, it helps you capture ideas instantly, auto-generate summaries, and keep your notes structured in one place. Whether you are a student writing study notes, a professional organizing tasks, or a team managing projects, our app gives you the tools to stay productive and efficient. With cloud storage, real-time syncing, and AI-driven features like smart search, summarization, and categorization, you’ll never lose track of important information again. Accessible anytime, anywhere, our SaaS platform is the perfect blend of simplicity, speed, and intelligence for modern note-taking. ' ,
  keywords: "AI Notes Taking Website Next.js SaaS Notes App Smart Notes with AI Cloud Notes & Summaries AI Writing & Note Organizer Best AI Notes App 2025 Productivity SaaS Tools Digital Note-Taking Software AI for Students & Professionals Online Notes with AI Summarizer AI Notes App AI-Powered Notes Taking SaaS Notes App Next.js Notes App Smart Note Taking App Online Notes Organizer AI Productivity Tool Note Summarizer with AI AI Note-Taking for Students Cloud Notes SaaS AI Notes for Professionals Best Notes App 2025"
};

const layout = ({children}) => { 
  return (
    <div>
        <div className='md:w-40 h-screen fixed'><Sidebar /></div>
        <div className=' ml-32 lg:ml-64'>
            <div className=''>
                
            {children}
            </div>
        </div>
    </div>
  )
}

export default layout