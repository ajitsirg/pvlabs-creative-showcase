import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MapPin, Clock, DollarSign, ArrowRight, Heart, Zap, Globe, Coffee, Palette, Users, GraduationCap, Briefcase, Send } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const perks = [
  { icon: Globe, title: "Fully Remote", desc: "Work from anywhere in the world" },
  { icon: Clock, title: "Flexible Hours", desc: "We trust you to manage your time" },
  { icon: DollarSign, title: "Competitive Pay", desc: "Above-market compensation + equity" },
  { icon: Heart, title: "Health & Wellness", desc: "Full medical, dental, and vision" },
  { icon: GraduationCap, title: "Learning Budget", desc: "$2,000/year for courses & conferences" },
  { icon: Coffee, title: "Unlimited PTO", desc: "Take the time you need to recharge" },
  { icon: Palette, title: "Creative Freedom", desc: "Work on projects that inspire you" },
  { icon: Zap, title: "Latest Tools", desc: "Best-in-class software and hardware" },
];

const jobs = [
  { title: "Senior Brand Designer", dept: "Design", type: "Full-time", location: "Remote", salary: "$90K - $130K", desc: "Lead brand identity projects for global clients. 5+ years experience required.", requirements: ["5+ years brand design experience", "Expert in Adobe Creative Suite & Figma", "Strong typography and layout skills", "Client presentation experience", "Portfolio showing brand systems"] },
  { title: "UI/UX Designer", dept: "Design", type: "Full-time", location: "Remote", salary: "$80K - $120K", desc: "Design beautiful, intuitive digital experiences for web and mobile.", requirements: ["3+ years UI/UX experience", "Proficient in Figma", "Understanding of design systems", "User research experience", "Strong portfolio"] },
  { title: "Motion Graphics Designer", dept: "Design", type: "Full-time", location: "Remote", salary: "$75K - $110K", desc: "Create stunning animations and motion graphics for brands.", requirements: ["3+ years motion design experience", "Expert in After Effects & Cinema 4D", "Understanding of timing and easing", "Sound design a plus", "Motion reel required"] },
  { title: "Project Manager", dept: "Operations", type: "Full-time", location: "Remote / SF", salary: "$70K - $100K", desc: "Manage creative projects from kickoff to delivery.", requirements: ["3+ years PM experience", "Experience with creative teams", "Excellent communication", "Familiarity with design tools", "PMP or Scrum certification a plus"] },
  { title: "Junior Graphic Designer", dept: "Design", type: "Full-time", location: "Remote", salary: "$50K - $70K", desc: "Support the team on branding, social media, and print projects.", requirements: ["1-2 years experience or strong portfolio", "Proficient in Figma & Illustrator", "Strong design fundamentals", "Eager to learn and grow", "Degree in design or related field"] },
  { title: "Content Writer (Design Focus)", dept: "Marketing", type: "Part-time", location: "Remote", salary: "$40/hr", desc: "Write engaging articles and content about design, branding, and creativity.", requirements: ["Strong writing portfolio", "Knowledge of design industry", "SEO understanding", "2+ articles/week capacity", "Experience with CMS platforms"] },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Careers</span>
              <h1 className="font-heading text-5xl md:text-6xl font-extrabold mt-3 mb-6 text-foreground">
                Join the <span className="gradient-text">creative revolution</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We're building the world's most talented creative team. If you're passionate about design that drives business results, we want to hear from you.
              </p>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span className="glass-card px-4 py-2">{jobs.length} Open positions</span>
                <span className="glass-card px-4 py-2">Remote-first</span>
                <span className="glass-card px-4 py-2">15+ team members</span>
              </div>
            </div>
            <div className="rounded-[24px] overflow-hidden shadow-xl">
              <img src={aboutTeam} alt="Our team" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">Why work at <span className="gradient-text">PV Labs</span>?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <p.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding gradient-bg-soft">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">Our <span className="gradient-text">Culture</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Craft Over Speed", desc: "We value thoughtful, well-crafted work. Quality is never sacrificed for speed. Every pixel matters." },
              { title: "Radical Transparency", desc: "We share everything openly — from financials to feedback. No politics, no ego, just honest collaboration." },
              { title: "Growth Mindset", desc: "We invest in our people. Monthly learning sessions, annual conference budget, and mentorship programs." },
            ].map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="section-padding" id="positions">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">Open <span className="gradient-text">Positions</span></h2>
          <div className="space-y-4">
            {jobs.map((j, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card overflow-hidden">
                <button onClick={() => setSelectedJob(selectedJob === i ? null : i)} className="w-full p-6 text-left flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{j.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Briefcase size={12} /> {j.dept}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {j.type}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin size={12} /> {j.location}</span>
                      <span className="text-xs text-primary font-semibold flex items-center gap-1"><DollarSign size={12} /> {j.salary}</span>
                    </div>
                  </div>
                  <span className={`text-primary text-xl transition-transform ${selectedJob === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {selectedJob === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="px-6 pb-6 border-t border-border">
                    <p className="text-muted-foreground mt-4 mb-4">{j.desc}</p>
                    <h4 className="font-heading font-bold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-2 mb-6">
                      {j.requirements.map((r, k) => (
                        <li key={k} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight size={14} className="text-primary mt-0.5 flex-shrink-0" /> {r}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="gradient-btn px-6 py-3 text-sm inline-flex items-center gap-2">
                      Apply Now <Send size={14} />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-bg-vivid text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Don't see your role?</h2>
          <p className="text-primary-foreground/80 mb-8">We're always looking for exceptional talent. Send us your portfolio and let's chat.</p>
          <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
            Send Your Portfolio <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
