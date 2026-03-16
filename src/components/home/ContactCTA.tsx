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
        className="relative rounded-[32px] overflow-hidden p-12 md:p-16 text-center gradient-bg-vivid"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(263_70%_60%_/_0.3),transparent)] pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-primary-foreground">
            Ready to elevate your brand?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Let's collaborate to create something extraordinary. Join 200+ brands who've already transformed their visual identity with PV Labs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-semibold text-base hover:shadow-lg transition-all">
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-primary-foreground/20 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactCTA;
