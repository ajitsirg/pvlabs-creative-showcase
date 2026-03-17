import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, Instagram, Twitter, Linkedin, Dribbble, Heart } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-heading text-2xl font-bold mb-4 inline-block">
              <span className="text-primary">PV</span> Labs
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              We craft bold digital experiences that elevate brands and captivate audiences. 500+ projects delivered for 200+ clients across 20+ countries.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Linkedin, Dribbble].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Logo Design", path: "/services/logo-design" },
                { label: "Brand Identity", path: "/services/brand-identity" },
                { label: "Website UI", path: "/services/website-ui-design" },
                { label: "Mobile App UI", path: "/services/mobile-app-ui" },
                { label: "Packaging", path: "/services/packaging-design" },
                { label: "Motion Graphics", path: "/services/motion-graphics" },
                { label: "All Services", path: "/services" },
              ].map((l) => (
                <Link key={l.label} to={l.path} className="text-sm text-background/60 hover:text-primary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About", path: "/about" },
                { label: "Team", path: "/team" },
                { label: "Careers", path: "/careers" },
                { label: "Blog", path: "/blog" },
                { label: "Case Studies", path: "/case-studies" },
                { label: "Testimonials", path: "/testimonials" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <Link key={l.label} to={l.path} className="text-sm text-background/60 hover:text-primary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-background/60 mb-4">Design tips, trends & exclusive offers weekly.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/10 border border-background/20 rounded-full px-4 py-2.5 text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="gradient-btn p-2.5"><ArrowRight size={16} /></button>
            </div>
            <div className="flex flex-col gap-2 mt-6 text-sm text-background/60">
              <div className="flex items-center gap-2"><Mail size={14} /> hello@pvlabs.design</div>
              <div className="flex items-center gap-2"><Phone size={14} /> +1 (555) 123-4567</div>
              <div className="flex items-center gap-2"><MapPin size={14} /> San Francisco, CA</div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p className="flex items-center gap-1">© 2026 PV Labs. Crafted with <Heart size={12} className="text-primary" /> in San Francisco.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
