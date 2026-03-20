import { motion } from "framer-motion";
import { Monitor, Heart, Landmark, ShoppingCart, GraduationCap, Utensils, Plane, Music, Building, Shirt, Dumbbell, Leaf } from "lucide-react";

const industries = [
  { icon: Monitor, title: "Technology", clients: "85+" },
  { icon: Heart, title: "Healthcare", clients: "30+" },
  { icon: Landmark, title: "Finance", clients: "40+" },
  { icon: ShoppingCart, title: "E-Commerce", clients: "50+" },
  { icon: GraduationCap, title: "Education", clients: "25+" },
  { icon: Utensils, title: "Food & Beverage", clients: "35+" },
  { icon: Plane, title: "Travel", clients: "20+" },
  { icon: Music, title: "Entertainment", clients: "15+" },
  { icon: Building, title: "Real Estate", clients: "22+" },
  { icon: Shirt, title: "Fashion", clients: "28+" },
  { icon: Dumbbell, title: "Fitness", clients: "18+" },
  { icon: Leaf, title: "Sustainability", clients: "12+" },
];

const Industries = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary text-xs font-semibold uppercase tracking-widest">Industries</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-3 text-foreground">
          Industries we <span className="gradient-text">serve</span>
        </h2>
        <p className="text-muted-foreground text-[15px] max-w-xl mx-auto">
          Specialized design expertise across 12+ sectors.
        </p>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="glass-card p-4 text-center group hover:border-primary/20 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary transition-colors">
              <ind.icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-semibold text-xs text-foreground">{ind.title}</h3>
            <p className="text-[10px] text-primary font-medium mt-0.5">{ind.clients} clients</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
