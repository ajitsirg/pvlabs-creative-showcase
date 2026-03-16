import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What services does PV Labs offer?", a: "We offer 22+ specialized design services spanning branding & identity, digital design, social & marketing, print & packaging, motion & media, and creative illustration. This includes logo design, brand identity, UI/UX design, social media graphics, packaging, motion graphics, and much more." },
  { q: "How long does a typical project take?", a: "Timelines depend on project scope. Logo design typically takes 5-7 business days, brand identity packages 2-4 weeks, website UI designs 2-3 weeks, and comprehensive brand overhauls 4-8 weeks. We also offer rush delivery for urgent needs." },
  { q: "Do you offer unlimited revisions?", a: "Yes! All our projects include unlimited revisions. We work closely with you until you're 100% satisfied with the final result. Your feedback drives the design process." },
  { q: "What is your pricing model?", a: "We offer three tiers: Starter ($499 for single projects), Professional ($1,499 for multi-service packages), and Enterprise (custom pricing for large-scale needs). All plans include source files, brand guidelines, and dedicated support." },
  { q: "Can you handle large-scale enterprise projects?", a: "Absolutely. Our team of 15+ designers has worked with Fortune 500 companies and global brands. We can scale our team and resources to match any project size while maintaining our quality standards." },
  { q: "Do you work with international clients?", a: "Yes! Over 40% of our 200+ clients are international, spanning 20+ countries. We work across time zones and use collaborative tools for seamless communication." },
  { q: "What file formats do you deliver?", a: "We deliver all standard formats including AI, EPS, SVG, PDF, PNG, JPG, PSD, and Figma files. We also provide organized source files and brand guideline documents." },
  { q: "What if I'm not satisfied with the designs?", a: "Your satisfaction is guaranteed. We offer unlimited revisions and a money-back guarantee if we can't meet your expectations. In our 8+ years, we've maintained a 98% client satisfaction rate." },
];

const FAQ = () => (
  <section className="section-padding">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">FAQ</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          Common <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-muted-foreground">Everything you need to know about working with PV Labs.</p>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
            <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
