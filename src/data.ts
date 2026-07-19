import { Skill, Project, TimelineEvent } from './types';

export const SKILLS_DATA: Skill[] = [
  {
    id: 'ai',
    titleFa: 'هوش مصنوعی (AI)',
    titleEn: 'Artificial Intelligence',
    descriptionFa: 'توسعه برنامه‌های مبتنی بر مدل‌های زبانی بزرگ (LLM)، مهندسی پرامپت هوشمند، سیستم‌های خودکار و ابزارهای تولید محتوای هوشمند با Gemini.',
    descriptionEn: 'Developing systems powered by Large Language Models (LLMs), advanced prompt engineering, autonomous agents, and smart content creation tools.',
    percentage: 95,
    iconName: 'Sparkles',
    color: 'from-violet-500 to-fuchsia-600',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    tags: ['Gemini API', 'LLMs', 'Prompt Eng.', 'RAG', 'AI Agents']
  },
  {
    id: 'tg-bot',
    titleFa: 'ربات‌های پیشرفته تلگرام',
    titleEn: 'Telegram Bot Architect',
    descriptionFa: 'خلق ربات‌های تعاملی و مینی‌اپلیکیشن‌های پیشرفته داخل تلگرام (TMA)، خودکارسازی فرایندها و اتصال ایمن به درگاه‌های پرداخت و دیتابیس.',
    descriptionEn: 'Creating rich interactive Telegram bots and Mini Apps (TMA) with custom database integrations, payment gateways, and background workers.',
    percentage: 98,
    iconName: 'MessageSquareCode',
    color: 'from-sky-400 to-blue-600',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    tags: ['Telegraf', 'Telegram Mini Apps', 'Node.js', 'Webhooks', 'GramJS']
  },
  {
    id: 'wordpress',
    titleFa: 'وردپرس مدرن (WordPress)',
    titleEn: 'Custom WordPress Dev',
    descriptionFa: 'برنامه‌نویسی و سفارشی‌سازی قالب و افزونه، افزایش خیره‌کننده سرعت بارگذاری (Lighthouse 95+) و راه‌اندازی وردپرس به صورت Headless.',
    descriptionEn: 'Developing bespoke themes & plugins, extreme page speed optimization, secure custom WooCommerce setups, and headless CMS architecture.',
    percentage: 92,
    iconName: 'CodeXml',
    color: 'from-blue-500 to-indigo-600',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    tags: ['PHP', 'Plugin Dev', 'WooCommerce', 'Headless WP', 'SEO Opt.']
  },
  {
    id: 'web-dev',
    titleFa: 'طراحی و توسعه وب‌سایت',
    titleEn: 'Full-Stack Web Dev',
    descriptionFa: 'طراحی پورتفولیوهای خیره‌کننده، پنل‌های کاربری لوکس و وب‌سایت‌های پویا با استفاده از آخرین فریم‌ورک‌های مدرن مانند React و Tailwind CSS.',
    descriptionEn: 'Crafting stunning single-page applications, administrative dashboards, and highly responsive modern websites using React, Tailwind and Vite.',
    percentage: 96,
    iconName: 'Monitor',
    color: 'from-emerald-400 to-teal-600',
    glowColor: 'rgba(52, 211, 153, 0.4)',
    tags: ['React', 'TypeScript', 'Tailwind 4.0', 'Motion', 'Vite']
  },
  {
    id: 'banner',
    titleFa: 'طراحی بنر و گرافیک مدرن',
    titleEn: 'Banner & Graphic Design',
    descriptionFa: 'خلق شاهکارهای بصری، بنرهای تبلیغاتی گیرا، بنرهای متحرک (GIF/Motion)، کاورهای شبکه‌های اجتماعی و هویت بصری اختصاصی با روح سایبرپانک.',
    descriptionEn: 'Creating visual art, high-conversion static & animated banners, social media marketing assets, and cohesive cyber-punk digital brand identities.',
    percentage: 90,
    iconName: 'Palette',
    color: 'from-rose-500 to-orange-500',
    glowColor: 'rgba(244, 63, 94, 0.4)',
    tags: ['Figma', 'Photoshop', 'Illustrator', 'Motion Graphics', 'UI Design']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    titleFa: 'ربات‌های پیشرفته تلگرام',
    titleEn: 'Advanced Telegram Bots',
    descriptionFa: 'توسعه انواع ربات‌های هوشمند تلگرام، ربات‌های معاملاتی، ضداسپم، ربات‌های مینی‌اپ و TMA.',
    descriptionEn: 'Developing intelligent Telegram bots, trading systems, anti-spam assistants, and interactive Mini Apps (TMA).',
    categoryFa: 'ربات تلگرام',
    categoryEn: 'Telegram Bot',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    techTags: ['Telegraf', 'Node.js', 'Webhooks', 'Telegram API'],
    link: '#',
    detailsFa: 'پروژه‌های رباتیک تلگرام با پایداری حداکثری، اتصال به دیتابیس‌های ابری و پردازش پیام‌های همزمان در بستر وب‌هوک.',
    detailsEn: 'Ultra-stable Telegram bot architectures connected to cloud databases, processing asynchronous message packets with fast webhooks.'
  },
  {
    id: 2,
    titleFa: 'سرویس آپلود اختصاصی',
    titleEn: 'Dedicated Upload Service',
    descriptionFa: 'سیستم آپلودر امن و پرسرعت ابری برای ذخیره‌سازی فایل‌ها با قابلیت ارائه لینک مستقیم.',
    descriptionEn: 'High-performance cloud storage & file uploader facilitating secure transfers and instant hotlinking.',
    categoryFa: 'ابزار وب',
    categoryEn: 'Web Tool',
    imageUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800',
    techTags: ['React', 'Node.js', 'Cloud Storage', 'REST API'],
    link: '#',
    detailsFa: 'پلتفرم توزیع فایل بهینه‌سازی شده مجهز به کلاینت درگ‌اند‌دراپ تعاملی و مکانیزم‌های پیشرفته محافظت از پسوند و حجم فایل.',
    detailsEn: 'Streamlined file distribution hub integrated with sleek drag-and-drop React upload mechanics and payload validation layers.'
  },
  {
    id: 3,
    titleFa: 'کانال‌های قیمت‌گذاری ارز و طلا',
    titleEn: 'Currency & Gold Price Channels',
    descriptionFa: 'سیستم ارسال کاملاً خودکار و لحظه‌ای نرخ طلا، سکه و انواع ارزهای دیجیتال به کانال‌های اطلاع‌رسانی.',
    descriptionEn: 'Automated live broadcasting agents fetching and pushing real-time gold, fiat, and crypto prices to selected channels.',
    categoryFa: 'خودکارسازی',
    categoryEn: 'Automation Agent',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
    techTags: ['Node.js', 'Cron Jobs', 'Web Scraping', 'Telegram API'],
    link: '#',
    detailsFa: 'عامل‌های هوشمند استخراج نرخ که ثانیه به ثانیه بازارهای مالی را پایش کرده و قیمت‌ها را با ساختار بصری خیره‌کننده به شبکه‌های تلگرام ارسال می‌کنند.',
    detailsEn: 'Custom web scraper agents monitoring financial feeds, structuring clean cards and pushing updates to high-traffic social media hubs.'
  },
  {
    id: 4,
    titleFa: 'فروشگاه آنلاین ابزارآلات (ابزار مارت)',
    titleEn: 'Industrial Tools Web Store',
    descriptionFa: 'پلتفرم تجارت الکترونیک مدرن و متمرکز برای خرید آنلاین ابزارآلات صنعتی و ابزار دستی سنگین.',
    descriptionEn: 'A high-end industrial e-commerce concept store specializing in power tools and heavy hardware distribution.',
    categoryFa: 'فروشگاه وب',
    categoryEn: 'E-Commerce Store',
    imageUrl: 'https://images.unsplash.com/photo-1530124566582-ab0513093670?auto=format&fit=crop&q=80&w=800',
    techTags: ['React', 'Tailwind CSS', 'Framer Motion', 'Shopping Cart'],
    link: '#',
    detailsFa: 'یک نمونه سایت فروش ابزار با پالت رنگی گرم و صنعتی، فیلترهای پیشرفته دسته‌بندی ابزارآلات، گالری سه‌بعدی محصولات و فلوهای خرید تعاملی لوکس.',
    detailsEn: 'High-fidelity tool retail mockup built on custom grids. Leverages fluid product transitions, category filter blocks, and responsive order flows.'
  },
  {
    id: 5,
    titleFa: 'و پروژه‌های دیگر...',
    titleEn: 'And Other Innovations...',
    descriptionFa: 'مجموعه‌ای از اسکریپت‌های خودکارسازی، لندینگ پیج‌های تک‌صفحه‌ای لوکس و سامانه‌های مدیریتی.',
    descriptionEn: 'A rich assortment of automation scripts, single-page marketing landing pages, and administrative portals.',
    categoryFa: 'سایر پروژه‌ها',
    categoryEn: 'More Projects',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    techTags: ['TypeScript', 'Python', 'Web design', 'Automation'],
    link: '#',
    detailsFa: 'خلاقیت‌های متداوم در توسعه کدهای منبع باز و برطرف‌سازی نیازهای فناورانه صاحبان کسب‌وکار.',
    detailsEn: 'Continuous research and open-source contributions addressing unique challenges on the modern web.'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [];
