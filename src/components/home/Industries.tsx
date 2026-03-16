import { motion } from "framer-motion";
import { Monitor, Heart, Landmark, ShoppingCart, GraduationCap, Utensils, Plane, Music } from "lucide-react";

const industries = [
  { icon: Monitor, title: "Technology" },
  { icon: Heart, title: "Healthcare" },
  { icon: Landmark, title: "Finance" },
  { icon: ShoppingCart, title: "E-Commerce" },
  { icon: GraduationCap, title: "Education" },
  { icon: Utensils, title: "Food & Beverage" },
  { icon: Plane, title: "Travel" },
  { icon: Music, title: "Entertainment" },
];

const Industries = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Industries</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
          Industries we <span className="gradient-text">serve</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-8 text-center group hover:border-primary/30 transition-all"
          >
            <ind.icon size={32} className="mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium text-sm">{ind.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
