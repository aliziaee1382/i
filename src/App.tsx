import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  MessageSquareCode, 
  CodeXml, 
  Monitor, 
  Palette, 
  ArrowRight, 
  ArrowLeft, 
  Languages, 
  Cpu, 
  Terminal, 
  Shield, 
  Eye, 
  Menu, 
  X,
  ExternalLink,
  Phone
} from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';
import SkillsSection from './components/SkillsSection';
import BioSection from './components/BioSection';
import ProjectRing from './components/ProjectRing';
import ContactSection from './components/ContactSection';
import Logo from './components/Logo';

export default function App() {
  const [isFa, setIsFa] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [activeHeroBadge, setActiveHeroBadge] = useState<number>(0);

  // Track cursor position for custom pointer accent
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll progress for navigation indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate Hero badges to show modern specialties dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroBadge((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroBadges = [
    { labelFa: 'هوش مصنوعی', labelEn: 'Artificial Intel', icon: <Sparkles className="w-4 h-4 text-violet-400" /> },
    { labelFa: 'ربات‌های تلگرام', labelEn: 'Telegram Bots', icon: <MessageSquareCode className="w-4 h-4 text-sky-400" /> },
    { labelFa: 'سفارشی‌سازی وردپرس', labelEn: 'Bespoke WordPress', icon: <CodeXml className="w-4 h-4 text-blue-400" /> },
    { labelFa: 'توسعه وب‌سایت', labelEn: 'Web Development', icon: <Monitor className="w-4 h-4 text-emerald-400" /> },
    { labelFa: 'طراحی بنر و گرافیک', labelEn: 'Banner & Graphics', icon: <Palette className="w-4 h-4 text-rose-400" /> },
  ];

  const toggleLanguage = () => {
    setIsFa((prev) => !prev);
  };

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="min-h-screen bg-gray-950 text-white font-sans relative overflow-x-hidden selection:bg-violet-600 selection:text-white"
      dir={isFa ? 'rtl' : 'ltr'}
    >
      {/* Background Interactive Particles canvas */}
      <ParticlesBackground />

      {/* Futuristic Mouse cursor trail (Desktop only) */}
      <div 
        className="hidden md:block fixed pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '8px',
          height: '8px',
          backgroundColor: '#ffffff',
          borderRadius: '50%'
        }}
      />
      <div 
        className="hidden md:block fixed pointer-events-none z-40 transition-transform duration-300 ease-out opacity-20"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '32px',
          height: '32px',
          border: '1px solid #00FFD1',
          borderRadius: '50%'
        }}
      />

      {/* Sticky Glassmorphism Header */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#050505]/60 border-b border-white/10 backdrop-blur-xl transition-all">
        {/* Scrolling progress bar indicator */}
        <div 
          className="absolute bottom-0 left-0 h-[1.5px] bg-brand-cyan shadow-glow transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo / Personal Branding */}
          <a 
            href="https://ali0003.ir"
            target="_blank"
            rel="noopener noreferrer"
            id="site-logo-link"
            className="flex items-center cursor-pointer group"
          >
            <Logo className="h-6 md:h-7.5 text-brand-cyan transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(0,245,212,0.3)]" />
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            <button 
              onClick={() => handleScrollTo('skills-specialties')} 
              className="hover:text-brand-cyan transition-colors cursor-pointer"
            >
              {isFa ? 'تخصص‌ها' : 'Specialties'}
            </button>
            <button 
              onClick={() => handleScrollTo('about-biography')} 
              className="hover:text-brand-cyan transition-colors cursor-pointer"
            >
              {isFa ? 'بیوگرافی' : 'Biography'}
            </button>
            <button 
              onClick={() => handleScrollTo('project-showcase')} 
              className="hover:text-brand-cyan transition-colors cursor-pointer"
            >
              {isFa ? 'پروژه‌ها' : 'Projects'}
            </button>
            <button 
              onClick={() => handleScrollTo('contact-consultation')} 
              className="hover:text-brand-cyan transition-colors cursor-pointer"
            >
              {isFa ? 'مشاوره و تماس' : 'Contact'}
            </button>
          </nav>

          {/* Actions: Bilingual Toggle & CTA */}
          <div className="flex items-center gap-4">
            
            {/* Language toggle button */}
            <button
              onClick={toggleLanguage}
              id="lang-toggle-btn"
              className="p-2 rounded-xl bg-[#111111] border border-white/10 hover:border-brand-cyan/30 hover:bg-brand-cyan/5 text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-1.5 text-xs font-mono"
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4 text-brand-cyan" />
              <span>{isFa ? 'English' : 'فارسی'}</span>
            </button>

            {/* Quick contact header button */}
            <button
              onClick={() => handleScrollTo('contact-consultation')}
              id="header-cta-btn"
              className="hidden sm:inline-flex items-center gap-1.5 bg-brand-cyan text-[#050505] font-bold text-xs md:text-sm px-4 py-2 rounded-xl hover:bg-brand-cyan/85 transition-all duration-300 shadow-bento-glow"
            >
              <span>{isFa ? 'همکاری فوری' : 'Start Project'}</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              id="mobile-menu-toggle-btn"
              className="md:hidden p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#050505]/95 border-b border-white/10 backdrop-blur-2xl overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4 flex flex-col text-right rtl:text-right ltr:text-left">
                <button
                  onClick={() => handleScrollTo('skills-specialties')}
                  className="text-gray-300 hover:text-brand-cyan text-base py-1.5"
                >
                  {isFa ? 'تخصص‌های مهندسی' : 'Specialties'}
                </button>
                <button
                  onClick={() => handleScrollTo('about-biography')}
                  className="text-gray-300 hover:text-brand-cyan text-base py-1.5"
                >
                  {isFa ? 'بیوگرافی و داستان' : 'Biography'}
                </button>
                <button
                  onClick={() => handleScrollTo('project-showcase')}
                  className="text-gray-300 hover:text-brand-cyan text-base py-1.5"
                >
                  {isFa ? 'حلقه پروژه‌های برجسته' : 'Featured Projects'}
                </button>
                <button
                  onClick={() => handleScrollTo('contact-consultation')}
                  className="text-gray-300 hover:text-brand-cyan text-base py-1.5"
                >
                  {isFa ? 'فرم مشاوره آنلاین' : 'Consulting Form'}
                </button>
                <button
                  onClick={() => handleScrollTo('contact-consultation')}
                  className="w-full py-3 bg-brand-cyan text-[#050505] font-bold rounded-xl text-center text-sm"
                >
                  {isFa ? 'تماس با علی ضیایی' : 'Call Ali Ziaye'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section 
        className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center pt-8 md:pt-16 px-4"
        id="hero-section"
      >
        {/* Cybernetic Grid / Circle accents in the background */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full border border-brand-cyan/5 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[350px] h-[150px] md:h-[350px] rounded-full border border-dashed border-brand-cyan/5 pointer-events-none" />

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero text branding column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right rtl:lg:text-right ltr:lg:text-left">
            
            {/* Dynamic Rotating Chip Specialty */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] border border-white/10 mb-6 text-xs font-mono">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHeroBadge}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-brand-cyan"
                >
                  {heroBadges[activeHeroBadge].icon}
                  <span className="text-gray-300">
                    {isFa ? heroBadges[activeHeroBadge].labelFa : heroBadges[activeHeroBadge].labelEn}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Title Display */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white leading-none">
              {isFa ? (
                <>
                  خلق پلتفرم‌های <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-cyan to-white">
                    فوق هوشمند و مدرن
                  </span>
                </>
              ) : (
                <>
                  Crafting <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-cyan to-white">
                    Smarter Experiences
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline text */}
            <p className="mt-6 text-gray-400 text-sm sm:text-lg max-w-xl leading-relaxed">
              {isFa 
                ? 'پورتفولیو پیشرفته علی ضیایی؛ پیوند عمیق هوش مصنوعی مولد، ربات‌های هوشمند تلگرام، پرتال‌های مدرن وردپرس و گرافیک تبلیغاتی فلوئید.'
                : 'Advanced hub of Ali Ziaye. A deep synergy of generative AI systems, responsive Telegram TMA bots, custom headless WordPress, and rich graphic design.'}
            </p>

            {/* Quick interactive stats/cta buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('project-showcase')}
                id="hero-view-work-btn"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-brand-cyan text-[#050505] font-bold px-7 py-3.5 rounded-2xl hover:bg-brand-cyan/85 transition-all duration-300 shadow-bento-glow transform hover:-translate-y-0.5"
              >
                <span>{isFa ? 'مشاهده حلقه پروژه‌ها' : 'Explore Project Ring'}</span>
                {isFa ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              <button
                onClick={() => handleScrollTo('contact-consultation')}
                id="hero-consult-btn"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#111111] border border-white/10 hover:border-brand-cyan/30 hover:bg-brand-cyan/5 text-white font-bold px-7 py-3.5 rounded-2xl transition-all duration-300"
              >
                <span>{isFa ? 'مشاوره فنی رایگان' : 'Schedule Consulting'}</span>
              </button>
            </div>

            {/* Bullet list of priorities */}
            <div className="grid grid-cols-3 gap-6 mt-12 w-full text-right rtl:text-right ltr:text-left border-t border-white/10 pt-6">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-brand-cyan">01</div>
                <div className="text-xs text-gray-400 mt-1">{isFa ? 'الگوریتم‌های AI' : 'Generative AI'}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-brand-cyan">02</div>
                <div className="text-xs text-gray-400 mt-1">{isFa ? 'ربات تعاملی' : 'Interactive TMA'}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-brand-cyan">03</div>
                <div className="text-xs text-gray-400 mt-1">{isFa ? 'هدلس وردپرس' : 'Headless Web'}</div>
              </div>
            </div>

          </div>

          {/* Right futuristic terminal block column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-sm bg-[#111111] border border-white/10 rounded-3xl p-5 md:p-6 shadow-2xl relative overflow-hidden font-mono text-xs text-brand-cyan"
            >
              {/* Window control circles */}
              <div className="flex gap-1.5 mb-5 justify-end">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
              </div>

              {/* Running mock telemetry terminal */}
              <div className="space-y-3.5">
                <div className="flex justify-between text-gray-500 border-b border-white/10 pb-2">
                  <span>TERMINAL STREAM // ALI.Z</span>
                  <span>v2026.07</span>
                </div>

                <div className="text-brand-cyan flex items-center gap-1.5">
                  <span className="text-gray-500">&gt;</span>
                  <span>system_handshake --verified=true</span>
                </div>

                <div className="text-gray-400">
                  ESTABLISHING CRYPTOGRAPHIC LINK TO CONTAINER INGRESS...
                </div>

                <div className="text-[#00FFD1] font-bold">
                  [OK] CONNECTION SECURED ON PORT 3000
                </div>

                <div className="space-y-1">
                  <div className="text-gray-500">SYSTEM METRICS:</div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">- LATENCY:</span>
                    <span className="text-white">12ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">- SECRETS PANEL:</span>
                    <span className="text-brand-cyan">OK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">- CURRENT_UTC:</span>
                    <span className="text-white">2026-07-17</span>
                  </div>
                </div>

                <div className="text-brand-cyan flex items-center gap-1.5 animate-pulse">
                  <span className="text-gray-500">&gt;</span>
                  <span>awaiting_user_command_</span>
                </div>
              </div>

              {/* Custom scanning glass layer */}
              <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Specialties Block (Skills) */}
      <section className="bg-[#050505] border-t border-white/10">
        <SkillsSection isFa={isFa} />
      </section>

      {/* Biography Block (Bio) */}
      <section className="bg-[#050505] border-t border-white/10">
        <BioSection isFa={isFa} />
      </section>

      {/* 3D Rotating Project Ring Block */}
      <section className="bg-[#050505] border-t border-white/10">
        <ProjectRing isFa={isFa} />
      </section>

      {/* Contact Form & Inquiries Block */}
      <section className="bg-[#050505] border-t border-white/10">
        <ContactSection isFa={isFa} />
      </section>

      {/* Futuristic Footprint Footer */}
      <footer className="border-t border-white/10 bg-[#050505] py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          
          {/* Left copyright notice */}
          <div className="text-gray-500 text-center md:text-right rtl:text-right ltr:text-left">
            <p>
              &copy; {new Date().getFullYear()} {isFa ? 'تمامی حقوق محفوظ است. طراحی و توسعه توسط علی ضیایی' : 'Ali Ziaye. All software and graphics rights reserved.'}
            </p>
            <p className="text-xs text-gray-600 mt-1 font-mono">
              BUILD // VER_4.0_2026 // CONTAINER_OK // PORT_3000
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://t.me/Ali_ziaee1382" 
              target="_blank" 
              rel="noopener noreferrer"
              id="footer-tg-link"
              className="p-2 rounded-xl bg-[#111111] border border-white/10 hover:border-brand-cyan/30 text-gray-400 hover:text-white transition-all"
            >
              <MessageSquareCode className="w-5 h-5" />
            </a>
            <a 
              href="tel:09960826040"
              id="footer-phone-link"
              className="p-2 rounded-xl bg-[#111111] border border-white/10 hover:border-brand-cyan/30 text-gray-400 hover:text-white transition-all"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}
