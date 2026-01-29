import { Mail, MessageCircle, Linkedin, Users } from 'lucide-react';

const team = [
  {
    name: 'Tamizharasan K',
    role: 'Founder & CEO',
    email: 'tamizharasan@tamizhtech.com',
    whatsapp: '918148045030',
  },
  {
    name: 'Suraj A',
    role: 'Co-founder & COO',
    email: 'suraj@tamizhtech.com',
    whatsapp: '918148045030',
  },
  {
    name: 'Dhanush S',
    role: 'Chief Technology Officer',
    email: 'dhanush@tamizhtech.com',
    whatsapp: '918148045030',
  },
  {
    name: 'Chenjitha',
    role: 'Chief Financial Officer',
    email: 'chenjitha@tamizhtech.com',
    whatsapp: '918148045030',
  },
  {
    name: 'Poongothai Subiksha M',
    role: 'Chief Marketing Officer',
    email: 'poongothai@tamizhtech.com',
    whatsapp: '918148045030',
  },
  {
    name: 'Aananth S',
    role: 'Product & Development Officer',
    email: 'aananth@tamizhtech.com',
    whatsapp: '918148045030',
  },
  {
    name: 'Sathish P',
    role: 'Full Stack Developer',
    email: 'sathish@tamizhtech.com',
    whatsapp: '918148045030',
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-cyan/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-cyan/30 mb-6">
            <Users className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-tech text-neon-cyan">The People Behind Innovation</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Meet Our</span>
            <span className="neon-text-gradient"> Team</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Passionate experts driving robotics innovation in India
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="glass-card p-6 rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-500 group text-center relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                {/* Avatar */}
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta p-0.5 mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="font-display text-xl font-bold neon-text-gradient">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-neon-cyan transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-foreground/60 font-tech mb-4">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://wa.me/${member.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-neon-green/10 flex items-center justify-center text-neon-green hover:bg-neon-green hover:text-background transition-all"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/tamizh-tech-robotics-company"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple hover:bg-neon-purple hover:text-background transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
