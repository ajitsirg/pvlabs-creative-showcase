import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden p-10 md:p-14 text-center gradient-bg-vivid"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(252_80%_65%_/_0.25),transparent)] pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-primary-foreground">
            Ready to elevate your brand?
          </h2>
          <p className="text-primary-foreground/70 text-[15px] mb-7 max-w-md mx-auto">
            Join 200+ brands who've transformed their visual identity with PV Labs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:shadow-lg transition-all">
              Start Your Project <ArrowRight size={16} />
            </Link>
            <Link to="/pricing" className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 rounded-full font-medium text-sm hover:bg-primary-foreground/15 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactCTA;
