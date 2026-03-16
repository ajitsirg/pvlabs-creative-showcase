import { motion } from "framer-motion";
import { Zap, Shield, Clock, Users, Award, HeartHandshake, Infinity, Headphones } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Lightning Fast", desc: "Average turnaround of 3-5 business days. Rush delivery available for urgent projects." },
  { icon: Shield, title: "100% Original", desc: "Every design is crafted from scratch. No templates, no stock. Pure custom creativity." },
  { icon: Clock, title: "Always On Time", desc: "98% on-time delivery rate. We respect deadlines because your time matters." },
  { icon: Users, title: "Expert Team", desc: "15+ skilled designers with diverse specializations across branding, digital, print, and motion." },
  { icon: Award, title: "Award Winning", desc: "50+ industry awards from Awwwards, Clutch, Design Awards Global, and more." },
  { icon: HeartHandshake, title: "Client First", desc: "Unlimited revisions until you're 100% satisfied. Your vision is our mission." },
  { icon: Infinity, title: "End-to-End", desc: "From strategy to delivery. We handle the entire creative process so you can focus on growth." },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated project manager and always-available support for every project." },
];

const WhyChoose = () => (
  <section className="section-padding gradient-bg-soft">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why PV Labs</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          Why leading brands <span className="gradient-text">choose us</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're not just designers — we're strategic partners committed to your brand's success.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-6 group hover:shadow-xl hover:border-primary/30 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <r.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-bold mb-2 text-foreground">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
