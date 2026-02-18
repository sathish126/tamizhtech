import { Target, Eye, Heart, Award, Shield, Globe, Users } from 'lucide-react';

// Define core values with labels and icons
const coreValues = [
  { label: 'Innovation Leadership', icon: Target },
  { label: 'Enterprise Excellence', icon: Award },
  { label: 'Educational Impact', icon: Heart },
  { label: 'Global Reach', icon: Globe },
  { label: 'Community & Collaboration', icon: Users },
];

// Define certifications with names and descriptions
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
        {/* Section Header */}
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-8 rounded-3xl border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-cyan/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-neon-cyan" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-foreground/70 leading-relaxed">
              To empower institutions worldwide with transformative robotics, automation, and training solutions that deliver measurable results and inspire the next generation of innovators.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-neon-magenta/30 hover:border-neon-magenta/60 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-magenta/20 to-neon-magenta/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-8 h-8 text-neon-magenta" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Vision 2030 & Beyond</h3>
            <p className="text-foreground/70 leading-relaxed">
              To be the most trusted partner for educational technology transformation, operating in 50+ countries and setting the global benchmark for innovation and client success.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-purple/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-neon-purple" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Core Values</h3>
            <div className="flex flex-wrap gap-2">
              {coreValues.map((value) => (
                <div
                  key={value.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-sm"
                >
                  <value.icon className="w-3.5 h-3.5 text-neon-purple" />
                  <span className="text-foreground/80">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications as pill badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-neon-green/20 hover:border-neon-green/50 transition-all duration-300"
            >
              <Shield className="w-4 h-4 text-neon-green" />
              <span className="font-tech text-sm text-foreground/80">{cert.name}</span>
              <span className="text-xs text-foreground/50">– {cert.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
