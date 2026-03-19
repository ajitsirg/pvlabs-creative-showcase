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
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Team</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          Meet the <span className="gradient-text">creators</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">A team of 15+ passionate designers, strategists, and developers.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center group hover:shadow-xl transition-shadow"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-xl font-bold text-primary-foreground shadow-lg">
              {m.initials}
            </div>
            <h3 className="font-heading font-bold text-foreground">{m.name}</h3>
            <p className="text-sm text-primary font-medium">{m.role}</p>
            <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full inline-block mt-2">{m.specialty}</span>
            <div className="flex justify-center gap-2 mt-4">
              {socialLinks.slice(0, 4).map(({ icon: Icon, label, href }, j) => (
                <a key={j} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-muted-foreground hover:text-primary transition-colors"><Icon size={16} /></a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
