import { motion } from "framer-motion";
import { socialLinks } from "@/lib/social-links";

const team = [
  { name: "Priya Verma", role: "Founder & Creative Director", initials: "PV", specialty: "Brand Strategy" },
  { name: "Alex Rivera", role: "Lead UI/UX Designer", initials: "AR", specialty: "Design Systems" },
  { name: "Jordan Lee", role: "Brand Strategist", initials: "JL", specialty: "Market Research" },
  { name: "Mia Zhang", role: "Motion Designer", initials: "MZ", specialty: "Animation" },
];

const Team = () => (
  <section className="section-padding gradient-bg-soft">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Team</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-3 text-foreground">
          Meet the <span className="gradient-text">creators</span>
        </h2>
        <p className="text-muted-foreground text-[15px] max-w-lg mx-auto">15+ passionate designers, strategists, and developers.</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {team.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-5 text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-3 flex items-center justify-center text-lg font-bold text-primary-foreground">
              {m.initials}
            </div>
            <h3 className="font-heading font-bold text-sm text-foreground">{m.name}</h3>
            <p className="text-xs text-primary font-medium mt-0.5">{m.role}</p>
            <span className="text-[10px] text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full inline-block mt-2">{m.specialty}</span>
            <div className="flex justify-center gap-2 mt-3">
              {socialLinks.slice(0, 3).map(({ icon: Icon, label, href }, j) => (
                <a key={j} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
