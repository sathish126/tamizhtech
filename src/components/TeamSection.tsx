import { Mail, MessageCircle, Linkedin, Users } from 'lucide-react';

const coreTeam = [
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

const extendedTeam = [
  { name: 'Sukeshan', role: 'R&D Head' },
  { name: 'Dharaneesh KB', role: 'PR Team Head' },
  { name: 'Aakash', role: 'Aviation & Drone Division' },
  { name: 'Kowsik K', role: 'Embedded Systems Engineer' },
  { name: 'Magadevan M', role: 'Junior Engineer' },
];

const TeamMemberCard = ({ name, role, email, whatsapp }: { name: string; role: string; email?: string; whatsapp?: string }) => (
  <div className="glass-card p-6 rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-500 group text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10">
      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta p-0.5 mb-4 group-hover:scale-110 transition-transform">
        <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
          <span className="font-display text-base font-bold neon-text-gradient">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
      </div>
      <h3 className="font-display text-sm font-bold text-foreground mb-1 group-hover:text-neon-cyan transition-colors">
        {name}
      </h3>
      <p className="text-xs text-foreground/60 font-tech mb-3">{role}</p>
      {(email || whatsapp) && (
        <div className="flex items-center justify-center gap-2">
          {email && (
            <a
              href={`mailto:${email}`}
              className="w-7 h-7 rounded-lg bg-neon-cyan/10 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          )}
          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-lg bg-neon-green/10 flex items-center justify-center text-neon-green hover:bg-neon-green hover:text-background transition-all"
              title="WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href="https://www.linkedin.com/company/tamizh-tech-robotics-company"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple hover:bg-neon-purple hover:text-background transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section id="team" className="section-wrapper">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-cyan/5 to-background" />
      
      <div className="section-content">
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
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Passionate experts driving robotics innovation in India
          </p>
        </div>

        {/* Core Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {coreTeam.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>

        {/* Extended Team */}
        <div className="text-center mb-8">
          <h3 className="font-display text-xl font-bold text-foreground/80 mb-2">
            Extended Leadership & Core Team
          </h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {extendedTeam.map((member) => (
            <TeamMemberCard key={member.name} name={member.name} role={member.role} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
