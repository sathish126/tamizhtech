import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import RoboticsClubSection from '@/components/RoboticsClubSection';
import MissionSection from '@/components/MissionSection';
import ProductsSection from '@/components/ProductsSection';
import ServicesSection from '@/components/ServicesSection';
import ClientsSection from '@/components/ClientsSection';
import CoursesSection from '@/components/CoursesSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <RoboticsClubSection />
        <MissionSection />
        <ProductsSection />
        <ServicesSection />
        <ClientsSection />
        <CoursesSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
