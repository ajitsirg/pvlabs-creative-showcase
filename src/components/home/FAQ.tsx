import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What services does PV Labs offer?", a: "We offer 22+ design services including logo design, brand identity, UI/UX design, motion graphics, packaging design, marketing creatives, and much more." },
  { q: "How long does a typical project take?", a: "Project timelines vary based on scope. A logo design typically takes 5-7 business days, while a full brand identity can take 2-4 weeks." },
  { q: "Do you offer revisions?", a: "Yes! We offer unlimited revisions on all projects to ensure you're 100% satisfied with the final result." },
  { q: "What is your pricing model?", a: "We offer flexible pricing with project-based and retainer options. Contact us for a custom quote tailored to your needs." },
  { q: "Can you handle large-scale projects?", a: "Absolutely. Our team of 15+ designers can handle projects of any scale, from startups to enterprise brands." },
  { q: "Do you work with international clients?", a: "Yes, we work with clients worldwide. Over 40% of our clients are based internationally across 20+ countries." },
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
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
          Common <span className="gradient-text">Questions</span>
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
            <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
