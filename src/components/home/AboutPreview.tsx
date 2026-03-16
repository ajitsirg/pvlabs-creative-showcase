import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe, Palette, Users } from "lucide-react";
import { Link } from "react-router-dom";
import aboutTeam from "@/assets/about-team.jpg";

const AboutPreview = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">About PV Labs</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-6 text-foreground">
            A team of creative thinkers & <span className="gradient-text">design experts</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded in 2018, PV Labs has evolved from a small design studio into a globally recognized creative agency. 
            We believe great design isn't just about aesthetics — it's about solving problems, telling stories, and creating 
            meaningful connections between brands and their audiences.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our multidisciplinary team of 15+ designers, strategists, and developers work together to deliver 
            comprehensive design solutions — from logo creation to complete brand ecosystems, from static graphics 
            to immersive digital experiences. We've helped startups launch, enterprises rebrand, and everything in between.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: TrendingUp, label: "98% Client Satisfaction" },
              { icon: Globe, label: "Clients in 20+ Countries" },
              { icon: Palette, label: "22+ Design Services" },
              { icon: Users, label: "15+ Team Members" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <item.icon size={16} className="text-primary" />
                <span className="text-foreground font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Learn more about us <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[24px] overflow-hidden shadow-xl">
            <img src={aboutTeam} alt="PV Labs creative team at work" className="w-full h-auto object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              { num: "500+", label: "Projects Completed" },
              { num: "200+", label: "Clients Worldwide" },
              { num: "50+", label: "Awards Won" },
              { num: "15+", label: "Team Members" },
            ].map((s, i) => (
              <div key={i} className="glass-card p-4 text-center">
                <div className={`font-heading text-2xl font-bold ${i % 2 === 0 ? "text-primary" : "text-accent"}`}>{s.num}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
