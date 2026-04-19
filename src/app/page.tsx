"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { Program } from "@/components/sections/Program";
import { Club } from "@/components/sections/Club";
import { Denis } from "@/components/sections/Denis";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Quiz } from "@/components/Quiz/Quiz";

export default function Home() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Hero onStartQuiz={() => setQuizOpen(true)} />
        <WhoItsFor />
        <Program />
        <Club />
        <Denis />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <AnimatePresence>
        {quizOpen && <Quiz onClose={() => setQuizOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
