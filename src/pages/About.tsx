import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Target, Eye, Figma, PenTool, Monitor, Palette, Layers, Award, Trophy, Star } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import portfolioShowcase from "@/assets/portfolio-showcase.jpg";

const team = [
  { name: "Priya Verma", role: "Founder & Creative Director", initials: "PV", bio: "15+ years in design leadership. Previously at Google and IDEO. Passionate about design that drives business growth." },
  { name: "Alex Rivera", role: "Lead UI/UX Designer", initials: "AR", bio: "Former Spotify designer. Specialist in design systems, accessibility, and user research methodologies." },
  { name: "Jordan Lee", role: "Brand Strategist", initials: "JL", bio: "MBA from Stanford. Helped 100+ brands find their authentic voice and strategic positioning." },
  { name: "Mia Zhang", role: "Motion Designer", initials: "MZ", bio: "Award-winning animator with work featured at Cannes Lions. Expert in After Effects and Cinema 4D." },
  { name: "Sam Patel", role: "Senior Graphic Designer", initials: "SP", bio: "10+ years in print and packaging for Fortune 500. Master of typography and layout design." },
  { name: "Olivia Brown", role: "Illustrator", initials: "OB", bio: "Published illustrator blending digital and traditional techniques. Creates unique brand characters and artwork." },
  { name: "Ryan Kim", role: "Front-End Developer", initials: "RK", bio: "Full-stack developer bridging the gap between design and code. React, Next.js, and Framer expert." },
  { name: "Emma Davis", role: "Project Manager", initials: "ED", bio: "PMP certified. 8+ years managing creative projects. Ensures every deliverable ships on time and on budget." },
];

const tools = [
  { icon: Figma, name: "Figma" },
  { icon: PenTool, name: "Illustrator" },
  { icon: Monitor, name: "Photoshop" },
  { icon: Palette, name: "After Effects" },
  { icon: Layers, name: "Sketch" },
  { icon: PenTool, name: "InDesign" },
  { icon: Monitor, name: "Premiere Pro" },
  { icon: Palette, name: "Cinema 4D" },
];

const milestones = [
  { year: "2018", event: "PV Labs founded in San Francisco by Priya Verma with a vision to democratize premium design." },
  { year: "2019", event: "Reached 50 clients milestone and expanded team to 5 designers." },
  { year: "2020", event: "Pivoted to fully remote, grew to 10 team members across 4 countries." },
  { year: "2021", event: "Won first international design award at Design Awards Global." },
  { year: "2022", event: "Surpassed 200 projects. Launched specialized divisions for branding and digital." },
  { year: "2023", event: "Opened second office in London. Named Top 10 by Clutch.co." },
  { year: "2024", event: "50+ awards won. Expanded to 15+ team members." },
  { year: "2025", event: "500+ projects, 200+ clients across 20+ countries. Launched PV Labs Academy." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold mt-3 mb-6 text-foreground">
              The story behind <span className="gradient-text">PV Labs</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Founded in 2018, PV Labs started as a two-person studio with a bold mission: to make world-class design 
              accessible to brands of every size. Today, we're a team of 15+ creatives serving 200+ clients across 20+ countries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe design is the most powerful tool for business transformation. Every pixel we place, every color 
              we choose, and every layout we create is driven by strategy, powered by creativity, and measured by results.
            </p>
          </div>
          <div className="rounded-[24px] overflow-hidden shadow-xl">
            <img src={aboutTeam} alt="PV Labs team" className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {[
          { icon: Target, title: "Our Mission", text: "To empower brands worldwide with design that drives growth, builds trust, and creates lasting connections. We combine strategic thinking with creative excellence to deliver measurable results." },
          { icon: Eye, title: "Our Vision", text: "To be the world's most trusted creative partner — setting new standards for design excellence, innovation, and client satisfaction. We envision a world where every brand has access to premium design." },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-2xl gradient-bg-vivid flex items-center justify-center mb-4 shadow-md">
              <item.icon size={24} className="text-primary-foreground" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-3 text-foreground">{item.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Portfolio Showcase */}
    <section className="px-6 md:px-12 pb-8">
      <div className="max-w-7xl mx-auto rounded-[24px] overflow-hidden shadow-lg">
        <img src={portfolioShowcase} alt="Our work showcase" className="w-full" />
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding gradient-bg-soft">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Journey</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">Key <span className="gradient-text">Milestones</span></h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="hidden md:block flex-1" />
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 shadow-md" />
              <div className="ml-12 md:ml-0 flex-1 glass-card p-5">
                <span className="text-sm font-bold text-primary">{m.year}</span>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{m.event}</p>
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
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">Meet the <span className="gradient-text">Creators</span></h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">15+ talented designers, strategists, and developers united by a passion for exceptional design.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-xl font-bold text-primary-foreground shadow-lg">
                {m.initials}
              </div>
              <h3 className="font-heading font-bold text-foreground">{m.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{m.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{m.bio}</p>
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
    <section className="section-padding gradient-bg-soft">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground">Tools We <span className="gradient-text">Use</span></h2>
          <p className="text-muted-foreground mt-4">Industry-leading software powering our creative workflow.</p>
        </motion.div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {tools.map((t, i) => (
            <div key={i} className="glass-card p-5 text-center hover:shadow-lg transition-shadow">
              <t.icon size={24} className="mx-auto mb-2 text-primary" />
              <span className="text-xs text-muted-foreground font-medium">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { num: "500+", label: "Projects Completed" },
          { num: "200+", label: "Happy Clients" },
          { num: "50+", label: "Awards Won" },
          { num: "20+", label: "Countries Served" },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 text-center hover:shadow-xl transition-shadow">
            <div className="font-heading text-4xl font-bold gradient-text">{s.num}</div>
            <div className="text-sm text-muted-foreground mt-1 font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
