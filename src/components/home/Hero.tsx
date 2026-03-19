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

    {/* Dark overlay with gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/80" />
    
    {/* Animated accent blobs */}
    <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2.5 mb-8"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-semibold text-primary-foreground">Award-Winning Creative Agency</span>
          </motion.div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight text-primary-foreground">
            We craft
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              digital experiences
            </span>
            <br />
            that inspire
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/70 max-w-lg mb-10 leading-relaxed">
            PV Labs is a premium creative design agency helping brands worldwide with stunning visuals,
            brand identity, UI/UX design, and marketing creatives that drive real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
              className="gradient-btn px-8 py-4 text-base flex items-center justify-center gap-2 shadow-2xl"
            >
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 text-base font-semibold text-primary-foreground border border-primary-foreground/30 rounded-full hover:bg-primary-foreground/10 backdrop-blur-sm transition-all text-center flex items-center justify-center gap-2"
            >
              <Play size={16} /> View Our Work
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/60">
            {["500+ Projects Delivered", "200+ Global Clients", "50+ Awards Won"].map((t, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                className="flex items-center gap-1.5"
              >
                <CheckCircle size={14} className="text-primary" /> {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right — floating stat cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hidden lg:grid grid-cols-2 gap-4"
        >
          {[
            { num: "500+", label: "Projects Delivered", color: "from-primary to-accent" },
            { num: "200+", label: "Happy Clients", color: "from-accent to-primary" },
            { num: "8+", label: "Years Experience", color: "from-primary to-accent" },
            { num: "50+", label: "Awards Won", color: "from-accent to-primary" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.12 }}
              className="glass-card-dark p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className={`font-heading text-3xl md:text-4xl font-bold bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                {s.num}
              </div>
              <div className="text-sm text-primary-foreground/60 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom stats bar — mobile */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-16 lg:hidden glass-card-dark p-6 grid grid-cols-2 gap-6"
      >
        {[
          { num: "500+", label: "Projects Delivered" },
          { num: "200+", label: "Happy Clients" },
          { num: "8+", label: "Years Experience" },
          { num: "50+", label: "Awards Won" },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {s.num}
            </div>
            <div className="text-xs text-primary-foreground/60 mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
    >
      <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-primary"
        />
      </div>
    </motion.div>
  </section>
);

export default Hero;
