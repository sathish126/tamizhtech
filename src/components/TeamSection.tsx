import { Mail, MessageCircle, Linkedin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const coreTeam = [
  { name: 'Tamizharasan K', role: 'Founder & CEO', email: 'tamizharasan@tamizhtech.com', whatsapp: '918148045030', avatar: '🤖' },
  { name: 'Suraj A', role: 'Co-founder & COO', email: 'suraj@tamizhtech.com', whatsapp: '918148045030', avatar: '⚡' },
  { name: 'Dhanush S', role: 'Chief Technology Officer', email: 'dhanush@tamizhtech.com', whatsapp: '918148045030', avatar: '🔧' },
  { name: 'Chenjitha', role: 'Chief Financial Officer', email: 'chenjitha@tamizhtech.com', whatsapp: '918148045030', avatar: '📊' },
  { name: 'Poongothai Subiksha M', role: 'Chief Marketing Officer', email: 'poongothai@tamizhtech.com', whatsapp: '918148045030', avatar: '🎯' },
  { name: 'Aananth S', role: 'Product & Development Officer', email: 'aananth@tamizhtech.com', whatsapp: '918148045030', avatar: '🚀' },
  { name: 'Sathish P', role: 'Full Stack Developer', email: 'sathish@tamizhtech.com', whatsapp: '918148045030', avatar: '💻' },
];

const extendedTeam = [
  { name: 'Sukeshan', role: 'R&D Head', avatar: '🔬' },
  { name: 'Dharaneesh KB', role: 'PR Team Head', avatar: '📣' },
  { name: 'Aakash', role: 'Aviation & Drone Division', avatar: '✈️' },
  { name: 'Kowsik K', role: 'Embedded Systems Engineer', avatar: '🔌' },
  { name: 'Magadevan M', role: 'Junior Engineer', avatar: '⚙️' },
];

const TeamMemberCard = ({ name, role, email, whatsapp, avatar, index }: { name: string; role: string; email?: string; whatsapp?: string; avatar: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="glass-card p-6 rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-500 group text-center relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10">
      {/* Avatar with emoji and gradient ring */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 5 }}
        className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta p-0.5 mb-4"
      >
        <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
          <span className="text-3xl">{avatar}</span>
        </div>
      </motion.div>
      <h3 className="font-display text-sm font-bold text-foreground mb-1 group-hover:text-neon-cyan transition-colors">
        {name}
      </h3>
      <p className="text-xs text-foreground/60 font-tech mb-3">{role}</p>
      {(email || whatsapp) && (
        <div className="flex items-center justify-center gap-2">
          {email && (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={`mailto:${email}`}
              className="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          )}
          {whatsapp && (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-neon-green/10 flex items-center justify-center text-neon-green hover:bg-neon-green hover:text-background transition-all"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </motion.a>
          )}
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/company/tamizh-tech-robotics-company"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple hover:bg-neon-purple hover:text-background transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
        </div>
      )}
    </div>
  </motion.div>
);

const TeamSection = () => {
  return (
    <section id="team" className="section-wrapper">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-cyan/5 to-background" />
      
      <div className="section-content">
        <ScrollAnimation>
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
        </ScrollAnimation>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {coreTeam.map((member, index) => (
            <TeamMemberCard key={member.name} {...member} index={index} />
          ))}
        </div>

        <ScrollAnimation delay={0.2}>
          <div className="text-center mb-8">
            <h3 className="font-display text-xl font-bold text-foreground/80 mb-2">
              Extended Leadership & Core Team
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto" />
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {extendedTeam.map((member, index) => (
            <TeamMemberCard key={member.name} name={member.name} role={member.role} avatar={member.avatar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
