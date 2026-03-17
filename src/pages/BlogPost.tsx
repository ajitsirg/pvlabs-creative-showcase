import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Share2, Twitter, Linkedin, Facebook, Link as LinkIcon, ArrowRight } from "lucide-react";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceSocial from "@/assets/service-social.jpg";

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">Branding</span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mt-4 mb-6 leading-tight">
              The Ultimate Brand Identity Guide for 2025
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1"><User size={14} /> Priya Verma</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> March 10, 2026</span>
              <span className="flex items-center gap-1"><Clock size={14} /> 12 min read</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-[24px] overflow-hidden shadow-lg mb-12">
            <img src={serviceBranding} alt="Brand Identity Guide" className="w-full aspect-[16/9] object-cover" />
          </motion.div>

          {/* Article content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="prose max-w-none">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-lg text-muted-foreground">
                Building a strong brand identity is no longer optional — it's the foundation of business success. In this comprehensive guide, 
                we'll walk you through everything you need to know about creating a brand identity that resonates, converts, and endures.
              </p>

              <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">What is Brand Identity?</h2>
              <p className="text-muted-foreground">
                Brand identity is the collection of visual elements that represent your company — your logo, colors, typography, imagery style, 
                and design language. It's how your brand looks, feels, and communicates visually. Think of it as your brand's visual DNA.
              </p>
              <p className="text-muted-foreground">
                Unlike brand image (how others perceive you), brand identity is what you can control. It's the intentional set of choices you 
                make about how your brand presents itself to the world.
              </p>

              <div className="glass-card p-6 my-8 border-l-4 border-primary/50">
                <p className="text-foreground italic text-lg">"Your brand is what other people say about you when you're not in the room."</p>
                <p className="text-sm text-primary font-semibold mt-2">— Jeff Bezos</p>
              </div>

              <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">The 7 Core Elements</h2>

              <div className="rounded-[24px] overflow-hidden shadow-lg my-8">
                <img src={serviceWebdesign} alt="Brand elements" className="w-full aspect-[16/9] object-cover" />
              </div>

              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">1. Logo System</h3>
              <p className="text-muted-foreground">
                Your logo isn't just one mark — it's a system. A modern brand needs a primary logo, a horizontal variant, an icon/mark, 
                a favicon, and clear spacing rules. Each version should work at any size, from a billboard to a 16px favicon.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">2. Color Palette</h3>
              <p className="text-muted-foreground">
                Colors trigger emotions and associations faster than any other visual element. Your palette should include primary colors, 
                secondary accents, neutrals, and semantic colors (success, warning, error). Define exact values in HEX, RGB, CMYK, and Pantone.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">3. Typography</h3>
              <p className="text-muted-foreground">
                Choose a heading font for personality and a body font for readability. Define a type scale with consistent sizes, 
                weights, and line heights. Consider accessibility — body text should be at least 16px with 1.5 line height.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">4. Imagery Style</h3>
              <p className="text-muted-foreground">
                Whether you use photography, illustration, or a mix — define a consistent style. Specify lighting, color treatment, 
                composition rules, and subject guidelines. This ensures visual consistency across all touchpoints.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">5. Iconography</h3>
              <p className="text-muted-foreground">
                Custom icons reinforce your brand's unique personality. Define stroke weight, corner radius, grid size, and style 
                (outlined, filled, duo-tone). Consistency is key — every icon should look like it belongs to the same family.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">6. Layout & Grid</h3>
              <p className="text-muted-foreground">
                Establish grid systems, spacing scales, and layout principles. This creates rhythm and harmony across all materials. 
                Use an 8px grid for digital and define margins, gutters, and breakpoints.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">7. Brand Voice</h3>
              <p className="text-muted-foreground">
                While not strictly visual, your brand voice influences how visual elements are perceived. Define your tone: 
                professional vs casual, serious vs playful, technical vs simple. Visual and verbal identity should align.
              </p>

              <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">Building Your Brand Identity: Step by Step</h2>

              <div className="grid gap-4 my-8">
                {[
                  { step: "1", title: "Research & Discovery", desc: "Audit your current brand, analyze competitors, interview stakeholders, and define your target audience." },
                  { step: "2", title: "Strategy & Positioning", desc: "Define your mission, values, personality traits, and unique value proposition." },
                  { step: "3", title: "Visual Exploration", desc: "Create mood boards, explore directions, and gather inspiration across industries." },
                  { step: "4", title: "Design & Refine", desc: "Design core elements, test across applications, gather feedback, and iterate." },
                  { step: "5", title: "Document & Launch", desc: "Create comprehensive brand guidelines and roll out the new identity systematically." },
                ].map((s, i) => (
                  <div key={i} className="glass-card p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-bg-vivid text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">{s.step}</div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground">{s.title}</h4>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 my-8 border-l-4 border-accent/50">
                <p className="text-foreground italic text-lg">"Design is the silent ambassador of your brand."</p>
                <p className="text-sm text-accent font-semibold mt-2">— Paul Rand</p>
              </div>

              <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">Conclusion</h2>
              <p className="text-muted-foreground">
                A strong brand identity is your most valuable business asset. It builds trust, creates recognition, drives loyalty, 
                and ultimately grows your bottom line. Whether you're starting from scratch or refreshing an existing brand, investing 
                in professional brand identity design pays dividends for years to come.
              </p>
              <p className="text-muted-foreground">
                Ready to build a brand identity that stands the test of time? <Link to="/contact" className="text-primary font-semibold hover:underline">Let's talk</Link>.
              </p>
            </div>
          </motion.div>

          {/* Share */}
          <div className="flex items-center gap-4 mt-12 pt-8 border-t border-border">
            <span className="text-sm font-semibold text-foreground">Share this article:</span>
            {[Twitter, Linkedin, Facebook, LinkIcon].map((Icon, i) => (
              <button key={i} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Icon size={16} />
              </button>
            ))}
          </div>

          {/* Author */}
          <div className="glass-card p-6 mt-8 flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">PV</div>
            <div>
              <h4 className="font-heading font-bold text-foreground">Priya Verma</h4>
              <p className="text-sm text-primary mb-2">Founder & Creative Director</p>
              <p className="text-sm text-muted-foreground">15+ years in design leadership. Passionate about design that drives business growth.</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="section-padding gradient-bg-soft">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Related <span className="gradient-text">Articles</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Color Theory for Branding", image: serviceBranding, cat: "Branding", slug: "color-theory-branding" },
              { title: "10 UI Design Trends for 2026", image: serviceWebdesign, cat: "UI/UX", slug: "ui-design-trends" },
              { title: "Social Media Content That Converts", image: serviceSocial, cat: "Marketing", slug: "social-media-design" },
            ].map((p, i) => (
              <Link key={i} to={`/blog/${p.slug}`} className="glass-card overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-primary">{p.cat}</span>
                  <h3 className="font-heading font-bold text-foreground mt-1 group-hover:text-primary transition-colors">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
