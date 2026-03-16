import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Background effects */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[128px]" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 bg-muted/50 border border-border/50 rounded-full px-4 py-2 mb-8">
          <Sparkles size={14} className="text-primary" />
          <span className="text-xs font-medium text-muted-foreground">Creative Design Agency</span>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-8 tracking-tight">
          We build the
          <br />
          <span className="gradient-text">digital artifacts</span>
          <br />
          of tomorrow
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          PV Labs is a premium creative agency specializing in brand identity, UI/UX design, 
          motion graphics, and marketing creatives that make brands unforgettable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="gradient-btn px-8 py-4 text-base flex items-center gap-2">
            Start Your Project <ArrowRight size={18} />
          </Link>
          <Link to="/portfolio" className="px-8 py-4 text-base font-semibold text-foreground border border-border rounded-full hover:bg-muted transition-all">
            View Our Work
          </Link>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
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
