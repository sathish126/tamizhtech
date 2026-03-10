import { MessageCircle, Linkedin, Instagram, Youtube, Mail, Phone, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import ttrcLogo from '@/assets/ttrc-logo.png';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Robotics Club', href: '#robotics-club' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Courses', href: '#courses' },
  { label: 'Gallery', href: '/gallery', isRoute: true },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const supportLinks = [
  { label: 'Technical Support', icon: FileText, href: 'https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%20need%20technical%20support.' },
  { label: 'WhatsApp Help', icon: MessageCircle, href: 'https://wa.me/918148045030' },
  { label: 'Email Support', icon: Mail, href: 'mailto:tamizhtechpvtltd@gmail.com' },
  { label: 'Documentation', icon: FileText, href: '#' },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      navigate(href);
      return;
    }
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/10 via-background to-background" />
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={ttrcLogo} alt="TamizhTech" className="h-12 w-auto object-contain" />
              <span className="font-display font-bold text-2xl neon-text-gradient">TamizhTech Robotics</span>
            </div>
            <p className="text-foreground/70 max-w-md mb-6 leading-relaxed">
              Transforming ideas into innovation through accessible robotics, AI, IoT, and automation solutions for students and enterprises across India.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://www.linkedin.com/company/tamizh-tech-robotics-company', icon: Linkedin, color: 'neon-cyan' },
                { href: 'https://www.instagram.com/tamizh_tech_pvt_ltd', icon: Instagram, color: 'neon-magenta' },
                { href: 'https://youtube.com/@covaiscientist?si=tM-t8J-uP5a8BcDc', icon: Youtube, color: 'destructive' },
                { href: 'https://wa.me/918148045030', icon: MessageCircle, color: 'neon-green' },
              ].map(social => (
                <motion.a
                  key={social.href}
                  whileHover={{ scale: 1.15, y: -3 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg glass-card border border-${social.color}/20 flex items-center justify-center text-${social.color} hover:bg-${social.color} hover:text-background transition-all`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href, (link as any).isRoute)}
                    className="text-foreground/60 hover:text-neon-cyan transition-colors font-tech text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground/60 hover:text-neon-cyan transition-colors font-tech text-sm"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-foreground/50 font-tech">© 2026 TamizhTech Robotics. All rights reserved.</p>
          <div className="flex items-center gap-4 text-foreground/50 font-tech">
            <span>Made with 💚 in Coimbatore, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
