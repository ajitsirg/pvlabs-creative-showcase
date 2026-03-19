import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";

const clientLogos = [
  "NovaTech", "FitPulse", "GreenLeaf", "CloudSync", "UrbanEats", "Luxe",
  "Zenith", "Apex Digital", "BlueHorizon", "Vertex", "Prism Co", "Orbit",
  "Quantum", "NexGen", "Skyline", "Ember", "Atlas Corp", "Vibe Studio",
  "Pulse Media", "Catalyst", "Elevate", "Horizon Labs", "Nexus", "Forge",
];

const testimonials = [
  { name: "Sarah Chen", role: "CEO", company: "NovaTech", text: "PV Labs completely transformed our brand identity. Brand recognition increased by 280% within 6 months. Their strategic approach to design is unmatched.", rating: 5 },
  { name: "Marcus Johnson", role: "Founder", company: "FitPulse", text: "Working with PV Labs was a game-changer. Their app UI design boosted our user engagement by 300% and reduced churn by half.", rating: 5 },
  { name: "Emily Rodriguez", role: "CMO", company: "GreenLeaf", text: "The packaging designs helped us stand out on crowded shelves. Sales increased 45% after the rebrand.", rating: 5 },
  { name: "David Kim", role: "Director", company: "CloudSync", text: "Their dashboard design is intuitive and beautiful. Task completion rates improved by 60%. True design professionals.", rating: 5 },
  { name: "Lisa Patel", role: "VP Marketing", company: "Luxe", text: "PV Labs delivers on time, on budget, and always above expectations. They've been our go-to design partner for 3 years.", rating: 5 },
  { name: "James Wright", role: "CTO", company: "UrbanEats", text: "The website achieved the highest conversion rate in our industry. Their understanding of user behavior is unmatched.", rating: 5 },
  { name: "Anna Torres", role: "Brand Director", company: "Zenith", text: "From logo to full brand system, PV Labs delivered a cohesive identity that elevated our entire market presence.", rating: 5 },
  { name: "Ryan Park", role: "COO", company: "Apex Digital", text: "Their motion graphics brought our product launch to life. Over 10M social views within the first week.", rating: 5 },
];

const caseStudies = [
  {
    title: "NovaTech Complete Rebrand",
    client: "NovaTech Inc.",
    category: "Branding",
    image: serviceBranding,
    problem: "NovaTech's outdated brand identity was failing to attract enterprise clients and communicate their cutting-edge technology solutions.",
    solution: "Complete brand overhaul including new logo, visual identity system, marketing collateral, and website redesign.",
    results: ["280% increase in brand recognition", "45% more enterprise leads", "92% stakeholder approval rating"],
  },
  {
    title: "FitPulse App Experience",
    client: "FitPulse",
    category: "Mobile App UI",
    image: serviceAppdesign,
    problem: "High user churn rate due to complex navigation and inconsistent design patterns across the fitness tracking app.",
    solution: "Full UI/UX redesign with intuitive navigation, personalized dashboards, and a cohesive design system.",
    results: ["300% increase in user engagement", "50% reduction in churn", "4.8★ App Store rating"],
  },
  {
    title: "GreenLeaf Packaging Revolution",
    client: "GreenLeaf Co.",
    category: "Packaging",
    image: servicePackaging,
    problem: "Products were getting lost on retail shelves due to generic packaging that didn't communicate the brand's sustainable mission.",
    solution: "Eco-friendly packaging design with bold visuals, clear messaging, and shelf-ready displays.",
    results: ["45% sales increase", "30% more shelf visibility", "Packaging Award Winner 2023"],
  },
  {
    title: "CloudSync Dashboard Redesign",
    client: "CloudSync",
    category: "Web Design",
    image: serviceWebdesign,
    problem: "Enterprise users struggled with a cluttered dashboard resulting in poor adoption rates and frequent support tickets.",
    solution: "Clean, data-driven dashboard with progressive disclosure, smart defaults, and customizable widgets.",
    results: ["60% faster task completion", "40% fewer support tickets", "Net Promoter Score: 78"],
  },
];

const Clients = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 gradient-bg-soft" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Clients</span>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold mt-3 mb-6 text-foreground">
            Trusted by <span className="gradient-text">200+ brands</span> worldwide
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From ambitious startups to Fortune 500 companies, we've helped brands across 20+ countries
            transform their visual identity and achieve measurable results.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Client Logos Grid */}
    <section className="section-padding border-y border-border/40">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Brands we've <span className="gradient-text">partnered with</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {clientLogos.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="glass-card p-6 flex items-center justify-center hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <span className="font-heading text-lg font-bold text-muted-foreground/40 group-hover:text-primary/60 transition-colors text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
            What our clients <span className="gradient-text">say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 hover:shadow-xl hover:border-primary/20 transition-all"
            >
              <Quote size={20} className="text-primary/20 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="section-padding gradient-bg-soft">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Case Studies</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
            Real work, real <span className="gradient-text">results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detailed breakdowns of how we helped clients solve problems and achieve measurable outcomes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card overflow-hidden grid md:grid-cols-2 ${i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""}`}
            >
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <img src={cs.image} alt={cs.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block w-fit mb-3">{cs.category}</span>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-1">{cs.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">Client: {cs.client}</p>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Problem</h4>
                    <p className="text-sm text-muted-foreground">{cs.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">{cs.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cs.results.map((r, j) => (
                    <span key={j} className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] overflow-hidden p-12 md:p-16 text-center gradient-bg-vivid"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(263_70%_60%_/_0.3),transparent)] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Want to be our next success story?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Join 200+ brands who've elevated their visual identity with PV Labs.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
              Start Your Project <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Clients;
