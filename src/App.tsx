import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Mic, 
  Workflow, 
  Cpu, 
  ChevronRight, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Mail, 
  Globe, 
  Menu, 
  X,
  ArrowRight,
  ExternalLink,
  Users,
  Building2,
  BarChart3,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'services' | 'industries' | 'portfolio' | 'about' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'Industries', value: 'industries' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-lg flex items-center justify-center mr-3 glow-blue">
              <Cpu className="text-brand-black w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-white tracking-tighter">FELIX TECH<span className="text-brand-blue">SOLUTIONS</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value)}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  currentPage === item.value ? 'text-brand-blue' : 'text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-brand-blue text-brand-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-cyan transition-all glow-blue"
            >
              Book Strategy Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-navy border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setCurrentPage(item.value);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-slate-300 hover:text-brand-blue border-b border-white/5"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    setCurrentPage('contact');
                    setIsOpen(false);
                  }}
                  className="w-full bg-brand-blue text-brand-black px-6 py-3 rounded-xl text-center font-bold"
                >
                  Book Strategy Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onCtaClick }: { onCtaClick: (p: Page) => void }) => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-brand-cyan/10 blur-[100px] rounded-full" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
            Enterprise-Ready AI Automation
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Intelligent AI Automation for <span className="text-gradient">Scalable Business Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            We design AI agents, voice systems, and automation infrastructure that help U.S. businesses convert and retain customers 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onCtaClick('contact')}
              className="w-full sm:w-auto bg-brand-blue text-brand-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-cyan transition-all glow-blue flex items-center justify-center group"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onCtaClick('services')}
              className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Get a Custom AI Plan
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ServicesGrid = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbots",
      description: "Custom website AI chatbots and WhatsApp automation bots designed to capture leads and support customers instantly.",
      features: ["Website AI Chatbots", "WhatsApp Automation", "Instagram DM Automation", "AI Customer Support"]
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "AI Voice Agents",
      description: "Human-like voice agents for 24/7 reception, appointment setting, and lead qualification.",
      features: ["24/7 AI Receptionists", "Appointment Setting Bots", "Lead Qualification Agents", "Call Center Automation"]
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Streamline your operations with end-to-end CRM and pipeline automation systems.",
      features: ["CRM Pipeline Automation", "Email Sequences", "Lead Nurturing Systems", "Sales Process Automation"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Enterprise AI Integration",
      description: "Seamlessly integrate advanced AI models into your existing business infrastructure for maximum ROI.",
      features: ["Custom AI Strategy", "API Integrations", "Data Analysis Automation", "Scalable AI Infrastructure"]
    }
  ];

  return (
    <section className="py-24 bg-brand-navy/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core AI Solutions</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">We deploy intelligent systems that solve real business problems and drive measurable ROI.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-glass neon-border"
            >
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{s.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{s.description}</p>
              <ul className="space-y-3">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    { icon: <Building2 />, name: "Real Estate Firms" },
    { icon: <Globe />, name: "E-commerce Brands" },
    { icon: <BarChart3 />, name: "Marketing Agencies" },
    { icon: <Users />, name: "Coaches & Consultants" },
    { icon: <Cpu />, name: "Enterprise Organizations" }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Tailored AI solutions for high-growth sectors looking to automate and scale.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center hover:bg-brand-blue/5 hover:border-brand-blue/20 transition-all group">
              <div className="w-12 h-12 mx-auto mb-4 text-slate-500 group-hover:text-brand-blue transition-colors">
                {ind.icon}
              </div>
              <span className="text-sm font-semibold text-slate-300 group-hover:text-white">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-12 rounded-3xl bg-glass text-center">
        <div className="w-20 h-20 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-brand-blue" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
        <p className="text-slate-400">Our team will reach out to you within 24 hours to schedule your strategy call.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-12 rounded-3xl bg-glass border border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
          <input required type="text" className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Company Name</label>
          <input required type="text" className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors" placeholder="Acme Inc." />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Industry</label>
          <select className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors">
            <option>Real Estate</option>
            <option>E-commerce</option>
            <option>Marketing</option>
            <option>Coaching/Consulting</option>
            <option>Enterprise</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Business Size</label>
          <select className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors">
            <option>1-10 employees</option>
            <option>11-50 employees</option>
            <option>51-200 employees</option>
            <option>200+ employees</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Main Challenge</label>
        <textarea required className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors h-32" placeholder="Tell us about the manual tasks you want to automate..."></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
        <input required type="tel" className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors" placeholder="+1 (555) 000-0000" />
      </div>
      <button type="submit" className="w-full bg-brand-blue text-brand-black py-4 rounded-xl font-bold text-lg hover:bg-brand-cyan transition-all glow-blue">
        Book My Strategy Call
      </button>
    </form>
  );
};

