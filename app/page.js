"use client"

import Navbar from "@/component/Navbar";
import HeroSection from "@/component/HeroSection";
import SeoContentSection from "@/component/SeoContentSection";
import SecondHero from "@/component/SecondHero";
import RealStories from "@/component/RealStories";
import FAQSection from "@/component/FAQSection";
import FooterSection from "@/component/FooterSection";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser, PricingTable } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";

export default function Home() {
  const {user} = useUser();
  const createUser = useMutation(api.user.createUser)

  
  useEffect(() => {
    // console.log("user");
    user&&checkUser();
    
  }, [user])
  
const checkUser = async () => {
  const result = await createUser({
    email: user?.primaryEmailAddress.emailAddress,
    imageUrl: user?.imageUrl || "",
    userName: user?.fullName || "Anonymous", // fallback name
  });
  console.log(result);
};

return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      
      <HeroSection />
      <SeoContentSection />
      <SecondHero />
      <RealStories />
      <FAQSection />
      
      {/* Additional content can go here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to AI Notes
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Your AI-powered note-taking companion
          </p>
          <div className="flex justify-center">
            <UserButton />
          </div>
        </div>
      </div>
      
      <FooterSection className="rounded-4xl"/>
    </div>
  )
}

