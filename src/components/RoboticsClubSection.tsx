import { Button } from '@/components/ui/button';
import { MessageCircle, Trophy, Users, Wrench, Rocket, Zap, Target, Wind, Navigation } from 'lucide-react';

const events = [
  { name: 'Robo Soccer', icon: Target, description: 'Build robots that play soccer autonomously' },
  { name: 'Robo Sumo', icon: Zap, description: 'Design push-battle bots for competition' },
  { name: 'Robo Race', icon: Rocket, description: 'Speed-focused racing robot challenges' },
  { name: 'Robo War', icon: Trophy, description: 'Combat robots in battle arenas' },
  { name: 'Line Follower Race', icon: Navigation, description: 'Precision line-tracking competitions' },
  { name: 'Fast Line Follower & Maze Solver', icon: Target, description: 'Advanced path navigation challenges' },
  { name: 'Water Rocket', icon: Rocket, description: 'Propulsion and aerospace challenges' },
  { name: 'Drone Race', icon: Wind, description: 'FPV drone racing competitions' },
];

const benefits = [
  { icon: Users, text: 'Training & mentorship for all listed events' },
  { icon: Trophy, text: 'National & international competition support (150+ events)' },
  { icon: Wrench, text: 'Access to labs, tools and practice arenas' },
  { icon: Rocket, text: 'Community of builders, mentors and innovators' },
];

const RoboticsClubSection = () => {
  const handleJoinForm = () => {
    window.open('https://forms.google.com/robotics-club-membership', '_blank');
  };

  const handleMentorWhatsApp = () => {
    window.open(
      "https://wa.me/918148045030?text=Hello%20TamizhTech!%20I%20want%20to%20join%20the%20Robotics%20Club.",
      '_blank'
    );
  };

  return (
    <section id="robotics-club" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-purple/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-magenta/30 mb-6">
            <Users className="w-4 h-4 text-neon-magenta" />
            <span className="text-sm font-tech text-neon-magenta">Community & Innovation Hub</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="neon-text-gradient">TamizhTech</span>
            <span className="text-foreground"> Robotics Club</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Hands-on robotics, competitions and innovation hub for school and college students.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {events.map((event, index) => (
            <div
              key={event.name}
              className="glass-card p-6 rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-500 group hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <event.icon className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-neon-cyan transition-colors">
                {event.name}
              </h3>
              <p className="text-sm text-foreground/60">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 glass-card rounded-xl border border-neon-green/20"
            >
              <div className="w-10 h-10 rounded-lg bg-neon-green/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-neon-green" />
              </div>
              <span className="text-sm font-medium text-foreground/80">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Join Panel */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-magenta/20 to-neon-purple/20 rounded-3xl blur-3xl" />
          <div className="relative glass-card p-8 md:p-12 rounded-3xl border border-neon-cyan/30 neon-border overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-neon-magenta/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                <span className="neon-text-cyan">Become a Robotics Club</span>
                <span className="text-foreground"> Member</span>
              </h3>
              <p className="text-lg text-foreground/70 mb-8">
                Get structured training, event support and exclusive member benefits.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={handleJoinForm}
                  variant="neon"
                  size="xl"
                  className="font-display w-full sm:w-auto"
                >
                  <Rocket className="w-5 h-5" />
                  Fill Membership Form
                </Button>
                <Button
                  onClick={handleMentorWhatsApp}
                  variant="neonOutline"
                  size="xl"
                  className="font-display w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Talk to Mentor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticsClubSection;
