import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle, Play } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background Video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80"
    >
      <source
        src="https://cdn.coverr.co/videos/coverr-a-team-working-on-computers-in-an-office-1080p/1080p.mp4"
        type="video/mp4"
      />
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/65 to-foreground/75" />
    
    {/* Subtle accent glow */}
    <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 w-full pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-primary/15 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles size={13} className="text-primary" />
            <span className="text-xs font-medium text-primary-foreground/90">Award-Winning Creative Agency</span>
          </motion.div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.08] mb-5 tracking-tight text-primary-foreground">
            We craft
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              digital experiences
            </span>
            <br />
            that inspire
          </h1>

          <p className="text-[15px] md:text-base text-primary-foreground/65 max-w-md mb-8 leading-relaxed">
            PV Labs is a premium creative design agency helping brands worldwide with stunning visuals,
            brand identity, UI/UX design, and marketing creatives.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              to="/contact"
              className="gradient-btn px-7 py-3.5 text-sm flex items-center justify-center gap-2"
            >
              Start Your Project <ArrowRight size={16} />
            </Link>
            <Link
              to="/portfolio"
              className="px-7 py-3.5 text-sm font-medium text-primary-foreground border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/8 backdrop-blur-sm transition-all text-center flex items-center justify-center gap-2"
            >
              <Play size={14} /> View Our Work
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-primary-foreground/50">
            {["500+ Projects Delivered", "200+ Global Clients", "50+ Awards Won"].map((t, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.12 }}
                className="flex items-center gap-1.5"
              >
                <CheckCircle size={13} className="text-primary" /> {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right — stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="hidden lg:grid grid-cols-2 gap-3"
        >
          {[
            { num: "500+", label: "Projects Delivered" },
            { num: "200+", label: "Happy Clients" },
            { num: "8+", label: "Years Experience" },
            { num: "50+", label: "Awards Won" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="glass-card-dark p-5 text-center hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="font-heading text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {s.num}
              </div>
              <div className="text-xs text-primary-foreground/50 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile stat bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 lg:hidden glass-card-dark p-5 grid grid-cols-2 gap-4"
      >
        {[
          { num: "500+", label: "Projects" },
          { num: "200+", label: "Clients" },
          { num: "8+", label: "Years" },
          { num: "50+", label: "Awards" },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-heading text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {s.num}
            </div>
            <div className="text-[11px] text-primary-foreground/50 mt-0.5">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
    >
      <div className="w-5 h-8 rounded-full border-2 border-primary-foreground/20 flex items-start justify-center p-1">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-1 rounded-full bg-primary"
        />
      </div>
    </motion.div>
  </section>
);

export default Hero;
