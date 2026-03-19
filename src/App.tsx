import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import PortfolioDetail from "./pages/PortfolioDetail.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import Pricing from "./pages/Pricing.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Careers from "./pages/Careers.tsx";
import TeamPage from "./pages/TeamPage.tsx";
import TestimonialsPage from "./pages/TestimonialsPage.tsx";
import FAQPage from "./pages/FAQPage.tsx";
import Tools from "./pages/Tools.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import Clients from "./pages/Clients.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
