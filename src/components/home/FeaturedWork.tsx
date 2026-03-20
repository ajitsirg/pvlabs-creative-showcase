import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import portfolioShowcase from "@/assets/portfolio-showcase.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceMotion from "@/assets/service-motion.jpg";
import servicePrint from "@/assets/service-print.jpg";
import { ArrowRight } from "lucide-react";

const projects = [
  { title: "NovaTech Rebrand", category: "Branding", image: serviceBranding, client: "NovaTech Inc.", result: "+280% brand recognition" },
  { title: "FitPulse App UI", category: "Mobile App", image: serviceAppdesign, client: "FitPulse", result: "+300% engagement" },
  { title: "GreenLeaf Packaging", category: "Packaging", image: servicePackaging, client: "GreenLeaf Co.", result: "+45% sales" },
  { title: "CloudSync Dashboard", category: "Web Design", image: serviceWebdesign, client: "CloudSync", result: "+60% task completion" },
  { title: "Apex Motion Reel", category: "Motion", image: serviceMotion, client: "Apex Digital", result: "10M+ social views" },
  { title: "Luxe Print Campaign", category: "Print", image: servicePrint, client: "Luxe Fashion", result: "+40% foot traffic" },
];

const FeaturedWork = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary text-xs font-semibold uppercase tracking-widest">Portfolio</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-3 text-foreground">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="text-muted-foreground text-[15px] max-w-xl mx-auto">
          A curated selection of recent projects with real results.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden mb-10 shadow-md"
      >
        <img src={portfolioShowcase} alt="PV Labs portfolio showcase" className="w-full h-auto" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass-card overflow-hidden group cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <Eye size={24} className="text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-medium text-primary bg-primary/8 px-2.5 py-0.5 rounded-full">{p.category}</span>
                <span className="text-[11px] text-muted-foreground">• {p.client}</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground text-[15px] mb-1">{p.title}</h3>
              <p className="text-sm text-accent font-medium">{p.result}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/portfolio" className="gradient-btn px-7 py-3 text-sm inline-flex items-center gap-2">
          View All Projects <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedWork;
