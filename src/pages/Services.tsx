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
import serviceBranding from "@/assets/service-branding.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";
import serviceMotion from "@/assets/service-motion.jpg";
import servicePrint from "@/assets/service-print.jpg";

const images = [serviceBranding, serviceBranding, serviceSocial, servicePrint, servicePrint, servicePrint, serviceBranding, servicePackaging, servicePackaging, serviceWebdesign, serviceAppdesign, serviceWebdesign, servicePrint, servicePrint, serviceBranding, serviceMotion, serviceMotion, servicePrint, serviceSocial, serviceSocial, serviceWebdesign, serviceSocial];

const allServices = [
  { icon: Palette, title: "Logo Design", desc: "Memorable, timeless logos that capture your brand essence and build instant recognition. We create versatile logos that work across all mediums.", benefits: ["5+ unique concepts", "Unlimited revisions", "All vector formats", "Brand guidelines included"] },
  { icon: PenTool, title: "Brand Identity Design", desc: "Complete visual identity systems ensuring brand consistency across every touchpoint — from business cards to billboards.", benefits: ["Full logo suite", "Color palette system", "Typography guide", "Comprehensive brand book"] },
  { icon: Share2, title: "Social Media Graphics", desc: "Scroll-stopping content optimized for every platform — Instagram, Facebook, LinkedIn, Twitter, TikTok, and more.", benefits: ["Platform-optimized sizes", "Content calendar templates", "Story & Reel templates", "Carousel designs"] },
  { icon: Image, title: "Posters & Flyers Design", desc: "Eye-catching print materials that communicate your message with visual impact and clarity.", benefits: ["Print-ready CMYK files", "Multiple size options", "QR code integration", "24-hour rush available"] },
  { icon: BookOpen, title: "Brochure Design", desc: "Professional brochures that tell your brand story with compelling visuals and strategic layouts.", benefits: ["Bi-fold & tri-fold options", "Print-ready files", "Digital PDF versions", "Custom die-cut layouts"] },
  { icon: Flag, title: "Banner & Hoarding Design", desc: "Large-format designs engineered to grab attention from any distance, any angle.", benefits: ["Ultra high-resolution", "Weather-proof specifications", "Multiple billboard sizes", "Installation guidelines"] },
  { icon: CreditCard, title: "Business Card Design", desc: "Premium business cards that make powerful first impressions and reflect your brand's quality.", benefits: ["Double-sided designs", "Foil & emboss options", "NFC-ready templates", "Multiple staff variants"] },
  { icon: Package, title: "Packaging Design", desc: "Product packaging that sells from the shelf, delights on unboxing, and builds brand loyalty.", benefits: ["Photorealistic 3D mockups", "Die-cut templates", "Material specifications", "Eco-friendly options"] },
  { icon: Tag, title: "Product Label Design", desc: "Labels that meet all regulatory requirements while making your products irresistible to buyers.", benefits: ["Compliance-ready", "Material guidance", "Custom die-cut shapes", "Batch & variant systems"] },
  { icon: Monitor, title: "Website UI Design", desc: "Modern, responsive website designs that convert visitors into loyal customers and advocates.", benefits: ["Fully responsive", "Figma design handoff", "Interactive prototypes", "SEO-optimized structure"] },
  { icon: Smartphone, title: "Mobile App UI Design", desc: "Intuitive, delightful app interfaces that users love to use and keep coming back to.", benefits: ["iOS & Android", "Complete user flows", "Clickable prototypes", "Full design system"] },
  { icon: Layout, title: "Landing Page Design", desc: "High-converting landing pages engineered to maximize your marketing ROI.", benefits: ["A/B test variants", "CRO-optimized layout", "Fast-loading design", "Analytics integration"] },
  { icon: BarChart3, title: "Infographics Design", desc: "Complex data and information transformed into visually compelling, easily shareable graphics.", benefits: ["Data visualization", "Interactive versions", "Print & digital formats", "Custom illustrations"] },
  { icon: Brush, title: "Illustration Design", desc: "Custom illustrations that add personality, uniqueness, and emotional depth to your brand.", benefits: ["Multiple art styles", "Vector & raster", "Character design", "Scene illustrations"] },
  { icon: Diamond, title: "Icon Design", desc: "Consistent, pixel-perfect icon sets that enhance usability and reinforce brand identity.", benefits: ["SVG & PNG formats", "Multiple sizes", "Style consistency", "Animation-ready assets"] },
  { icon: Play, title: "Motion Graphics", desc: "Dynamic animations that bring your brand to life and captivate audiences across all platforms.", benefits: ["Logo animations", "Social media motion", "Explainer videos", "UI micro-animations"] },
  { icon: Film, title: "Video Editing Graphics", desc: "Professional video overlays, lower thirds, titles, and graphics that elevate your content.", benefits: ["Lower third designs", "Custom transitions", "YouTube thumbnails", "End screen templates"] },
  { icon: Presentation, title: "Presentation Design", desc: "Pitch decks and presentations that win deals, impress stakeholders, and tell your story.", benefits: ["Custom templates", "Data-rich charts", "Smooth animations", "Speaker note guides"] },
  { icon: Camera, title: "Photo Editing & Retouching", desc: "Professional photo enhancement that makes every visual in your brand perfect.", benefits: ["Advanced color correction", "Background removal", "Beauty retouching", "Batch processing"] },
  { icon: Megaphone, title: "Marketing Creatives", desc: "Conversion-focused marketing materials designed to drive results across all channels.", benefits: ["Multi-channel assets", "A/B test variants", "Campaign kits", "Performance tracking"] },
  { icon: Mail, title: "Email Template Design", desc: "Responsive email templates that drive opens, clicks, and conversions in every inbox.", benefits: ["Mobile responsive", "Dark mode support", "A/B test variants", "ESP compatible"] },
  { icon: Target, title: "Digital Ads Creatives", desc: "High-performing ad creatives for Google, Facebook, Instagram, LinkedIn, and TikTok.", benefits: ["All standard ad sizes", "A/B test variants", "Platform specifications", "Performance optimized"] },
];

