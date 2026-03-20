import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What services does PV Labs offer?", a: "We offer 22+ specialized design services spanning branding, digital design, social media, print, packaging, motion, and illustration." },
  { q: "How long does a typical project take?", a: "Logo design: 5-7 days. Brand identity: 2-4 weeks. Website UI: 2-3 weeks. Comprehensive overhauls: 4-8 weeks. Rush delivery available." },
  { q: "Do you offer unlimited revisions?", a: "Yes! All projects include unlimited revisions. We work until you're 100% satisfied with the final result." },
  { q: "What is your pricing model?", a: "Three tiers: Starter ($499), Professional ($1,499), and Enterprise (custom). All include source files, guidelines, and support." },
  { q: "Can you handle enterprise projects?", a: "Absolutely. Our 15+ person team has worked with Fortune 500 companies and can scale to match any project size." },
  { q: "Do you work with international clients?", a: "Yes! 40% of our 200+ clients are international, spanning 20+ countries across all time zones." },
  { q: "What file formats do you deliver?", a: "AI, EPS, SVG, PDF, PNG, JPG, PSD, and Figma files — plus organized source files and brand guidelines." },
  { q: "What if I'm not satisfied?", a: "We offer unlimited revisions and a money-back guarantee. In 8+ years, we've maintained a 98% satisfaction rate." },
];

const FAQ = () => (
  <section className="section-padding">
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary text-xs font-semibold uppercase tracking-widest">FAQ</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-3 text-foreground">
          Common <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-muted-foreground text-[15px]">Everything you need to know about working with us.</p>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-5 border-none">
            <AccordionTrigger className="text-left font-heading font-semibold text-sm text-foreground hover:no-underline py-4">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
