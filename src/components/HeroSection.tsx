import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles, Cpu, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import heroRobot from '@/assets/hero-robot.jpg';

const stats = [
  { value: '150+', label: 'Events in last 3 years', icon: Sparkles },
  { value: '50+', label: 'Enterprise Clients', icon: Globe },
  { value: '100+', label: 'Solutions Deployed', icon: Cpu },
  { value: '15+', label: 'States Served', icon: Zap },
];

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppConsultation = () => {
    window.open(
      "https://wa.me/918148045030?text=Hello%20TamizhTech!%20I'm%20interested%20in%20enterprise%20solutions%20for%20my%20organization.",
      '_blank'
    );
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedBackground />
      
      {/* Hero Robot Image */}
      <div className="absolute inset-0 z-[1]">
        <img src={heroRobot} alt="Futuristic robot arm and drone in neon-lit lab" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-cyan/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-sm font-tech text-neon-cyan">Based in Coimbatore, Tamil Nadu</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Transforming Ideas into</span>
            <br />
            <motion.span
              className="neon-text-gradient"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% auto' }}
            >
              Intelligent Robots
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 font-body"
          >
            Robotics, Embedded Systems, AI, IoT and Automation solutions for students, creators and enterprises.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Button onClick={() => scrollToSection('#robotics-club')} variant="neon" size="xl" className="font-display w-full sm:w-auto">
              <Sparkles className="w-5 h-5" />
              Join Robotics Club
            </Button>
            <Button onClick={handleWhatsAppConsultation} variant="neonOutline" size="xl" className="font-display w-full sm:w-auto">
              Schedule Consultation
            </Button>
          </motion.div>

          {/* WhatsApp text link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <a
              href="https://wa.me/918148045030?text=Hello%20TamizhTech!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-tech text-neon-green/80 hover:text-neon-green transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-500 group"
              >
                <stat.icon className="w-6 h-6 text-neon-cyan mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <div className="font-display text-3xl md:text-4xl font-bold neon-text-cyan mb-1">{stat.value}</div>
                <div className="text-sm text-foreground/60 font-tech">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-neon-cyan/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-neon-cyan"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
