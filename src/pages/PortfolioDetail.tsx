import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ExternalLink, Calendar, Clock, Users, Palette, Layers } from "lucide-react";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceMotion from "@/assets/service-motion.jpg";
import servicePrint from "@/assets/service-print.jpg";

const projectData: Record<string, {
  title: string; client: string; category: string; year: string; duration: string;
  team: string; desc: string; challenge: string; solution: string; heroImage: string;
  gallery: string[]; colors: string[]; fonts: string[]; results: { metric: string; label: string }[];
}> = {
  "novatech-rebrand": {
    title: "NovaTech Complete Rebrand", client: "NovaTech Inc.", category: "Branding", year: "2024", duration: "8 weeks", team: "3 designers",
    desc: "A comprehensive brand overhaul for a leading tech startup, transforming their outdated identity into a modern, scalable visual system.",
    challenge: "NovaTech's identity was created 10 years ago and no longer reflected their evolution into a global tech leader. Inconsistency across 15+ touchpoints was eroding brand trust.",
    solution: "We developed a modular identity system with a dynamic logo mark, adaptive color palette, and comprehensive guidelines that work across digital, print, and environmental applications.",
    heroImage: serviceBranding, gallery: [serviceBranding, servicePrint, serviceSocial, serviceWebdesign],
    colors: ["#7C3AED", "#3B82F6", "#1E1B4B", "#F8FAFC", "#E2E8F0"],
    fonts: ["Plus Jakarta Sans", "Inter"],
    results: [{ metric: "280%", label: "Brand recognition" }, { metric: "45%", label: "More applicants" }, { metric: "3x", label: "Social engagement" }, { metric: "92%", label: "Brand satisfaction" }],
  },
  "fitpulse-app": {
    title: "FitPulse Mobile App", client: "FitPulse", category: "UI/UX", year: "2024", duration: "12 weeks", team: "2 designers",
    desc: "Complete redesign of a fitness app focusing on engagement, retention, and gamification.",
    challenge: "70% of users abandoned the app within the first week. The interface was cluttered and the experience felt generic compared to competitors.",
    solution: "Redesigned the entire UX with a focus on progressive onboarding, social features, gamification mechanics, and a personalized dashboard that adapts to user behavior.",
    heroImage: serviceAppdesign, gallery: [serviceAppdesign, serviceWebdesign, serviceSocial, serviceMotion],
    colors: ["#10B981", "#3B82F6", "#1F2937", "#FFFFFF", "#F3F4F6"],
    fonts: ["SF Pro Display", "SF Pro Text"],
    results: [{ metric: "300%", label: "Engagement increase" }, { metric: "65%", label: "Better retention" }, { metric: "4.8★", label: "App Store rating" }, { metric: "150K", label: "New downloads" }],
  },
};

const defaultProject = {
  title: "Project Showcase", client: "Client", category: "Design", year: "2024", duration: "6 weeks", team: "2 designers",
  desc: "A beautifully crafted design project delivering exceptional results.",
  challenge: "The client needed a fresh, modern design that would stand out in their competitive market.",
  solution: "We delivered a comprehensive design solution that exceeded expectations and drove measurable results.",
  heroImage: serviceBranding, gallery: [serviceBranding, serviceWebdesign, serviceSocial],
  colors: ["#7C3AED", "#3B82F6", "#1E1B4B"], fonts: ["Plus Jakarta Sans", "Inter"],
  results: [{ metric: "200%", label: "Improvement" }, { metric: "98%", label: "Satisfaction" }],
};

const PortfolioDetail = () => {
  const { slug } = useParams();
  const project = (slug && projectData[slug]) || defaultProject;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{project.category}</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar size={12} /> {project.year}</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {project.duration}</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Users size={12} /> {project.team}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-2">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-2">Client: <span className="text-foreground font-medium">{project.client}</span></p>
            <p className="text-muted-foreground max-w-3xl leading-relaxed">{project.desc}</p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-[24px] overflow-hidden shadow-xl">
            <img src={project.heroImage} alt={project.title} className="w-full aspect-[21/9] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding gradient-bg-soft">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Project <span className="gradient-text">Gallery</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-[24px] overflow-hidden shadow-lg">
                <img src={img} alt={`${project.title} - ${i + 1}`} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design System Preview */}
      <section className="section-padding gradient-bg-soft">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Design <span className="gradient-text">System</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <div className="flex items-center gap-2 mb-4"><Palette size={18} className="text-primary" /><h3 className="font-heading font-bold text-foreground">Color Palette</h3></div>
              <div className="flex gap-3">
                {project.colors.map((c, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-2xl shadow-md mb-2" style={{ backgroundColor: c }} />
                    <span className="text-xs text-muted-foreground font-mono">{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-8">
              <div className="flex items-center gap-2 mb-4"><Layers size={18} className="text-primary" /><h3 className="font-heading font-bold text-foreground">Typography</h3></div>
              <div className="space-y-4">
                {project.fonts.map((f, i) => (
                  <div key={i}>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{i === 0 ? "Heading" : "Body"}</span>
                    <p className="text-2xl font-bold text-foreground" style={{ fontFamily: f }}>{f}</p>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: f }}>The quick brown fox jumps over the lazy dog.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">Project <span className="gradient-text">Results</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 text-center">
                <div className="font-heading text-4xl font-bold gradient-text">{r.metric}</div>
                <div className="text-sm text-muted-foreground mt-2">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-bg-vivid text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Like what you see?</h2>
          <p className="text-primary-foreground/80 mb-8">Let's create something amazing together.</p>
          <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
