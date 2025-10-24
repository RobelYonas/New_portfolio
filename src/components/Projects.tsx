import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      number: "01",
      year: "2025",
      title: "Flight Delay Prediction System",
      category: "Machine Learning / Thesis",
      description: "Engineered a comprehensive ML pipeline processing 17M+ flight records using Random Forest, KNN, XGBoost, and Logistic Regression. Applied SHAP for model interpretability and addressed class imbalance to boost prediction accuracy.",
      image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzU5MTMxODI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Python", "XGBoost", "Random Forest", "SHAP", "Data Analysis"],
      github: "https://github.com/RobelYonas",
      live: "#"
    },
    {
      number: "02", 
      year: "2025",
      title: "Smart Home Control App",
      category: "Android Application",
      description: "Android application with real-time device management, integrating REST APIs and Socket.IO for seamless connectivity. Features JWT authentication and offline resilience with intuitive, accessible UI design.",
      image: "https://images.unsplash.com/photo-1758577515339-93872db0d37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5MTMxODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Kotlin", "Android", "REST APIs", "Socket.IO", "JWT"],
      github: "https://github.com/RobelYonas",
      live: "#"
    },
    {
      number: "03",
      year: "2025", 
      title: "Parking Spot Detection System",
      category: "Computer Vision",
      description: "PyTorch-based video analytics pipeline for real-time parking detection with automated end-to-end processing workflows. Optimized for real-time performance in urban environments.",
      image: "https://images.unsplash.com/photo-1678414413532-1ca42d6a510b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJraW5nJTIwZGV0ZWN0aW9uJTIwY29tcHV0ZXIlMjB2aXNpb258ZW58MXx8fHwxNzU5MTMxODIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["PyTorch", "Computer Vision", "Python", "Video Analytics", "Real-time Processing"],
      github: "https://github.com/RobelYonas",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-12 sm:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.2, ease: [0.215, 0.610, 0.355, 1.000] }}
        >
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 sm:mb-6">
                Selected Work
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                A collection of projects showcasing my approach to solving complex problems 
                through thoughtful design and robust engineering.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:text-right">
              <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase">
                ({projects.length.toString().padStart(2, '0')}) Projects
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              className="group"
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.3,
                ease: [0.215, 0.610, 0.355, 1.000] 
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Project info */}
                <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
                  <div className="space-y-6">
                    {/* Meta info */}
                    <div className="flex items-center justify-between">
                      <span className="text-6xl font-light text-muted-foreground/30">
                        {project.number}
                      </span>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{project.year}</p>
                        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-light tracking-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs border border-border rounded-full hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-6 pt-4">
                      <motion.a
                        href={project.github}
                        className="group/link flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <Github size={16} />
                        <span>View Code</span>
                        <ArrowUpRight 
                          size={12} 
                          className="opacity-0 group-hover/link:opacity-100 transition-opacity" 
                        />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="group/link flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                        <ArrowUpRight 
                          size={12} 
                          className="opacity-0 group-hover/link:opacity-100 transition-opacity" 
                        />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project image */}
                <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
                  <motion.div
                    className="relative overflow-hidden bg-muted/30 aspect-[4/3] rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <motion.div
                        className="text-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-sm tracking-[0.2em] text-primary uppercase">
                          View Project
                        </p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}