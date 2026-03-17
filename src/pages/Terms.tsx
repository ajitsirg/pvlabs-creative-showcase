import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const sections = [
  { title: "Acceptance of Terms", content: "By accessing and using the PV Labs website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services." },
  { title: "Services Description", content: "PV Labs provides creative design services including but not limited to logo design, brand identity, UI/UX design, packaging design, motion graphics, and marketing creatives. Service scope, deliverables, and timelines are defined in individual project proposals." },
  { title: "Project Engagement", content: "Each project begins with a signed proposal or statement of work. Projects commence upon receipt of the agreed deposit. Changes to scope after project start may result in additional fees and timeline adjustments." },
  { title: "Payment Terms", content: "Payment terms are outlined in your project proposal. Standard terms are 50% upfront and 50% upon delivery. Enterprise clients may qualify for invoicing with Net-30 terms. Late payments may incur a 1.5% monthly fee." },
  { title: "Intellectual Property", content: "Upon full payment, all intellectual property rights for the final delivered designs transfer to you. PV Labs retains the right to showcase the work in our portfolio unless otherwise agreed. Pre-existing elements and stock assets may have separate licensing terms." },
  { title: "Revisions & Modifications", content: "Revision rounds are included as specified in your package. Revisions must be consolidated and submitted within 5 business days of receiving designs. Additional revision rounds beyond the included amount are billed at our hourly rate." },
  { title: "Confidentiality", content: "We treat all client information and project details as confidential. We will not share your business information, strategies, or unpublished designs with any third party without your written consent." },
  { title: "Limitation of Liability", content: "PV Labs' total liability for any claim shall not exceed the total fees paid for the specific project. We are not liable for indirect, incidental, or consequential damages arising from the use of our designs." },
  { title: "Termination", content: "Either party may terminate a project with 14 days written notice. In case of termination, payment is due for all work completed to date. Completed deliverables will be transferred upon payment." },
  { title: "Governing Law", content: "These terms are governed by the laws of the State of California. Any disputes shall be resolved through arbitration in San Francisco, CA, under the rules of the American Arbitration Association." },
  { title: "Contact", content: "For questions about these Terms of Service, contact us at legal@pvlabs.design or write to: PV Labs, 123 Design Street, San Francisco, CA 94105, USA." },
];

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-5xl font-extrabold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: March 1, 2026</p>
        </motion.div>
      </div>
    </section>

    <section className="px-6 md:px-12 pb-24">
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-muted-foreground leading-relaxed">
          Please read these Terms of Service carefully before using PV Labs' website and design services.
        </p>
        {sections.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">{i + 1}. {s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.content}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default Terms;
