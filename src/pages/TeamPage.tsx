import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { socialLinks } from "@/lib/social-links";

const team = [
  { name: "Priya Verma", role: "Founder & Creative Director", initials: "PV", bio: "15+ years in design leadership. Previously at Google and IDEO. Passionate about design that drives business growth. Founded PV Labs in 2018 with a vision to make premium design accessible to brands of every size.", specialties: ["Brand Strategy", "Creative Direction", "Design Systems"], quote: "Design isn't decoration — it's the strategy that makes brands unforgettable." },
  { name: "Alex Rivera", role: "Lead UI/UX Designer", initials: "AR", bio: "Former Spotify designer. Specialist in design systems, accessibility, and user research. Has designed products used by 50M+ people worldwide.", specialties: ["UI/UX Design", "Design Systems", "Accessibility"], quote: "Great design is invisible. Users should feel the experience, not see the design." },
  { name: "Jordan Lee", role: "Brand Strategist", initials: "JL", bio: "MBA from Stanford. Helped 100+ brands find their authentic voice and strategic positioning. Expert in market research and competitive analysis.", specialties: ["Brand Strategy", "Market Research", "Positioning"], quote: "Every brand has a story worth telling. Our job is to make sure the world hears it." },
  { name: "Mia Zhang", role: "Senior Motion Designer", initials: "MZ", bio: "Award-winning animator with work featured at Cannes Lions. Expert in After Effects, Cinema 4D, and Blender. 8+ years creating cinematic brand experiences.", specialties: ["Motion Graphics", "3D Animation", "Video Production"], quote: "Motion brings emotion. A logo that moves is a logo that lives." },
  { name: "Sam Patel", role: "Senior Graphic Designer", initials: "SP", bio: "10+ years in print and packaging for Fortune 500. Master of typography and layout design. Has designed packaging for products sold in 30+ countries.", specialties: ["Print Design", "Packaging", "Typography"], quote: "The best packaging doesn't just hold a product — it tells its story." },
  { name: "Olivia Brown", role: "Illustrator & Visual Artist", initials: "OB", bio: "Published illustrator blending digital and traditional techniques. Creates unique brand characters, patterns, and artwork that gives brands a distinctive visual voice.", specialties: ["Digital Illustration", "Character Design", "Pattern Design"], quote: "Custom illustration gives a brand something stock photos never can — a soul." },
  { name: "Ryan Kim", role: "Front-End Developer", initials: "RK", bio: "Full-stack developer bridging the gap between design and code. Expert in React, Next.js, and Framer. Turns pixel-perfect designs into flawless interactive experiences.", specialties: ["React/Next.js", "CSS Animation", "Design to Code"], quote: "The magic happens when beautiful design meets beautiful code." },
  { name: "Emma Davis", role: "Project Manager", initials: "ED", bio: "PMP certified. 8+ years managing creative projects. Ensures every deliverable ships on time, on budget, and exceeds expectations.", specialties: ["Project Management", "Client Relations", "Process Optimization"], quote: "A well-managed project lets creativity flourish without chaos." },
  { name: "Lucas Chen", role: "Junior Designer", initials: "LC", bio: "Fresh talent with an eye for detail. Graduate of Parsons School of Design. Brings fresh perspectives and emerging design sensibilities to every project.", specialties: ["Visual Design", "Social Media", "Branding"], quote: "Every project is an opportunity to push boundaries and grow." },
  { name: "Sofia Martinez", role: "Content Strategist", initials: "SM", bio: "Words meet design. 6+ years in content strategy for tech and lifestyle brands. Ensures visual and verbal brand identity work in perfect harmony.", specialties: ["Content Strategy", "Copywriting", "Brand Voice"], quote: "Words and visuals are partners — together they're unstoppable." },
  { name: "David Nakamura", role: "UX Researcher", initials: "DN", bio: "Human behavior specialist. 5+ years conducting user research, usability testing, and data analysis to inform design decisions.", specialties: ["User Research", "Usability Testing", "Data Analysis"], quote: "Assumption is the enemy of good design. Research is the cure." },
  { name: "Isabella Rossi", role: "Brand Designer", initials: "IR", bio: "Italian-born designer with a passion for luxury and lifestyle branding. Creates elegant visual identities that exude sophistication and timelessness.", specialties: ["Luxury Branding", "Visual Identity", "Editorial Design"], quote: "Elegance is not about being noticed. It's about being remembered." },
];

const TeamPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Team</span>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
            Meet the <span className="gradient-text">creators</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {team.length} talented designers, strategists, and developers united by a passion for exceptional design. 
            Based across 6 countries, creating for brands worldwide.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="px-6 md:px-12 pb-24">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="glass-card p-8 hover:shadow-xl transition-shadow group">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-xl font-bold text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
              {m.initials}
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground text-center">{m.name}</h3>
            <p className="text-sm text-primary font-medium text-center mb-3">{m.role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.bio}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {m.specialties.map((s, j) => (
                <span key={j} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{s}</span>
              ))}
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground italic flex items-start gap-2">
                <Quote size={12} className="text-primary flex-shrink-0 mt-0.5" /> {m.quote}
              </p>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {socialLinks.slice(0, 4).map(({ icon: Icon, label, href }, j) => (
                <a key={j} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-muted-foreground hover:text-primary transition-colors"><Icon size={16} /></a>
              ))}
            </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="section-padding gradient-bg-vivid text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Want to join the team?</h2>
        <p className="text-primary-foreground/80 mb-8">We're always looking for talented, passionate creatives.</p>
        <Link to="/careers" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
          View Open Positions <ArrowRight size={18} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default TeamPage;
