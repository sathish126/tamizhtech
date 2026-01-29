import { Building2 } from 'lucide-react';

const clients = [
  { name: 'Bonifon', initial: 'B' },
  { name: 'Nura Robotics', initial: 'NR' },
  { name: 'Adithya Tech', initial: 'AT' },
  { name: 'Tech-X Robot', initial: 'TX' },
  { name: 'Fixus', initial: 'FX' },
  { name: 'RoboLabs', initial: 'RL' },
  { name: 'SmartTech', initial: 'ST' },
  { name: 'InnoWorks', initial: 'IW' },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-cyan/30 mb-6">
            <Building2 className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-tech text-neon-cyan">Partners & Collaborations</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Trusted By</span>
            <span className="neon-text-gradient"> Our Clients</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Serving clients across 15+ states with 50+ enterprise collaborations
          </p>
        </div>

        {/* Scrolling Clients */}
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-4 glass-card px-8 py-6 rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 group min-w-[200px]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 flex items-center justify-center font-display font-bold text-neon-cyan group-hover:scale-110 transition-transform">
                    {client.initial}
                  </div>
                  <span className="font-tech text-lg text-foreground/80 group-hover:text-foreground transition-colors">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
