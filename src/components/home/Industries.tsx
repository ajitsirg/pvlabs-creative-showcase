import { motion } from "framer-motion";
import { Monitor, Heart, Landmark, ShoppingCart, GraduationCap, Utensils, Plane, Music, Building, Shirt, Dumbbell, Leaf } from "lucide-react";

const industries = [
  { icon: Monitor, title: "Technology", clients: "85+ clients", desc: "SaaS, AI, Cloud & Startups" },
  { icon: Heart, title: "Healthcare", clients: "30+ clients", desc: "Hospitals, Clinics & Wellness" },
  { icon: Landmark, title: "Finance", clients: "40+ clients", desc: "Banking, Insurance & Fintech" },
  { icon: ShoppingCart, title: "E-Commerce", clients: "50+ clients", desc: "Online Stores & Marketplaces" },
  { icon: GraduationCap, title: "Education", clients: "25+ clients", desc: "EdTech, Universities & LMS" },
  { icon: Utensils, title: "Food & Beverage", clients: "35+ clients", desc: "Restaurants, CPG & Delivery" },
  { icon: Plane, title: "Travel", clients: "20+ clients", desc: "Hotels, Airlines & Tourism" },
  { icon: Music, title: "Entertainment", clients: "15+ clients", desc: "Media, Music & Events" },
  { icon: Building, title: "Real Estate", clients: "22+ clients", desc: "Properties & Construction" },
  { icon: Shirt, title: "Fashion", clients: "28+ clients", desc: "Apparel, Luxury & Retail" },
  { icon: Dumbbell, title: "Fitness", clients: "18+ clients", desc: "Gyms, Wellness & Sports" },
  { icon: Leaf, title: "Sustainability", clients: "12+ clients", desc: "Green Tech & Non-Profits" },
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
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          Industries we <span className="gradient-text">serve</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We've worked with brands across 12+ industries, bringing specialized design expertise to each sector.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="glass-card p-6 text-center group hover:border-primary/30 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
              <ind.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-bold text-sm text-foreground">{ind.title}</h3>
            <p className="text-xs text-primary font-medium mt-1">{ind.clients}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
