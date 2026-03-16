import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-[32px] overflow-hidden p-12 md:p-16 text-center"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80" />
        <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />

        <div className="relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Ready to elevate your brand?
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Let's collaborate to create something extraordinary. Get in touch and let's start your project today.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-base hover:opacity-90 transition-opacity">
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactCTA;
