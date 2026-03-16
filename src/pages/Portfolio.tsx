import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Branding", "Web", "Print", "Motion", "Marketing"];

const projects = [
  { title: "NovaTech Rebrand", cat: "Branding", desc: "Complete brand identity overhaul for a leading tech startup.", client: "NovaTech Inc." },
  { title: "FitPulse App", cat: "Web", desc: "Mobile fitness app with gamification and social features.", client: "FitPulse" },
  { title: "GreenLeaf Packaging", cat: "Print", desc: "Eco-friendly packaging line for organic food products.", client: "GreenLeaf Co." },
  { title: "CloudSync Dashboard", cat: "Web", desc: "Enterprise SaaS dashboard with real-time analytics.", client: "CloudSync" },
  { title: "Luxe Campaign", cat: "Marketing", desc: "Multi-channel campaign for luxury fashion brand launch.", client: "Luxe Fashion" },
  { title: "UrbanEats Website", cat: "Web", desc: "Restaurant marketplace with online ordering system.", client: "UrbanEats" },
  { title: "Zenith Logo Suite", cat: "Branding", desc: "Versatile logo system for a financial services firm.", client: "Zenith Capital" },
  { title: "Apex Explainer Video", cat: "Motion", desc: "2-minute animated explainer for SaaS onboarding.", client: "Apex Digital" },
  { title: "BlueHorizon Brochure", cat: "Print", desc: "Premium bi-fold brochure for luxury travel agency.", client: "BlueHorizon Travel" },
  { title: "Vertex Social Campaign", cat: "Marketing", desc: "30-day social media campaign with 60+ creatives.", client: "Vertex Labs" },
  { title: "Prism Motion Reel", cat: "Motion", desc: "Brand showreel with kinetic typography and 3D elements.", client: "Prism Co" },
  { title: "Orbit Brand System", cat: "Branding", desc: "Full brand guidelines with 100+ asset templates.", client: "Orbit Space" },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.cat === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Portfolio</span>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              Browse our collection of projects across branding, web, print, motion, and marketing.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === c ? "gradient-btn" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                <span className="font-heading text-xl font-bold text-foreground/20">{p.title}</span>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ExternalLink size={24} className="text-foreground" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{p.cat}</span>
                <h3 className="font-heading font-semibold mt-3 mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{p.desc}</p>
                <span className="text-xs text-muted-foreground">Client: {p.client}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Transformations</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">Before & <span className="gradient-text">After</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "NovaTech Logo Evolution", before: "Outdated wordmark", after: "Modern geometric mark" },
              { title: "UrbanEats Website Redesign", before: "Cluttered layout", after: "Clean, conversion-focused" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6">
                <h3 className="font-heading font-semibold mb-4">{item.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="aspect-square rounded-xl bg-muted/50 flex items-center justify-center mb-2">
                      <span className="text-sm text-muted-foreground">Before</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.before}</p>
                  </div>
                  <div>
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-2">
                      <span className="text-sm text-primary">After</span>
                    </div>
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
