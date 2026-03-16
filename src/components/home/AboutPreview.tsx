import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPreview = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Us</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-6">
            Crafting digital excellence since <span className="gradient-text">2018</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            PV Labs is a full-service creative design agency that transforms ideas into powerful visual experiences. 
            We combine strategic thinking with cutting-edge design to help brands stand out in a crowded digital landscape.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            From logo design to complete brand identities, from social media creatives to immersive web experiences — 
            we deliver design that drives results and leaves lasting impressions.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Learn more about us <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8"
        >
          <div className="grid grid-cols-2 gap-6">
            {[
              { num: "500+", label: "Projects Completed", color: "text-primary" },
              { num: "200+", label: "Clients Worldwide", color: "text-accent" },
              { num: "50+", label: "Awards Won", color: "text-primary" },
              { num: "15+", label: "Team Members", color: "text-accent" },
            ].map((s, i) => (
              <div key={i} className="text-center p-4">
                <div className={`font-heading text-3xl font-bold ${s.color}`}>{s.num}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
