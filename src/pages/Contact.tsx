import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Instagram, Twitter, Linkedin, Dribbble, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", service: "", budget: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contact Us</span>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
              Let's <span className="gradient-text">talk</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to transform your brand? Get a free quote within 24 hours. No commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-muted-foreground">
              {["Free consultation", "Response within 24hrs", "No commitment required"].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary" /> {t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="glass-card p-8 shadow-xl">
              <h2 className="font-heading text-2xl font-bold mb-2 text-foreground">Get a Free Quote</h2>
              <p className="text-sm text-muted-foreground mb-6">Tell us about your project and we'll get back to you with a detailed proposal.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-foreground">Full Name *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-foreground">Email Address *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-foreground">Service Needed</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                      <option value="">Select a service</option>
                      <option>Logo Design</option>
                      <option>Brand Identity</option>
                      <option>Website UI Design</option>
                      <option>Mobile App UI</option>
                      <option>Social Media Graphics</option>
                      <option>Packaging Design</option>
                      <option>Motion Graphics</option>
                      <option>Marketing Creatives</option>
                      <option>Print Design</option>
                      <option>Complete Brand Package</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-foreground">Budget Range</label>
                    <select value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                      <option value="">Select budget</option>
                      <option>Under $500</option>
                      <option>$500 - $1,000</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block text-foreground">Project Details *</label>
                  <textarea rows={5} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project goals, timeline, and any specific requirements..." className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                </div>

                <button type="submit" className="gradient-btn px-8 py-3.5 text-sm flex items-center gap-2 w-full sm:w-auto justify-center">
                  <Send size={16} /> Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-5">
            {[
              { icon: Mail, label: "Email Us", value: "hello@pvlabs.design", sub: "We respond within 24 hours" },
              { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567", sub: "Mon-Fri 9AM-6PM PST" },
              { icon: MapPin, label: "Visit Us", value: "123 Design Street", sub: "San Francisco, CA 94105" },
              { icon: Clock, label: "Business Hours", value: "Mon - Fri: 9AM - 6PM PST", sub: "Weekend: By appointment" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-5 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{item.label}</div>
                  <div className="text-sm text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.sub}</div>
                </div>
              </div>
            ))}

            <div className="glass-card p-5">
              <h3 className="text-sm font-semibold text-foreground mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {[Instagram, Twitter, Linkedin, Dribbble].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card overflow-hidden">
              <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-2 text-primary/40" />
                  <span className="text-sm text-muted-foreground">San Francisco, CA</span>
                  <p className="text-xs text-muted-foreground mt-1">Map integration available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
