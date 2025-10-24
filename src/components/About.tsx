import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import robelPhoto from 'figma:asset/5fbd42f41cece0e7165a525a89defc0bae571c56.png';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-8 sm:mb-12 lg:mb-16 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                <p>
                  I'm an aspiring software engineer currently pursuing my Master's in Software Engineering 
                  and Management at the University of Gothenburg. With a strong foundation in computer science 
                  and hands-on experience in full-stack development, I'm passionate about continuous learning 
                  and tackling real-world challenges.
                </p>
                
                <p>
                  My expertise spans from data-driven development and machine learning to mobile app development 
                  with Android and Kotlin. I've worked on projects ranging from fintech applications to 
                  AI-powered parking detection systems, always focusing on scalable solutions and clean architecture.
                </p>
                
                <p>
                  Currently completing my bachelor's thesis on machine learning algorithms for flight delay 
                  prediction, I enjoy exploring the intersection of data science and software engineering. 
                  I thrive in agile environments and love collaborating with diverse teams to build 
                  innovative solutions.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden p-4">
                <img 
                  src={robelPhoto}
                  alt="Robel Yonas"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}