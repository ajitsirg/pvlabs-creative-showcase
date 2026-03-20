import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "Deep-dive into your brand, audience, and competitors.", detail: "1-2 days" },
  { icon: Lightbulb, title: "Strategy", desc: "Define creative direction and a roadmap aligned with your goals.", detail: "2-3 days" },
  { icon: PenTool, title: "Design", desc: "Craft pixel-perfect designs with iterative feedback rounds.", detail: "5-10 days" },
  { icon: Code, title: "Develop", desc: "Transform designs into responsive, optimized experiences.", detail: "5-15 days" },
  { icon: Rocket, title: "Launch", desc: "Deploy, monitor, and provide ongoing support.", detail: "Ongoing" },
];

const DesignProcess = () => (
  <section className="section-padding gradient-bg-soft">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Process</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-3 text-foreground">
          How we <span className="gradient-text">work</span>
        </h2>
        <p className="text-muted-foreground text-[15px] max-w-xl mx-auto">
          Our proven 5-step process ensures precision, creativity, and measurable impact.
        </p>
      </motion.div>

      <div className="relative">
        {/* Connection line */}
        <div className="hidden md:block absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-5 text-center relative group"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg-vivid flex items-center justify-center mx-auto mb-3">
                <s.icon size={20} className="text-primary-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold">
                {i + 1}
              </div>
              <h3 className="font-heading font-bold text-sm mb-1.5 text-foreground">{s.title}</h3>
              <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{s.desc}</p>
              <span className="text-[10px] font-medium text-primary bg-primary/8 px-2.5 py-0.5 rounded-full">{s.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DesignProcess;
