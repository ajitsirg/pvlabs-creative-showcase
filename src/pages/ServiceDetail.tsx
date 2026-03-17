import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Check, Clock, Layers, Palette, PenTool, Monitor, Smartphone, Zap, Star, Users, MessageCircle } from "lucide-react";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceMotion from "@/assets/service-motion.jpg";
import servicePrint from "@/assets/service-print.jpg";

const serviceData: Record<string, {
  title: string; tagline: string; desc: string; image: string;
  process: { step: string; desc: string }[];
  tools: string[];
  benefits: string[];
  pricing: { tier: string; price: string; features: string[] }[];
  faqs: { q: string; a: string }[];
}> = {
  "logo-design": {
    title: "Logo Design", tagline: "Logos that last a lifetime", image: serviceBranding,
    desc: "Your logo is the cornerstone of your brand. We create timeless, versatile marks that capture your essence and build instant recognition across every medium — from business cards to billboards to favicons.",
    process: [
      { step: "Discovery", desc: "Deep dive into your brand values, audience, competitors, and aspirations through structured workshops." },
      { step: "Concept Exploration", desc: "We explore 20+ directions across different styles — wordmarks, lettermarks, symbols, combination marks." },
      { step: "Refinement", desc: "Your top 3 concepts are refined with precise typography, spacing, and color application." },
      { step: "Finalization", desc: "The chosen logo is perfected across all sizes and applications with a mini brand guideline." },
      { step: "Delivery", desc: "Full vector files (AI, EPS, SVG, PDF), raster files (PNG, JPG), and a logo usage guide." },
    ],
    tools: ["Adobe Illustrator", "Figma", "Procreate", "FontForge", "Adobe After Effects"],
    benefits: ["5+ unique concepts", "Unlimited revisions", "All vector formats", "Brand guidelines", "Social media kit", "Favicon & app icon", "Stationery mockups", "30-day post-delivery support"],
    pricing: [
      { tier: "Essential", price: "$299", features: ["3 concepts", "3 revisions", "Vector files", "7-day delivery"] },
      { tier: "Professional", price: "$599", features: ["5 concepts", "Unlimited revisions", "All formats", "Brand guidelines", "Social media kit", "5-day delivery"] },
      { tier: "Premium", price: "$1,199", features: ["8+ concepts", "Unlimited revisions", "Full brand book", "Stationery design", "Animation-ready", "3-day priority", "Dedicated designer"] },
    ],
    faqs: [
      { q: "How many logo concepts will I receive?", a: "Depending on your package, you'll receive 3-8+ unique concepts. We present diverse directions so you can choose what resonates most." },
      { q: "Do I own the final logo?", a: "Yes, 100%. Upon final delivery and payment, full copyright ownership transfers to you." },
      { q: "Can you match my existing brand colors?", a: "Absolutely. We can work within your existing brand palette or recommend new colors that better serve your goals." },
      { q: "What if I don't like any of the concepts?", a: "This rarely happens, but if it does, we'll start a new round of concepts at no extra cost until you're satisfied." },
    ],
  },
  "brand-identity": {
    title: "Brand Identity Design", tagline: "Complete visual systems that scale", image: serviceBranding,
    desc: "A logo alone isn't a brand. We build comprehensive identity systems that ensure consistency, recognition, and trust across every touchpoint — from your website to your storefront to your social feeds.",
    process: [
      { step: "Brand Audit", desc: "We analyze your current brand assets, market position, competitor landscape, and target audience perception." },
      { step: "Strategy", desc: "Define your brand's personality, voice, positioning, and visual direction through collaborative workshops." },
      { step: "Visual System", desc: "Create logo variations, color palette, typography system, iconography, patterns, and imagery style." },
      { step: "Application", desc: "Apply the system across stationery, digital, social media, packaging, and environmental touchpoints." },
      { step: "Brand Book", desc: "Comprehensive guidelines document ensuring anyone can apply your brand consistently." },
    ],
    tools: ["Figma", "Adobe Illustrator", "Adobe InDesign", "Notion", "Miro"],
    benefits: ["Full logo suite", "Color palette system", "Typography guide", "Comprehensive brand book", "Stationery designs", "Social media templates", "Email signatures", "Presentation templates"],
    pricing: [
      { tier: "Starter", price: "$999", features: ["Logo + 3 variations", "Color palette", "Typography", "Mini brand guide", "10-day delivery"] },
      { tier: "Complete", price: "$2,499", features: ["Full logo suite", "Complete color system", "Typography scale", "50-page brand book", "Stationery suite", "Social templates", "7-day delivery"] },
      { tier: "Enterprise", price: "$5,999", features: ["Everything in Complete", "Sub-brand system", "Motion guidelines", "Environmental design", "Training workshop", "12-month support"] },
    ],
    faqs: [
      { q: "What's included in a brand book?", a: "Logo usage rules, color codes (HEX, RGB, CMYK, Pantone), typography scale, spacing guidelines, do's and don'ts, application examples, and brand voice notes." },
      { q: "How long does a full brand identity take?", a: "Typically 3-6 weeks depending on scope. Rush delivery is available for an additional fee." },
      { q: "Can you work with our existing logo?", a: "Yes! We can build a complete identity system around your existing logo or recommend refinements." },
      { q: "Do you provide templates we can edit?", a: "Yes, all templates are delivered in editable formats (Figma, Canva, or Adobe) so your team can create on-brand materials." },
    ],
  },
  "website-ui-design": {
    title: "Website UI Design", tagline: "Websites that convert visitors into customers", image: serviceWebdesign,
    desc: "We design modern, responsive websites that look stunning and perform brilliantly. Every layout, interaction, and micro-animation is crafted to guide visitors toward action.",
    process: [
      { step: "Research", desc: "User research, competitor analysis, sitemap planning, and content strategy." },
      { step: "Wireframing", desc: "Low-fidelity wireframes establishing information architecture and user flows." },
      { step: "Visual Design", desc: "High-fidelity mockups with your brand's visual language, responsive layouts, and interactive states." },
      { step: "Prototyping", desc: "Clickable prototypes for stakeholder review and usability testing." },
      { step: "Handoff", desc: "Developer-ready Figma files with specs, assets, and a component library." },
    ],
    tools: ["Figma", "Framer", "Adobe XD", "Hotjar", "Google Analytics"],
    benefits: ["Fully responsive design", "Figma design handoff", "Interactive prototypes", "SEO-optimized structure", "Accessibility compliant", "Performance optimized", "CMS-ready layouts", "Design system included"],
    pricing: [
      { tier: "Landing Page", price: "$799", features: ["1 page design", "Responsive", "Prototype", "5-day delivery"] },
      { tier: "Multi-Page", price: "$2,999", features: ["Up to 10 pages", "Responsive design", "Design system", "Prototypes", "SEO structure", "10-day delivery"] },
      { tier: "Enterprise", price: "$7,999+", features: ["Unlimited pages", "Custom design system", "User research", "A/B test variants", "Accessibility audit", "Ongoing support"] },
    ],
    faqs: [
      { q: "Do you also develop the website?", a: "We specialize in design but partner with trusted developers. We can recommend or work with your development team." },
      { q: "What platforms do you design for?", a: "We design platform-agnostic. Our files work with WordPress, Webflow, Shopify, React, or any framework." },
      { q: "Do you do user research?", a: "Yes! Our Complete and Enterprise packages include user research, persona development, and usability testing." },
      { q: "Can I edit the designs myself?", a: "Yes, we deliver in Figma with organized layers and components. We also offer Figma training sessions." },
    ],
  },
  "mobile-app-ui": {
    title: "Mobile App UI Design", tagline: "Apps users love to use", image: serviceAppdesign,
    desc: "We design intuitive, engaging mobile experiences for iOS and Android. From onboarding flows to complex feature sets, every tap and swipe is thoughtfully crafted.",
    process: [
      { step: "User Research", desc: "Understanding your users through interviews, surveys, and competitive analysis." },
      { step: "Information Architecture", desc: "Mapping user flows, navigation patterns, and feature hierarchy." },
      { step: "Wireframes", desc: "Low-fidelity layouts establishing structure and interaction patterns." },
      { step: "UI Design", desc: "Pixel-perfect screens with platform-specific patterns (iOS HIG, Material Design)." },
      { step: "Prototype & Test", desc: "Interactive prototypes for user testing and stakeholder validation." },
    ],
    tools: ["Figma", "Principle", "ProtoPie", "Maze", "UserTesting"],
    benefits: ["iOS & Android", "Complete user flows", "Clickable prototypes", "Full design system", "200+ components", "Dark mode support", "Accessibility features", "Developer handoff"],
    pricing: [
      { tier: "MVP", price: "$1,999", features: ["Up to 15 screens", "1 platform", "Basic prototype", "10-day delivery"] },
      { tier: "Full App", price: "$4,999", features: ["Up to 40 screens", "iOS + Android", "Interactive prototype", "Design system", "User testing"] },
      { tier: "Enterprise", price: "$9,999+", features: ["Unlimited screens", "Both platforms", "User research", "Design system", "Ongoing iterations", "Dev support"] },
    ],
    faqs: [
      { q: "Do you design for both iOS and Android?", a: "Yes! We create platform-specific designs following Apple's Human Interface Guidelines and Google's Material Design." },
      { q: "Can you design for existing apps?", a: "Absolutely. We frequently redesign existing apps to improve UX and visual appeal while maintaining feature parity." },
      { q: "Do you create design systems?", a: "Yes, every Full App and Enterprise project includes a comprehensive design system with reusable components." },
      { q: "What about tablet designs?", a: "We can include iPad/tablet variants. This is included in Enterprise or available as an add-on for other tiers." },
    ],
  },
  "social-media-graphics": {
    title: "Social Media Graphics", tagline: "Scroll-stopping content that converts", image: serviceSocial,
    desc: "We create thumb-stopping social media content optimized for every platform. From feed posts to stories to carousels — designed to engage, share, and convert.",
    process: [
      { step: "Content Strategy", desc: "Analyze your audience, define content pillars, and plan visual themes." },
      { step: "Template Creation", desc: "Design reusable templates for different content types and platforms." },
      { step: "Content Production", desc: "Create on-brand graphics, carousels, stories, and cover images." },
      { step: "Asset Organization", desc: "Organize all assets by platform, content type, and campaign." },
      { step: "Handoff", desc: "Deliver editable templates in Canva/Figma plus all final exports." },
    ],
    tools: ["Figma", "Canva", "Adobe Photoshop", "Adobe After Effects", "Lottie"],
    benefits: ["Platform-optimized sizes", "Content calendar templates", "Story & Reel templates", "Carousel designs", "Cover images", "Highlight icons", "Editable templates", "Brand consistency kit"],
    pricing: [
      { tier: "Starter", price: "$399", features: ["10 posts", "2 platforms", "Feed posts only", "5-day delivery"] },
      { tier: "Growth", price: "$899", features: ["25 posts", "All platforms", "Posts + Stories", "Carousels", "Templates", "7-day delivery"] },
      { tier: "Scale", price: "$1,999/mo", features: ["50+ posts/month", "All platforms", "All formats", "Video thumbnails", "Content calendar", "Dedicated designer"] },
    ],
    faqs: [
      { q: "Which platforms do you design for?", a: "Instagram, Facebook, LinkedIn, Twitter/X, TikTok, Pinterest, YouTube — we cover all major platforms with optimized sizes." },
      { q: "Can I edit the templates myself?", a: "Yes! We deliver editable templates in Canva or Figma so your team can create on-brand content independently." },
      { q: "Do you create video content?", a: "We create motion graphics, animated posts, and story templates. For full video production, see our Motion Graphics service." },
      { q: "Can you match our existing brand?", a: "Absolutely. We use your brand guidelines to ensure every piece of content is perfectly on-brand." },
    ],
  },
  "packaging-design": {
    title: "Packaging Design", tagline: "Packaging that sells from the shelf", image: servicePackaging,
    desc: "We design product packaging that catches eyes on shelves, delights during unboxing, and builds lasting brand loyalty. From concept to print-ready files.",
    process: [
      { step: "Product Analysis", desc: "Understand your product, target market, retail environment, and competitor packaging." },
      { step: "Concept Development", desc: "Create multiple design directions with different visual approaches and messaging." },
      { step: "3D Mockups", desc: "Photorealistic 3D renders showing your packaging in real-world contexts." },
      { step: "Production Files", desc: "Print-ready files with die-cut templates, color separations, and material specs." },
      { step: "Print Supervision", desc: "Coordinate with your printer to ensure perfect color and finish quality." },
    ],
    tools: ["Adobe Illustrator", "Adobe Dimension", "Blender", "Adobe Photoshop", "Esko ArtPro+"],
    benefits: ["Photorealistic 3D mockups", "Die-cut templates", "Material specifications", "Eco-friendly options", "Print-ready CMYK files", "Barcode placement", "Regulatory compliance", "Multi-SKU systems"],
    pricing: [
      { tier: "Single Product", price: "$599", features: ["1 packaging design", "3 concepts", "3D mockups", "Print-ready files", "7-day delivery"] },
      { tier: "Product Line", price: "$1,999", features: ["Up to 5 products", "Cohesive system", "3D mockups", "Die-cut templates", "Material guidance"] },
      { tier: "Full Range", price: "$4,999+", features: ["10+ products", "Brand system", "Point-of-sale", "Retail display", "Print supervision", "Eco consultation"] },
    ],
    faqs: [
      { q: "Do you provide 3D mockups?", a: "Yes, every project includes photorealistic 3D renders showing your packaging from multiple angles in real-world settings." },
      { q: "Can you help with eco-friendly packaging?", a: "Absolutely. We're experienced in designing for sustainable materials and can advise on eco-friendly options." },
      { q: "Do you coordinate with printers?", a: "Yes, we can liaise with your printer or recommend trusted print partners to ensure perfect production quality." },
      { q: "What about regulatory requirements?", a: "We ensure all designs meet FDA, EU, and local regulatory requirements for labeling, nutrition info, and safety warnings." },
    ],
  },
  "motion-graphics": {
    title: "Motion Graphics", tagline: "Bringing your brand to life", image: serviceMotion,
    desc: "Dynamic animations that captivate, explain, and convert. From logo reveals to explainer videos to UI micro-animations — we make your brand move.",
    process: [
      { step: "Briefing", desc: "Define objectives, audience, tone, duration, and distribution channels." },
      { step: "Scripting & Storyboard", desc: "Write the narrative and create frame-by-frame visual storyboards." },
      { step: "Style Frames", desc: "Design key visual frames establishing the animation's look and feel." },
      { step: "Animation", desc: "Bring the storyboard to life with fluid motion, transitions, and sound design." },
      { step: "Delivery", desc: "Export in all required formats and resolutions with social media cutdowns." },
    ],
    tools: ["Adobe After Effects", "Cinema 4D", "Lottie", "Premiere Pro", "Audition"],
    benefits: ["Logo animations", "Social media motion", "Explainer videos", "UI micro-animations", "Kinetic typography", "3D animation", "Sound design", "Multiple format exports"],
    pricing: [
      { tier: "Logo Animation", price: "$499", features: ["5-10 second logo reveal", "3 concepts", "Transparent background", "Social media formats"] },
      { tier: "Explainer Video", price: "$2,999", features: ["60-90 seconds", "Script + storyboard", "Custom illustrations", "Voiceover", "Music", "Social cutdowns"] },
      { tier: "Campaign Package", price: "$5,999+", features: ["Full video suite", "Multiple formats", "Social adaptations", "3D elements", "Sound design", "Ongoing revisions"] },
    ],
    faqs: [
      { q: "How long does a motion graphics project take?", a: "A logo animation takes 3-5 days. An explainer video takes 2-4 weeks. Complex campaigns may take 4-8 weeks." },
      { q: "Do you provide music and sound effects?", a: "Yes, we include licensed music and custom sound design. We can also work with your preferred audio." },
      { q: "Can you create social media cutdowns?", a: "Absolutely. We create 15-second, 30-second, and 60-second versions optimized for each social platform." },
      { q: "Do you do 3D animation?", a: "Yes, we create 3D animations using Cinema 4D and Blender for product visualizations and brand experiences." },
    ],
  },
};

