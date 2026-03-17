import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart3, MessageCircle, FileText, Clock, CheckCircle, AlertCircle, ArrowRight, Bell, Settings, User, Folder, Image, Download, Calendar, TrendingUp } from "lucide-react";

const projects = [
  { name: "NovaTech Rebrand", status: "In Progress", progress: 75, deadline: "Mar 25, 2026", designer: "PV", tasks: 12, completed: 9 },
  { name: "FitPulse App Redesign", status: "Review", progress: 90, deadline: "Mar 20, 2026", designer: "AR", tasks: 18, completed: 16 },
  { name: "GreenLeaf Packaging", status: "Completed", progress: 100, deadline: "Mar 10, 2026", designer: "SP", tasks: 8, completed: 8 },
  { name: "CloudSync Dashboard", status: "In Progress", progress: 45, deadline: "Apr 5, 2026", designer: "AR", tasks: 20, completed: 9 },
];

const messages = [
  { from: "Priya Verma", avatar: "PV", text: "Hi! The initial logo concepts are ready for your review. Let me know your thoughts!", time: "2 hours ago", unread: true },
  { from: "Alex Rivera", avatar: "AR", text: "Updated the mobile app mockups based on your feedback. New screens attached.", time: "5 hours ago", unread: true },
  { from: "Emma Davis", avatar: "ED", text: "Your NovaTech project is on track for delivery by March 25th. Quick update call tomorrow?", time: "1 day ago", unread: false },
  { from: "Sam Patel", avatar: "SP", text: "GreenLeaf packaging files have been finalized and are ready for download.", time: "2 days ago", unread: false },
];

const files = [
  { name: "NovaTech_Logo_v3.ai", type: "AI", size: "4.2 MB", date: "Mar 15, 2026" },
  { name: "Brand_Guidelines_Draft.pdf", type: "PDF", size: "12.8 MB", date: "Mar 14, 2026" },
  { name: "FitPulse_Screens_v2.fig", type: "FIG", size: "8.1 MB", date: "Mar 13, 2026" },
  { name: "GreenLeaf_Packaging_Final.zip", type: "ZIP", size: "45.2 MB", date: "Mar 10, 2026" },
  { name: "Social_Templates.fig", type: "FIG", size: "3.4 MB", date: "Mar 8, 2026" },
];

const Dashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-28 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Welcome back, <span className="gradient-text">John</span></h1>
          <p className="text-muted-foreground text-sm">Here's what's happening with your projects.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary relative">
            <Bell size={18} />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-destructive rounded-full" />
          </button>
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary">
            <Settings size={18} />
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">JD</div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="px-6 md:px-12 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Folder, label: "Active Projects", value: "4", change: "+1 this week" },
          { icon: CheckCircle, label: "Completed", value: "12", change: "+3 this month" },
          { icon: MessageCircle, label: "Messages", value: "2", change: "2 unread" },
          { icon: FileText, label: "Files", value: "28", change: "5 new" },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card p-5">
            <div className="flex items-center justify-between mb-2">
              <s.icon size={18} className="text-primary" />
              <span className="text-xs text-primary font-medium">{s.change}</span>
            </div>
            <div className="font-heading text-2xl font-bold text-foreground">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="px-6 md:px-12 pb-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
        {/* Projects */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-lg font-bold text-foreground">Your Projects</h2>
              <button className="text-sm text-primary font-medium">View All</button>
            </div>
            <div className="space-y-4">
              {projects.map((p, i) => (
                <div key={i} className="p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-xs font-bold">{p.designer}</div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground text-sm">{p.name}</h3>
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar size={10} /> Due: {p.deadline}</span>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.status === "Completed" ? "bg-primary/10 text-primary" : p.status === "Review" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>{p.status}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                      <div className="h-full rounded-full gradient-bg-vivid transition-all" style={{ width: `${p.progress}%` }} />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{p.progress}%</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{p.completed}/{p.tasks} tasks completed</div>
                </div>
              ))}
            </div>
          </div>

          {/* Files */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-lg font-bold text-foreground">Recent Files</h2>
              <button className="text-sm text-primary font-medium">View All</button>
            </div>
            <div className="space-y-3">
              {files.map((f, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{f.name}</p>
                      <p className="text-xs text-muted-foreground">{f.size} • {f.date}</p>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-lg hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary">
                    <Download size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-6">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-lg font-bold text-foreground">Messages</h2>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">2 new</span>
            </div>
            <div className="space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`p-3 rounded-xl ${m.unread ? "bg-primary/5" : "hover:bg-secondary/50"} transition-colors cursor-pointer`}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">{m.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-foreground">{m.from}</span>
                        {m.unread && <span className="w-2 h-2 rounded-full bg-primary" />}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{m.text}</p>
                      <span className="text-xs text-muted-foreground/60 mt-1 block">{m.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card p-6">
            <h2 className="font-heading text-lg font-bold text-foreground mb-4">Quick Actions</h2>
            <div className="space-y-3">
              {[
                { icon: MessageCircle, label: "Send a message", color: "text-primary" },
                { icon: FileText, label: "Upload files", color: "text-accent" },
                { icon: Calendar, label: "Schedule a call", color: "text-primary" },
                { icon: AlertCircle, label: "Submit feedback", color: "text-accent" },
              ].map((a, i) => (
                <button key={i} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors text-left">
                  <a.icon size={18} className={a.color} />
                  <span className="text-sm font-medium text-foreground">{a.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Dashboard;
