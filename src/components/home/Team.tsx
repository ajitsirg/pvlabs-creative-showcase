import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  { name: "Priya Verma", role: "Founder & Creative Director", initials: "PV" },
  { name: "Alex Rivera", role: "Lead UI/UX Designer", initials: "AR" },
  { name: "Jordan Lee", role: "Brand Strategist", initials: "JL" },
  { name: "Mia Zhang", role: "Motion Designer", initials: "MZ" },
];

const Team = () => (
  <section className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Team</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
          Meet the <span className="gradient-text">creators</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center group"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-xl font-bold text-primary-foreground">
              {m.initials}
            </div>
            <h3 className="font-heading font-semibold">{m.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{m.role}</p>
            <div className="flex justify-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={16} /></a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
