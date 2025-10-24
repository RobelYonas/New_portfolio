import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5/CSS", level: 95 }
      ]
    },
    {
      title: "Backend & Mobile",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 90 },
        { name: "Kotlin", level: 85 },
        { name: "Java", level: 80 },
        { name: "Android", level: 85 }
      ]
    },
    {
      title: "Data & ML",
      skills: [
        { name: "PyTorch", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "Firebase", level: 88 },
        { name: "SHAP Analysis", level: 75 },
        { name: "Machine Learning", level: 80 }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Socket.IO", level: 85 },
        { name: "JWT Auth", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-16 text-center">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, categoryIndex) => {
              const getSkillIcon = (skillName: string) => {
                const iconMap: { [key: string]: string } = {
                  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                  'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
                  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
                  'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
                  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
                  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
                  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
                  'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
                };
                return iconMap[skillName] || '';
              };

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  className="text-center"
                >
                  <h3 className="text-xl mb-8 border-b border-border pb-4">{category.title}</h3>
                  
                  <div className="grid grid-cols-3 gap-6 place-items-center">
                    {category.skills.map((skill, skillIndex) => {
                      const iconUrl = getSkillIcon(skill.name);
                      
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut"
                          }}
                          className="group cursor-pointer"
                        >
                          <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-accent transition-all duration-300 hover:scale-105">
                            {iconUrl ? (
                              <img 
                                src={iconUrl} 
                                alt={skill.name}
                                className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110"
                                onError={(e) => {
                                  // Fallback to text if icon fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  target.nextElementSibling?.classList.remove('hidden');
                                }}
                              />
                            ) : null}
                            <div className={`w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xs ${iconUrl ? 'hidden' : ''}`}>
                              {skill.name.slice(0, 2).toUpperCase()}
                            </div>
                            <span className="text-xs text-center leading-tight max-w-[80px] group-hover:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}