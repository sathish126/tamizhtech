import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, GraduationCap, Cpu, Wifi, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const categories = [
  { id: 'robotics', label: 'Robotics', icon: Cpu },
  { id: 'embedded', label: 'Embedded Systems', icon: Cpu },
  { id: 'iot', label: 'IoT', icon: Wifi },
];

const courses: Record<string, Array<{ title: string; level: string; languages: string[]; mode: string }>> = {
  robotics: [
    { title: 'Robotics Fundamentals', level: 'Beginner', languages: ['Tamil', 'English'], mode: 'Hybrid' },
    { title: 'Line Follower Design', level: 'Intermediate', languages: ['Tamil', 'English'], mode: 'Offline' },
    { title: 'Combat Robot Engineering', level: 'Advanced', languages: ['English'], mode: 'Offline' },
    { title: 'Drone Building Workshop', level: 'Intermediate', languages: ['Tamil', 'English', 'Hindi'], mode: 'Hybrid' },
  ],
  embedded: [
    { title: 'Embedded C Programming', level: 'Beginner', languages: ['Tamil', 'English'], mode: 'Online' },
    { title: 'Microcontroller Mastery', level: 'Intermediate', languages: ['English'], mode: 'Hybrid' },
    { title: 'ARM Cortex Development', level: 'Advanced', languages: ['English'], mode: 'Offline' },
    { title: 'RTOS for Robotics', level: 'Advanced', languages: ['English'], mode: 'Online' },
  ],
  iot: [
    { title: 'IoT Fundamentals', level: 'Beginner', languages: ['Tamil', 'English', 'Hindi'], mode: 'Online' },
    { title: 'Smart Lab Systems', level: 'Intermediate', languages: ['Tamil', 'English'], mode: 'Hybrid' },
    { title: 'Industrial IoT', level: 'Advanced', languages: ['English'], mode: 'Offline' },
    { title: 'Cloud Integration for IoT', level: 'Intermediate', languages: ['English'], mode: 'Online' },
  ],
};

const advancedModules = [
  'Basic Electronics', 'Advanced Electronics', '3D Modeling Basics', '3D Modeling Advanced',
  'Robo Soccer Design', 'Robo Race Design', 'Robo War Design',
  'PCB Design Basics', 'PCB Design Advanced',
  'Drone Technology Basics', 'Drone Technology Advanced',
  'ROS Basics', 'ROS Advanced',
];

const levelColors: Record<string, string> = {
  Beginner: 'bg-neon-green/20 text-neon-green border-neon-green/30',
  Intermediate: 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30',
  Advanced: 'bg-neon-magenta/20 text-neon-magenta border-neon-magenta/30',
};

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState('robotics');

  const handleSyllabusRequest = (courseName: string) => {
    const message = encodeURIComponent(`Hello TamizhTech! I'm interested in the "${courseName}" course. Please share the syllabus.`);
    window.open(`https://wa.me/918148045030?text=${message}`, '_blank');
  };

  const handleApply = () => {
    window.open('https://forms.google.com/course-application', '_blank');
  };

  return (
    <section id="courses" className="section-wrapper">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-purple/5 to-background" />
      
      <div className="section-content">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-purple/30 mb-6">
              <GraduationCap className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-tech text-neon-purple">Learn & Grow</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Courses &</span>
              <span className="neon-text-gradient"> Learning Tracks</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Master robotics, embedded systems and IoT with expert-led courses
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="flex justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-tech text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-magenta text-background'
                    : 'glass-card border border-border hover:border-neon-cyan/50 text-foreground/70 hover:text-foreground'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
          >
            {courses[activeCategory].map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center"
                  >
                    <BookOpen className="w-6 h-6 text-neon-cyan" />
                  </motion.div>
                  <span className={`px-3 py-1 rounded-full text-xs font-tech border ${levelColors[course.level]}`}>
                    {course.level}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-neon-cyan transition-colors">
                  {course.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.languages.map(lang => (
                    <span key={lang} className="px-2 py-1 rounded-md bg-muted text-xs font-tech text-foreground/70">{lang}</span>
                  ))}
                  <span className="px-2 py-1 rounded-md bg-neon-purple/10 text-xs font-tech text-neon-purple border border-neon-purple/20">
                    {course.mode}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => handleSyllabusRequest(course.title)} variant="glass" size="sm" className="flex-1 font-tech text-xs">
                    <MessageCircle className="w-3 h-3" /> Get Syllabus
                  </Button>
                  <Button onClick={handleApply} variant="neonOutline" size="sm" className="flex-1 font-tech text-xs">
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <ScrollAnimation delay={0.2}>
          <div className="glass-card p-8 rounded-2xl border border-neon-purple/20 max-w-4xl mx-auto">
            <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
              Advanced Learning <span className="neon-text-gradient">Modules</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {advancedModules.map((module, i) => (
                <motion.div
                  key={module}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neon-purple/5 border border-neon-purple/10"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-purple flex-shrink-0" />
                  <span className="text-xs font-tech text-foreground/70">{module}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CoursesSection;
