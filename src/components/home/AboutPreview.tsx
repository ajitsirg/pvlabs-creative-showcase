import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe, Palette, Users } from "lucide-react";
import { Link } from "react-router-dom";
import aboutTeam from "@/assets/about-team.jpg";

const AboutPreview = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">About PV Labs</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5 text-foreground leading-tight">
            A team of creative thinkers & <span className="gradient-text">design experts</span>
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed mb-3">
            Founded in 2018, PV Labs has evolved from a small design studio into a globally recognized creative agency. 
            We believe great design isn't just about aesthetics — it's about solving problems and creating 
            meaningful connections between brands and their audiences.
          </p>
          <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
            Our multidisciplinary team of 15+ designers, strategists, and developers deliver 
            comprehensive design solutions — from logo creation to complete brand ecosystems.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { icon: TrendingUp, label: "98% Client Satisfaction" },
              { icon: Globe, label: "Clients in 20+ Countries" },
              { icon: Palette, label: "22+ Design Services" },
              { icon: Users, label: "15+ Team Members" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[13px]">
                <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                  <item.icon size={14} className="text-primary" />
                </div>
                <span className="text-foreground font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
            Learn more about us <ArrowRight size={14} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={aboutTeam} alt="PV Labs creative team at work" className="w-full h-auto object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3 mt-3">
            {[
              { num: "500+", label: "Projects" },
              { num: "200+", label: "Clients" },
              { num: "50+", label: "Awards" },
              { num: "15+", label: "Team" },
            ].map((s, i) => (
              <div key={i} className="glass-card p-3 text-center">
                <div className="font-heading text-lg font-bold text-primary">{s.num}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
