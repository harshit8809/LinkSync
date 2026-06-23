"use client";

import { useState } from "react";
import Header, { Logomark } from "../src/components/landing/Headers";
import Hero from "@/src/components/landing/Hero";
import ProblemSection, { HowItWorks } from "@/src/components/landing/ProblemSection";
import PlatformsGrid from "@/src/components/landing/PlatformsGrid";
import AuthCard from "@/src/components/landing/AuthCard";
import Footer from "@/src/components/Footer";

type AuthTab = "signup" | "login";

export default function Home() {
  const [authTab, setAuthTab] = useState<AuthTab>("signup");
  // console.log("authTab", authTab);


  return (
    <div className="flex min-h-screen flex-col">
      <Header onAuth={setAuthTab} />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <PlatformsGrid />
        <AuthCard tab={authTab} onTabChange={setAuthTab} />
      </main>
      <Footer />
    </div>
  );
}
