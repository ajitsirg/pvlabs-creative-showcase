import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react";
import { useState } from "react";
import { socialLinks } from "@/lib/social-links";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="font-heading text-xl font-bold mb-3 inline-block">
              <span className="text-primary">PV</span> Labs
            </Link>
            <p className="text-background/50 text-sm leading-relaxed mb-5 max-w-sm">
              We craft bold digital experiences that elevate brands. 500+ projects for 200+ clients across 20+ countries.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {socialLinks.map(({ icon: Icon, label, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-8 h-8 rounded-lg bg-background/8 flex items-center justify-center text-background/50 hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">Services</h4>
            <div className="flex flex-col gap-1.5">
              {[
                { label: "Logo Design", path: "/services/logo-design" },
                { label: "Brand Identity", path: "/services/brand-identity" },
                { label: "Website UI", path: "/services/website-ui-design" },
                { label: "Mobile App UI", path: "/services/mobile-app-ui" },
                { label: "Packaging", path: "/services/packaging-design" },
                { label: "Motion Graphics", path: "/services/motion-graphics" },
                { label: "All Services", path: "/services" },
              ].map((l) => (
                <Link key={l.label} to={l.path} className="text-xs text-background/50 hover:text-primary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">Company</h4>
            <div className="flex flex-col gap-1.5">
              {[
                { label: "About", path: "/about" },
                { label: "Team", path: "/team" },
                { label: "Clients", path: "/clients" },
                { label: "Careers", path: "/careers" },
                { label: "Blog", path: "/blog" },
                { label: "Case Studies", path: "/case-studies" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <Link key={l.label} to={l.path} className="text-xs text-background/50 hover:text-primary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-heading font-semibold text-sm mb-3">Newsletter</h4>
            <p className="text-xs text-background/50 mb-3">Design tips & trends weekly.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/8 border border-background/15 rounded-lg px-3 py-2 text-xs text-background placeholder:text-background/30 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="gradient-btn p-2 rounded-lg"><ArrowRight size={14} /></button>
            </div>
            <div className="flex flex-col gap-1.5 mt-5 text-xs text-background/50">
              <div className="flex items-center gap-2"><Mail size={12} /> hello@pvlabs.design</div>
              <div className="flex items-center gap-2"><Phone size={12} /> +1 (555) 123-4567</div>
              <div className="flex items-center gap-2"><MapPin size={12} /> San Francisco, CA</div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/40">
          <p className="flex items-center gap-1">© 2026 PV Labs. Crafted with <Heart size={10} className="text-primary" /> in San Francisco.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
