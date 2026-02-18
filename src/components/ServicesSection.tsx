import { Button } from '@/components/ui/button';
import { MessageCircle, Printer, CircuitBoard, Scissors, Cog, RotateCcw, Bot, Flame } from 'lucide-react';

const services = [
  {
    name: '3D Printing',
    icon: Printer,
    description: 'Rapid prototyping for robotics parts and custom components',
    color: 'neon-cyan',
  },
  {
    name: 'PCB Design & Fabrication',
    icon: CircuitBoard,
    description: 'Custom PCB design and manufacturing for embedded systems',
    color: 'neon-magenta',
  },
  {
    name: 'Laser Cutting',
    icon: Scissors,
    description: 'Precision cutting for acrylic, wood, and sheet materials',
    color: 'neon-purple',
  },
  {
    name: 'Machining Works',
    icon: Cog,
    description: 'CNC machining for precision mechanical components',
    color: 'neon-green',
  },
  {
    name: 'Lathing',
    icon: RotateCcw,
    description: 'Turning operations for shafts, couplings and custom parts',
    color: 'neon-orange',
  },
  {
    name: 'Welding Works',
    icon: Flame,
    description: 'Custom welding services for robotic structures and frames',
    color: 'neon-cyan',
  },
  {
    name: 'Custom Robotics Solutions',
    icon: Bot,
    description: 'Complete solution design and integration for automation',
    color: 'neon-magenta',
  },
];

const ServicesSection = () => {
  const handleServiceEnquiry = (serviceName: string) => {
    const message = encodeURIComponent(`Hello TamizhTech! I need ${serviceName} services. Please share more details.`);
    window.open(`https://wa.me/918148045030?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="section-wrapper">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-green/5 to-background" />
      
      <div className="section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-green/30 mb-6">
            <Cog className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-tech text-neon-green">Manufacturing Excellence</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Prototyping &</span>
            <span className="neon-text-gradient"> Manufacturing</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            End-to-end manufacturing services for your robotics projects
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="glass-card p-6 rounded-2xl border border-border hover:border-neon-cyan/50 transition-all duration-500 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-${service.color}/10 border border-${service.color}/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-${service.color}/60 transition-all duration-300`}>
                  <service.icon className={`w-7 h-7 text-${service.color}`} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-neon-cyan transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-foreground/60 mb-4">
                  {service.description}
                </p>
                <Button
                  onClick={() => handleServiceEnquiry(service.name)}
                  variant="glass"
                  size="sm"
                  className="font-tech"
                >
                  <MessageCircle className="w-4 h-4" />
                  Discuss Your Requirement
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
