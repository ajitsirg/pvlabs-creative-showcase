import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Palette, PenTool, Share2, Image, BookOpen, Flag, CreditCard,
  Package, Tag, Monitor, Smartphone, Layout, BarChart3, Brush,
  Diamond, Play, Film, Presentation, Camera, Megaphone, Mail, Target,
  ArrowRight, Check
} from "lucide-react";

const allServices = [
  { icon: Palette, title: "Logo Design", desc: "Memorable logos that capture your brand essence and stand the test of time.", benefits: ["Multiple concepts", "Vector files", "Brand guidelines", "Unlimited revisions"] },
  { icon: PenTool, title: "Brand Identity Design", desc: "Complete visual identity systems that ensure brand consistency across all touchpoints.", benefits: ["Logo suite", "Color palette", "Typography", "Brand book"] },
  { icon: Share2, title: "Social Media Graphics", desc: "Scroll-stopping social content that drives engagement and grows your following.", benefits: ["Platform optimized", "Content calendars", "Story templates", "Carousel designs"] },
  { icon: Image, title: "Posters & Flyers Design", desc: "Eye-catching print materials that communicate your message with impact.", benefits: ["Print-ready files", "Multiple sizes", "QR code integration", "Fast delivery"] },
  { icon: BookOpen, title: "Brochure Design", desc: "Professional brochures that tell your brand story beautifully.", benefits: ["Bi-fold & tri-fold", "Print-ready", "Digital versions", "Custom layouts"] },
  { icon: Flag, title: "Banner & Hoarding Design", desc: "Large-format designs that grab attention from a distance.", benefits: ["High resolution", "Weather-proof specs", "Multiple sizes", "Installation guides"] },
  { icon: CreditCard, title: "Business Card Design", desc: "Premium business cards that make unforgettable first impressions.", benefits: ["Double-sided", "Special finishes", "NFC-ready", "Multiple variants"] },
  { icon: Package, title: "Packaging Design", desc: "Product packaging that sells from the shelf and delights on unboxing.", benefits: ["3D mockups", "Die-cut templates", "Material specs", "Eco-friendly options"] },
  { icon: Tag, title: "Product Label Design", desc: "Labels that meet regulatory requirements while looking stunning.", benefits: ["Compliance ready", "Material selection", "Die-cut shapes", "Batch variations"] },
  { icon: Monitor, title: "Website UI Design", desc: "Modern, responsive website designs that convert visitors into customers.", benefits: ["Responsive design", "Figma handoff", "Interactive prototypes", "SEO-optimized"] },
  { icon: Smartphone, title: "Mobile App UI Design", desc: "Intuitive app interfaces that users love and keep coming back to.", benefits: ["iOS & Android", "User flows", "Prototypes", "Design system"] },
  { icon: Layout, title: "Landing Page Design", desc: "High-converting landing pages designed to maximize your ROI.", benefits: ["A/B variants", "CRO optimized", "Fast loading", "Analytics ready"] },
  { icon: BarChart3, title: "Infographics Design", desc: "Complex data transformed into visually compelling, shareable graphics.", benefits: ["Data visualization", "Interactive versions", "Print & digital", "Custom illustrations"] },
  { icon: Brush, title: "Illustration Design", desc: "Custom illustrations that add personality and uniqueness to your brand.", benefits: ["Multiple styles", "Vector format", "Character design", "Scene illustrations"] },
  { icon: Diamond, title: "Icon Design", desc: "Consistent, pixel-perfect icon sets tailored to your brand.", benefits: ["SVG format", "Multiple sizes", "Style consistency", "Animation-ready"] },
  { icon: Play, title: "Motion Graphics", desc: "Dynamic animations that bring your brand to life across digital platforms.", benefits: ["Logo animations", "Social media", "Explainer videos", "UI animations"] },
  { icon: Film, title: "Video Editing Graphics", desc: "Professional video overlays, titles, and graphics that elevate your content.", benefits: ["Lower thirds", "Transitions", "Thumbnails", "End screens"] },
  { icon: Presentation, title: "Presentation Design", desc: "Pitch decks and presentations that win deals and impress stakeholders.", benefits: ["Custom templates", "Data charts", "Animations", "Speaker notes"] },
  { icon: Camera, title: "Photo Editing & Retouching", desc: "Professional photo enhancement that makes your visuals perfect.", benefits: ["Color correction", "Background removal", "Retouching", "Batch processing"] },
  { icon: Megaphone, title: "Marketing Creatives", desc: "Conversion-focused marketing materials across all channels.", benefits: ["Campaign assets", "A/B testing", "Multi-channel", "Performance tracking"] },
  { icon: Mail, title: "Email Template Design", desc: "Responsive email templates that drive opens, clicks, and conversions.", benefits: ["Mobile responsive", "Dark mode", "A/B variants", "Platform compatible"] },
  { icon: Target, title: "Digital Ads Creatives", desc: "High-performing ad creatives for Google, Facebook, Instagram, and more.", benefits: ["All ad sizes", "A/B variants", "Platform specs", "Performance optimized"] },
];

const pricing = [
  { name: "Starter", price: "$499", desc: "Perfect for small projects", features: ["1 design service", "3 revisions", "5-day delivery", "Source files", "Email support"] },
  { name: "Professional", price: "$1,499", desc: "Best for growing brands", features: ["3 design services", "Unlimited revisions", "3-day delivery", "Source files", "Priority support", "Brand guidelines"], popular: true },
  { name: "Enterprise", price: "Custom", desc: "For large-scale needs", features: ["All services", "Unlimited revisions", "Dedicated team", "24/7 support", "Brand strategy", "Monthly retainer"] },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Services</span>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6">
            <span className="gradient-text">22+ Services</span> for your brand
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to completion, we cover every design need your brand will ever have.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Service Sections */}
    {allServices.map((s, i) => (
      <section key={i} className={`section-padding ${i % 2 === 0 ? "" : "bg-secondary/30"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""}`}
          >
            {/* Visual */}
            <div className={`aspect-[4/3] rounded-[24px] bg-gradient-to-br ${i % 2 === 0 ? "from-primary/20 to-accent/20" : "from-accent/20 to-primary/20"} flex items-center justify-center`}>
              <s.icon size={64} className="text-primary/40" />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold">{s.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2 mb-8">
                {s.benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="gradient-btn px-6 py-3 text-sm inline-flex items-center gap-2">
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    ))}

    {/* Pricing */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricing.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 relative ${p.popular ? "border-primary/50 ring-1 ring-primary/20" : ""}`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-xl font-bold mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <div className="font-heading text-4xl font-bold mb-6 gradient-text">{p.price}</div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`block text-center py-3 rounded-full font-semibold text-sm ${p.popular ? "gradient-btn" : "border border-border hover:bg-muted transition-colors"}`}>
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
