import { Target, Eye, Heart, Award, Shield, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const coreValues = [
  { label: 'Innovation Leadership', icon: Target },
  { label: 'Enterprise Excellence', icon: Award },
  { label: 'Educational Impact', icon: Heart },
  { label: 'Global Reach', icon: Globe },
  { label: 'Community & Collaboration', icon: Users },
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management' },
  { name: 'ISO 27001', description: 'Information Security' },
  { name: 'IEEE Member', description: 'Engineering Standards' },
  { name: 'STEM Certified', description: 'Education Excellence' },
];

const MissionSection = () => {
  return (
    <section id="mission" className="section-wrapper">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-cyan/5 to-background" />
      
      <div className="section-content">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-cyan/30 mb-6">
              <Target className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm font-tech text-neon-cyan">Our Purpose & Direction</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Mission, Vision &</span>
              <span className="neon-text-gradient"> Core Values</span>
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Target, title: 'Our Mission', text: 'To empower institutions worldwide with transformative robotics, automation, and training solutions that deliver measurable results and inspire the next generation of innovators.', color: 'neon-cyan' },
            { icon: Eye, title: 'Vision 2030 & Beyond', text: 'To be the most trusted partner for educational technology transformation, operating in 50+ countries and setting the global benchmark for innovation and client success.', color: 'neon-magenta' },
          ].map((card, i) => (
            <ScrollAnimation key={card.title} delay={i * 0.15} direction={i === 0 ? 'left' : 'right'}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`glass-card p-8 rounded-3xl border border-${card.color}/30 hover:border-${card.color}/60 transition-all duration-500 group h-full`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${card.color}/20 to-${card.color}/5 flex items-center justify-center mb-6`}
                >
                  <card.icon className={`w-8 h-8 text-${card.color}`} />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">{card.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{card.text}</p>
              </motion.div>
            </ScrollAnimation>
          ))}

          <ScrollAnimation delay={0.3} direction="scale">
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card p-8 rounded-3xl border border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-500 group h-full"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-purple/5 flex items-center justify-center mb-6"
              >
                <Heart className="w-8 h-8 text-neon-purple" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Core Values</h3>
              <div className="flex flex-wrap gap-2">
                {coreValues.map((value, i) => (
                  <motion.div
                    key={value.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-sm"
                  >
                    <value.icon className="w-3.5 h-3.5 text-neon-purple" />
                    <span className="text-foreground/80">{value.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                whileHover={{ scale: 1.05, y: -3 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-neon-green/20 hover:border-neon-green/50 transition-all duration-300"
              >
                <Shield className="w-4 h-4 text-neon-green" />
                <span className="font-tech text-sm text-foreground/80">{cert.name}</span>
                <span className="text-xs text-foreground/50">– {cert.description}</span>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MissionSection;
