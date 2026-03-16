import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";

const posts = [
  { title: "10 Logo Design Trends Dominating 2026", category: "Branding", readTime: "5 min", author: "Priya Verma", image: serviceBranding, excerpt: "Discover the latest logo design trends from minimalist wordmarks to dynamic adaptive logos that are shaping brand identities this year." },
  { title: "Why Your Brand Needs a Complete Design System", category: "Strategy", readTime: "4 min", author: "Jordan Lee", image: serviceWebdesign, excerpt: "Learn how a unified design system can save time, ensure consistency, and scale your brand's visual language across all touchpoints." },
  { title: "The Psychology of Color in Mobile App Design", category: "UI/UX", readTime: "6 min", author: "Alex Rivera", image: serviceAppdesign, excerpt: "How strategic color choices influence user behavior, boost engagement, and create emotional connections in app interfaces." },
];

const BlogPreview = () => (
  <section className="section-padding gradient-bg-soft">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Blog</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          Latest <span className="gradient-text">Insights</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Design tips, industry trends, and creative inspiration from our team.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{p.category}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {p.readTime}</span>
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground flex items-center gap-1"><User size={12} /> {p.author}</span>
                <span className="text-sm text-primary flex items-center gap-1 font-medium">Read more <ArrowRight size={14} /></span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreview;
