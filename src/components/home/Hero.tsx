import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import heroVisual from "@/assets/hero-visual.png";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
    {/* Soft gradient background */}
    <div className="absolute inset-0 gradient-bg-soft" />
    <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-semibold text-primary">Award-Winning Creative Agency</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight text-foreground">
            We craft
            <br />
            <span className="gradient-text">digital experiences</span>
            <br />
            that inspire
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            PV Labs is a premium creative design agency helping brands worldwide with stunning visuals, 
            brand identity, UI/UX design, and marketing creatives that drive real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link to="/contact" className="gradient-btn px-8 py-4 text-base flex items-center justify-center gap-2">
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="px-8 py-4 text-base font-semibold text-foreground border border-border rounded-full hover:bg-secondary transition-all text-center">
              View Our Work
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["500+ Projects Delivered", "200+ Global Clients", "50+ Awards Won"].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-primary" /> {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <img src={heroVisual} alt="Creative design tools and elements" className="w-full float-animation" />
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {[
          { num: "500+", label: "Projects Delivered" },
          { num: "200+", label: "Happy Clients" },
          { num: "8+", label: "Years Experience" },
          { num: "22+", label: "Services Offered" },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-heading text-3xl md:text-4xl font-bold gradient-text">{s.num}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