const pricing = [
  { name: "Starter", price: "$499", period: "/project", desc: "Perfect for small projects and startups", features: ["1 design service", "3 initial concepts", "5-day delivery", "Source files included", "Email support", "2 revision rounds"] },
  { name: "Professional", price: "$1,499", period: "/project", desc: "Best value for growing brands", features: ["Up to 3 services", "5 initial concepts", "3-day priority delivery", "All source files", "Priority Slack support", "Unlimited revisions", "Brand guidelines", "Dedicated designer"], popular: true },
  { name: "Enterprise", price: "Custom", period: "", desc: "For teams with ongoing needs", features: ["All 22+ services", "Unlimited concepts", "Same-day rush available", "Full source ownership", "24/7 dedicated support", "Unlimited revisions", "Brand strategy included", "Dedicated team of 3+", "Monthly retainer option"] },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Services</span>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
            <span className="gradient-text">22+ Services</span> for your brand
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From concept to completion, we deliver end-to-end design solutions across branding, digital, print, motion, and marketing. 
            Every service backed by 8+ years of expertise and a 98% satisfaction rate.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Service Sections */}
    {allServices.map((s, i) => (
      <section key={i} className={`section-padding ${i % 2 === 0 ? "" : "gradient-bg-soft"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""}`}
          >
            <div className="rounded-[24px] overflow-hidden shadow-lg">
              <img src={images[i]} alt={s.title} className="w-full aspect-[4/3] object-cover" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{s.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-3 mb-8">
                {s.benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{b}</span>
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
    <section className="section-padding gradient-bg-soft">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Choose the plan that fits your needs. All plans include source files and satisfaction guarantee.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricing.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 relative ${p.popular ? "border-primary/50 ring-2 ring-primary/20 shadow-xl" : ""}`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg-vivid text-primary-foreground text-xs font-bold px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-xl font-bold text-foreground mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <div className="mb-6">
                <span className="font-heading text-4xl font-bold gradient-text">{p.price}</span>
                <span className="text-muted-foreground text-sm">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`block text-center py-3.5 rounded-full font-semibold text-sm transition-all ${p.popular ? "gradient-btn" : "border border-border hover:bg-secondary"}`}>
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
