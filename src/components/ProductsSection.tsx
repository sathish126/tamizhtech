import { Button } from '@/components/ui/button';
import { MessageCircle, Bot, Plane, Building2, Cog, CircuitBoard, Car, Trophy } from 'lucide-react';

const productCategories = [
  {
    name: 'Industrial Robots',
    icon: Bot,
    description: 'Custom automation and industrial robotics platforms for manufacturing excellence',
    gradient: 'from-neon-cyan to-neon-purple',
  },
  {
    name: 'Drones',
    icon: Plane,
    description: 'Drones for training, competitions and custom enterprise applications',
    gradient: 'from-neon-magenta to-neon-orange',
  },
  {
    name: 'Corporate / Service Robots',
    icon: Building2,
    description: 'Corporate robots for display, engagement and service automation',
    gradient: 'from-neon-green to-neon-cyan',
  },
  {
    name: 'Robotics Development Kits',
    icon: Cog,
    description: 'Complete kits for learning, prototyping and competitions',
    gradient: 'from-neon-purple to-neon-magenta',
  },
];

const roboticsKits = [
  { name: 'Line Follower Kit', icon: CircuitBoard, description: 'Complete kit for building precision line-tracking robots' },
  { name: 'RC Soccer Kit', icon: Trophy, description: 'Build your own remote-controlled soccer robot' },
  { name: 'RC Race Kit', icon: Car, description: 'High-speed racing robot kit for competitions' },
  { name: 'Mini RC Soccer Kit', icon: Trophy, description: 'Compact soccer robot for beginners' },
  { name: 'Career Board', icon: Cog, description: 'Multi-purpose development board for robotics' },
  { name: '2-in-1 RC Soccer Kit', icon: Trophy, description: 'Versatile kit with dual configuration options' },
];

const ProductsSection = () => {
  const handleEnquiry = (productName: string) => {
    const message = encodeURIComponent(`Hello TamizhTech! I'm interested in the ${productName}. Please share more details.`);
    window.open(`https://wa.me/918148045030?text=${message}`, '_blank');
  };

  const handleCatalogueRequest = () => {
    window.open(
      "https://wa.me/918148045030?text=Hello%20TamizhTech!%20I'd%20like%20to%20learn%20more%20about%20your%20robotics%20kits%20and%20products.",
      '_blank'
    );
  };

  return (
    <section id="products" className="section-wrapper">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-magenta/5 to-background" />
      
      <div className="section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-magenta/30 mb-6">
            <Bot className="w-4 h-4 text-neon-magenta" />
            <span className="text-sm font-tech text-neon-magenta">Showcase Only</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Products &</span>
            <span className="neon-text-gradient"> Platforms</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our range of robotics solutions and development kits
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {productCategories.map((category) => (
            <div
              key={category.name}
              className="glass-card p-6 rounded-3xl border border-transparent hover:border-neon-cyan/50 transition-all duration-500 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-7 h-7 text-background" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:neon-text-cyan transition-all">
                  {category.name}
                </h3>
                <p className="text-sm text-foreground/70 mb-4">
                  {category.description}
                </p>
                <Button
                  onClick={() => handleEnquiry(category.name)}
                  variant="glass"
                  size="sm"
                  className="font-tech"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Robotics Kits */}
        <div className="mb-12">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Robotics <span className="neon-text-magenta">Development Kits</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roboticsKits.map((kit) => (
              <div
                key={kit.name}
                className="glass-card p-5 rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <kit.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-sm font-bold text-foreground mb-1 group-hover:text-neon-cyan transition-colors">
                    {kit.name}
                  </h4>
                  <p className="text-xs text-foreground/60 mb-2">{kit.description}</p>
                  <button
                    onClick={() => handleEnquiry(kit.name)}
                    className="text-xs text-neon-cyan hover:text-neon-magenta transition-colors font-tech"
                  >
                    Order / Enquire →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={handleCatalogueRequest}
            variant="neon"
            size="xl"
            className="font-display"
          >
            <MessageCircle className="w-5 h-5" />
            Request Complete Product Catalogue
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
