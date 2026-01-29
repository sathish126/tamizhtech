import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Robotics Club', href: '#robotics-club' },
  { label: 'Mission & Vision', href: '#mission' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '#clients' },
  { label: 'Courses', href: '#courses' },
  { label: 'Team', href: '#team' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleJoinClub = () => {
    scrollToSection('#robotics-club');
    // Open Google Form in new tab
    window.open('https://forms.google.com/robotics-club-membership', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%27m%20interested%20in%20learning%20more%20about%20your%20services.', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-neon-cyan/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center font-display font-bold text-background text-lg group-hover:neon-glow-cyan transition-all duration-300">
              TT
            </div>
            <span className="font-display font-bold text-lg hidden sm:block neon-text-gradient">
              TamizhTech
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-neon-cyan transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-neon-cyan to-neon-magenta scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={handleJoinClub}
              variant="neon"
              size="sm"
              className="font-display"
            >
              Join Robotics Club
            </Button>
            <Button
              onClick={handleWhatsApp}
              variant="neonOutline"
              size="sm"
              className="font-display gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-foreground hover:text-neon-cyan transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-neon-cyan/20 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-3 text-foreground/70 hover:text-neon-cyan hover:bg-neon-cyan/5 rounded-lg transition-all duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            <Button onClick={handleJoinClub} variant="neon" className="w-full font-display">
              Join Robotics Club
            </Button>
            <Button onClick={handleWhatsApp} variant="neonOutline" className="w-full font-display gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
