import { useState } from 'react';
import { motion } from 'motion/react';
import { CodeXml, Monitor, Palette, MessageSquareCode, Sparkles, Cpu, Flame } from 'lucide-react';
import { SKILLS_DATA } from '../data';
import { Skill } from '../types';

interface SkillsSectionProps {
  isFa: boolean;
}

export default function SkillsSection({ isFa }: SkillsSectionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'MessageSquareCode':
        return <MessageSquareCode className="w-6 h-6" />;
      case 'CodeXml':
        return <CodeXml className="w-6 h-6" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      default:
        return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full max-w-6xl px-4 py-16 mx-auto relative" id="skills-specialties">
      {/* Accent glow lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Header text */}
      <div className="text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 animate-pulse text-brand-cyan" />
          <span>{isFa ? 'قابلیت‌ها و فناوری‌ها' : 'Core Tech Stack'}</span>
        </span>
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white mt-4">
          {isFa ? 'تخصص‌های برجسته من' : 'My Core Specialties'}
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
          {isFa
            ? 'تلفیقی از هنر، الگوریتم‌های هوش مصنوعی و کدنویسی استاندارد برای توسعه وب نسل آینده.'
            : 'Merging generative intelligence, flawless web engineering, and futuristic advertising aesthetics.'}
        </p>
      </div>

      {/* Grid listing the 5 specialities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {SKILLS_DATA.map((skill: Skill) => {
          const isSelected = selectedId === skill.id;
          const radius = 30;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (skill.percentage / 100) * circumference;

          return (
            <motion.div
              key={skill.id}
              onClick={() => setSelectedId(isSelected ? null : skill.id)}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                boxShadow: isSelected 
                  ? '0 10px 30px -10px rgba(0, 255, 209, 0.4), 0 0 20px rgba(0, 255, 209, 0.2)'
                  : '0 4px 20px rgba(0, 0, 0, 0.4)',
              }}
              className={`cursor-pointer bg-[#111111] border p-6 rounded-3xl backdrop-blur-xl relative overflow-hidden transition-all duration-300 flex flex-col justify-between h-[340px] ${
                isSelected 
                  ? 'border-brand-cyan/50 ring-1 ring-brand-cyan/25' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Dynamic glowing gradient corner inside */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-xl" />

              <div>
                {/* Header of skill card: Icon + radial progress circle */}
                <div className="flex items-center justify-between mb-6">
                  {/* Icon wrap with colorful gradient bg */}
                  <div className="p-3 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shadow-bento-glow">
                    {renderIcon(skill.iconName)}
                  </div>

                  {/* SVG Circle Progress */}
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r={radius}
                        className="stroke-gray-900 fill-transparent"
                        strokeWidth="3.5"
                      />
                      <motion.circle
                        cx="32"
                        cy="32"
                        r={radius}
                        className="fill-transparent"
                        stroke={`url(#grad-${skill.id})`}
                        strokeWidth="3.5"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        strokeLinecap="round"
                      />
                      {/* Define gradient for the stroke circles */}
                      <defs>
                        <linearGradient id={`grad-${skill.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#00FFD1' }} />
                          <stop offset="100%" style={{ stopColor: '#00E5C1' }} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="absolute font-mono text-xs font-bold text-white">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>

                {/* Skill description text */}
                <h3 className="text-lg font-sans font-bold text-white mb-2 text-right rtl:text-right ltr:text-left">
                  {isFa ? skill.titleFa : skill.titleEn}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-4 text-right rtl:text-right ltr:text-left">
                  {isFa ? skill.descriptionFa : skill.descriptionEn}
                </p>
              </div>

              {/* Skill specific tech tags footer */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5 justify-end rtl:justify-start">
                  {skill.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono text-gray-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md hover:text-brand-cyan hover:border-brand-cyan/20 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                  {skill.tags.length > 3 && (
                    <span className="text-[9px] font-mono text-gray-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md">
                      +{skill.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Custom explanatory details on select */}
      <div className="mt-8 text-center text-xs text-gray-500 font-mono">
        {isFa 
          ? '💡 روی هر تخصص کلیک کنید تا درخشش نئونی و مهارت‌های فرعی آن نمایان شود.' 
          : '💡 Click on any specialty card to activate its ambient halo and inspect metadata.'}
      </div>
    </div>
  );
}
