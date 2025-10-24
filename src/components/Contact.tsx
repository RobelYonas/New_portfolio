import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, Github, ArrowUpRight, Download, Quote } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // LinkedIn testimonials data - Replace with your actual recommendations
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      text: "Robel is an exceptional developer with a keen eye for detail. His work on our machine learning projects demonstrated both technical excellence and creative problem-solving. A true asset to any team.",
      linkedInUrl: "https://linkedin.com/in/robel-yonas"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      text: "Working with Robel was a great experience. His ability to quickly understand complex requirements and deliver high-quality solutions is impressive. Highly recommend him for any software engineering role.",
      linkedInUrl: "https://linkedin.com/in/robel-yonas"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "Digital Ventures",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      text: "Robel's full-stack development skills are outstanding. He consistently delivered features ahead of schedule while maintaining excellent code quality. His communication and teamwork made our collaboration seamless.",
      linkedInUrl: "https://linkedin.com/in/robel-yonas"
    },
    {
      name: "David Anderson",
      role: "Machine Learning Engineer",
      company: "AI Research Group",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      text: "Robel's expertise in machine learning and data analysis is remarkable. His flight delay prediction system showcased innovative thinking and strong technical implementation. A talented engineer with great potential.",
      linkedInUrl: "https://linkedin.com/in/robel-yonas"
    },
    {
      name: "Jennifer Williams",
      role: "Engineering Manager",
      company: "Cloud Services Pro",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      text: "I had the pleasure of mentoring Robel during his internship. His eagerness to learn, attention to code quality, and ability to adapt to new technologies quickly made him stand out. Excited to see his career grow.",
      linkedInUrl: "https://linkedin.com/in/robel-yonas"
    },
    {
      name: "Alex Thompson",
      role: "Lead Developer",
      company: "StartupHub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      text: "Robel brings a perfect combination of technical skills and collaborative spirit. His work on our React applications showed deep understanding of modern development practices. Would love to work with him again.",
      linkedInUrl: "https://linkedin.com/in/robel-yonas"
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:robel4872@gmail.com",
      label: "robel4872@gmail.com",
      description: "Let's discuss opportunities"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/robel-yonas",
      label: "Robel Yonas",
      description: "Professional network"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/RobelYonas",
      label: "@RobelYonas",
      description: "View my repositories"
    },
    {
      name: "Phone",
      icon: Mail,
      href: "tel:+46722405372",
      label: "+46 722 405 372",
      description: "Call me directly"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.2, ease: [0.215, 0.610, 0.355, 1.000] }}
        >
          {/* Testimonials Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Linkedin className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">LinkedIn Recommendations</span>
            </motion.div>
            
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight mb-6">
              What People Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Testimonials from colleagues, mentors, and collaborators I've had the privilege to work with
            </p>
          </div>

          {/* Infinite Scroll Testimonials */}
          <div className="relative mb-24 overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1 * (testimonials.length * 400)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[380px] bg-card/50 backdrop-blur rounded-lg border border-border p-6 hover:border-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  <p className="text-sm text-foreground leading-relaxed mb-6 line-clamp-4">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-border"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground truncate">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground/70 truncate">{testimonial.company}</p>
                    </div>
                    <a 
                      href={testimonial.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contact methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="group relative p-6 bg-card/50 backdrop-blur rounded-lg border border-border hover:border-primary/20 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.215, 0.610, 0.355, 1.000]
                }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <ArrowUpRight 
                      size={16} 
                      className="text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                    />
                  </div>
                  
                  <h3 className="text-lg font-light mb-2 group-hover:text-primary transition-colors duration-300">
                    {link.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {link.description}
                  </p>
                  
                  <p className="text-xs text-muted-foreground/70 font-mono">
                    {link.label}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.a
              href="/cv.pdf"
              download="Robel_Yonas_CV.pdf"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
              whileHover={{ scale: 1.05, gap: 16 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tracking-[0.1em]">Download CV</span>
              <Download 
                size={18} 
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
              />
            </motion.a>
            
            <p className="text-sm text-muted-foreground mt-4">
              Get my complete resume and portfolio details
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