const defaultService = {
  title: "Service", tagline: "Premium design for your brand", image: serviceBranding,
  desc: "We deliver exceptional design services tailored to your brand's unique needs.",
  process: [
    { step: "Discovery", desc: "Understanding your goals and requirements." },
    { step: "Design", desc: "Creating beautiful, functional designs." },
    { step: "Refine", desc: "Iterating based on your feedback." },
    { step: "Deliver", desc: "Final files in all required formats." },
  ],
  tools: ["Figma", "Adobe Creative Suite", "Sketch"],
  benefits: ["Professional quality", "Fast turnaround", "Unlimited revisions", "Source files included"],
  pricing: [
    { tier: "Basic", price: "$499", features: ["Standard delivery", "Source files", "2 revisions"] },
    { tier: "Pro", price: "$999", features: ["Priority delivery", "All formats", "Unlimited revisions"] },
  ],
  faqs: [
    { q: "How do I get started?", a: "Simply contact us with your project details and we'll send a proposal within 24 hours." },
  ],
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = (slug && serviceData[slug]) || defaultService;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Service</span>
              <h1 className="font-heading text-4xl md:text-6xl font-extrabold mt-3 mb-4 text-foreground">{service.title}</h1>
              <p className="text-xl text-muted-foreground mb-2 font-medium">{service.tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{service.desc}</p>
              <div className="flex gap-4">
                <Link to="/contact" className="gradient-btn px-8 py-3.5 text-sm inline-flex items-center gap-2">
                  Get a Quote <ArrowRight size={16} />
                </Link>
                <Link to="/portfolio" className="px-8 py-3.5 text-sm font-semibold border border-border rounded-full hover:bg-secondary transition-all">
                  See Examples
                </Link>
              </div>
            </div>
            <div className="rounded-[24px] overflow-hidden shadow-xl">
              <img src={service.image} alt={service.title} className="w-full aspect-[4/3] object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Process</span>
            <h2 className="font-heading text-4xl font-bold mt-3 text-foreground">How we <span className="gradient-text">work</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-4">
            {service.process.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center relative">
                <div className="w-10 h-10 rounded-full gradient-bg-vivid text-primary-foreground flex items-center justify-center font-bold text-sm mx-auto mb-4 shadow-md">{i + 1}</div>
                <h3 className="font-heading font-bold text-foreground mb-2">{p.step}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                {i < service.process.length - 1 && <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding gradient-bg-soft">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">What's Included</span>
              <h2 className="font-heading text-4xl font-bold mt-3 mb-8 text-foreground">Everything you <span className="gradient-text">need</span></h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 glass-card p-4">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Tools We Use</span>
              <h3 className="font-heading text-2xl font-bold mt-3 mb-6 text-foreground">Industry-leading software</h3>
              <div className="flex flex-wrap gap-3">
                {service.tools.map((t, i) => (
                  <span key={i} className="glass-card px-4 py-2 text-sm text-muted-foreground font-medium">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Pricing</span>
            <h2 className="font-heading text-4xl font-bold mt-3 text-foreground">Transparent <span className="gradient-text">pricing</span></h2>
          </motion.div>
          <div className={`grid gap-6 max-w-5xl mx-auto ${service.pricing.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {service.pricing.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`glass-card p-8 ${i === 1 ? "border-primary/50 ring-2 ring-primary/20 shadow-xl relative" : ""}`}>
                {i === 1 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg-vivid text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">Best Value</div>}
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{p.tier}</h3>
                <div className="mb-6"><span className="font-heading text-4xl font-bold gradient-text">{p.price}</span></div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><Check size={14} className="text-primary flex-shrink-0" /><span className="text-muted-foreground">{f}</span></li>
                  ))}
                </ul>
                <Link to="/contact" className={`block text-center py-3 rounded-full font-semibold text-sm ${i === 1 ? "gradient-btn" : "border border-border hover:bg-secondary"}`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding gradient-bg-soft">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-12 text-foreground">Frequently <span className="gradient-text">Asked</span></h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="glass-card p-6 group">
                <summary className="font-heading font-bold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary ml-2 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-bg-vivid text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Ready to get started?</h2>
          <p className="text-primary-foreground/80 mb-8">Get a free quote for your {service.title.toLowerCase()} project today.</p>
          <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
