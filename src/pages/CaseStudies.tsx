import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Target, Users, BarChart3, CheckCircle, ArrowUpRight } from "lucide-react";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceMotion from "@/assets/service-motion.jpg";

const caseStudies = [
  {
    id: "novatech-rebrand",
    title: "NovaTech Complete Rebrand",
    client: "NovaTech Inc.",
    category: "Branding",
    duration: "8 weeks",
    heroImage: serviceBranding,
    problem: "NovaTech's outdated visual identity was hurting investor confidence and making it difficult to attract top engineering talent. Their logo looked like it belonged in 2005, and their materials lacked consistency across 15+ touchpoints.",
    solution: "We conducted deep brand workshops, competitor audits, and stakeholder interviews. Then delivered a complete identity overhaul: new logo system, color architecture, typography scale, comprehensive brand book, and 100+ asset templates.",
    results: [
      { metric: "280%", label: "Brand recognition increase" },
      { metric: "45%", label: "More qualified applicants" },
      { metric: "3x", label: "Social media engagement" },
      { metric: "92%", label: "Employee brand satisfaction" },
    ],
    testimonial: { text: "PV Labs didn't just redesign our brand — they redefined how we see ourselves. The new identity has transformed every customer interaction.", author: "Sarah Chen", role: "CEO, NovaTech Inc." },
    beforeAfter: { before: "Generic wordmark with inconsistent color usage across materials", after: "Dynamic geometric mark with adaptive color system and comprehensive guidelines" },
  },
  {
    id: "fitpulse-app",
    title: "FitPulse Mobile App UI",
    client: "FitPulse",
    category: "UI/UX Design",
    duration: "12 weeks",
    heroImage: serviceAppdesign,
    problem: "FitPulse had a functional fitness app but terrible retention — 70% of users abandoned within the first week. The interface was cluttered, onboarding was confusing, and the experience felt generic.",
    solution: "We redesigned the entire user experience from the ground up. New onboarding flow, gamification system, social features, personalized dashboard, and a design system with 200+ components for the dev team.",
    results: [
      { metric: "300%", label: "User engagement increase" },
      { metric: "65%", label: "Better day-7 retention" },
      { metric: "4.8★", label: "App Store rating" },
      { metric: "150K", label: "New downloads in 3 months" },
    ],
    testimonial: { text: "The new design turned our app from 'meh' to 'must-have.' Users actually enjoy working out with FitPulse now.", author: "Mike Torres", role: "Product Lead, FitPulse" },
    beforeAfter: { before: "Cluttered screens with poor information hierarchy and no onboarding", after: "Clean, intuitive flows with gamification, progress tracking, and social features" },
  },
  {
    id: "greenleaf-packaging",
    title: "GreenLeaf Eco Packaging",
    client: "GreenLeaf Co.",
    category: "Packaging Design",
    duration: "6 weeks",
    heroImage: servicePackaging,
    problem: "GreenLeaf's organic products were premium quality but their packaging looked budget. They were losing shelf space to competitors with better visual presence despite inferior products.",
    solution: "We created a cohesive packaging system across 12 product lines using sustainable materials, custom illustrations, and a distinctive color-coding system. Each package tells the story of the ingredient's origin.",
    results: [
      { metric: "45%", label: "Sales increase" },
      { metric: "12", label: "Product lines redesigned" },
      { metric: "3x", label: "Shelf visibility score" },
      { metric: "Zero", label: "Plastic in packaging" },
    ],
    testimonial: { text: "Our products finally look as good as they taste. Customers now pick us up just because the packaging catches their eye.", author: "Lisa Park", role: "Founder, GreenLeaf Co." },
    beforeAfter: { before: "Generic white labels with minimal branding and plastic wrapping", after: "Eco-friendly packaging with custom illustrations and distinctive shelf presence" },
  },
  {
    id: "cloudsync-dashboard",
    title: "CloudSync Analytics Dashboard",
    client: "CloudSync",
    category: "Web Design",
    duration: "10 weeks",
    heroImage: serviceWebdesign,
    problem: "CloudSync's enterprise dashboard was powerful but unusable. Support tickets about the UI outnumbered feature requests 5:1. Users spent 20+ minutes on tasks that should take 2.",
    solution: "We rebuilt the entire dashboard experience with a focus on data visualization, workflow optimization, and accessibility. Created a custom design system with dark/light modes, responsive charts, and keyboard-first navigation.",
    results: [
      { metric: "60%", label: "Faster task completion" },
      { metric: "80%", label: "Fewer support tickets" },
      { metric: "95%", label: "User satisfaction score" },
      { metric: "$2M", label: "ARR increase attributed to UX" },
    ],
    testimonial: { text: "Our enterprise clients went from complaining about the UI to bragging about it. That's the PV Labs effect.", author: "David Kim", role: "VP Product, CloudSync" },
    beforeAfter: { before: "Data-heavy screens with no hierarchy, tiny fonts, and overwhelming controls", after: "Clean, scannable dashboards with smart defaults, filters, and beautiful data viz" },
  },
  {
    id: "luxe-campaign",
    title: "Luxe Fashion Campaign",
    client: "Luxe Fashion",
    category: "Marketing",
    duration: "4 weeks",
    heroImage: serviceSocial,
    problem: "Luxe Fashion was launching their first physical retail store but had zero digital presence. They needed a multi-channel campaign that would drive foot traffic and establish their online brand simultaneously.",
    solution: "We designed a comprehensive launch campaign: 60+ social media creatives, email sequences, digital ads for Google/Meta/TikTok, in-store signage, lookbook, and a launch event identity — all in 4 weeks.",
    results: [
      { metric: "40%", label: "More opening-day traffic" },
      { metric: "500K", label: "Social impressions in week 1" },
      { metric: "25%", label: "Email open rate" },
      { metric: "3.2x", label: "ROAS on digital ads" },
    ],
    testimonial: { text: "From zero to viral in 4 weeks. PV Labs created a launch campaign that made us look like we'd been around for years.", author: "Anna Wright", role: "Marketing Director, Luxe Fashion" },
    beforeAfter: { before: "No digital presence, no brand guidelines, inconsistent visuals", after: "Cohesive multi-channel presence with 60+ branded assets and clear style guide" },
  },
  {
    id: "apex-explainer",
    title: "Apex Animated Explainer",
    client: "Apex Digital",
    category: "Motion Graphics",
    duration: "3 weeks",
    heroImage: serviceMotion,
    problem: "Apex had a complex B2B SaaS product that their sales team struggled to explain. Demo calls lasted 45 minutes and prospects still didn't fully understand the value proposition.",
    solution: "We produced a 2-minute cinematic explainer video with custom illustrations, kinetic typography, and a narrative arc that takes viewers from problem to solution to proof. Also delivered 15-second social cuts.",
    results: [
      { metric: "10M+", label: "Social media views" },
      { metric: "70%", label: "Shorter sales cycles" },
      { metric: "3x", label: "Landing page conversions" },
      { metric: "15", label: "Social media cutdowns" },
    ],
    testimonial: { text: "That 2-minute video does more selling than our entire 10-person sales team used to in an hour. It's our most valuable marketing asset.", author: "James Liu", role: "CRO, Apex Digital" },
    beforeAfter: { before: "45-minute confusing demo calls with low conversion rates", after: "2-minute video that explains everything and converts 3x better" },
  },
];

