import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Target, Eye, Heart, Figma, PenTool, Monitor, Palette, Layers, Trophy } from "lucide-react";

const team = [
  { name: "Priya Verma", role: "Founder & Creative Director", initials: "PV", bio: "15+ years in design leadership. Previously at Google and IDEO." },
  { name: "Alex Rivera", role: "Lead UI/UX Designer", initials: "AR", bio: "Former Spotify designer. Specialist in design systems and accessibility." },
  { name: "Jordan Lee", role: "Brand Strategist", initials: "JL", bio: "MBA from Stanford. Helped 100+ brands find their voice." },
  { name: "Mia Zhang", role: "Motion Designer", initials: "MZ", bio: "Award-winning animator with work featured at Cannes Lions." },
  { name: "Sam Patel", role: "Senior Graphic Designer", initials: "SP", bio: "10+ years in print and packaging design for Fortune 500 brands." },
  { name: "Olivia Brown", role: "Illustrator", initials: "OB", bio: "Published illustrator with a distinctive style blending digital and traditional." },
  { name: "Ryan Kim", role: "Web Developer", initials: "RK", bio: "Full-stack developer bridging the gap between design and code." },
  { name: "Emma Davis", role: "Project Manager", initials: "ED", bio: "PMP certified. Ensures every project ships on time and on budget." },
];

const tools = [
  { icon: Figma, name: "Figma" },
  { icon: PenTool, name: "Illustrator" },
  { icon: Monitor, name: "Photoshop" },
  { icon: Palette, name: "After Effects" },
  { icon: Layers, name: "Sketch" },
  { icon: PenTool, name: "InDesign" },
];

const milestones = [
  { year: "2018", event: "PV Labs founded in San Francisco" },
  { year: "2019", event: "Reached 50 clients milestone" },
  { year: "2020", event: "Expanded to remote-first team of 10" },
  { year: "2021", event: "Won first international design award" },
  { year: "2022", event: "200+ projects completed" },
  { year: "2023", event: "Opened second office in London" },
  { year: "2024", event: "Named Top 10 Creative Agency by Clutch" },
  { year: "2025", event: "500+ projects, 200+ clients worldwide" },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Us</span>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6">
            The story behind <span className="gradient-text">PV Labs</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Founded in 2018, PV Labs has grown from a two-person studio to a full-service creative agency 
            serving 200+ clients across 20+ countries.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {[
          { icon: Target, title: "Our Mission", text: "To empower brands with design that drives growth, builds trust, and creates lasting connections with their audiences." },
          { icon: Eye, title: "Our Vision", text: "To be the world's most trusted creative partner, setting new standards for design excellence and innovation." },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8">
            <item.icon size={28} className="text-primary mb-4" />
            <h2 className="font-heading text-2xl font-bold mb-3">{item.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Journey</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
            Key <span className="gradient-text">Milestones</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:text-${i % 2 === 0 ? "right" : "left"}`}
            >
              <div className="hidden md:block flex-1" />
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary z-10" />
              <div className="ml-12 md:ml-0 flex-1 glass-card p-4">
                <span className="text-xs font-bold text-primary">{m.year}</span>
                <p className="text-sm text-muted-foreground">{m.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Team</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">Meet the <span className="gradient-text">Creators</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-xl font-bold text-primary-foreground">
                {m.initials}
              </div>
              <h3 className="font-heading font-semibold">{m.name}</h3>
              <p className="text-sm text-primary mb-2">{m.role}</p>
              <p className="text-xs text-muted-foreground mb-4">{m.bio}</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={16} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={16} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Tools */}
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold">Tools We <span className="gradient-text">Use</span></h2>
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {tools.map((t, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <t.icon size={28} className="mx-auto mb-2 text-primary" />
              <span className="text-sm text-muted-foreground">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Achievements */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { num: "500+", label: "Projects" },
          { num: "200+", label: "Clients" },
          { num: "50+", label: "Awards" },
          { num: "20+", label: "Countries" },
        ].map((s, i) => (
          <div key={i} className="glass-card p-8 text-center">
            <div className="font-heading text-4xl font-bold gradient-text">{s.num}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
