import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceMotion from "@/assets/service-motion.jpg";
import servicePrint from "@/assets/service-print.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import portfolioShowcase from "@/assets/portfolio-showcase.jpg";

const categories = ["All", "Branding", "Web", "Print", "Motion", "Marketing"];

const projects = [
  { title: "NovaTech Complete Rebrand", cat: "Branding", desc: "Full brand identity overhaul including logo, guidelines, stationery, and digital assets for a leading tech startup.", client: "NovaTech Inc.", result: "280% brand recognition increase", image: serviceBranding },
  { title: "FitPulse Mobile App", cat: "Web", desc: "End-to-end mobile fitness app with gamification, social features, and personalized workout tracking.", client: "FitPulse", result: "300% user engagement boost", image: serviceAppdesign },
  { title: "GreenLeaf Eco Packaging", cat: "Print", desc: "Sustainable, eco-friendly packaging line for 12 organic food products with premium unboxing experience.", client: "GreenLeaf Co.", result: "45% sales increase", image: servicePackaging },
  { title: "CloudSync Analytics Dashboard", cat: "Web", desc: "Enterprise SaaS dashboard with real-time analytics, data visualization, and team collaboration features.", client: "CloudSync", result: "60% faster task completion", image: serviceWebdesign },
  { title: "Luxe Fashion Campaign", cat: "Marketing", desc: "Multi-channel marketing campaign spanning social media, print, digital ads, and email for luxury brand launch.", client: "Luxe Fashion", result: "40% more foot traffic", image: serviceSocial },
  { title: "UrbanEats Restaurant Platform", cat: "Web", desc: "Full restaurant marketplace website with online ordering, reviews, and loyalty program integration.", client: "UrbanEats", result: "Best industry conversion rate", image: serviceWebdesign },
  { title: "Zenith Financial Brand System", cat: "Branding", desc: "Versatile logo system and 100+ brand templates for a major financial services firm.", client: "Zenith Capital", result: "Consistent across 50+ touchpoints", image: serviceBranding },
  { title: "Apex Animated Explainer", cat: "Motion", desc: "2-minute cinematic animated explainer video for SaaS onboarding with custom illustrations.", client: "Apex Digital", result: "10M+ social media views", image: serviceMotion },
  { title: "BlueHorizon Travel Brochure", cat: "Print", desc: "Premium bi-fold brochure with custom photography and illustrations for luxury travel agency.", client: "BlueHorizon Travel", result: "25% booking increase", image: servicePrint },
  { title: "Vertex Social Campaign", cat: "Marketing", desc: "30-day integrated social media campaign with 60+ creatives across 5 platforms.", client: "Vertex Labs", result: "500K new followers", image: serviceSocial },
  { title: "Prism Brand Motion Reel", cat: "Motion", desc: "Premium brand showreel with kinetic typography, 3D elements, and immersive transitions.", client: "Prism Co", result: "Featured at design awards", image: serviceMotion },
  { title: "Orbit Complete Brand Ecosystem", cat: "Branding", desc: "Full brand guidelines system with 100+ asset templates, sub-brands, and partnership guidelines.", client: "Orbit Space", result: "Used by 500+ team members", image: serviceBranding },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.cat === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Portfolio</span>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              500+ projects completed for 200+ clients worldwide. Browse our work across branding, web, print, motion, and marketing.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  active === c ? "gradient-btn" : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[24px] overflow-hidden shadow-lg">
            <img src={portfolioShowcase} alt="Portfolio showcase" className="w-full" />
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 pb-24 pt-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                  <Eye size={28} className="text-background opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{p.cat}</span>
                  <span className="text-xs text-muted-foreground">• {p.client}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{p.desc}</p>
                <p className="text-sm text-accent font-semibold">{p.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding gradient-bg-soft">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Transformations</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">Before & <span className="gradient-text">After</span></h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">See how we've transformed brands with strategic design thinking and creative execution.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "NovaTech Logo Evolution", before: "Generic outdated wordmark with poor scalability", after: "Modern geometric mark with dynamic color system", beforeImg: servicePrint, afterImg: serviceBranding },
              { title: "UrbanEats Website Redesign", before: "Cluttered layout with low conversion rates", after: "Clean, conversion-focused with 3x better performance", beforeImg: serviceSocial, afterImg: serviceWebdesign },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6">
                <h3 className="font-heading font-bold text-foreground mb-4 text-lg">{item.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="aspect-square rounded-xl overflow-hidden mb-2">
                      <img src={item.beforeImg} alt="Before" className="w-full h-full object-cover opacity-60" />
                    </div>
                    <span className="text-xs font-semibold text-destructive">Before</span>
                    <p className="text-xs text-muted-foreground">{item.before}</p>
                  </div>
                  <div>
                    <div className="aspect-square rounded-xl overflow-hidden mb-2">
                      <img src={item.afterImg} alt="After" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs font-semibold text-primary">After</span>
                    <p className="text-xs text-muted-foreground">{item.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
