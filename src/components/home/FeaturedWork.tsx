import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Eye } from "lucide-react";
import portfolioShowcase from "@/assets/portfolio-showcase.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceMotion from "@/assets/service-motion.jpg";
import servicePrint from "@/assets/service-print.jpg";

const projects = [
  { title: "NovaTech Rebrand", category: "Branding", image: serviceBranding, client: "NovaTech Inc.", result: "Brand recognition increased by 280%" },
  { title: "FitPulse App UI", category: "Mobile App", image: serviceAppdesign, client: "FitPulse", result: "User engagement up 300%" },
  { title: "GreenLeaf Packaging", category: "Packaging", image: servicePackaging, client: "GreenLeaf Co.", result: "Sales increased 45%" },
  { title: "CloudSync Dashboard", category: "Web Design", image: serviceWebdesign, client: "CloudSync", result: "Task completion improved 60%" },
  { title: "Apex Motion Reel", category: "Motion", image: serviceMotion, client: "Apex Digital", result: "10M+ social views" },
  { title: "Luxe Print Campaign", category: "Print", image: servicePrint, client: "Luxe Fashion", result: "40% more foot traffic" },
];

const FeaturedWork = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Portfolio</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A curated selection of our recent projects showcasing real results for real clients.
        </p>
      </motion.div>

      {/* Showcase banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[24px] overflow-hidden mb-12 shadow-lg"
      >
        <img src={portfolioShowcase} alt="PV Labs portfolio showcase" className="w-full h-auto" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden group cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                <Eye size={28} className="text-background opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{p.category}</span>
                <span className="text-xs text-muted-foreground">• {p.client}</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="text-sm text-accent font-medium">{p.result}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/portfolio" className="gradient-btn px-8 py-3 text-sm inline-flex items-center gap-2">
          View All Projects <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedWork;
