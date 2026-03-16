import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, Instagram, Twitter, Linkedin, Dribbble } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-secondary/50 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading text-2xl font-bold mb-4 inline-block">
              <span className="gradient-text">PV</span> Labs
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We craft bold digital experiences that elevate brands and captivate audiences worldwide.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Linkedin, Dribbble].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((l) => (
                <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Mail size={14} /> hello@pvlabs.design</div>
              <div className="flex items-center gap-2"><Phone size={14} /> +1 (555) 123-4567</div>
              <div className="flex items-center gap-2"><MapPin size={14} /> San Francisco, CA</div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Get design tips & updates in your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-muted border border-border rounded-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="gradient-btn p-2.5">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 PV Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
