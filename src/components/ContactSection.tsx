import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareCode, Phone } from 'lucide-react';

interface ContactSectionProps {
  isFa: boolean;
}

export default function ContactSection({ isFa }: ContactSectionProps) {
  return (
    <div className="w-full max-w-4xl px-4 py-20 mx-auto relative text-center" id="contact-consultation">
      {/* Background accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-cyan/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
          {isFa ? 'ارتباط مستقیم و مشاوره' : 'Direct Connection'}
        </span>
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white mt-4">
          {isFa ? 'بیایید با هم بسازیم' : "Let's Build Together"}
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed max-w-lg">
          {isFa
            ? 'پروژه بعدی خود را آغاز کنید؛ چه یک هوش مصنوعی هوشمند، یک ربات تلگرام حرفه‌ای، یا طراحی یک برند لوکس. پاسخ‌گوی شما هستم.'
            : 'Initiate your next breakthrough project—be it a smart AI integration, a functional Telegram bot, or a premium visual brand identity.'}
        </p>
      </div>

      {/* Quick connect cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 max-w-2xl mx-auto w-full text-right rtl:text-right ltr:text-left">
        {/* Telegram card */}
        <a
          href="https://t.me/Ali_ziaee1382"
          target="_blank"
          rel="noopener noreferrer"
          id="telegram-link-card"
          className="flex items-center justify-between p-5 bg-[#111111] border border-white/10 rounded-2xl hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all duration-300 group"
        >
          <span className="text-brand-cyan font-mono text-xs sm:text-sm group-hover:underline">@Ali_ziaee1382</span>
          <div className="flex items-center gap-3">
            <div className="text-right rtl:text-right ltr:text-left">
              <div className="text-sm sm:text-base font-bold text-white">{isFa ? 'تلگرام و مینی‌اپ' : 'Telegram Portal'}</div>
              <div className="text-xs text-gray-500">{isFa ? 'پاسخ‌دهی سریع صوتی و متنی' : 'Direct consulting & bots'}</div>
            </div>
            <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan group-hover:scale-105 transition-transform duration-300">
              <MessageSquareCode className="w-5 h-5" />
            </div>
          </div>
        </a>

        {/* Phone card */}
        <a
          href="tel:09960826040"
          id="phone-link-card"
          className="flex items-center justify-between p-5 bg-[#111111] border border-white/10 rounded-2xl hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all duration-300 group"
        >
          <span className="text-brand-cyan font-mono text-xs sm:text-sm group-hover:underline">09960826040</span>
          <div className="flex items-center gap-3">
            <div className="text-right rtl:text-right ltr:text-left">
              <div className="text-sm sm:text-base font-bold text-white">{isFa ? 'تماس مستقیم تلفنی' : 'Direct Call'}</div>
              <div className="text-xs text-gray-500">{isFa ? 'هماهنگی و مشاوره فوری پروژه' : 'Quick phone consultation'}</div>
            </div>
            <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan group-hover:scale-105 transition-transform duration-300">
              <Phone className="w-5 h-5" />
            </div>
          </div>
        </a>
      </div>

      <div className="text-xs text-gray-500 font-mono mt-8">
        {isFa 
          ? '⚡ پاسخ‌گویی به تماس‌ها و پیام‌ها معمولاً در کمتر از چند ساعت انجام می‌شود.' 
          : '⚡ Phone calls and messages are typically answered within a few hours.'}
      </div>
    </div>
  );
}
