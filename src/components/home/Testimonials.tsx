import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO, NovaTech", text: "PV Labs completely transformed our brand identity. The attention to detail, creative vision, and strategic thinking exceeded all expectations. Our brand recognition increased by 280% within 6 months.", rating: 5 },
  { name: "Marcus Johnson", role: "Founder, FitPulse", text: "Working with PV Labs was a game-changer for our startup. Their app UI design boosted our user engagement by 300% and reduced churn by half. Truly exceptional design partners.", rating: 5 },
  { name: "Emily Rodriguez", role: "CMO, GreenLeaf", text: "The packaging designs PV Labs created helped us stand out on crowded shelves. Sales increased 45% after the rebrand, and we received countless compliments from customers.", rating: 5 },
  { name: "David Kim", role: "Director, CloudSync", text: "Their dashboard design is intuitive, beautiful, and our users absolutely love it. Task completion rates improved by 60%. True design professionals who understand both form and function.", rating: 5 },
  { name: "Lisa Patel", role: "VP Marketing, Luxe", text: "PV Labs delivers on time, on budget, and always above expectations. They've been our go-to design partner for 3 years now. Every campaign they touch turns gold.", rating: 5 },
  { name: "James Wright", role: "CTO, UrbanEats", text: "The website PV Labs designed for us achieved the highest conversion rate in our industry. Their understanding of user behavior and design psychology is unmatched.", rating: 5 },
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
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          Trusted by <span className="gradient-text">200+ clients</span> worldwide
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it — hear what our clients have to say about working with PV Labs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 hover:shadow-xl transition-shadow"
          >
            <Quote size={24} className="text-primary/20 mb-3" />
            <div className="flex gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
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
