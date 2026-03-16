import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  { title: "10 Logo Design Trends Dominating 2026", category: "Branding", readTime: "5 min" },
  { title: "Why Your Brand Needs a Design System", category: "Strategy", readTime: "4 min" },
  { title: "The Psychology of Color in UI Design", category: "UI/UX", readTime: "6 min" },
];

const BlogPreview = () => (
  <section className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Blog</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
          Latest <span className="gradient-text">Insights</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden group cursor-pointer"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-accent/20" />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{p.category}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {p.readTime}</span>
              </div>
              <h3 className="font-heading font-semibold mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
              <span className="text-sm text-primary flex items-center gap-1">Read more <ArrowRight size={14} /></span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreview;
