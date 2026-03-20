import { motion } from "framer-motion";
import { Zap, Shield, Clock, Users, Award, HeartHandshake, Infinity, Headphones } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Lightning Fast", desc: "Average 3-5 day turnaround. Rush delivery available." },
  { icon: Shield, title: "100% Original", desc: "Every design crafted from scratch. No templates." },
  { icon: Clock, title: "Always On Time", desc: "98% on-time delivery rate across all projects." },
  { icon: Users, title: "Expert Team", desc: "15+ skilled designers across every specialization." },
  { icon: Award, title: "Award Winning", desc: "50+ awards from Awwwards, Clutch & more." },
  { icon: HeartHandshake, title: "Client First", desc: "Unlimited revisions until you're 100% satisfied." },
  { icon: Infinity, title: "End-to-End", desc: "From strategy to delivery — we handle it all." },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated project manager for every project." },
];

const WhyChoose = () => (
  <section className="section-padding gradient-bg-soft">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary text-xs font-semibold uppercase tracking-widest">Why PV Labs</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-3 text-foreground">
          Why brands <span className="gradient-text">choose us</span>
        </h2>
        <p className="text-muted-foreground text-[15px] max-w-xl mx-auto">
          Strategic partners committed to your brand's success.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="glass-card p-5 group hover:border-primary/20 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
              <r.icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-bold text-sm mb-1 text-foreground">{r.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
