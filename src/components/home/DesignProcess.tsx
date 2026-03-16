import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "Deep-dive into your brand, audience, market, and competitors to build a strong foundation.", detail: "1-2 days" },
  { icon: Lightbulb, title: "Strategy", desc: "Define creative direction, goals, and a clear roadmap that aligns with your business objectives.", detail: "2-3 days" },
  { icon: PenTool, title: "Design", desc: "Craft pixel-perfect designs with multiple concepts, iterations, and collaborative feedback rounds.", detail: "5-10 days" },
  { icon: Code, title: "Develop", desc: "Transform approved designs into fully functional, responsive, and optimized digital experiences.", detail: "5-15 days" },
  { icon: Rocket, title: "Launch & Support", desc: "Deploy your project, monitor performance, and provide ongoing support to ensure success.", detail: "Ongoing" },
];

const DesignProcess = () => (
  <section className="section-padding gradient-bg-soft">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Process</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          How we <span className="gradient-text">work</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our proven 5-step process ensures every project is delivered with precision, creativity, and measurable impact.
        </p>
      </motion.div>

      <div className="relative">
        {/* Connection line */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />

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
              <div className="w-14 h-14 rounded-2xl gradient-bg-vivid flex items-center justify-center mx-auto mb-4 shadow-lg">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shadow-md">
                {i + 1}
              </div>
              <h3 className="font-heading font-bold mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{s.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DesignProcess;
