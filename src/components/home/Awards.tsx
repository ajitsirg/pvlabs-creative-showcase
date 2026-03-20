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
        className="text-center mb-14"
      >
        <span className="text-primary text-xs font-semibold uppercase tracking-widest">Recognition</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-3 text-foreground">
          Awards & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-muted-foreground text-[15px] max-w-lg mx-auto">50+ industry awards recognizing our commitment to excellence.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {awards.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass-card p-5 flex items-center gap-4 group hover:border-primary/20 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
              <a.icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-foreground">{a.title}</h3>
              <p className="text-[11px] text-muted-foreground">{a.org} · {a.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Awards;
