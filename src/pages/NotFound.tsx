import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Home } from "lucide-react";

const NotFound = () => (
  <div className="min-h-screen gradient-bg-soft flex items-center justify-center px-6">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-lg">
      <div className="font-heading text-[10rem] md:text-[14rem] font-extrabold leading-none gradient-text mb-4">404</div>
      <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-2 mb-6">
        <Sparkles size={14} className="text-primary" />
        <span className="text-xs font-semibold text-primary">Page Not Found</span>
      </div>
      <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Oops! This page got lost in the design process</h1>
      <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="gradient-btn px-8 py-4 text-sm flex items-center justify-center gap-2">
          <Home size={16} /> Back to Home
        </Link>
        <Link to="/contact" className="px-8 py-4 text-sm font-semibold border border-border rounded-full hover:bg-secondary transition-all text-center">
          Contact Us
        </Link>
      </div>
    </motion.div>
  </div>
);

export default NotFound;
