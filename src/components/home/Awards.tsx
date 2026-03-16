import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";

const awards = [
  { icon: Trophy, title: "Best Creative Agency 2024", org: "Design Awards Global" },
  { icon: Award, title: "Top 10 UI/UX Studios", org: "Clutch.co" },
  { icon: Star, title: "Excellence in Branding", org: "Brand Identity Awards" },
  { icon: Trophy, title: "Best Motion Design", org: "Awwwards" },
];

const Awards = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Recognition</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
          Awards & <span className="gradient-text">Certifications</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {awards.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center"
          >
            <a.icon size={28} className="mx-auto mb-3 text-primary" />
            <h3 className="font-heading font-semibold text-sm mb-1">{a.title}</h3>
            <p className="text-xs text-muted-foreground">{a.org}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Awards;
