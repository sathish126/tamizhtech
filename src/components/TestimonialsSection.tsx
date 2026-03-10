import { Quote, Star, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const testimonials = [
  { name: 'Arun Kumar', role: 'Educator', text: 'TamizhTech transformed our robotics lab into a world-class facility. The training programs are exceptional!', rating: 5 },
  { name: 'Priya S', role: 'Student', text: 'Joining the Robotics Club was the best decision. Won my first national competition within 6 months!', rating: 5 },
  { name: 'Vignesh R', role: 'Engineer', text: 'Their PCB fabrication and 3D printing services are top-notch. Fast turnaround and excellent quality.', rating: 5 },
  { name: 'Ramesh M', role: 'Institution Head', text: 'We partnered with TamizhTech for our STEM curriculum. Student engagement has increased by 200%!', rating: 5 },
  { name: 'Anjali K', role: 'Hobbyist', text: 'The drone racing workshops are incredible. Great community and professional-grade equipment.', rating: 5 },
  { name: 'Suresh P', role: 'Industry Professional', text: 'Their industrial automation solutions helped us achieve 40% improvement in production efficiency.', rating: 5 },
  { name: 'Lakshmi N', role: 'Parent', text: 'My son developed amazing problem-solving skills through their robotics courses. Highly recommended!', rating: 5 },
  { name: 'Karthik V', role: 'Startup Founder', text: 'TamizhTech helped us prototype our product in record time. Their technical expertise is unmatched.', rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-wrapper">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-magenta/5 to-background" />
      
      <div className="section-content">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-magenta/30 mb-6">
              <MessageSquare className="w-4 h-4 text-neon-magenta" />
              <span className="text-sm font-tech text-neon-magenta">What People Say</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Client</span>
              <span className="neon-text-gradient"> Testimonials</span>
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl border border-neon-magenta/20 hover:border-neon-magenta/50 transition-all duration-500 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-10 h-10 rounded-xl bg-neon-magenta/10 flex items-center justify-center mb-4"
              >
                <Quote className="w-5 h-5 text-neon-magenta" />
              </motion.div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neon-cyan text-neon-cyan" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 text-sm leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center">
                  <span className="font-display text-xs font-bold text-background">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-foreground/60 font-tech">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
