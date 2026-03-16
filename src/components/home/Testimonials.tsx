import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO, NovaTech", text: "PV Labs transformed our brand identity completely. The attention to detail and creative vision exceeded our expectations." },
  { name: "Marcus Johnson", role: "Founder, FitPulse", text: "Working with PV Labs was a game-changer. Their app UI design boosted our user engagement by 300%." },
  { name: "Emily Rodriguez", role: "CMO, GreenLeaf", text: "The packaging designs PV Labs created helped us stand out on shelves. Sales increased 45% after the rebrand." },
  { name: "David Kim", role: "Director, CloudSync", text: "Their dashboard design is intuitive, beautiful, and our users love it. True design professionals." },
  { name: "Lisa Patel", role: "VP Marketing, Luxe", text: "PV Labs delivers on time, on budget, and always above expectations. Our go-to design partner." },
  { name: "James Wright", role: "CTO, UrbanEats", text: "The website PV Labs designed for us has the best conversion rate we've ever seen. Truly exceptional work." },
];

const Testimonials = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
          What our clients <span className="gradient-text">say</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
