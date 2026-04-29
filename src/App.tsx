import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  Bot, 
  Mic, 
  Workflow, 
  Cpu, 
  ChevronLeft,
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
  Zap,
  Target,
  Calendar,
  Loader2,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  TrendingUp,
  GraduationCap,
  Sprout,
  Fish,
  Utensils
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const BOOKING_URL = "https://calendar.app.google/tJyftT7GPccWr12m9";

// --- Types ---
type Page = 'home' | 'services' | 'industries' | 'portfolio' | 'about' | 'contact' | 'faq';

interface Service {
  title: string;
  description: string;
  features: string[];
  videoId?: string;
  videoUrl?: string;
  icon?: React.ReactNode;
}

// --- Components ---

const ImageLightbox = ({ src, alt, isOpen, onClose }: { src: string, alt: string, isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] bg-brand-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full aspect-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={src} 
              alt={alt} 
              className="w-full h-auto max-h-[85vh] object-contain"
              referrerPolicy="no-referrer"
            />
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>,
        document.body
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'Industries', value: 'industries' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'About', value: 'about' },
    { label: 'FAQ', value: 'faq' },
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
            <img 
              src="https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Anvil%20logo.png" 
              alt="Anvilai LLC Logo" 
              className="h-12 w-auto mr-3 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-extrabold text-white tracking-tighter">ANVILAI <span className="text-brand-blue">LLC</span></span>
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
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-brand-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-cyan transition-all glow-blue flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </a>
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
              <div className="pt-6 px-3">
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-blue text-brand-black px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onCtaClick }: { onCtaClick: (p: Page) => void }) => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[80vh] flex items-center">
    {/* Video Background */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-brand-black/40 z-10" />
      <iframe
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full h-[56.25vw] min-h-full"
        src="https://www.youtube.com/embed/omSHRkIIPwM?autoplay=1&mute=1&loop=1&playlist=omSHRkIIPwM&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=0"
        allow="autoplay; encrypted-media"
        title="Background Video"
      />
    </div>

    {/* Background Glows */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-[5]">
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
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-blue text-brand-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-cyan transition-all glow-blue flex items-center justify-center group gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
              <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
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

const CardVideo = ({ videoId, videoUrl, noMargin = false }: { videoId?: string, videoUrl?: string, noMargin?: boolean }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const expandedIframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);
  
  // Use a stable origin for YouTube API
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  const sendYTCommand = (ref: React.RefObject<HTMLIFrameElement | null>, func: string, args: any[] = []) => {
    if (ref.current?.contentWindow) {
      ref.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: func,
          args: args
        }),
        '*'
      );
    }
  };

  // Handle initialization and expansion transitions
  useEffect(() => {
    const activeRef = isExpanded ? expandedIframeRef : iframeRef;
    const activeVideo = isExpanded ? expandedVideoRef.current : videoRef.current;

    if (videoId) {
      // Delay to ensure iframe is ready after mount/expansion
      const timer = setTimeout(() => {
        if (isPlaying) {
          sendYTCommand(activeRef, 'playVideo');
          sendYTCommand(activeRef, isMuted ? 'mute' : 'unMute');
          if (!isMuted) sendYTCommand(activeRef, 'setVolume', [100]);
        } else {
          sendYTCommand(activeRef, 'pauseVideo');
        }
      }, 800);
      return () => clearTimeout(timer);
    } else if (videoUrl && activeVideo) {
      if (isPlaying) activeVideo.play().catch(() => {});
      else activeVideo.pause();
      activeVideo.muted = isMuted;
      activeVideo.volume = isMuted ? 0 : 1;
    }
  }, [isExpanded, videoId, videoUrl]); // Only run on mount or expansion change

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    
    const activeRef = isExpanded ? expandedIframeRef : iframeRef;
    const activeVideo = isExpanded ? expandedVideoRef.current : videoRef.current;

    if (videoId) {
      sendYTCommand(activeRef, newMuted ? 'mute' : 'unMute');
      if (!newMuted) sendYTCommand(activeRef, 'setVolume', [100]);
      // Ensure it keeps playing when toggling mute
      if (isPlaying) sendYTCommand(activeRef, 'playVideo');
    } else if (videoUrl && activeVideo) {
      activeVideo.muted = newMuted;
      activeVideo.volume = newMuted ? 0 : 1;
      if (isPlaying) activeVideo.play().catch(() => {});
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newPlaying = !isPlaying;
    setIsPlaying(newPlaying);

    const activeRef = isExpanded ? expandedIframeRef : iframeRef;
    const activeVideo = isExpanded ? expandedVideoRef.current : videoRef.current;

    if (videoId) {
      sendYTCommand(activeRef, newPlaying ? 'playVideo' : 'pauseVideo');
    } else if (videoUrl && activeVideo) {
      if (newPlaying) activeVideo.play().catch(() => {});
      else activeVideo.pause();
    }
  };

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextExpanded = !isExpanded;
    
    // Pause current before switching
    const currentRef = isExpanded ? expandedIframeRef : iframeRef;
    const currentVideo = isExpanded ? expandedVideoRef.current : videoRef.current;
    
    if (videoId) sendYTCommand(currentRef, 'pauseVideo');
    else if (videoUrl && currentVideo) currentVideo.pause();

    setIsExpanded(nextExpanded);
    setIsPlaying(true); // Always play when switching/expanding
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setCurrentTime(e.currentTarget.currentTime);
    setDuration(e.currentTarget.duration);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const clickedPercentage = x / rect.width;
    
    const activeVideo = isExpanded ? expandedVideoRef.current : videoRef.current;
    if (activeVideo && activeVideo.duration) {
      activeVideo.currentTime = clickedPercentage * activeVideo.duration;
    }
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  const ProgressBar = ({ className = "" }: { className?: string }) => (
    <div 
      className={`absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30 cursor-pointer group/progress overflow-hidden ${className}`}
      onClick={handleSeek}
    >
      <div 
        className="h-full bg-brand-blue relative transition-all duration-100 ease-linear shadow-[0_0_15px_rgba(0,184,255,0.8)]"
        style={{ width: `${progressPercentage}%` }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 shadow-xl" />
      </div>
    </div>
  );

  const renderVideo = (isExpandedView: boolean) => {
    // If we are in expanded view, don't render the background one to avoid conflicts
    if (isExpanded && !isExpandedView) {
      return (
        <div className="absolute inset-0 bg-brand-black flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-brand-blue animate-spin" />
        </div>
      );
    }

    if (videoId) {
      const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&origin=${origin}&cc_load_policy=1`;
      return (
        <iframe
          ref={isExpandedView ? expandedIframeRef : iframeRef}
          className={`absolute inset-0 w-full h-full ${!isExpandedView ? 'pointer-events-none scale-[1.01]' : ''}`}
          src={videoSrc}
          allow="autoplay; encrypted-media"
          title={isExpandedView ? "Service Video Expanded" : "Service Video"}
          loading="lazy"
        />
      );
    }
    if (videoUrl) {
      return (
        <video
          ref={isExpandedView ? expandedVideoRef : videoRef}
          src={videoUrl}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onDurationChange={handleTimeUpdate}
          loop
          playsInline
          aria-label="Service Demonstration Video"
        />
      );
    }
    return null;
  };

  return (
    <>
      <div className={`relative w-full aspect-video rounded-2xl overflow-hidden ${noMargin ? '' : 'mb-6'} group border border-white/5 shadow-2xl`}>
        <div className="absolute inset-0 bg-brand-black/20 z-10 pointer-events-none transition-colors group-hover:bg-brand-black/5" />
        {renderVideo(false)}
        <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            type="button"
            onClick={togglePlay}
            className="p-2.5 bg-brand-black/60 backdrop-blur-md rounded-xl text-white hover:bg-brand-blue transition-all border border-white/10 shadow-lg glow-blue group/btn"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button 
            type="button"
            onClick={toggleMute}
            className="p-2.5 bg-brand-black/60 backdrop-blur-md rounded-xl text-white hover:bg-brand-blue transition-all border border-white/10 shadow-lg glow-blue group/btn"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <button 
            type="button"
            onClick={toggleExpand}
            className="p-2.5 bg-brand-black/60 backdrop-blur-md rounded-xl text-white hover:bg-brand-blue transition-all border border-white/10 shadow-lg glow-blue group/btn"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
        <ProgressBar className="opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Central Play Button Overlay */}
        {!isPlaying && (
          <div 
            className="absolute inset-0 z-15 flex items-center justify-center bg-black/20 cursor-pointer group/center"
            onClick={togglePlay}
          >
            <div className="w-20 h-20 bg-brand-blue/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover/center:scale-110 transition-transform">
              <Play className="w-10 h-10 text-white fill-current ml-1" />
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isExpanded && createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-brand-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)] border border-white/10 bg-black"
            >
              {renderVideo(true)}
              
              {/* Expanded Controls */}
              <div className="absolute top-6 right-6 z-30">
                <button 
                  onClick={toggleExpand}
                  className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/10"
                >
                  <Minimize2 className="w-6 h-6" />
                </button>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-4">
                <button 
                  onClick={togglePlay}
                  className="px-6 py-3 bg-brand-blue text-brand-black rounded-full font-bold flex items-center gap-2 hover:bg-brand-cyan transition-all glow-blue"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button 
                  onClick={toggleMute}
                  className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/20 transition-all border border-white/10"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  {isMuted ? 'Unmute' : 'Mute'}
                </button>
                <div className="flex-1 max-w-sm px-6">
                  <div className="flex justify-between text-[10px] text-white/50 mb-1 font-mono uppercase tracking-widest">
                    <span>{Math.floor(currentTime)}s</span>
                    <span>{Math.floor(duration)}s</span>
                  </div>
                  <ProgressBar className="relative h-1.5 rounded-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </>
  );
};

const ServicesGrid = () => {
  const services: Service[] = [
    {
      title: "AI Chatbots",
      description: "Custom website AI chatbots and WhatsApp automation bots designed to capture leads and support customers instantly.",
      features: ["Website AI Chatbots", "WhatsApp Automation", "Instagram DM Automation", "AI Customer Support"],
      videoId: "cg1IO3Opk28"
    },
    {
      title: "AI Voice Agents",
      description: "Human-like voice agents for 24/7 reception, appointment setting, and lead qualification.",
      features: ["24/7 AI Receptionists", "Appointment Setting Bots", "Lead Qualification Agents", "Call Center Automation"],
      videoId: "omSHRkIIPwM"
    },
    {
      title: "Workflow Automation",
      description: "Streamline your operations with end-to-end CRM and pipeline automation systems.",
      features: ["CRM Pipeline Automation", "Email Sequences", "Lead Nurturing Systems", "Sales Process Automation"],
      videoUrl: "https://v3b.fal.media/files/b/0a95f170/-bUStROaB4R5y19RmvVMs_merged_video.mp4"
    },
    {
      title: "Enterprise AI Integration",
      description: "Seamlessly integrate advanced AI models into your existing business infrastructure for maximum ROI.",
      features: ["Custom AI Strategy", "API Integrations", "Data Analysis Automation", "Scalable AI Infrastructure"],
      videoId: "tjbI1sgEQto"
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
              className="relative p-8 rounded-3xl bg-glass neon-border overflow-hidden group flex flex-col"
            >
              <div className="relative z-10 flex flex-col h-full">
                {s.videoId || s.videoUrl ? (
                  <CardVideo videoId={s.videoId} videoUrl={s.videoUrl} />
                ) : (
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                    {s.icon}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-white">{s.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{s.description}</p>
                <ul className="space-y-3 mt-auto mb-8">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2" />
                      {f}
                    </li>
                  ))}
                </ul>

                {(s.title === "Enterprise AI Integration" || s.title === "AI Chatbots" || s.title === "AI Voice Agents") && (
                  <button 
                    onClick={() => {
                      if (s.videoId) {
                        window.open(`https://www.youtube.com/watch?v=${s.videoId}`, '_blank');
                      } else if (s.videoUrl) {
                        window.open(s.videoUrl, '_blank');
                      }
                    }}
                    className="w-full py-4 bg-brand-blue text-brand-black rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-cyan transition-all glow-blue group/btn"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    Watch Full Demo
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = ({ showHeader = true }: { showHeader?: boolean }) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null);

  const industries = [
    { 
      icon: <Building2 />, 
      name: "Real Estate Firms",
      description: "Automate lead qualification, property inquiries, and appointment scheduling to close deals faster.",
      image: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Create_a_highly_202604121215.png"
    },
    { 
      icon: <Globe />, 
      name: "E-commerce Brands",
      description: "Enhance customer experience with AI-driven product recommendations and 24/7 automated support.",
      image: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Create_a_futuristic_202604121222.png"
    },
    { 
      icon: <BarChart3 />, 
      name: "Marketing Agencies",
      description: "Scale content production and data analysis with custom AI workflows tailored for client success.",
      image: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Create_a_cinematic_202604121226.png"
    },
    { 
      icon: <Users />, 
      name: "Coaches & Consultants",
      description: "Streamline client onboarding and support with personalized AI assistants that reflect your expertise.",
      image: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Create_a_warm_202604121232.png"
    },
    { 
      icon: <Cpu />, 
      name: "Enterprise Organizations",
      description: "Integrate scalable AI infrastructure to optimize complex operations and drive cross-departmental efficiency.",
      image: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Create_a_large-scale_202604121135.png"
    },
    { 
      icon: <GraduationCap />, 
      name: "Educational Institutions & EdTech",
      description: "Empower learning with AI tutors and administrative automation for a more personalized student experience.",
      image: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Create_a_clean,_202604130329.png"
    },
    { 
      icon: <Sprout />, 
      name: "Agriculture & Farming",
      description: "Leverage AI for precision monitoring and predictive analytics to maximize yield and operational efficiency.",
      image: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Create_a_realistic_202604130312.png"
    },
    { 
      icon: <Fish />, 
      name: "Commercial Fishing & Aquaculture",
      description: "Optimize supply chains and monitor aquatic environments with intelligent AI-driven data systems.",
      image: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Create_a_realistic_202604130337.png"
    },
    { 
      icon: <Utensils />, 
      name: "Restaurants & Food Services",
      description: "Improve guest satisfaction with automated reservations, order management, and AI-powered customer feedback.",
      image: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Create_a_modern_202604130319.png"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Tailored AI solutions for high-growth sectors looking to automate and scale.</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <div 
              key={i} 
              className="p-8 rounded-3xl bg-white/5 border border-white/5 text-left hover:bg-brand-blue/5 hover:border-brand-blue/20 transition-all group overflow-hidden flex flex-col cursor-pointer"
              onClick={() => ind.image && setSelectedImage({ src: ind.image, alt: ind.name })}
            >
              {ind.image && (
                <div className="w-full aspect-video mb-6 rounded-2xl overflow-hidden border border-white/10 relative">
                  <img 
                    src={ind.image} 
                    alt={ind.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-8 h-8 text-white" />
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-blue transition-colors">{ind.name}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ImageLightbox 
        isOpen={!!selectedImage} 
        src={selectedImage?.src || ''} 
        alt={selectedImage?.alt || ''} 
        onClose={() => setSelectedImage(null)} 
      />
    </section>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://foundryngroup.app.n8n.cloud/webhook/4dfdd50a-9b30-4d5e-8ab9-b98b6ea64441', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
          source: window.location.href
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Webhook error:', error);
      setStatus('error');
      // Reset error after 5 seconds to allow retry
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  if (status === 'success') {
    return (
      <div className="p-12 rounded-3xl bg-glass text-center border border-brand-blue/20">
        <div className="w-20 h-20 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-brand-blue" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
        <p className="text-slate-400">Our team will reach out to you within 24 hours to schedule your strategy call.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-brand-blue text-sm font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-12 rounded-3xl bg-glass border border-white/10 relative">
      {status === 'error' && (
        <div className="absolute top-4 left-4 right-4 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm text-center">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
          <input 
            required 
            name="fullName"
            type="text" 
            className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors" 
            placeholder="John Doe" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Company Name</label>
          <input 
            required 
            name="companyName"
            type="text" 
            className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors" 
            placeholder="Acme Inc." 
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Industry</label>
          <select 
            name="industry"
            className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors"
          >
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
          <select 
            name="businessSize"
            className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors"
          >
            <option>1-10 employees</option>
            <option>11-50 employees</option>
            <option>51-200 employees</option>
            <option>200+ employees</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Main Challenge</label>
        <textarea 
          required 
          name="challenge"
          className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors h-32" 
          placeholder="Tell us about the manual tasks you want to automate..."
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Company Email</label>
          <input 
            required 
            name="email"
            type="email" 
            className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors" 
            placeholder="john@company.com" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
          <input 
            required 
            name="phone"
            type="tel" 
            className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors" 
            placeholder="+1 (555) 000-0000" 
          />
        </div>
      </div>
      <button 
        disabled={status === 'loading'}
        type="submit" 
        className="w-full bg-white/10 text-white py-4 rounded-xl font-bold text-lg hover:bg-white/20 border border-white/10 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => (
  <footer className="bg-brand-black border-t border-white/5 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-6">
            <img 
              src="https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Anvil%20logo.png" 
              alt="Anvilai LLC Logo" 
              className="h-10 w-auto mr-3 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.2)]"
              referrerPolicy="no-referrer"
            />
            <span className="text-lg font-extrabold text-white tracking-tighter uppercase">Anvilai LLC</span>
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
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-brand-blue transition-colors">About Us</button></li>
            <li><button onClick={() => setCurrentPage('portfolio')} className="hover:text-brand-blue transition-colors">Portfolio</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-brand-blue transition-colors">Contact</button></li>
            <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-brand-blue font-bold hover:underline">Book Appointment</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col md:row justify-between items-center text-xs text-slate-500">
        <p>© 2026 Anvilai LLC. All rights reserved.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Partner With <span className="text-gradient">Anvilai LLC?</span></h2>
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
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl glow-blue">
              <CardVideo videoId="tjbI1sgEQto" noMargin />
            </div>
            
            {/* Watch Full Demo Button */}
            <div className="mt-6">
              <button 
                onClick={() => window.open('https://www.youtube.com/watch?v=tjbI1sgEQto', '_blank')}
                className="w-full py-4 bg-brand-blue text-brand-black rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-cyan transition-all glow-blue group/btn"
              >
                <Play className="w-5 h-5 fill-current" />
                Watch Full Demo
                <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </button>
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
            icon: <MessageSquare className="w-12 h-12" />,
            videoId: "cg1IO3Opk28",
            image: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/AI%20Chatbots%20&%20Virtual%20Assistants.png"
          },
          {
            title: "AI Voice Agents",
            problem: "Manual appointment setting and lead qualification is slow and expensive.",
            solution: "Human-like voice agents that handle inbound and outbound calls with perfect memory.",
            roi: "3x increase in qualified bookings, 24/7 coverage without hiring costs.",
            icon: <Phone className="w-12 h-12" />,
            videoId: "omSHRkIIPwM",
            image: "https://picsum.photos/seed/voice/800/600" 
          },
          {
            title: "Workflow & CRM Automation",
            problem: "Manual repetitive tasks and inefficient follow-up systems leading to lost revenue.",
            solution: "Seamless integration of AI into your CRM to automate lead nurturing and sales processes.",
            roi: "50% increase in sales team productivity, zero missed follow-ups.",
            icon: <Workflow className="w-12 h-12" />,
            videoUrl: "https://v3b.fal.media/files/b/0a95f170/-bUStROaB4R5y19RmvVMs_merged_video.mp4",
            image: "https://picsum.photos/seed/workflow/800/600"
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
                <div className="p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/20 mb-8">
                  <h4 className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-2">Expected ROI Value</h4>
                  <p className="text-white font-semibold">{s.roi}</p>
                </div>
                
                {(s.videoId || s.videoUrl) && (
                  <button 
                    onClick={() => {
                      if (s.videoId) {
                        window.open(`https://www.youtube.com/watch?v=${s.videoId}`, '_blank');
                      } else if (s.videoUrl) {
                        window.open(s.videoUrl, '_blank');
                      }
                    }}
                    className="w-full py-4 bg-brand-blue text-brand-black rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-cyan transition-all glow-blue group/btn"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    Watch Full Demo
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </button>
                )}
              </div>
            </div>
            <div className="relative group/video">
              <div className="aspect-video rounded-3xl bg-brand-black/50 border border-white/10 overflow-hidden shadow-2xl relative">
                {s.videoId || s.videoUrl ? (
                  <CardVideo videoId={s.videoId} videoUrl={s.videoUrl} noMargin />
                ) : (
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                )}
              </div>
              {/* Optional Decoration */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 to-brand-cyan/20 rounded-[35px] blur-xl opacity-0 group-hover/video:opacity-100 transition-opacity pointer-events-none -z-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectMedia = ({ project }: { project: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const mediaItems = [];
  if (project.videoUrl) mediaItems.push({ type: 'video', url: project.videoUrl });
  if (project.images) {
    project.images.forEach((url: string) => mediaItems.push({ type: 'image', url }));
  } else if (project.image) {
    mediaItems.push({ type: 'image', url: project.image });
  }

  const hasMultipleItems = mediaItems.length > 1;

  if (mediaItems.length === 0) return null;

  const currentMedia = mediaItems[currentIndex];

  return (
    <div className="relative w-full h-full group/media">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          {currentMedia.type === 'video' ? (
            <CardVideo videoUrl={currentMedia.url} noMargin />
          ) : (
            <img
              src={currentMedia.url}
              alt={`${project.title} - media ${currentIndex + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
          )}
        </motion.div>
      </AnimatePresence>
      
      {currentMedia.type === 'image' && (
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80 pointer-events-none" />
      )}
      
      {hasMultipleItems && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-brand-black/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover/media:opacity-100 transition-opacity hover:bg-brand-blue border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-brand-black/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover/media:opacity-100 transition-opacity hover:bg-brand-blue border border-white/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
            {mediaItems.map((_: any, idx: number) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-brand-blue w-4' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const filters = [
    'All', 
    'AI Voice & Automation Systems', 
    'AI Chatbots & Conversational AI', 
    'Custom Web & Mobile Applications', 
    'High-Converting Website Design', 
    'AI-Powered Marketing & Content Automation', 
    'CRM & Business Process Automation', 
    'AI Strategy & Consulting'
  ];

  const projects = [
    {
      id: 1,
      title: "Restaurant Management App",
      category: "Custom Web & Mobile Applications",
      categoryDesc: "Comprehensive restaurant POS and Order Management System designed to streamline daily operations for both admins and employees. Features real-time dashboards, payment processing (Apple Pay), and secure role-based access.",
      tags: ['Custom Web & Mobile Applications'],
      result: "Simplified restaurant workflows and enhanced service efficiency through integrated POS and order tracking.",
      videoUrl: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/GastRonomIQ.mp4",
      images: [
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Restaurant1.png",
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Restaurant2.png",
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Restaurant3.png",
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Restaurant4.png",
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Restaurant5.png"
      ]
    },
    {
      id: 2,
      title: "E-GOLDEN - Real Estate & Finance Solution",
      category: "Custom Web & Mobile Applications",
      categoryDesc: "Premium real estate and financial management suite. Integrates property tracking, profit analytics, loan management, and business accounting into a single unified dashboard with automated tax reminders.",
      tags: ['Custom Web & Mobile Applications'],
      result: "Unified complex financial and property data into a smart, proactive management tool",
      videoUrl: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Video%20Cover%201.0",
      images: [
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/E%20golding.png"
      ]
    },
    {
      id: 3,
      title: "Multi-vendor Marketplace Platform App",
      category: "Custom Web & Mobile Applications",
      categoryDesc: "All-in-one multi-vendor marketplace platform enabling secure commerce across diverse categories. Features professional storefront management, integrated buyer-seller messaging, and advanced discovery tools.",
      tags: ['Custom Web & Mobile Applications'],
      result: "Empowered sellers with professional tools and simplified global product discovery",
      videoUrl: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Multi-vendor%20Marketplace%20Platform%20App.mp4",
      images: [
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Vendor.png"
      ]
    },
    {
      id: 4,
      title: "Doctor Appointment Booking App",
      category: "Custom Web & Mobile Applications",
      categoryDesc: "Seamless healthcare management platform for browsing doctors, viewing real-time schedules, and instant appointment booking. Simplifies medical access through an intuitive digital interface.",
      tags: ['Custom Web & Mobile Applications'],
      result: "Eliminated waiting times and streamlined healthcare scheduling",
      videoUrl: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/ce3ba53d-945c-4e3a-8d64-6bfe9329c860.mp4",
      images: [
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Docktor.png"
      ]
    },
    {
      id: 5,
      title: "Mauritius Traveling App",
      category: "Custom Web & Mobile Applications",
      categoryDesc: "All-in-one travel guide for exploring Mauritius. Features interactive maps, real-time event updates, and QR-integrated venue access for tourists and locals.",
      tags: ['Custom Web & Mobile Applications'],
      result: "Created a smart, personalized gateway for seamless island exploration",
      videoUrl: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Mauritius%20Traveling%20App.mp4",
      images: [
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Traviling%20.png"
      ]
    },
    {
      id: 6,
      title: "Real Estate Management Mobile App",
      category: "Custom Web & Mobile Applications",
      categoryDesc: "User-friendly rental property management platform featuring personalized search, listing management, and integrated viewing schedules.",
      tags: ['Custom Web & Mobile Applications'],
      result: "Streamlined the rental process through personalized property matching and automated scheduling.",
      videoUrl: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/24ed6738-f1ac-4479-b73d-c4b6bc2f5437.mp4",
      images: [
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Real%20estate.png"
      ]
    },
    {
      id: 7,
      title: "Pro Hair Cutz Mobile App",
      category: "Custom Web & Mobile Applications",
      categoryDesc: "Comprehensive hairstyling service platform featuring appointment booking, service catalogs, and wallet management for a seamless client experience.",
      tags: ['Custom Web & Mobile Applications'],
      result: "Elevated salon accessibility and streamlined booking workflows",
      videoUrl: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/e52bf7c4-8e34-46b0-b5a2-f73cc7a6fa58.mp4",
      images: [
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Pro%20hair.png"
      ]
    },
    {
      id: 8,
      title: "Food Scan AI Mobile App",
      category: "Custom Web & Mobile Applications",
      categoryDesc: "Advanced nutrition and exercise tracking app powered by food recognition AI. Identifies meals from photos to provide instant nutritional insights and personalized health scores.",
      tags: ['Custom Web & Mobile Applications'],
      result: "AI-powered automated nutrition tracking for healthier habits",
      images: [
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Food1.png",
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Food2.png",
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Food3.png",
        "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Untitled%20folder/Food4.png"
      ]
    },
    {
      id: 9,
      title: "Botcircuits - AI Agents for Customer Support",
      category: "AI Chatbots & Conversational AI",
      categoryDesc: "LLM-native SaaS platform using intelligent state machines to build reliable AI agents. Ensures structured conversational flows for enterprise support and sales.",
      tags: ['AI Chatbots & Conversational AI'],
      result: "Achieved seamless balance between LLM flexibility and operational control",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 10,
      title: "Ai voice agent | Bubble.io App",
      category: "AI Voice & Automation Systems",
      categoryDesc: "Complete rescue and optimization of a Bubble.io application. Enhanced with OpenAI-driven features, UI/UX overhauls, and backend workflow automation.",
      tags: ['AI Voice & Automation Systems'],
      result: "Transformed non-functional app into high-performance AI solution",
      videoUrl: "https://www.dropbox.com/scl/fi/iubfgyb7cppo7y7efjpch/ContractorPost-1.AI?rlkey=ypdelpk56nfraoch5qgrawspz&st=9jj6z3pm&raw=1"
    },
    {
      id: 11,
      title: "AI Voice Agent for Dick Watts Insurance",
      category: "AI Voice & Automation Systems",
      categoryDesc: "Advanced 3-agent insurance handling system built with Retell AI. Consolidates quotes, claims, and scheduling into a zero-latency call flow with Twilio and SendGrid automation.",
      tags: ['AI Voice & Automation Systems'],
      result: "Improved CX and drastically reduced operational overhead",
      videoUrl: "https://www.dropbox.com/scl/fi/y1lbm1vcai8wivzmaf4px/AI-Voice-Agent-for-Dick-Watts-Insurance-Calendly-Vercel-Retell.mp4?rlkey=ab4siutfomd39n09h0ardp106&st=xbdle04n&raw=1"
    },
    {
      id: 12,
      title: "Vapi Appointment Booking Bot in GoHighLevel",
      category: "AI Voice & Automation Systems",
      categoryDesc: "Dynamic AI calling agent that instantly calls Facebook leads, mentions prospect names and numbers, and handles inbound/outbound booking via Retell/Vapi.",
      tags: ['AI Voice & Automation Systems'],
      result: "Instant dynamic lead follow-up & 24/7 handle on inbound calls",
      videoUrl: "https://www.dropbox.com/scl/fi/yf0xxs14tdnbjoromu9gn/Vapi-Dashboard.mp4?rlkey=hgzy81mhmqc7u0e47jxruenc4&st=6lep05s0&raw=1"
    },
    {
      id: 13,
      title: "Retell-Channel Voice Assistant",
      category: "AI Voice & Automation Systems",
      categoryDesc: "End-to-end call handling and lead qualification systems utilizing Retell AI.",
      tags: ['AI Voice & Automation Systems'],
      result: "Automated 85% of inbound lead qualification",
      videoUrl: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/n8n%20integration.mp4"
    },
    {
      id: 14,
      title: "Intelligent CRM Bot",
      category: "AI Chatbots & Conversational AI",
      categoryDesc: "Multi-channel support bots with live CRM integration.",
      tags: ['AI Chatbots & Conversational AI', 'CRM & Business Process Automation'],
      result: "Reduced support ticket volume by 60%",
      image: "https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/AI%20Chatbots%20&%20Virtual%20Assistants.png"
    },
    {
      id: 15,
      title: "Operations Command Center",
      category: "Custom Web & Mobile Applications",
      categoryDesc: "Scalable SaaS dashboards and internal business tools.",
      tags: ['Custom Web & Mobile Applications'],
      result: "Unified data across 12 distributed departments",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      id: 16,
      title: "Enterprise Booking System",
      category: "High-Converting Website Design",
      categoryDesc: "UX-focused landing pages and appointment funnels.",
      tags: ['High-Converting Website Design'],
      result: "Increased consultation bookings by 42%",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 17,
      title: "AI Video Content Engine",
      category: "AI-Powered Marketing & Content Automation",
      categoryDesc: "Automated social posting and video generation pipelines.",
      tags: ['AI-Powered Marketing & Content Automation'],
      result: "Generated 30 days of content in 4 hours",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 18,
      title: "HubSpot Workflow Engine",
      category: "CRM & Business Process Automation",
      categoryDesc: "Complex backend logic for automated lead management.",
      tags: ['CRM & Business Process Automation'],
      result: "Saved 20+ hours/week in manual data entry",
      image: "https://images.unsplash.com/photo-1454165833767-131e84a1a005?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 19,
      title: "Corporate AI Roadmap",
      category: "AI Strategy & Consulting",
      categoryDesc: "Full-scale implementation strategy for legacy businesses.",
      tags: ['AI Strategy & Consulting'],
      result: "Defined 3-year AI roadmap for Fortune 500 client",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 20,
      title: "Lead Intelligence Pipeline",
      category: "Data Intelligence",
      categoryDesc: "Scraping and enrichment systems for high-volume sales teams.",
      tags: ['AI-Powered Marketing & Content Automation', 'CRM & Business Process Automation'],
      result: "Provided 5,000+ enriched b2b leads monthly",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 italic tracking-tight">System <span className="text-gradient">Portfolio</span></h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            “A collection of systems built to solve real business problems using AI and automation.”
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-12 relative group/filters">
          {/* Left Arrow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none transition-opacity">
            <button 
              onClick={() => scroll('left')}
              className="pointer-events-auto p-2 bg-brand-black/60 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-brand-blue hover:border-brand-blue transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-4 gap-3 no-scrollbar scroll-smooth mask-fade-right"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                  filter === f 
                  ? 'bg-brand-blue text-brand-black border-brand-blue shadow-[0_0_20px_rgba(0,183,255,0.4)]' 
                  : 'bg-white/5 text-slate-400 border-white/5 hover:border-brand-blue/30 hover:text-white hover:shadow-[0_0_15px_rgba(0,183,255,0.1)]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none transition-opacity">
            <button 
              onClick={() => scroll('right')}
              className="pointer-events-auto p-2 bg-brand-black/60 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-brand-blue hover:border-brand-blue transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative flex flex-col h-full bg-brand-navy/30 rounded-[32px] border border-white/5 overflow-hidden hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500"
              >
                {/* Media Wrap */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <ProjectMedia project={project} />
                  
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-brand-black/60 backdrop-blur-md text-brand-blue text-[10px] font-black uppercase tracking-tighter rounded-md border border-brand-blue/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-blue transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed line-clamp-2">
                    {project.categoryDesc}
                  </p>

                  <div className="pt-6 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-4 h-4 text-brand-blue" />
                      </div>
                      <p className="text-sm font-bold text-white italic group-hover:text-brand-blue transition-colors">
                        {project.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const IndustriesPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[60vh] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-brand-black/60 z-10" />
        <video
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover min-w-full min-h-full"
          src="https://v3b.fal.media/files/b/0a97f59f/xafmDzGipRdjJPPnTC9rM_merged_video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-[5]">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-brand-cyan/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              Sector-Specific AI Systems
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Industries <span className="text-gradient">We Transform</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every industry has unique challenges. We build precision-engineered AI automation that solves them at scale.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    <IndustriesSection showHeader={false} />
  </motion.div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly is AI Automation and how can it benefit my business?",
      answer: "AI Automation involves using artificial intelligence (like LLMs and Voice AI) to perform repetitive business tasks. This includes answering inquiries via chat or voice, qualifying leads, and syncing data across your CRM. For your business, this means 24/7 operation without increased headcount, faster response times, and higher conversion rates."
    },
    {
      question: "Will the AI voice agents sound like real humans?",
      answer: "Yes. We utilize advanced voice synthesis technology (like Retell AI) that sounds natural and can maintain fluid, human-like conversations. They can handle interruptions, understand context, and even project specific brand personalities."
    },
    {
      question: "How long does it typically take to implement an AI system?",
      answer: "A standard implementation (like an AI Chatbot or Lead Qualification Voice Agent) typically takes 2-4 weeks. More complex enterprise integrations or end-to-end workflow automations can take 6-10 weeks depending on the scope and complexity of your existing systems."
    },
    {
      question: "Do I need to replace my existing CRM or software?",
      answer: "Not at all. Our philosophy is 'Integration over Replacement'. We specialize in connecting AI systems to your existing tools (HubSpot, Salesforce, GoHighLevel, Shopify, etc.) using APIs and automation platforms like n8n or Zapier to enhance your current workflows."
    },
    {
      question: "How does the pricing work for AI solutions?",
      answer: "We offer tailored pricing based on the complexity of the build and the volume of automation. Usually, there is a one-time setup and development fee, followed by a monthly support and infrastructure maintenance fee. Most clients see a full ROI within the first 3-6 months."
    },
    {
      question: "What kind of support do you provide after the system is live?",
      answer: "Every system we build includes a dedicated support period. We monitor performance, optimize response flows based on real-world data, and ensure your AI continues to scale as your business grows. We offer monthly maintenance packages for ongoing optimization."
    }
  ];

  return (
    <section className="py-24 bg-brand-navy/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-slate-400">Everything you need to know about implementing AI in your business.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="rounded-2xl border border-white/5 bg-white/5 overflow-hidden transition-all duration-300 hover:border-brand-blue/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold text-white group-hover:text-brand-blue transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  className="text-slate-400 group-hover:text-brand-blue transition-colors"
                >
                  <ChevronRight className="w-5 h-5 rotate-90" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <section className="pt-32 pb-12 lg:pt-48 lg:pb-20 bg-brand-navy/10 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-brand-cyan/30 blur-[100px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
          Support & Resources
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          Common <span className="text-gradient">Questions</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Find answers to the most common questions about our AI automation solutions and how they can scale your business.
        </p>
      </div>
    </section>
    <FAQSection />
    <section className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-12 rounded-[40px] bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 border border-brand-blue/20 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Still have questions?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Our team is here to help you navigate the world of AI automation. Reach out for a free discovery call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-blue text-brand-black rounded-xl font-bold hover:bg-brand-cyan transition-all glow-blue flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Discovery Call
            </a>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

const AboutPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* SECTION 1: INTRO / POSITIONING */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Positioning for the <span className="text-gradient">Future</span></h1>
          <div className="space-y-6">
            <p className="text-xl text-slate-200 leading-relaxed">
              Anvilai LLC is a U.S.-focused AI Automation Agency that designs and deploys intelligent voice systems and workflow automation for modern businesses.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              We help organizations streamline operations, capture more opportunities, and scale efficiently through tailored AI infrastructure.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[40px] bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 border border-white/10 overflow-hidden glow-blue">
            <img 
              src="https://qdwauwxnjswptcxbncwh.supabase.co/storage/v1/object/public/Felix%20Tech%20Solution%20Web%20pictures/Felix%20About%20Pic.png" 
              alt="Felix - Founder of Anvilai LLC" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: VISION & MISSION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        <div className="p-10 rounded-[32px] bg-glass border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target className="w-24 h-24 text-brand-blue" />
          </div>
          <h4 className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">Our Vision</h4>
          <p className="text-2xl text-white font-medium leading-snug">
            To become the standard for enterprise-grade AI implementation in the United States.
          </p>
        </div>
        <div className="p-10 rounded-[32px] bg-glass border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Zap className="w-24 h-24 text-brand-cyan" />
          </div>
          <h4 className="text-brand-cyan font-bold uppercase tracking-widest text-sm mb-4">Our Mission</h4>
          <p className="text-2xl text-white font-medium leading-snug">
            To empower businesses with scalable growth systems that eliminate manual repetitive tasks, improve response times, and increase operational efficiency.
          </p>
        </div>
      </div>

      {/* SECTION 3: MEET THE FOUNDER */}
      <div className="mb-32">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet Felix — <span className="text-gradient">Founder of Anvilai LLC</span></h2>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              Felix is the founder of Anvilai LLC, an AI Automation Agency focused on helping U.S. businesses eliminate inefficiencies and scale through intelligent systems.
            </p>
            <p>
              With a strong focus on automation, AI-driven communication, and operational workflows, Felix built the company to solve a critical problem many businesses face — manual processes that slow growth and reduce efficiency.
            </p>
            <p>
              Rather than offering generic solutions, Anvilai LLC is designed to create tailored AI systems that integrate directly into business operations — from lead capture and follow-up to customer support and sales automation.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4: THE STORY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
        <div className="sticky top-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Story Behind <br/><span className="text-gradient">Anvilai LLC</span></h2>
          <div className="w-20 h-1 bg-brand-blue rounded-full" />
        </div>
        <div className="space-y-8 text-slate-400 text-lg leading-relaxed">
          <p>
            Anvilai LLC was founded on a clear observation: many businesses lose revenue daily due to slow response times, missed leads, and inefficient systems.
          </p>
          <p>
            While AI technology has advanced rapidly, most organizations struggle to implement it in a practical and results-driven way.
          </p>
          <p>
            Felix identified the gap between what AI is capable of and how businesses are actually using it.
          </p>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <p className="text-white font-bold mb-6">Anvilai LLC was built to close that gap by delivering scalable AI systems that:</p>
            <ul className="space-y-4">
              {[
                "Respond instantly to leads",
                "Automate repetitive workflows",
                "Improve customer experience",
                "Increase operational efficiency"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 5: EXPERIENCE & EXPERTISE */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & <span className="text-gradient">Expertise</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">We specialize in designing and deploying high-impact AI infrastructure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "AI Chatbots", desc: "Systems for customer engagement and instant support." },
          { title: "Voice Agents", desc: "AI-driven communication for 24/7 availability." },
          { title: "Workflow Automation", desc: "CRM and process optimization for sales teams." },
          { title: "Lead Nurturing", desc: "Systems that convert prospects into loyal clients." }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl bg-glass border border-white/5 hover:border-brand-blue/30 transition-all group">
            <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">{item.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-slate-500 italic">
          Each system is built with a clear objective: deliver measurable business outcomes, not just technology.
        </p>
      </div>
    </div>
    <FAQSection />
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
            <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 border border-brand-blue/20">
              <h3 className="text-2xl font-bold text-white mb-4">Direct Booking</h3>
              <p className="text-slate-400 mb-6">Skip the form and pick a time that works for you on our calendar.</p>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue text-brand-black px-8 py-4 rounded-xl font-bold hover:bg-brand-cyan transition-all glow-blue"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment Now
              </a>
            </div>

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
    <div className="mt-24">
      <FAQSection />
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
            {currentPage === 'industries' && <IndustriesPage />}
            {currentPage === 'portfolio' && <PortfolioPage />}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'faq' && <FAQPage />}
            {currentPage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
