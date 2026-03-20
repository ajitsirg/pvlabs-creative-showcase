import { useState, useEffect } from "react";
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
  { label: "Clients", path: "/clients" },
  { label: "Resources", path: "/tools" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="font-heading text-xl font-bold tracking-tight">
          <span className="gradient-text">PV</span>
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>
            {" "}Labs
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() => link.children && setHoveredMenu(link.label)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                to={link.path}
                className={`text-[13px] font-medium transition-colors px-3 py-2 rounded-lg flex items-center gap-1 ${
                  location.pathname === link.path || location.pathname.startsWith(link.path + "/")
                    ? "text-primary"
                    : scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
                {link.children && (
                  <ChevronDown size={12} className={`transition-transform duration-200 ${hoveredMenu === link.label ? "rotate-180" : ""}`} />
                )}
              </Link>

              <AnimatePresence>
                {link.children && hoveredMenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-52 bg-background/95 backdrop-blur-xl border border-border/60 p-2 shadow-xl rounded-xl"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-3 py-2 rounded-lg text-[13px] transition-colors hover:bg-primary/8 hover:text-primary ${
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
          <div className="flex items-center gap-2 ml-4">
            <Link
              to="/login"
              className={`text-[13px] font-medium px-4 py-2 rounded-full transition-colors ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              Login
            </Link>
            <Link to="/contact" className="gradient-btn px-5 py-2 text-[13px]">
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-background/98 backdrop-blur-2xl border-b border-border/30 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-0.5 px-5 py-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => !link.children && setOpen(false)}
                    className={`block text-base font-medium py-2.5 px-3 rounded-lg transition-colors ${
                      location.pathname === link.path ? "text-primary bg-primary/5" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-0.5 mb-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setOpen(false)}
                          className={`block text-sm py-2 px-3 rounded-lg transition-colors ${
                            location.pathname === child.path ? "text-primary bg-primary/5" : "text-muted-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex gap-3 mt-4 pt-4 border-t border-border/30">
                <Link to="/login" onClick={() => setOpen(false)} className="flex-1 text-center py-3 rounded-full border border-border text-sm font-medium text-foreground">
                  Login
                </Link>
                <Link to="/contact" onClick={() => setOpen(false)} className="flex-1 gradient-btn py-3 text-center text-sm">
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
