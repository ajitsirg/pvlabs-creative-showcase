import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Services", path: "/services",
    children: [
      { label: "All Services", path: "/services" },
      { label: "Logo Design", path: "/services/logo-design" },
      { label: "Brand Identity", path: "/services/brand-identity" },
      { label: "Website UI", path: "/services/website-ui-design" },
      { label: "Mobile App UI", path: "/services/mobile-app-ui" },
      { label: "Packaging", path: "/services/packaging-design" },
      { label: "Motion Graphics", path: "/services/motion-graphics" },
      { label: "Pricing", path: "/pricing" },
    ],
  },
  {
    label: "Work", path: "/portfolio",
    children: [
      { label: "Portfolio", path: "/portfolio" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "Testimonials", path: "/testimonials" },
    ],
  },
  {
    label: "Company", path: "/about",
    children: [
      { label: "About Us", path: "/about" },
      { label: "Team", path: "/team" },
      { label: "Careers", path: "/careers" },
      { label: "Blog", path: "/blog" },
      { label: "FAQ", path: "/faq" },
    ],
  },
  { label: "Resources", path: "/tools" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" className="font-heading text-2xl font-bold tracking-tight">
          <span className="gradient-text">PV</span>
          <span className="text-foreground"> Labs</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() => link.children && setHoveredMenu(link.label)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 py-2 ${
                  location.pathname === link.path || location.pathname.startsWith(link.path + "/")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown size={14} className={`transition-transform ${hoveredMenu === link.label ? "rotate-180" : ""}`} />}
              </Link>

              {/* Mega menu dropdown */}
              <AnimatePresence>
                {link.children && hoveredMenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 glass-card p-3 shadow-xl rounded-2xl"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2.5 rounded-xl text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                          location.pathname === child.path ? "text-primary bg-primary/5 font-medium" : "text-muted-foreground"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Login
          </Link>
          <Link to="/contact" className="gradient-btn px-6 py-2.5 text-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/30 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => !link.children && setOpen(false)}
                    className={`block text-lg font-medium py-2 ${
                      location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-1 mb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setOpen(false)}
                          className={`block text-sm py-1.5 ${
                            location.pathname === child.path ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex gap-3 mt-4">
                <Link to="/login" onClick={() => setOpen(false)} className="flex-1 text-center py-3 rounded-full border border-border text-sm font-medium">
                  Login
                </Link>
                <Link to="/contact" onClick={() => setOpen(false)} className="flex-1 gradient-btn px-6 py-3 text-center text-sm">
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
