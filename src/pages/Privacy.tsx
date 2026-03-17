import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const sections = [
  { title: "Information We Collect", content: "We collect information you provide directly, such as your name, email address, phone number, and project details when you contact us or use our services. We also collect usage data through cookies and analytics tools to improve our website experience." },
  { title: "How We Use Your Information", content: "We use your information to: provide and improve our design services, communicate about your projects, send relevant updates and marketing (with your consent), process payments, and comply with legal obligations. We never sell your personal data to third parties." },
  { title: "Data Storage & Security", content: "Your data is stored on secure, encrypted servers. We implement industry-standard security measures including SSL encryption, regular security audits, and access controls. We retain your data only as long as necessary for the purposes outlined in this policy." },
  { title: "Cookies & Tracking", content: "We use essential cookies for website functionality and analytical cookies (Google Analytics) to understand how visitors use our site. You can manage cookie preferences through your browser settings. We respect Do Not Track signals." },
  { title: "Third-Party Services", content: "We use trusted third-party services for payment processing (Stripe), email communications (SendGrid), analytics (Google Analytics), and project management (Notion). Each service has its own privacy policy and we ensure they meet our data protection standards." },
  { title: "Your Rights", content: "You have the right to: access your personal data, request correction or deletion, opt out of marketing communications, request data portability, and lodge a complaint with a supervisory authority. Contact us at privacy@pvlabs.design to exercise these rights." },
  { title: "International Data Transfers", content: "As a global agency, your data may be transferred to and processed in countries outside your jurisdiction. We ensure adequate protection through standard contractual clauses and compliance with applicable data protection laws." },
  { title: "Children's Privacy", content: "Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately." },
  { title: "Changes to This Policy", content: "We may update this privacy policy from time to time. We will notify you of any material changes via email or a prominent notice on our website. Your continued use of our services after changes constitutes acceptance." },
  { title: "Contact Us", content: "For privacy-related questions or concerns, contact our Data Protection Officer at privacy@pvlabs.design, or write to: PV Labs, 123 Design Street, San Francisco, CA 94105, USA." },
];

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-5xl font-extrabold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: March 1, 2026</p>
        </motion.div>
      </div>
    </section>

    <section className="px-6 md:px-12 pb-24">
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-muted-foreground leading-relaxed">
          At PV Labs, we take your privacy seriously. This policy explains how we collect, use, store, and protect your personal information when you use our website and services.
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

export default Privacy;
