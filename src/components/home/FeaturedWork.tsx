import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "NovaTech Rebrand", category: "Branding", color: "from-primary/40 to-accent/40" },
  { title: "FitPulse App UI", category: "Mobile App", color: "from-accent/40 to-primary/40" },
  { title: "GreenLeaf Packaging", category: "Packaging", color: "from-primary/30 to-accent/30" },
  { title: "UrbanEats Website", category: "Web Design", color: "from-accent/30 to-primary/30" },
  { title: "Luxe Fashion Campaign", category: "Marketing", color: "from-primary/40 to-accent/20" },
  { title: "CloudSync Dashboard", category: "UI/UX", color: "from-accent/40 to-primary/20" },
];

const FeaturedWork = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Portfolio</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of our recent projects that showcase our design capabilities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden group cursor-pointer"
          >
            <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} flex items-center justify-center`}>
              <span className="font-heading text-2xl font-bold text-foreground/30">{p.title}</span>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-semibold">{p.title}</h3>
                <span className="text-sm text-muted-foreground">{p.category}</span>
              </div>
              <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/portfolio" className="gradient-btn px-8 py-3 text-sm inline-block">
          View All Projects
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedWork;
