import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Play, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO", company: "NovaTech Inc.", text: "PV Labs didn't just redesign our brand — they redefined how we see ourselves. The new identity has transformed every customer interaction and helped us raise our Series B.", rating: 5, result: "280% brand recognition increase", featured: true },
  { name: "Mike Torres", role: "Product Lead", company: "FitPulse", text: "The new design turned our app from 'meh' to 'must-have.' Users actually enjoy working out with FitPulse now. Our retention metrics have never been better.", rating: 5, result: "300% user engagement boost", featured: true },
  { name: "Lisa Park", role: "Founder", company: "GreenLeaf Co.", text: "Our products finally look as good as they taste. Customers now pick us up just because the packaging catches their eye. Sales are up 45% since the redesign.", rating: 5, result: "45% sales increase" },
  { name: "David Kim", role: "VP Product", company: "CloudSync", text: "Our enterprise clients went from complaining about the UI to bragging about it. That's the PV Labs effect. Support tickets dropped 80% after the redesign.", rating: 5, result: "$2M ARR increase" },
  { name: "Anna Wright", role: "Marketing Director", company: "Luxe Fashion", text: "From zero to viral in 4 weeks. PV Labs created a launch campaign that made us look like we'd been around for years. The ROI was incredible.", rating: 5, result: "3.2x ROAS" },
  { name: "James Liu", role: "CRO", company: "Apex Digital", text: "That 2-minute explainer video does more selling than our entire sales team used to in an hour. It's our most valuable marketing asset.", rating: 5, result: "70% shorter sales cycles" },
  { name: "Rachel Green", role: "CMO", company: "Bloom Skincare", text: "PV Labs understood our brand better than we did. The identity system they created is elegant, cohesive, and instantly recognizable. We get compliments daily.", rating: 5, result: "120% social following growth" },
  { name: "Tom Bradley", role: "Founder", company: "UrbanEats", text: "The new website design increased our online orders by 200% in the first month. The UX is intuitive, beautiful, and fast. Best investment we've made.", rating: 5, result: "200% order increase" },
  { name: "Yuki Tanaka", role: "Head of Design", company: "Zenith Capital", text: "Working with PV Labs was a masterclass in professional design execution. They delivered 100+ brand templates that our team of 500 uses daily.", rating: 5, result: "Consistent across 50+ touchpoints" },
  { name: "Carlos Rodriguez", role: "CEO", company: "TechFlow", text: "PV Labs designed our entire product suite — website, app, marketing materials. The consistency across everything is remarkable. They truly understand scalable design.", rating: 5, result: "4.9★ average client rating" },
  { name: "Priya Sharma", role: "Co-founder", company: "EduLearn", text: "The landing page design PV Labs created converts at 3x our industry average. Their understanding of conversion psychology is as strong as their design skills.", rating: 5, result: "3x conversion rate" },
  { name: "Mark Thompson", role: "Creative Director", company: "Studio Nine", text: "I've worked with dozens of agencies. PV Labs is the only one that consistently exceeds expectations. Their attention to detail is unmatched in the industry.", rating: 5, result: "5 repeat engagements" },
];

const videoTestimonials = [
  { name: "Sarah Chen", company: "NovaTech", duration: "2:30", thumbnail: "gradient-bg-soft" },
  { name: "Mike Torres", company: "FitPulse", duration: "1:45", thumbnail: "gradient-bg-soft" },
  { name: "Lisa Park", company: "GreenLeaf", duration: "3:10", thumbnail: "gradient-bg-soft" },
];

const TestimonialsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
            What our clients <span className="gradient-text">say</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what 200+ clients have to say about working with PV Labs.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              { num: "4.9/5", label: "Average Rating" },
              { num: "98%", label: "Would Recommend" },
              { num: "200+", label: "Happy Clients" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-heading text-3xl font-bold gradient-text">{s.num}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Featured */}
    <section className="px-6 md:px-12 pb-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {testimonials.filter(t => t.featured).map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="glass-card p-8 border-primary/20 bg-primary/5">
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={16} className="text-primary fill-primary" />)}
            </div>
            <Quote size={24} className="text-primary/30 mb-2" />
            <p className="text-foreground text-lg leading-relaxed mb-6 italic">"{t.text}"</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">{t.name.split(" ").map(n => n[0]).join("")}</div>
                <div>
                  <div className="font-heading font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}, {t.company}</div>
                </div>
              </div>
              <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{t.result}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Video */}
    <section className="section-padding gradient-bg-soft">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">Video <span className="gradient-text">Testimonials</span></h2>
        <div className="grid md:grid-cols-3 gap-6">
          {videoTestimonials.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play size={24} className="text-primary-foreground ml-1" />
                </div>
                <span className="absolute bottom-3 right-3 text-xs bg-foreground/80 text-background px-2 py-1 rounded">{v.duration}</span>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-foreground">{v.name}</h3>
                <p className="text-sm text-muted-foreground">{v.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* All */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">All <span className="gradient-text">Reviews</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.filter(t => !t.featured).map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="glass-card p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={14} className="text-primary fill-primary" />)}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-bold">{t.name.split(" ").map(n => n[0]).join("")}</div>
                <div>
                  <div className="font-heading font-bold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <span className="text-xs text-primary font-semibold">{t.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding gradient-bg-vivid text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Join 200+ happy clients</h2>
        <p className="text-primary-foreground/80 mb-8">Start your project today and see why brands love working with us.</p>
        <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
          Start Your Project <ArrowRight size={18} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default TestimonialsPage;