const CaseStudies = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Case Studies</span>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
            Real results, <span className="gradient-text">real impact</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Deep dives into our most transformative projects. See how strategic design drives measurable business outcomes for brands worldwide.
          </p>
        </motion.div>

        {/* Summary stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
          {[
            { icon: TrendingUp, num: "280%", label: "Avg. brand lift" },
            { icon: Target, num: "98%", label: "Client satisfaction" },
            { icon: Users, num: "200+", label: "Clients served" },
            { icon: BarChart3, num: "3.2x", label: "Avg. ROI" },
          ].map((s, i) => (
            <div key={i} className="glass-card p-4 text-center">
              <s.icon size={18} className="text-primary mx-auto mb-1" />
              <div className="font-heading text-2xl font-bold gradient-text">{s.num}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Case Study Cards */}
    {caseStudies.map((cs, i) => (
      <section key={cs.id} className={`section-padding ${i % 2 === 1 ? "gradient-bg-soft" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{cs.category}</span>
              <span className="text-xs text-muted-foreground">• {cs.client}</span>
              <span className="text-xs text-muted-foreground">• {cs.duration}</span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8">{cs.title}</h2>

            {/* Hero image */}
            <div className="rounded-[24px] overflow-hidden shadow-lg mb-12">
              <img src={cs.heroImage} alt={cs.title} className="w-full aspect-[21/9] object-cover" />
            </div>

            {/* Problem → Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <h3 className="font-heading text-lg font-bold text-foreground">The Problem</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{cs.problem}</p>
              </div>
              <div className="glass-card p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <h3 className="font-heading text-lg font-bold text-foreground">Our Solution</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{cs.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {cs.results.map((r, j) => (
                <div key={j} className="glass-card p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="font-heading text-3xl md:text-4xl font-bold gradient-text">{r.metric}</div>
                  <div className="text-sm text-muted-foreground mt-1">{r.label}</div>
                </div>
              ))}
            </div>

            {/* Before/After */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="glass-card p-6 border-l-4 border-destructive/30">
                <span className="text-xs font-bold text-destructive uppercase tracking-wider">Before</span>
                <p className="text-muted-foreground mt-2">{cs.beforeAfter.before}</p>
              </div>
              <div className="glass-card p-6 border-l-4 border-primary/50">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">After</span>
                <p className="text-muted-foreground mt-2">{cs.beforeAfter.after}</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="glass-card p-8 bg-primary/5 border-primary/20">
              <p className="text-lg text-foreground italic leading-relaxed mb-4">"{cs.testimonial.text}"</p>
              <div>
                <span className="font-heading font-bold text-foreground">{cs.testimonial.author}</span>
                <span className="text-sm text-muted-foreground ml-2">— {cs.testimonial.role}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="section-padding gradient-bg-vivid text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Want results like these?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Let's create the next success story together. Get a free consultation.
        </p>
        <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
          Start Your Project <ArrowRight size={18} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default CaseStudies;
