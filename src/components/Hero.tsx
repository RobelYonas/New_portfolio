import { motion } from 'motion/react';
import { ArrowDown, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  onScrollDown: () => void;
}

export function Hero({ onScrollDown }: HeroProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 1.2,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    })
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 hidden sm:block" 
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-primary/10"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-16 h-16 bg-primary/5"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
        {/* Left column - Info */}
        <motion.div 
          className="col-span-12 lg:col-span-3 text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }}
        >
          <div className="space-y-4 sm:space-y-6 flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-8 lg:gap-6 justify-center lg:justify-start">
            <div>
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                Location
              </p>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-primary" />
                <span className="text-sm">Gothenburg, Sweden</span>
              </div>
            </div>
            
            <div>
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                Local Time
              </p>
              <span className="text-sm font-mono">
                {currentTime.toLocaleTimeString('en-US', { 
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                Status
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm">Pursuing Master's</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center column - Main content */}
        <div className="col-span-12 lg:col-span-6 text-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {/* Greeting */}
            <motion.p
              className="text-sm tracking-[0.3em] text-muted-foreground mb-8 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Software Engineer
            </motion.p>
            
            {/* Main name with letter animation */}
            <div className="mb-8 overflow-hidden">
              <div className="space-y-2">
                {["ROBEL", "YONAS"].map((word, wordIndex) => (
                  <div key={word} className="flex justify-center">
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={letterIndex}
                        custom={wordIndex * 4 + letterIndex}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-block text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-tight"
                        style={{ transformOrigin: "center bottom" }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Description */}
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <p className="text-muted-foreground leading-relaxed">
                Aspiring Software Engineer with expertise in 
                <span className="text-foreground"> full-stack development</span>, 
                <span className="text-foreground"> machine learning</span>, and 
                <span className="text-foreground"> mobile applications</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right column - Stats */}
        <motion.div 
          className="col-span-12 lg:col-span-3 text-center lg:text-right order-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.215, 0.610, 0.355, 1.000] }}
        >
          <div className="space-y-4 sm:space-y-6 flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-8 lg:gap-6 justify-center lg:justify-start">
            <div>
              <p className="text-2xl font-light">3+</p>
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Years Experience
              </p>
            </div>
            
            <div>
              <p className="text-2xl font-light">10+</p>
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Projects Completed
              </p>
            </div>

            <div>
              <p className="text-2xl font-light">5+</p>
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Technologies
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={onScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground to-transparent"
          />
        </div>
      </motion.button>
    </section>
  );
}