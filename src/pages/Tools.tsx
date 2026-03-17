import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, ArrowRight, Palette, Layout, Type, Image, Layers, Grid3X3, FileText, Brush, Star, Eye } from "lucide-react";

const resources = [
  { icon: Palette, title: "Brand Color Palette Generator", desc: "Generate harmonious color palettes for your brand with HEX, RGB, and HSL values.", type: "Free Tool", downloads: "12.5K", tag: "Popular" },
  { icon: Layout, title: "Website Wireframe Kit", desc: "50+ pre-built wireframe components for rapid website prototyping in Figma.", type: "Figma Template", downloads: "8.2K" },
  { icon: Type, title: "Font Pairing Guide", desc: "100 proven font combinations for headings and body text with usage guidelines.", type: "PDF Guide", downloads: "15K", tag: "Bestseller" },
  { icon: Image, title: "Social Media Template Pack", desc: "200+ editable templates for Instagram, Facebook, LinkedIn, Twitter, and TikTok.", type: "Canva/Figma", downloads: "22K", tag: "Popular" },
  { icon: Layers, title: "UI Component Library", desc: "500+ production-ready UI components with variants, states, and responsive layouts.", type: "Figma Library", downloads: "6.8K" },
  { icon: Grid3X3, title: "Design System Starter Kit", desc: "Complete design system foundation with tokens, components, and documentation.", type: "Figma Template", downloads: "9.1K" },
  { icon: FileText, title: "Brand Strategy Workbook", desc: "Step-by-step workbook for defining your brand's mission, values, and positioning.", type: "PDF Workbook", downloads: "11K" },
  { icon: Brush, title: "Icon Set: Minimal Line", desc: "400+ minimal line icons in SVG format, perfect for web and mobile interfaces.", type: "SVG Icons", downloads: "18K", tag: "Popular" },
  { icon: Palette, title: "Gradient Collection", desc: "200 beautiful CSS gradients ready to copy-paste into your projects.", type: "CSS/Figma", downloads: "14K" },
  { icon: Layout, title: "Landing Page Templates", desc: "10 high-converting landing page designs with copy frameworks and CTA patterns.", type: "Figma Template", downloads: "7.3K" },
  { icon: Type, title: "Typography Scale Calculator", desc: "Calculate perfect type scales based on ratio and base size for responsive design.", type: "Free Tool", downloads: "5.6K" },
  { icon: Image, title: "Mockup Collection", desc: "50+ photorealistic device and packaging mockups for presenting your designs.", type: "PSD/Figma", downloads: "19K", tag: "Bestseller" },
];

const Tools = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Resources</span>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
            Free design <span className="gradient-text">resources</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Templates, UI kits, guides, and tools to supercharge your design workflow. All crafted by the PV Labs team.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Download size={14} className="text-primary" /> 150K+ total downloads</span>
            <span className="flex items-center gap-1"><Star size={14} className="text-primary" /> 4.9/5 average rating</span>
            <span className="flex items-center gap-1"><Eye size={14} className="text-primary" /> Updated monthly</span>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="px-6 md:px-12 pb-24">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="glass-card p-6 hover:shadow-xl transition-shadow group relative">
            {r.tag && <span className="absolute top-4 right-4 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{r.tag}</span>}
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <r.icon size={22} className="text-primary" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">{r.type}</span>
            <h3 className="font-heading text-lg font-bold text-foreground mt-1 mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{r.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Download size={12} /> {r.downloads} downloads</span>
              <button className="gradient-btn px-4 py-2 text-xs inline-flex items-center gap-1">
                Download <Download size={12} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="section-padding gradient-bg-vivid text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Need custom design work?</h2>
        <p className="text-primary-foreground/80 mb-8">These resources are just the start. Let us create something uniquely yours.</p>
        <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
          Get a Free Quote <ArrowRight size={18} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Tools;
