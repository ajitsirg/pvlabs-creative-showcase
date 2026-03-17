import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Clock, User, ArrowRight, Search, Tag } from "lucide-react";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceMotion from "@/assets/service-motion.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";
import servicePrint from "@/assets/service-print.jpg";

const categories = ["All", "Design", "Branding", "UI/UX", "Marketing", "Trends", "Business"];

const posts = [
  { slug: "brand-identity-guide-2025", title: "The Ultimate Brand Identity Guide for 2025", excerpt: "Everything you need to know about building a powerful brand identity that resonates with your audience and drives business growth.", image: serviceBranding, cat: "Branding", author: "Priya Verma", date: "Mar 10, 2026", readTime: "12 min", featured: true },
  { slug: "ui-design-trends", title: "10 UI Design Trends Dominating 2026", excerpt: "From glassmorphism to AI-generated interfaces, these are the trends reshaping digital design this year.", image: serviceWebdesign, cat: "UI/UX", author: "Alex Rivera", date: "Mar 5, 2026", readTime: "8 min", featured: true },
  { slug: "social-media-design", title: "How to Design Social Media Content That Converts", excerpt: "Data-driven strategies for creating thumb-stopping social content that drives engagement and sales.", image: serviceSocial, cat: "Marketing", author: "Jordan Lee", date: "Feb 28, 2026", readTime: "10 min" },
  { slug: "motion-design-beginners", title: "Motion Design for Beginners: Where to Start", excerpt: "A comprehensive guide to getting started with motion graphics — tools, techniques, and first projects.", image: serviceMotion, cat: "Design", author: "Mia Zhang", date: "Feb 20, 2026", readTime: "15 min" },
  { slug: "packaging-psychology", title: "The Psychology Behind Effective Packaging Design", excerpt: "How color, shape, texture, and typography influence purchasing decisions at the shelf.", image: servicePackaging, cat: "Branding", author: "Sam Patel", date: "Feb 15, 2026", readTime: "9 min" },
  { slug: "app-design-mistakes", title: "7 Common App Design Mistakes (And How to Fix Them)", excerpt: "Lessons from redesigning 50+ mobile apps — the patterns that kill engagement and what to do instead.", image: serviceAppdesign, cat: "UI/UX", author: "Alex Rivera", date: "Feb 10, 2026", readTime: "7 min" },
  { slug: "design-business-growth", title: "How Design Drives Business Growth: A Data Story", excerpt: "Case studies and data proving the ROI of investing in professional design for your brand.", image: servicePrint, cat: "Business", author: "Jordan Lee", date: "Feb 5, 2026", readTime: "11 min" },
  { slug: "color-theory-branding", title: "Color Theory for Branding: A Practical Guide", excerpt: "How to choose and apply colors that communicate your brand's personality and values effectively.", image: serviceBranding, cat: "Branding", author: "Priya Verma", date: "Jan 28, 2026", readTime: "13 min" },
  { slug: "responsive-design-2026", title: "Responsive Design Best Practices for 2026", excerpt: "New device categories, foldable screens, and the evolving landscape of responsive web design.", image: serviceWebdesign, cat: "UI/UX", author: "Ryan Kim", date: "Jan 20, 2026", readTime: "8 min" },
  { slug: "freelance-vs-agency", title: "Freelancer vs Agency: How to Choose the Right Partner", excerpt: "A balanced comparison to help you make the right decision for your design project.", image: serviceSocial, cat: "Business", author: "Emma Davis", date: "Jan 15, 2026", readTime: "6 min" },
  { slug: "typography-guide", title: "Typography That Speaks: A Designer's Guide to Font Pairing", excerpt: "Master the art of font pairing with these proven combinations and principles.", image: servicePrint, cat: "Design", author: "Sam Patel", date: "Jan 10, 2026", readTime: "10 min" },
  { slug: "design-trends-future", title: "The Future of Design: AI, AR, and Beyond", excerpt: "How emerging technologies are transforming the design industry and what it means for brands.", image: serviceMotion, cat: "Trends", author: "Priya Verma", date: "Jan 5, 2026", readTime: "14 min" },
];

const Blog = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const featured = posts.filter(p => p.featured);
  const filtered = (active === "All" ? posts : posts.filter(p => p.cat === active)).filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Blog & Insights</span>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
              Design <span className="gradient-text">insights</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Expert perspectives on design, branding, UI/UX, and the creative industry. Learn from our team of 15+ experienced designers.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles..." className="w-full bg-background border border-border rounded-full pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      {!search && active === "All" && (
        <section className="px-6 md:px-12 pb-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link to={`/blog/${p.slug}`} className="glass-card overflow-hidden group block hover:shadow-xl transition-shadow">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{p.cat}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {p.readTime}</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User size={12} /> {p.author} • {p.date}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="px-6 md:px-12 pb-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === c ? "gradient-btn" : "bg-secondary text-muted-foreground hover:bg-secondary/80"}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 pb-24 pt-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div key={p.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Link to={`/blog/${p.slug}`} className="glass-card overflow-hidden group block hover:shadow-xl transition-shadow h-full">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{p.cat}</span>
                    <span className="text-xs text-muted-foreground">{p.readTime}</span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{p.excerpt}</p>
                  <div className="text-xs text-muted-foreground">{p.author} • {p.date}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-center text-muted-foreground py-12">No articles found matching your search.</p>}
      </section>

      {/* Newsletter */}
      <section className="section-padding gradient-bg-vivid text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Stay in the loop</h2>
          <p className="text-primary-foreground/80 mb-8">Get the latest design insights, tips, and trends delivered to your inbox weekly.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 bg-background/20 border border-background/30 rounded-full px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-background/30" />
            <button className="bg-background text-foreground px-6 py-3 rounded-full font-semibold text-sm hover:shadow-xl transition-all">Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