const Footer = () => (
  <footer className="bg-brand-black border-t border-white/5 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-cyan rounded flex items-center justify-center mr-3">
              <Cpu className="text-brand-black w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white tracking-tighter uppercase">Felix Tech Solutions</span>
          </div>
          <p className="text-slate-400 max-w-sm mb-6">
            Enterprise-Ready AI Automation Agency helping U.S. businesses scale through intelligent systems and workflow optimization.
          </p>
          <div className="flex space-x-4">
            <a href="mailto:ibmodefelix7899@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:bg-white/10 transition-all">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://wa.me/2347025428992" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:bg-white/10 transition-all">
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Solutions</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-brand-blue transition-colors">AI Chatbots</a></li>
            <li><a href="#" className="hover:text-brand-blue transition-colors">Voice Agents</a></li>
            <li><a href="#" className="hover:text-brand-blue transition-colors">CRM Automation</a></li>
            <li><a href="#" className="hover:text-brand-blue transition-colors">Lead Nurturing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-brand-blue transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-brand-blue transition-colors">Portfolio</a></li>
            <li><a href="#" className="hover:text-brand-blue transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col md:row justify-between items-center text-xs text-slate-500">
        <p>© 2026 Felix Tech Solutions. All rights reserved.</p>
        <p className="mt-4 md:mt-0 italic">Built on Enterprise-Grade AI Infrastructure</p>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <Hero onCtaClick={setPage} />
    <ServicesGrid />
    <IndustriesSection />
    
    {/* Why Choose Us */}
    <section className="py-24 bg-brand-navy/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Partner With <span className="text-gradient">Felix Tech Solutions?</span></h2>
            <div className="space-y-8">
              {[
                { title: "Enterprise-Ready", desc: "We build systems that scale with your business, using robust infrastructure and security protocols." },
                { title: "Results-Focused", desc: "No hype. We focus on measurable metrics: consultation bookings, lead capture, and cost reduction." },
                { title: "U.S. Focused Expertise", desc: "Deep understanding of the U.S. market, business culture, and customer expectations." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech/800/800')] opacity-20 mix-blend-overlay" />
              <Cpu className="w-32 h-32 text-brand-blue/50 animate-pulse" />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-glass border border-white/10 shadow-2xl">
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-xs text-brand-blue font-bold uppercase tracking-widest">Automation</p>
            </div>
            <div className="absolute -top-6 -right-6 p-6 rounded-2xl bg-glass border border-white/10 shadow-2xl">
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-xs text-brand-blue font-bold uppercase tracking-widest">U.S. Focused</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue/5 blur-[120px]" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Automate Your <span className="text-gradient">Growth?</span></h2>
        <p className="text-xl text-slate-400 mb-10">Join the ranks of enterprise-ready businesses leveraging AI to dominate their market.</p>
        <button 
          onClick={() => setPage('contact')}
          className="bg-brand-blue text-brand-black px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-cyan transition-all glow-blue"
        >
          Book Your Strategy Call Now
        </button>
      </div>
    </section>
  </motion.div>
);

const ServicesPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-gradient">Services</span></h1>
        <p className="text-xl text-slate-400 max-w-3xl">We provide end-to-end AI implementation, from initial strategy to deployment and ongoing optimization.</p>
      </div>
      
      <div className="space-y-24">
        {[
          {
            title: "AI Chatbots & Virtual Assistants",
            problem: "Missed leads due to slow response times and high customer service costs.",
            solution: "Intelligent bots that handle inquiries 24/7 across Web, WhatsApp, and Instagram.",
            roi: "90% reduction in response time, 40% decrease in support overhead.",
            icon: <MessageSquare className="w-12 h-12" />
          },
          {
            title: "AI Voice Agents",
            problem: "Manual appointment setting and lead qualification is slow and expensive.",
            solution: "Human-like voice agents that handle inbound and outbound calls with perfect memory.",
            roi: "3x increase in qualified bookings, 24/7 coverage without hiring costs.",
            icon: <Phone className="w-12 h-12" />
          },
          {
            title: "Workflow & CRM Automation",
            problem: "Manual repetitive tasks and inefficient follow-up systems leading to lost revenue.",
            solution: "Seamless integration of AI into your CRM to automate lead nurturing and sales processes.",
            roi: "50% increase in sales team productivity, zero missed follow-ups.",
            icon: <Workflow className="w-12 h-12" />
          }
        ].map((s, i) => (
          <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12 rounded-[40px] bg-glass border border-white/5">
            <div>
              <div className="w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center text-brand-blue mb-8">
                {s.icon}
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">{s.title}</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-2">The Business Problem</h4>
                  <p className="text-slate-300">{s.problem}</p>
                </div>
                <div>
                  <h4 className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-2">The AI Solution</h4>
                  <p className="text-slate-300">{s.solution}</p>
                </div>
                <div className="p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/20">
                  <h4 className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-2">Expected ROI Value</h4>
                  <p className="text-white font-semibold">{s.roi}</p>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-3xl bg-brand-black/50 border border-white/10 overflow-hidden">
              <img src={`https://picsum.photos/seed/service${i}/800/600`} alt={s.title} className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const PortfolioPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Case <span className="text-gradient">Studies</span></h1>
        <p className="text-xl text-slate-400 max-w-3xl">Real results for real businesses. No fabricated testimonials, just data-driven success.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            client: "Global Real Estate Group",
            industry: "Real Estate",
            problem: "Agents spending 4 hours/day on lead qualification.",
            solution: "Deployed AI Voice Agents for initial lead screening and appointment booking.",
            results: "85% of leads qualified automatically, 2.5x increase in viewing appointments."
          },
          {
            client: "Luxury E-com Brand",
            industry: "E-commerce",
            problem: "High cart abandonment and 12-hour support response time.",
            solution: "Integrated AI Chatbots for instant product recommendations and support.",
            results: "22% increase in checkout conversion, support response time reduced to < 10 seconds."
          }
        ].map((caseStudy, i) => (
          <div key={i} className="p-8 rounded-3xl bg-glass border border-white/5 hover:border-brand-blue/30 transition-all group">
            <div className="aspect-video rounded-2xl bg-brand-black mb-8 overflow-hidden">
              <img src={`https://picsum.photos/seed/case${i}/800/450`} alt={caseStudy.client} className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">{caseStudy.client}</h3>
              <span className="px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">{caseStudy.industry}</span>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-slate-400"><strong className="text-slate-200">Problem:</strong> {caseStudy.problem}</p>
              <p className="text-sm text-slate-400"><strong className="text-slate-200">Solution:</strong> {caseStudy.solution}</p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-brand-blue font-bold flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  {caseStudy.results}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const AboutPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Positioning for the <span className="text-gradient">Future</span></h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-8">
            Felix Tech Solutions is a U.S.-focused AI Automation Agency that designs and deploys intelligent voice systems and workflow automation for modern businesses.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-2">Our Vision</h4>
              <p className="text-sm text-slate-400">To become the standard for enterprise-grade AI implementation in the United States.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Our Mission</h4>
              <p className="text-sm text-slate-400">To empower businesses with scalable growth systems that eliminate manual repetitive tasks.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-[60px] bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 border border-white/10 overflow-hidden">
            <img src="https://picsum.photos/seed/team/800/800" alt="Team" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Commitment to Innovation</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">We don't just follow trends; we build the infrastructure that powers them.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Corporate Tone", desc: "We speak the language of business, focusing on ROI and operational efficiency." },
          { title: "Confident Expertise", desc: "Our team consists of specialists in advanced language models and voice synthesis." },
          { title: "Professional Delivery", desc: "Every project is managed with enterprise-level precision and clear communication." }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl bg-glass border border-white/5 text-center">
            <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const ContactPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Let's Build Your <span className="text-gradient">AI Strategy</span></h1>
          <p className="text-xl text-slate-400 mb-12">
            Ready to transform your operations? Fill out the form or reach out via our direct channels.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-1">Email Us</p>
                <a href="mailto:ibmodefelix7899@gmail.com" className="text-lg text-white font-medium hover:text-brand-blue transition-colors">ibmodefelix7899@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-1">WhatsApp</p>
                <a href="https://wa.me/2347025428992" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:text-brand-blue transition-colors">+234 702 542 8992</a>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-brand-blue/5 border border-brand-blue/20">
            <h4 className="text-white font-bold mb-4">What happens next?</h4>
            <ul className="space-y-4">
              {[
                "15-minute discovery call to assess your needs",
                "Custom AI automation plan tailored to your ROI",
                "Phased implementation and team training"
              ].map((step, i) => (
                <li key={i} className="flex items-start text-sm text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-brand-blue text-brand-black flex items-center justify-center text-[10px] font-bold mr-3 mt-0.5">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen selection:bg-brand-blue selection:text-brand-black">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage === 'home' && <HomePage setPage={setCurrentPage} />}
            {currentPage === 'services' && <ServicesPage />}
            {currentPage === 'industries' && <IndustriesSection />}
            {currentPage === 'portfolio' && <PortfolioPage />}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
