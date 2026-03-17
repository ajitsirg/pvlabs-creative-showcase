import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Zap, Shield, Clock, Users, HelpCircle } from "lucide-react";

const plans = [
  {
    name: "Starter", price: "$499", period: "/project",
    desc: "Perfect for small projects and startups needing quality design.",
    features: { "Design services": "1 service", "Initial concepts": "3", "Revision rounds": "2", "Delivery time": "7 business days", "Source files": true, "Brand guidelines": false, "Dedicated designer": false, "Priority support": false, "Rush delivery": false, "Strategy session": false },
  },
  {
    name: "Professional", price: "$1,499", period: "/project", popular: true,
    desc: "Best value for growing brands needing multiple design deliverables.",
    features: { "Design services": "Up to 3", "Initial concepts": "5", "Revision rounds": "Unlimited", "Delivery time": "3 business days", "Source files": true, "Brand guidelines": true, "Dedicated designer": true, "Priority support": true, "Rush delivery": false, "Strategy session": false },
  },
  {
    name: "Enterprise", price: "$3,999", period: "/month",
    desc: "For teams with ongoing design needs and dedicated creative support.",
    features: { "Design services": "All 22+", "Initial concepts": "Unlimited", "Revision rounds": "Unlimited", "Delivery time": "Same day available", "Source files": true, "Brand guidelines": true, "Dedicated designer": true, "Priority support": true, "Rush delivery": true, "Strategy session": true },
  },
];

const addOns = [
  { name: "Rush Delivery", price: "+50%", desc: "Get your project delivered in half the time" },
  { name: "Brand Strategy Session", price: "$299", desc: "1-hour strategy workshop with our creative director" },
  { name: "Source File Training", price: "$149", desc: "1-hour session to learn how to use your design files" },
  { name: "Social Media Kit", price: "$199", desc: "Templates for 5 platforms with content calendar" },
  { name: "Print Supervision", price: "$299", desc: "We coordinate with your printer for perfect results" },
  { name: "Motion Add-on", price: "$399", desc: "Add logo animation or social media motion graphics" },
];

const faqs = [
  { q: "Can I switch plans mid-project?", a: "Yes! You can upgrade your plan at any time. We'll adjust pricing based on the remaining deliverables." },
  { q: "What's your refund policy?", a: "We offer a 100% satisfaction guarantee. If you're not happy with the initial concepts, we'll refund your payment in full." },
  { q: "Do you offer discounts for non-profits?", a: "Yes, we offer 20% off all plans for verified non-profit organizations." },
  { q: "Can I pause my Enterprise subscription?", a: "Yes, Enterprise plans can be paused for up to 2 months per year." },
  { q: "What payment methods do you accept?", a: "We accept credit cards, bank transfers, PayPal, and cryptocurrency. Enterprise clients can set up invoicing." },
  { q: "Is there a minimum commitment?", a: "No minimum commitment for Starter and Professional plans. Enterprise plans have a 3-month minimum." },
];

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No hidden fees, no surprises. Choose the plan that fits your needs, or contact us for a custom quote.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-muted-foreground">
            {[
              { icon: Shield, text: "100% satisfaction guarantee" },
              { icon: Clock, text: "Fast turnaround" },
              { icon: Users, text: "Dedicated designers" },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5"><item.icon size={14} className="text-primary" /> {item.text}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Plans */}
    <section className="px-6 md:px-12 pb-24 -mt-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className={`glass-card p-8 relative ${p.popular ? "border-primary/50 ring-2 ring-primary/20 shadow-2xl scale-[1.02]" : ""}`}>
            {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg-vivid text-primary-foreground text-xs font-bold px-4 py-1 rounded-full shadow-md">Most Popular</div>}
            <h3 className="font-heading text-xl font-bold text-foreground mb-1">{p.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
            <div className="mb-6"><span className="font-heading text-5xl font-bold gradient-text">{p.price}</span><span className="text-muted-foreground text-sm">{p.period}</span></div>
            <Link to="/contact" className={`block text-center py-3.5 rounded-full font-semibold text-sm mb-8 ${p.popular ? "gradient-btn" : "border border-border hover:bg-secondary transition-all"}`}>
              Get Started
            </Link>
            <div className="space-y-3">
              {Object.entries(p.features).map(([key, val], j) => (
                <div key={j} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{key}</span>
                  {typeof val === "boolean" ? (
                    val ? <Check size={16} className="text-primary" /> : <X size={16} className="text-muted-foreground/30" />
                  ) : (
                    <span className="font-medium text-foreground">{val}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Comparison Table */}
    <section className="section-padding gradient-bg-soft">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-12 text-foreground">Detailed <span className="gradient-text">Comparison</span></h2>
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-heading font-bold text-foreground">Feature</th>
                  {plans.map((p, i) => <th key={i} className="p-4 text-center font-heading font-bold text-foreground">{p.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {Object.keys(plans[0].features).map((key, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="p-4 text-muted-foreground">{key}</td>
                    {plans.map((p, j) => {
                      const val = p.features[key as keyof typeof p.features];
                      return (
                        <td key={j} className="p-4 text-center">
                          {typeof val === "boolean" ? (
                            val ? <Check size={16} className="text-primary mx-auto" /> : <X size={16} className="text-muted-foreground/30 mx-auto" />
                          ) : (
                            <span className="font-medium text-foreground">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    {/* Add-ons */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-12 text-foreground">Available <span className="gradient-text">Add-ons</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {addOns.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="glass-card p-6 hover:shadow-lg transition-shadow flex items-start gap-4">
              <Zap size={20} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-heading font-bold text-foreground">{a.name}</h3>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{a.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding gradient-bg-soft">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-12 text-foreground">Pricing <span className="gradient-text">FAQ</span></h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="glass-card p-6 group">
              <summary className="font-heading font-bold text-foreground cursor-pointer list-none flex items-center justify-between">
                {f.q}
                <span className="text-primary ml-2 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="text-muted-foreground mt-4 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding gradient-bg-vivid text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Need a custom quote?</h2>
        <p className="text-primary-foreground/80 mb-8">Every project is unique. Tell us about yours and we'll create a tailored proposal.</p>
        <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
          Get Custom Quote <ArrowRight size={18} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Pricing;
