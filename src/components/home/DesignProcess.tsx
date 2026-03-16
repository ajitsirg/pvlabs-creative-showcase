import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "We research your brand, audience, and market to understand the landscape." },
  { icon: Lightbulb, title: "Strategy", desc: "Define goals, creative direction, and a clear roadmap for the project." },
  { icon: PenTool, title: "Design", desc: "Craft pixel-perfect designs with multiple iterations and feedback rounds." },
  { icon: Code, title: "Develop", desc: "Transform designs into functional, responsive digital experiences." },
  { icon: Rocket, title: "Launch", desc: "Deploy, optimize, and support your project for ongoing success." },
];

const DesignProcess = () => (
  <section className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Process</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
          How we <span className="gradient-text">work</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center relative"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <s.icon size={22} className="text-primary" />
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
              {i + 1}
            </div>
            <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DesignProcess;
