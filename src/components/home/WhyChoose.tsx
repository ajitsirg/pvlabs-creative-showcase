import { motion } from "framer-motion";
import { Zap, Shield, Clock, Users, Award, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Turnaround", desc: "Quick delivery without compromising quality." },
  { icon: Shield, title: "100% Original", desc: "Every design is unique and crafted from scratch." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect deadlines and deliver on schedule." },
  { icon: Users, title: "Expert Team", desc: "15+ skilled designers with diverse specializations." },
  { icon: Award, title: "Award Winning", desc: "50+ industry awards and recognitions." },
  { icon: HeartHandshake, title: "Client Focused", desc: "Unlimited revisions until you're satisfied." },
];

const WhyChoose = () => (
  <section className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why PV Labs</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
          Why choose <span className="gradient-text">us</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 group hover:border-primary/30 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <r.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
