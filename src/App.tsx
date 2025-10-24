import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IntroAnimation } from "./components/IntroAnimation";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Featured } from "./components/Featured";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");

    // Handle scroll spy for navigation
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "featured",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPos >= offsetTop &&
            scrollPos < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroAnimation
            key="intro"
            onComplete={handleIntroComplete}
          />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navigation
              activeSection={activeSection}
              onNavigate={handleNavigate}
            />

            <Hero onScrollDown={handleScrollDown} />
            <About />
            <Featured />
            <Projects />
            <Skills />
            <Contact />

            <footer className="py-12 border-t border-border">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-muted-foreground text-sm">
                  © 2024 Robel Yonas. Built with React and
                  Tailwind CSS.
                </p>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}