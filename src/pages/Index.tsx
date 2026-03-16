import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesGrid from "@/components/home/ServicesGrid";
import FeaturedWork from "@/components/home/FeaturedWork";
import DesignProcess from "@/components/home/DesignProcess";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/WhyChoose";
import Industries from "@/components/home/Industries";
import Team from "@/components/home/Team";
import ClientLogos from "@/components/home/ClientLogos";
import Awards from "@/components/home/Awards";
import BlogPreview from "@/components/home/BlogPreview";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <ClientLogos />
    <AboutPreview />
    <ServicesGrid />
    <FeaturedWork />
    <DesignProcess />
    <Testimonials />
    <WhyChoose />
    <Industries />
    <Team />
    <Awards />
    <BlogPreview />
    <FAQ />
    <ContactCTA />
    <Footer />
  </div>
);

export default Index;
