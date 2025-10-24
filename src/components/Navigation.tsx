import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItems = [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'about', label: 'About', number: '02' },
    { id: 'featured', label: 'Featured', number: '03' },
    { id: 'projects', label: 'Work', number: '04' },
    { id: 'skills', label: 'Skills', number: '05' },
    { id: 'contact', label: 'Contact', number: '06' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
          isScrolled ? 'bg-background/60 backdrop-blur-2xl' : ''
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.215, 0.610, 0.355, 1.000] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.button
              onClick={() => onNavigate('home')}
              className="group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="block text-sm sm:text-base tracking-[0.2em] font-light transition-transform duration-500 group-hover:-translate-y-full">
                ROBEL YONAS
              </span>
              <span className="absolute inset-0 flex items-center text-sm sm:text-base tracking-[0.2em] font-light translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                PORTFOLIO
              </span>
            </motion.button>
            
            {/* Navigation items */}
            <div className="hidden md:flex items-center space-x-16">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="group relative flex items-center space-x-3 py-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8 + index * 0.1,
                    ease: [0.215, 0.610, 0.355, 1.000]
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Number */}
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {item.number}
                  </span>
                  
                  {/* Label */}
                  <span className={`text-sm tracking-[0.1em] font-light transition-all duration-300 ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground group-hover:text-primary'
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                      layoutId="activeNav"
                      transition={{ 
                        duration: 0.6, 
                        ease: [0.215, 0.610, 0.355, 1.000] 
                      }}
                    />
                  )}
                  
                  {/* Hover line */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile menu indicator */}
            <div className="md:hidden">
              <motion.button
                className="flex flex-col space-y-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="w-6 h-px bg-foreground"></span>
                <span className="w-6 h-px bg-foreground"></span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}