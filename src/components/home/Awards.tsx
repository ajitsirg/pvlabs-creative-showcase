import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal } from "lucide-react";

const awards = [
  { icon: Trophy, title: "Best Creative Agency 2024", org: "Design Awards Global", year: "2024" },
  { icon: Award, title: "Top 10 UI/UX Studios", org: "Clutch.co", year: "2024" },
  { icon: Star, title: "Excellence in Branding", org: "Brand Identity Awards", year: "2023" },
  { icon: Trophy, title: "Best Motion Design", org: "Awwwards", year: "2023" },
  { icon: Medal, title: "Rising Star Agency", org: "DesignRush", year: "2022" },
  { icon: Award, title: "Best Packaging Design", org: "Dieline Awards", year: "2022" },
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
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          Awards & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">50+ industry awards recognizing our commitment to design excellence.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 flex items-start gap-4 hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <a.icon size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-foreground">{a.title}</h3>
              <p className="text-xs text-muted-foreground">{a.org}</p>
              <span className="text-xs text-primary font-medium">{a.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Awards;
