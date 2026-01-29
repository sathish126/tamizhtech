import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';

const enquiryTypes = [
  'General Inquiry',
  'Robotics Club Membership',
  'Enterprise Solutions',
  'Strategic Partnership',
  'Executive Consultation',
  'Professional Training',
  'Technical Support',
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    enquiryType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hi TamizhTech, my name is ${formData.name}. I'm interested in ${formData.enquiryType}. Subject: ${formData.subject}. Message: ${formData.message}. Phone: ${formData.phone}. Email: ${formData.email}.`
    );
    window.open(`https://wa.me/918148045030?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-cyan/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-cyan/30 mb-6">
            <MessageCircle className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-tech text-neon-cyan">Get In Touch</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Let's Build Your</span>
            <span className="neon-text-gradient"> Next Robot</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl border border-neon-cyan/20">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border focus:border-neon-cyan"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border focus:border-neon-cyan"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-neon-cyan"
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-neon-cyan"
                />
              </div>
              <select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 rounded-lg bg-background/50 border border-border text-foreground focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan"
              >
                <option value="">Select Enquiry Type</option>
                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="bg-background/50 border-border focus:border-neon-cyan resize-none"
              />
              <Button type="submit" variant="neon" size="lg" className="w-full font-display">
                <Send className="w-5 h-5" />
                Send Message via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+918148045030"
                className="glass-card p-5 rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60 font-tech">Call Us</div>
                  <div className="font-display font-bold text-foreground">+91 8148045030</div>
                </div>
              </a>

              <a
                href="mailto:tamizhtechpvtltd@gmail.com"
                className="glass-card p-5 rounded-2xl border border-neon-magenta/20 hover:border-neon-magenta/50 transition-all group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-magenta/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-neon-magenta" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60 font-tech">Email</div>
                  <div className="font-display font-bold text-foreground text-sm">tamizhtechpvtltd@gmail.com</div>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Coimbatore,Tamil+Nadu,India"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-neon-green/20 hover:border-neon-green/50 transition-all group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60 font-tech">Location</div>
                  <div className="font-display font-bold text-foreground">Coimbatore, Tamil Nadu</div>
                </div>
              </a>

              <div className="glass-card p-5 rounded-2xl border border-neon-purple/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <div className="text-sm text-foreground/60 font-tech">Business Hours</div>
                  <div className="font-display font-bold text-foreground">Mon–Sat: 9AM – 6PM</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-6 rounded-2xl border border-neon-cyan/20">
              <h4 className="font-display text-lg font-bold text-foreground mb-4">Quick Actions</h4>
              <div className="grid grid-cols-1 gap-3">
                <Button
                  onClick={() => window.open('https://wa.me/918148045030', '_blank')}
                  variant="neon"
                  className="w-full font-tech justify-start"
                >
                  <MessageCircle className="w-5 h-5" />
                  Executive WhatsApp
                </Button>
                <Button
                  onClick={() => window.open('mailto:tamizhtechpvtltd@gmail.com', '_blank')}
                  variant="neonOutline"
                  className="w-full font-tech justify-start"
                >
                  <Mail className="w-5 h-5" />
                  Executive Email
                </Button>
                <Button
                  onClick={() => window.open('tel:+918148045030', '_blank')}
                  variant="glass"
                  className="w-full font-tech justify-start"
                >
                  <Phone className="w-5 h-5" />
                  Executive Hotline
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 rounded-2xl border border-neon-magenta/20">
              <h4 className="font-display text-lg font-bold text-foreground mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/tamizh-tech-robotics-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/tamizh_tech_pvt_ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-neon-magenta/10 flex items-center justify-center text-neon-magenta hover:bg-neon-magenta hover:text-background transition-all"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com/@covaiscientist?si=tM-t8J-uP5a8BcDc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive hover:bg-destructive hover:text-background transition-all"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/918148045030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center text-neon-green hover:bg-neon-green hover:text-background transition-all"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
