import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const featuredItems = [
  {
    title: "Leading Team Presentations",
    description: "Presenting innovative solutions and technical architectures to stakeholders and leadership teams. Driving strategic discussions on product development and engineering excellence.",
    image: "https://images.unsplash.com/photo-1760346547345-55dc606f9cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWV0aW5nJTIwcm9vbSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjEyOTQ2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#1a1a2e",
    year: "2024"
  },
  {
    title: "Virtual Collaboration Sessions",
    description: "Engaging in strategic meetings with industry leaders and CEOs. Collaborating on cross-functional projects and aligning technical solutions with business objectives.",
    image: "https://images.unsplash.com/photo-1648737966968-5f50e6bf9e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbmZlcmVuY2UlMjBjYWxsJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYxMjg1MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#16213e",
    year: "2024"
  },
  {
    title: "Tech Conference Speaking",
    description: "Sharing insights on modern development practices, machine learning applications, and software architecture. Contributing to the tech community through knowledge sharing.",
    image: "https://images.unsplash.com/photo-1560523159-94c9d18bcf27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHNwZWFrZXIlMjBzdGFnZXxlbnwxfHx8fDE3NjEyOTQ2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#0f3460",
    year: "2023"
  },
  {
    title: "Workspace Innovation",
    description: "Collaborative problem-solving sessions focused on designing scalable solutions. Working with cross-functional teams to deliver high-impact features and optimizations.",
    image: "https://images.unsplash.com/photo-1655746340587-9d1aaad92b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MTIzMzkxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#e94560",
    year: "2024"
  },
  {
    title: "Hackathon Achievements",
    description: "Building innovative solutions under pressure with talented teams. Demonstrating rapid prototyping skills and creative problem-solving in competitive environments.",
    image: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBoYWNrYXRob24lMjBkZXZlbG9wZXJzfGVufDF8fHx8MTc2MTI5NDY3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#533483",
    year: "2023"
  }
];

const FeaturedCard = ({ item, index, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={container}
      className="h-screen flex items-center justify-center sticky"
      style={{ top: `calc(-5vh + ${index * 25}px)` }}
    >
      <motion.div
        style={{ 
          scale,
          backgroundColor: item.color,
        }}
        className="relative w-full max-w-5xl h-[550px] rounded-3xl p-12 flex flex-col md:flex-row gap-8 origin-top"
      >
        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-xs font-mono text-white/80">{item.year}</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              {item.title}
            </h2>
            
            <p className="text-white/70 leading-relaxed text-lg">
              {item.description}
            </p>
          </div>

          <div className="flex items-center gap-2 text-white/90 group cursor-pointer">
            <span className="text-sm tracking-wider">View Details</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 relative rounded-2xl overflow-hidden">
          <motion.div
            style={{ scale: imageScale }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export function Featured() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="featured" className="relative bg-background">
      {/* Header */}
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Featured Moments</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Highlights from conferences, collaborations, and breakthrough moments 
            throughout my career
          </p>
        </motion.div>
      </div>

      {/* Stacked Cards Container */}
      <div ref={container} className="relative">
        {featuredItems.map((item, index) => {
          const targetScale = 1 - ((featuredItems.length - index) * 0.05);
          return (
            <FeaturedCard
              key={index}
              item={item}
              index={index}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* Bottom spacing - reduced for better flow */}
      <div className="h-48" />
    </section>
  );
}
