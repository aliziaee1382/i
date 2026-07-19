import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Sparkles, Terminal, User, Phone } from 'lucide-react';

interface BioSectionProps {
  isFa: boolean;
}

export default function BioSection({ isFa }: BioSectionProps) {
  const [activeTab, setActiveTab] = useState<'story' | 'system'>('story');

  return (
    <div className="w-full max-w-6xl px-4 py-16 mx-auto relative" id="about-biography">
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-cyan/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-brand-cyan/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column: Visual Avatar Card (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#111111] border border-white/10 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden flex flex-col items-center text-center shadow-2xl"
          >
            {/* Glowing corner highlights */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-cyan/40 rounded-tl-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-cyan/40 rounded-br-3xl pointer-events-none" />

            {/* Profile Avatar / Mock scanner layout */}
            <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-brand-cyan to-white animate-spin-slow mb-6">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#111111] p-1 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#161616] to-[#0d0d0d] flex items-center justify-center relative overflow-hidden group">
                  <User className="w-16 h-16 text-gray-300 group-hover:scale-110 transition-transform duration-500" />
                  {/* Target scanner line */}
                  <div className="absolute left-0 right-0 h-[2px] bg-brand-cyan shadow-glow animate-scan pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Name & Basic Info */}
            <h3 className="text-2xl font-sans font-bold text-white tracking-tight">
              {isFa ? 'علی ضیایی' : 'Ali Ziaye'}
            </h3>
            <p className="text-brand-cyan font-mono text-xs mt-1 tracking-wider uppercase">
              {isFa ? 'خالق راهکارهای دیجیتال و هوش مصنوعی' : 'Digital Craftsman & AI Innovator'}
            </p>

            <div className="w-full border-t border-white/10 my-5" />

            {/* Information Grid */}
            <div className="w-full space-y-3.5 text-right rtl:text-right ltr:text-left text-sm">
              <div className="flex items-center gap-3 text-gray-400 justify-end rtl:justify-start">
                <span>{isFa ? 'تهران، ایران' : 'Tehran, Iran'}</span>
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
              </div>
              <div className="flex items-center gap-3 text-gray-400 justify-end rtl:justify-start">
                <span className="font-mono text-xs">09960826040</span>
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
              </div>
              <div className="flex items-center gap-3 text-gray-400 justify-end rtl:justify-start">
                <span>{isFa ? 'فعال برای پروژه‌های جدید' : 'Available for New Projects'}</span>
                <Calendar className="w-4 h-4 text-[#00FFD1] shrink-0 animate-pulse" />
              </div>
            </div>

            {/* Micro Stats or system badges */}
            <div className="flex gap-2.5 mt-6 w-full">
              <div className="flex-1 bg-[#050505] rounded-xl py-2 px-1 text-center border border-white/10">
                <div className="text-lg font-bold text-white font-mono">30+</div>
                <div className="text-[10px] text-gray-500">{isFa ? 'پروژه موفق' : 'Projects Done'}</div>
              </div>
              <div className="flex-1 bg-[#050505] rounded-xl py-2 px-1 text-center border border-white/10">
                <div className="text-lg font-bold text-white font-mono">5+</div>
                <div className="text-[10px] text-gray-500">{isFa ? 'سال تجربه' : 'Years Experience'}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column: Interactive Biography Content (8 cols) */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Navigation Tab buttons */}
          <div className="flex bg-[#111111] p-1.5 rounded-2xl border border-white/10 max-w-sm w-full mb-8 self-end rtl:self-start gap-1 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('story')}
              id="bio-tab-story"
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'story'
                  ? 'bg-brand-cyan text-[#050505] shadow-bento-glow'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <User className="w-4 h-4" />
              <span>{isFa ? 'داستان من' : 'My Story'}</span>
            </button>
            <button
              onClick={() => setActiveTab('system')}
              id="bio-tab-system"
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'system'
                  ? 'bg-brand-cyan text-[#050505] shadow-bento-glow'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>{isFa ? 'سیستم هسته' : 'Core Diagnostics'}</span>
            </button>
          </div>

          {/* Dynamic Tab Body */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl relative min-h-[340px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeTab === 'story' && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, x: isFa ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isFa ? -20 : 20 }}
                  transition={{ duration: 0.35 }}
                  className="text-right rtl:text-right ltr:text-left space-y-5"
                >
                  <div className="flex items-center gap-2 text-brand-cyan mb-2 justify-end rtl:justify-start">
                    <Sparkles className="w-4 h-4" />
                    <h4 className="font-mono text-sm uppercase tracking-wider">
                      {isFa ? 'بیوگرافی خلاق' : 'Creative Manifesto'}
                    </h4>
                  </div>
                  <h3 className="text-xl md:text-3xl font-sans font-bold text-white leading-tight">
                    {isFa
                      ? 'همگام‌سازی مرزهای تکنولوژی و هنر بصری مدرن'
                      : 'Synchronizing the borders of advanced code and digital aesthetics'}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {isFa
                      ? 'من علی ضیایی هستم؛ یک کاوشگر فناوری و خالق وب که به ترکیب کردن الگوریتم‌های پیشرفته هوش مصنوعی با طراحی‌های خیره‌کننده بصری و انیمیشن‌های روان علاقه‌مند است. برای من وب‌سایت‌ها فقط کدهای خام نیستند، بلکه موجوداتی زنده و تعاملی هستند که باید تجربه جادویی به کاربر هدیه دهند.'
                      : 'I am Ali Ziaye, a technology explorer and web creator who builds interactive bridges between advanced generative AI algorithms and highly expressive, ultra-fluid graphic interfaces. To me, websites are not just raw commands—they are interactive worlds designed to offer a magical human experience.'}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {isFa
                      ? 'در طول سال‌های گذشته تخصص خودم را در برنامه‌نویسی عامل‌های هوشمند و ربات‌های تلگرامی پیشرفته، توسعه وردپرس هدلس و طراحی شاهکارهای تبلیغاتی تقویت کرده‌ام. با تکیه بر ذهن تحلیل‌گر و ابزار آفرینش هنر، پاسخ‌گوی نیازهای منحصربه‌فرد کسب‌وکارها در دنیای مدرن هستم.'
                      : 'Over the years, I have sharpened my expertise in programming intelligent background agents, autonomous Telegram bots, bespoke high-speed headless CMS networks, and beautiful visual advertisements. Merging analytical science and custom aesthetics, I design tailored corporate suites that dominate the digital grid.'}
                  </p>
                </motion.div>
              )}

              {activeTab === 'system' && (
                <motion.div
                  key="system"
                  initial={{ opacity: 0, x: isFa ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isFa ? -20 : 20 }}
                  transition={{ duration: 0.35 }}
                  className="font-mono text-xs text-brand-cyan space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-500">SYSTEM ARCHITECTURE STATUS</span>
                    <span className="animate-pulse font-bold text-[#00FFD1]">● SECURE & ACTIVE</span>
                  </div>

                  <div className="space-y-2 max-h-[220px] overflow-y-auto pr-2 scrollbar-thin">
                    <div>&gt; initialize_kernel_sequence --user_id=ali_ziaye_1382</div>
                    <div className="text-brand-cyan">&gt; LOADING CORES: Artificial_Intelligence, Telegram_TMA, Headless_WP...</div>
                    <div className="text-gray-400">[OK] Google Gemini API Client: Provisioned and Ready</div>
                    <div className="text-gray-400">[OK] React Router + motion Framer: Hardware Acceleration Enabled</div>
                    <div className="text-gray-400">[OK] Tailwind 4.0 CSS Engine: Sub-grid Compiling OK</div>
                    <div>&gt; system_stats --inspect</div>
                    <div className="grid grid-cols-2 gap-4 text-gray-300 mt-2">
                      <div className="bg-[#050505] p-2.5 rounded-lg border border-white/10">
                        <span className="text-gray-500">API CHANNELS:</span>
                        <span className="text-brand-cyan font-bold ml-1">WEBSOCKET / STREAM</span>
                      </div>
                      <div className="bg-[#050505] p-2.5 rounded-lg border border-white/10">
                        <span className="text-gray-500">DEVELOPER CODES:</span>
                        <span className="text-brand-cyan font-bold ml-1">JS / TS / PHP / PYTHON</span>
                      </div>
                      <div className="bg-[#050505] p-2.5 rounded-lg border border-white/10">
                        <span className="text-gray-500">DESIGN PRESETS:</span>
                        <span className="text-brand-cyan font-bold ml-1">BENTO_GRID_THEME</span>
                      </div>
                      <div className="bg-[#050505] p-2.5 rounded-lg border border-white/10">
                        <span className="text-gray-500">LOCAL SERVER INGRESS:</span>
                        <span className="text-[#00FFD1] font-bold ml-1">PORT 3000 SSL OK</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle Diagnostic tag */}
            <div className="mt-6 border-t border-white/10 pt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
              <span>LOC_TIME_SYNC_UTC: 2026-07-17</span>
              <span>PLATFORM_NODE: VITE_REVERSE_PROXY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
