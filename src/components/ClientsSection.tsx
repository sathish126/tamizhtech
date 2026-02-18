import { Building2 } from 'lucide-react';

const clients = [
  { name: 'Bonifon', initial: 'B' },
  { name: 'Nura Robotics', initial: 'NR' },
  { name: 'Adithya Tech', initial: 'AT' },
  { name: 'Tech-X Robot', initial: 'TX' },
  { name: 'Fixus', initial: 'FX' },
  { name: 'Yoi Robotics Laboratory LLP', initial: 'YR' },
  { name: 'RoboAiQ', initial: 'RA' },
  { name: 'Robo Club SREC', initial: 'RC' },
  { name: 'Aalam Learning Community', initial: 'AL' },
  { name: 'Tamizh Robotics Club', initial: 'TR' },
  { name: 'AGS', initial: 'AG' },
  { name: 'TRD Squad', initial: 'TS' },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="section-wrapper">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background" />
      
      <div className="section-content">
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

        {/* Client Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="glass-card px-4 py-5 rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 flex items-center justify-center font-display font-bold text-neon-cyan text-sm mb-3 group-hover:scale-110 transition-transform">
                {client.initial}
              </div>
              <span className="font-tech text-sm text-foreground/80 group-hover:text-foreground transition-colors leading-tight block">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
