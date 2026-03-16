import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";
import serviceMotion from "@/assets/service-motion.jpg";
import servicePrint from "@/assets/service-print.jpg";
import {
  Palette, PenTool, Share2, Image, BookOpen, Flag, CreditCard,
  Package, Tag, Monitor, Smartphone, Layout, BarChart3, Brush,
  Diamond, Play, Film, Presentation, Camera, Megaphone, Mail, Target
} from "lucide-react";

const serviceCategories = [
  {
    title: "Branding & Identity",
    desc: "Build a brand that stands out with our comprehensive identity design services.",
    image: serviceBranding,
    services: [
      { icon: Palette, name: "Logo Design", desc: "Timeless logos that capture your brand's essence" },
      { icon: PenTool, name: "Brand Identity", desc: "Complete visual identity systems & brand books" },
      { icon: CreditCard, name: "Business Cards", desc: "Premium cards that make lasting impressions" },
      { icon: Tag, name: "Product Labels", desc: "Labels that comply & captivate" },
    ]
  },
  {
    title: "Digital Design",
    desc: "Modern digital experiences that engage users and drive conversions.",
    image: serviceWebdesign,
    services: [
      { icon: Monitor, name: "Website UI", desc: "Responsive designs that convert visitors" },
      { icon: Smartphone, name: "Mobile App UI", desc: "Intuitive interfaces users love" },
      { icon: Layout, name: "Landing Pages", desc: "High-converting pages optimized for ROI" },
      { icon: Diamond, name: "Icon Design", desc: "Consistent, pixel-perfect icon sets" },
    ]
  },
  {
    title: "Social & Marketing",
    desc: "Scroll-stopping content that grows your audience and drives engagement.",
    image: serviceSocial,
    services: [
      { icon: Share2, name: "Social Media Graphics", desc: "Platform-optimized content that engages" },
      { icon: Megaphone, name: "Ad Creatives", desc: "Conversion-focused marketing materials" },
      { icon: Mail, name: "Email Templates", desc: "Responsive emails that drive opens" },
      { icon: Target, name: "Digital Ads", desc: "High-performing Google & Facebook ads" },
    ]
  },
  {
    title: "Print & Packaging",
    desc: "Tangible design that communicates quality and builds trust.",
    image: servicePackaging,
    services: [
      { icon: Package, name: "Packaging Design", desc: "Shelf-worthy packaging that sells" },
      { icon: Image, name: "Posters & Flyers", desc: "Eye-catching print materials" },
      { icon: BookOpen, name: "Brochures", desc: "Professional layouts that tell your story" },
      { icon: Flag, name: "Banners & Hoardings", desc: "Large-format designs that grab attention" },
    ]
  },
  {
    title: "Motion & Media",
    desc: "Dynamic visuals that bring your brand to life across all platforms.",
    image: serviceMotion,
    services: [
      { icon: Play, name: "Motion Graphics", desc: "Animations that captivate audiences" },
      { icon: Film, name: "Video Editing", desc: "Professional overlays & graphics" },
      { icon: Camera, name: "Photo Editing", desc: "Flawless retouching & enhancement" },
      { icon: Presentation, name: "Pitch Decks", desc: "Presentations that win deals" },
    ]
  },
  {
    title: "Creative & Illustration",
    desc: "Custom artwork and infographics that make complex ideas simple and beautiful.",
    image: servicePrint,
    services: [
      { icon: Brush, name: "Illustrations", desc: "Custom artwork with personality" },
      { icon: BarChart3, name: "Infographics", desc: "Data transformed into visual stories" },
    ]
  },
];

const ServicesGrid = () => (
  <section className="section-padding gradient-bg-soft">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Services</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          Everything your brand <span className="gradient-text">needs</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          22+ specialized design services organized across 6 categories to cover every aspect of your brand's visual presence.
        </p>
      </motion.div>

      <div className="space-y-12">
        {serviceCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-card overflow-hidden grid md:grid-cols-2 ${idx % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""}`}
          >
            <div className="aspect-[4/3] md:aspect-auto">
              <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-bold mb-2 text-foreground">{cat.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{cat.desc}</p>
              <div className="grid grid-cols-2 gap-3">
                {cat.services.map((s, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 rounded-xl hover:bg-secondary/60 transition-colors">
                    <s.icon size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{s.name}</div>
                      <div className="text-xs text-muted-foreground">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services" className="gradient-btn px-8 py-3 text-sm inline-flex items-center gap-2">
          View All 22+ Services <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesGrid;
