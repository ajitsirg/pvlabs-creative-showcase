import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO, NovaTech", text: "PV Labs completely transformed our brand identity. Our brand recognition increased by 280% within 6 months.", rating: 5 },
  { name: "Marcus Johnson", role: "Founder, FitPulse", text: "Their app UI design boosted our user engagement by 300% and reduced churn by half. Truly exceptional.", rating: 5 },
  { name: "Emily Rodriguez", role: "CMO, GreenLeaf", text: "The packaging designs helped us stand out on crowded shelves. Sales increased 45% after the rebrand.", rating: 5 },
  { name: "David Kim", role: "Director, CloudSync", text: "Their dashboard design is intuitive, beautiful, and our users love it. Task completion improved by 60%.", rating: 5 },
  { name: "Lisa Patel", role: "VP Marketing, Luxe", text: "PV Labs delivers on time, on budget, and always above expectations. Our go-to design partner for 3 years.", rating: 5 },
  { name: "James Wright", role: "CTO, UrbanEats", text: "The website achieved the highest conversion rate in our industry. Their design psychology understanding is unmatched.", rating: 5 },
];

const Testimonials = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary text-xs font-semibold uppercase tracking-widest">Testimonials</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-3 text-foreground">
          Trusted by <span className="gradient-text">200+ clients</span>
        </h2>
        <p className="text-muted-foreground text-[15px] max-w-xl mx-auto">
          Hear what our clients say about working with PV Labs.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass-card p-6 flex flex-col"
          >
            <Quote size={20} className="text-primary/15 mb-2" />
            <div className="flex gap-0.5 mb-3">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} size={12} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border/40">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-[11px] text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
