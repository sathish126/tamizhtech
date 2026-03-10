import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';

import galleryDrone from '@/assets/gallery-drone.jpg';
import galleryIndustrial from '@/assets/gallery-industrial-robot.jpg';
import galleryWorkshop from '@/assets/gallery-workshop.jpg';
import galleryCompetition from '@/assets/gallery-competition.jpg';
import galleryServiceRobot from '@/assets/gallery-service-robot.jpg';
import heroRobot from '@/assets/hero-robot.jpg';
import raceBot from '@/assets/race-bot.jpg';

const categories = ['All', 'Robots', 'Drones', 'Events', 'Workshop', 'Products'];

const galleryItems = [
  { src: raceBot, title: 'TTRC Race Bot', category: 'Products', description: 'Custom-built RC race bot with high-torque motors' },
  { src: galleryDrone, title: 'Cyberpunk Drone', category: 'Drones', description: 'Advanced FPV drone for training and competitions' },
  { src: galleryIndustrial, title: 'Industrial Robot Arm', category: 'Robots', description: 'Precision robotic arm for manufacturing automation' },
  { src: galleryWorkshop, title: 'Maker Workshop', category: 'Workshop', description: '3D printed parts and PCB prototyping workspace' },
  { src: galleryCompetition, title: 'Robo Race Competition', category: 'Events', description: 'National-level robotics racing competition' },
  { src: galleryServiceRobot, title: 'Service Robot', category: 'Robots', description: 'Humanoid service robot for corporate environments' },
  { src: heroRobot, title: 'Robotics Lab', category: 'Workshop', description: 'TamizhTech futuristic robotics R&D laboratory' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const navigate = useNavigate();

  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter(i => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <ScrollAnimation>
            <div className="mb-4">
              <Button variant="ghost" onClick={() => navigate('/')} className="text-foreground/60 hover:text-neon-cyan mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
              </Button>
            </div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-cyan/30 mb-6">
                <Camera className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm font-tech text-neon-cyan">Our Work & Creations</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
                <span className="text-foreground">Project</span>
                <span className="neon-text-gradient"> Gallery</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Explore our robots, drones, competition highlights and workshop creations
              </p>
            </div>
          </ScrollAnimation>

          {/* Category Filters */}
          <ScrollAnimation delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl font-tech text-sm transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-bold'
                      : 'glass-card border border-border hover:border-neon-cyan/50 text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollAnimation>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                    <span className="px-2 py-1 rounded-md bg-neon-cyan/20 text-neon-cyan text-xs font-tech w-fit mb-2">{item.category}</span>
                    <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 w-12 h-12 rounded-full glass-card border border-neon-cyan/30 flex items-center justify-center text-foreground hover:text-neon-cyan transition-colors">
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.title} className="w-full rounded-2xl border border-neon-cyan/30" />
              <div className="mt-4 text-center">
                <h3 className="font-display text-2xl font-bold text-foreground">{selectedImage.title}</h3>
                <p className="text-foreground/70 mt-1">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
