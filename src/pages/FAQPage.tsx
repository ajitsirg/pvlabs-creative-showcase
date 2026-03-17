import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Search, HelpCircle } from "lucide-react";

const categories = ["All", "General", "Process", "Pricing", "Services", "Technical", "Support"];

const faqs: { cat: string; q: string; a: string }[] = [
  { cat: "General", q: "What is PV Labs?", a: "PV Labs is a premium creative design agency serving 200+ clients across 20+ countries. We specialize in brand identity, UI/UX design, packaging, motion graphics, and marketing creatives." },
  { cat: "General", q: "Where is PV Labs located?", a: "We're headquartered in San Francisco with a second office in London. Our team of 15+ works remotely across 6 countries, allowing us to serve clients in every timezone." },
  { cat: "General", q: "How long has PV Labs been in business?", a: "PV Labs was founded in 2018 by Priya Verma. In 8+ years, we've completed 500+ projects, won 50+ design awards, and built a reputation for premium creative excellence." },
  { cat: "General", q: "What industries do you serve?", a: "We work across Technology, Healthcare, Finance, E-commerce, Education, Food & Beverage, Fashion, Real Estate, SaaS, Non-profits, and more. Our diverse experience brings fresh perspectives to every project." },
  { cat: "Process", q: "What does your design process look like?", a: "Our proven 5-step process: Discovery (understanding your needs), Strategy (defining direction), Design (creating solutions), Refine (iterating based on feedback), Deliver (final files and handoff). Each step includes client checkpoints." },
  { cat: "Process", q: "How long does a typical project take?", a: "Timelines vary by scope: Logo design (5-7 days), Brand identity (3-6 weeks), Website design (2-4 weeks), App design (4-8 weeks). Rush delivery is available for most services." },
  { cat: "Process", q: "How many revisions are included?", a: "Starter plans include 2-3 revision rounds. Professional plans include unlimited revisions. We work until you're 100% satisfied — that's our guarantee." },
  { cat: "Process", q: "What if I don't like the initial concepts?", a: "This rarely happens, but if none of the initial concepts resonate, we'll start a new round at no additional cost. Your satisfaction is our priority." },
  { cat: "Process", q: "How do you handle communication?", a: "We use a combination of Slack (for quick messages), email (for formal updates), and video calls (for presentations and reviews). You'll have a dedicated project manager as your single point of contact." },
  { cat: "Pricing", q: "How much does a project cost?", a: "Projects start at $299 for individual services. Brand identity packages range from $999-$5,999. Enterprise retainers start at $3,999/month. Visit our pricing page for detailed breakdowns." },
  { cat: "Pricing", q: "Do you offer payment plans?", a: "Yes! For projects over $1,000, we offer a 50/30/20 payment structure: 50% upfront, 30% at midpoint, and 20% upon delivery." },
  { cat: "Pricing", q: "Is there a refund policy?", a: "We offer a 100% satisfaction guarantee. If you're not happy with the initial concepts, we'll refund your payment in full. After approval of concepts, we offer unlimited revisions instead." },
  { cat: "Pricing", q: "Do you charge for consultations?", a: "Initial consultations are always free. We'll discuss your project, provide recommendations, and send a detailed proposal — no commitment required." },
  { cat: "Services", q: "What services do you offer?", a: "We offer 22+ design services including Logo Design, Brand Identity, UI/UX Design, Packaging, Motion Graphics, Social Media Design, Print Design, Marketing Creatives, and more." },
  { cat: "Services", q: "Do you offer ongoing design support?", a: "Yes! Our Enterprise plan provides a dedicated design team for ongoing needs. Monthly retainers start at $3,999/month with unlimited requests." },
  { cat: "Services", q: "Can you handle multiple services for one project?", a: "Absolutely! Many clients bundle services — for example, brand identity + website + social media. Bundled services come at a discounted rate." },
  { cat: "Services", q: "Do you do web development?", a: "We specialize in design but partner with trusted developers. We can recommend developers or work with your existing development team for seamless handoff." },
  { cat: "Technical", q: "What file formats do you deliver?", a: "We deliver in all standard formats: AI, EPS, SVG, PDF (vector), PNG, JPG (raster), Figma files, and platform-specific formats. Source files are always included." },
  { cat: "Technical", q: "What design tools do you use?", a: "Primarily Figma, Adobe Creative Suite (Illustrator, Photoshop, After Effects, InDesign, Premiere Pro), Cinema 4D, Blender, and Framer." },
  { cat: "Technical", q: "Can I edit the files you deliver?", a: "Yes! All deliverables come with editable source files. We can deliver in Figma, Canva, or Adobe formats based on your team's preferences." },
  { cat: "Support", q: "What kind of support do you offer post-delivery?", a: "All projects include 30 days of post-delivery support. Enterprise clients get ongoing support. We're always available for questions about implementation." },
  { cat: "Support", q: "How quickly do you respond?", a: "Initial inquiries get a response within 24 hours (usually much faster). During active projects, response time is typically under 2 hours during business hours." },
  { cat: "Support", q: "Do you offer training?", a: "Yes! We offer design tool training, brand guidelines workshops, and template usage sessions. These can be included in your package or purchased separately." },
];

const FAQPage = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const filtered = (active === "All" ? faqs : faqs.filter(f => f.cat === active)).filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
              Frequently asked <span className="gradient-text">questions</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Everything you need to know about working with PV Labs. Can't find your answer? Contact us.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search questions..." className="w-full bg-background border border-border rounded-full pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-4">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === c ? "gradient-btn" : "bg-secondary text-muted-foreground hover:bg-secondary/80"}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24 pt-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {filtered.map((f, i) => (
            <motion.details key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
              className="glass-card p-6 group">
              <summary className="font-heading font-bold text-foreground cursor-pointer list-none flex items-center justify-between gap-4">
                <span className="flex items-center gap-3">
                  <HelpCircle size={18} className="text-primary flex-shrink-0" />
                  {f.q}
                </span>
                <span className="text-primary ml-2 group-open:rotate-45 transition-transform text-xl flex-shrink-0">+</span>
              </summary>
              <div className="mt-4 pl-9">
                <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2 inline-block">{f.cat}</span>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            </motion.details>
          ))}
          {filtered.length === 0 && <p className="text-center text-muted-foreground py-12">No questions found matching your search.</p>}
        </div>
      </section>

      <section className="section-padding gradient-bg-vivid text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Still have questions?</h2>
          <p className="text-primary-foreground/80 mb-8">Our team is here to help. Get in touch and we'll respond within 24 hours.</p>
          <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
