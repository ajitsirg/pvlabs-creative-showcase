import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Palette, PenTool, Share2, Image, BookOpen, Flag, CreditCard,
  Package, Tag, Monitor, Smartphone, Layout, BarChart3, Brush,
  Diamond, Play, Film, Presentation, Camera, Megaphone, Mail, Target
} from "lucide-react";

const services = [
  { icon: Palette, title: "Logo Design" },
  { icon: PenTool, title: "Brand Identity" },
  { icon: Share2, title: "Social Media Graphics" },
  { icon: Image, title: "Posters & Flyers" },
  { icon: BookOpen, title: "Brochure Design" },
  { icon: Flag, title: "Banner & Hoarding" },
  { icon: CreditCard, title: "Business Cards" },
  { icon: Package, title: "Packaging Design" },
  { icon: Tag, title: "Product Labels" },
  { icon: Monitor, title: "Website UI" },
  { icon: Smartphone, title: "Mobile App UI" },
  { icon: Layout, title: "Landing Pages" },
  { icon: BarChart3, title: "Infographics" },
  { icon: Brush, title: "Illustrations" },
  { icon: Diamond, title: "Icon Design" },
  { icon: Play, title: "Motion Graphics" },
  { icon: Film, title: "Video Editing" },
  { icon: Presentation, title: "Pitch Decks" },
  { icon: Camera, title: "Photo Editing" },
  { icon: Megaphone, title: "Ad Creatives" },
  { icon: Mail, title: "Email Templates" },
  { icon: Target, title: "Digital Ads" },
];

const ServicesGrid = () => (
  <section className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Services</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
          Everything your brand <span className="gradient-text">needs</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          22+ specialized design services to cover every aspect of your brand's visual presence.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="glass-card p-5 text-center group hover:border-primary/30 transition-all cursor-pointer"
          >
            <s.icon className="mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" size={28} />
            <span className="text-sm font-medium">{s.title}</span>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services" className="gradient-btn px-8 py-3 text-sm inline-block">
          View All Services
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesGrid;
