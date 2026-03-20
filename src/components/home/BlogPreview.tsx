import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";

const posts = [
  { title: "10 Logo Design Trends Dominating 2026", category: "Branding", readTime: "5 min", author: "Priya Verma", image: serviceBranding, excerpt: "Discover the latest logo design trends from minimalist wordmarks to dynamic adaptive logos shaping brand identities." },
  { title: "Why Your Brand Needs a Design System", category: "Strategy", readTime: "4 min", author: "Jordan Lee", image: serviceWebdesign, excerpt: "How a unified design system saves time, ensures consistency, and scales your brand's visual language." },
  { title: "Color Psychology in Mobile App Design", category: "UI/UX", readTime: "6 min", author: "Alex Rivera", image: serviceAppdesign, excerpt: "How strategic color choices influence user behavior and create emotional connections in app interfaces." },
];

const BlogPreview = () => (
  <section className="section-padding gradient-bg-soft">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary text-xs font-semibold uppercase tracking-widest">Blog</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-3 text-foreground">
          Latest <span className="gradient-text">Insights</span>
        </h2>
        <p className="text-muted-foreground text-[15px] max-w-lg mx-auto">Design tips, trends, and creative inspiration.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card overflow-hidden group cursor-pointer"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-medium text-primary bg-primary/8 px-2.5 py-0.5 rounded-full">{p.category}</span>
                <span className="text-[11px] text-muted-foreground flex items-center gap-1"><Clock size={10} /> {p.readTime}</span>
              </div>
              <h3 className="font-heading font-bold text-[15px] text-foreground mb-1.5 group-hover:text-primary transition-colors leading-snug">{p.title}</h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{p.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground flex items-center gap-1"><User size={10} /> {p.author}</span>
                <Link to="/blog" className="text-xs text-primary flex items-center gap-1 font-medium">Read <ArrowRight size={12} /></Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreview;
