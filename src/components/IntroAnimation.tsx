import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    "Loading portfolio...",
    "Preparing experience...", 
    "Almost ready..."
  ];

  useEffect(() => {
    const stepDuration = 800;
    const totalSteps = steps.length;
    
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= totalSteps - 1) {
          clearInterval(stepTimer);
          setTimeout(onComplete, 600);
          return prev;
        }
        return prev + 1;
      });
    }, stepDuration);

    return () => clearInterval(stepTimer);
  }, [onComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    })
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)"
      }}
      transition={{ duration: 1.2, ease: [0.215, 0.610, 0.355, 1.000] }}
    >
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-1 h-32 bg-primary/10"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-1 bg-primary/10"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
        />
      </div>

      <div className="text-center relative">
        {/* Main title with letter animation */}
        <div className="mb-16 overflow-hidden">
          <motion.div className="flex justify-center">
            {"ROBEL YONAS".split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-4xl md:text-6xl font-light tracking-[0.2em]"
                style={{ transformOrigin: "center bottom" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Loading text with smooth transitions */}
        <motion.div 
          className="h-8 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.p
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }}
            className="text-sm tracking-[0.3em] text-muted-foreground uppercase"
          >
            {steps[currentStep]}
          </motion.p>
        </motion.div>

        {/* Minimalist progress indicator */}
        <motion.div
          className="mt-12 flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          {steps.map((_, i) => (
            <motion.div
              key={i}
              className={`w-12 h-0.5 ${i <= currentStep ? 'bg-primary' : 'bg-muted'}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: i <= currentStep ? 1 : 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.2,
                ease: [0.215, 0.610, 0.355, 1.000]
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}