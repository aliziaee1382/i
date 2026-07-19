import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink, Globe, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

interface ProjectRingProps {
  isFa: boolean;
}

export default function ProjectRing({ isFa }: ProjectRingProps) {
  const [rotation, setRotation] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartX = useRef<number>(0);
  const dragStartRotation = useRef<number>(0);
  
  const count = PROJECTS_DATA.length;
  const angleStep = 360 / count;

  // Compute active index based on rotation
  useEffect(() => {
    // Normalize rotation between 0 and 360
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    // Find index that is closest to 0 degrees (front of the ring)
    // Front is at theta = 180 or 0 depending on view direction.
    // If cards are placed at index * angleStep, they align with the front when:
    // (index * angleStep + rotation) % 360 is close to 180
    let closestIndex = 0;
    let minDiff = 360;

    for (let i = 0; i < count; i++) {
      const cardAngle = (i * angleStep + rotation) % 360;
      const normalizedCardAngle = (cardAngle + 360) % 360;
      // We want the card facing the front (180 degrees is the absolute front)
      const diff = Math.min(
        Math.abs(normalizedCardAngle - 180),
        360 - Math.abs(normalizedCardAngle - 180)
      );
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    }
    setActiveIndex(closestIndex);
  }, [rotation, count, angleStep]);

  const handleNext = () => {
    setRotation((prev) => prev - angleStep);
  };

  const handlePrev = () => {
    setRotation((prev) => prev + angleStep);
  };

  // Drag handlers for mouse/touch rotation
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragStartRotation.current = rotation;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const deltaX = clientX - dragStartX.current;
    // Sensitivity of dragging rotation
    const sensitivity = 0.35;
    setRotation(dragStartRotation.current + deltaX * sensitivity);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Snap to nearest angle step
    setRotation((prev) => {
      const snapAngle = Math.round(prev / angleStep) * angleStep;
      return snapAngle;
    });
  };

  // Rotate a specific card to the front (180 degrees)
  const handleCardClick = (idx: number) => {
    // Calculate rotation to make idx-th card face 180 degrees
    // We want (idx * angleStep + targetRotation) === 180
    // => targetRotation = 180 - idx * angleStep
    const currentRotMod = Math.round(rotation / 360) * 360;
    const targetRotationBase = 180 - idx * angleStep;
    
    // Find shortest rotation path
    let targetRotation = currentRotMod + targetRotationBase;
    while (targetRotation - rotation > 180) targetRotation -= 360;
    while (targetRotation - rotation < -180) targetRotation += 360;

    setRotation(targetRotation);
  };

  const activeProject: Project = PROJECTS_DATA[activeIndex];

  return (
    <div className="relative w-full py-16 flex flex-col items-center select-none overflow-hidden" id="project-showcase">
      {/* Title block */}
      <div className="text-center mb-16 px-4">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
          {isFa ? 'حلقه خلاقیت و نوآوری' : 'Creative Innovation Ring'}
        </span>
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white mt-4">
          {isFa ? 'پروژه‌های برجسته شخصی' : 'Featured Personal Projects'}
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
          {isFa
            ? 'حلقه سه‌بعدی پروژه‌ها را بچرخانید یا درگ کنید تا شاهکارها را کشف کنید.'
            : 'Spin or drag the 3D ring to explore various software & design masterpieces.'}
        </p>
      </div>

      {/* The 3D Stage */}
      <div 
        className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        {/* Ring background accent glow */}
        <div className="absolute w-[350px] md:w-[600px] h-[100px] md:h-[150px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none transform -translate-y-6" />

        {/* Outer orbital track line */}
        <div 
          className="absolute border border-dashed border-white/5 rounded-full pointer-events-none transform -rotate-x-12"
          style={{
            width: '600px',
            height: '180px',
            transform: 'perspective(1000px) rotateX(72deg)',
          }}
        />

        {/* 3D Ring Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {PROJECTS_DATA.map((proj, idx) => {
            // Angle of this specific card in degrees
            const cardAngle = idx * angleStep + rotation;
            const cardRad = (cardAngle * Math.PI) / 180;

            // X coordinates on the ellipse
            const R_x = window.innerWidth < 768 ? 140 : 280; // horizontal radius
            const R_z = window.innerWidth < 768 ? 90 : 180;  // depth radius

            const x = Math.sin(cardRad) * R_x;
            const z = Math.cos(cardRad) * R_z;

            // We want the card to scale up at the front (where cos(rad) is closest to -1 for standard facing, 
            // but let's align front with cos(rad) close to -1: 180 degrees, cos(180) = -1.
            // Let's make cos(rad) = -1 mean the absolute front (so we multiply cos by -1 for calculation):
            const depthFactor = -Math.cos(cardRad); // varies from -1 (back) to +1 (front)
            const normalizedDepth = (depthFactor + 1) / 2; // 0 (back) to 1 (front)

            const scale = 0.65 + 0.35 * normalizedDepth;
            const opacity = 0.25 + 0.75 * normalizedDepth;
            const zIndex = Math.round(normalizedDepth * 100);

            // Subtle rotation around Y axis depending on position to create cylinder/ring effect
            // A card at the side (e.g. 90 or 270 deg) is rotated more around Y.
            const rotateY = Math.sin(cardRad) * -35; 

            const isCurrent = activeIndex === idx;

            return (
              <div
                key={proj.id}
                onClick={() => handleCardClick(idx)}
                className="absolute transition-shadow duration-500 rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  transform: `translateX(${x}px) translateZ(${z}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity: opacity,
                  zIndex: zIndex,
                  width: window.innerWidth < 768 ? '180px' : '300px',
                  height: window.innerWidth < 768 ? '135px' : '205px',
                  boxShadow: isCurrent 
                    ? '0 20px 40px -15px rgba(0, 255, 209, 0.5), 0 0 30px rgba(0, 255, 209, 0.2)' 
                    : '0 4px 20px rgba(0,0,0,0.5)',
                  border: isCurrent 
                    ? '2px solid rgba(0, 255, 209, 0.8)' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Image Overlay with glassmorphism tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10" />
                
                {/* Neon glow border effect inside */}
                {isCurrent && (
                  <div className="absolute inset-0 border-2 border-brand-cyan/30 rounded-2xl animate-pulse pointer-events-none z-20" />
                )}

                <img
                  src={proj.imageUrl}
                  alt={isFa ? proj.titleFa : proj.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-110"
                />

                {/* Card footer title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-20 text-right rtl:text-right ltr:text-left">
                  <div className="flex items-center gap-1.5 text-[10px] text-brand-cyan font-mono mb-1 justify-end rtl:justify-start">
                    <Sparkles className="w-3 h-3 text-brand-cyan" />
                    <span>{isFa ? proj.categoryFa : proj.categoryEn}</span>
                  </div>
                  <h3 className="text-white font-bold text-xs md:text-sm truncate">
                    {isFa ? proj.titleFa : proj.titleEn}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Manual Navigation Arrows */}
      <div className="flex items-center gap-6 mt-8 z-20">
        <button
          onClick={handlePrev}
          id="prev-btn"
          className="p-3 rounded-full bg-[#111111] border border-white/10 text-white hover:text-brand-cyan hover:border-brand-cyan/50 transition-all duration-300 backdrop-blur"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="font-mono text-xs text-gray-500">
          {activeIndex + 1} / {count}
        </span>

        <button
          onClick={handleNext}
          id="next-btn"
          className="p-3 rounded-full bg-[#111111] border border-white/10 text-white hover:text-brand-cyan hover:border-brand-cyan/50 transition-all duration-300 backdrop-blur"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Full dynamic active project detail panel */}
      <div className="w-full max-w-4xl px-4 mt-12 z-10" id="project-detail-panel">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-[#111111] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl relative overflow-hidden"
          >
            {/* Ambient neon backdrop gradient glow matching project category */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-brand-cyan/10 to-transparent blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              {/* Project main landscape shot */}
              <div className="w-full md:w-2/5 aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group relative shadow-inner">
                <img
                  src={activeProject.imageUrl}
                  alt={isFa ? activeProject.titleFa : activeProject.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a
                    href={activeProject.link}
                    className="flex items-center gap-2 text-xs text-[#050505] bg-brand-cyan px-3 py-1.5 rounded-lg font-bold hover:bg-brand-cyan/85 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{isFa ? 'مشاهده دمو' : 'View Demo'}</span>
                  </a>
                </div>
              </div>

              {/* Text metadata details */}
              <div className="w-full md:w-3/5 text-right rtl:text-right ltr:text-left flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 mb-2 justify-end rtl:justify-start">
                    <span className="text-[11px] font-mono uppercase text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-0.5 rounded-full">
                      {isFa ? activeProject.categoryFa : activeProject.categoryEn}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-3">
                    {isFa ? activeProject.titleFa : activeProject.titleEn}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5">
                    {isFa ? activeProject.detailsFa : activeProject.detailsEn}
                  </p>
                </div>

                {/* Tech tags */}
                <div>
                  <div className="text-[11px] font-mono text-gray-500 uppercase mb-2">
                    {isFa ? 'فناوری‌های کلیدی:' : 'Key Stack:'}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end rtl:justify-start mb-6">
                    {activeProject.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-lg font-mono hover:border-brand-cyan/30 transition-all duration-300 hover:text-brand-cyan"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Demo link button */}
                  <a
                    href={activeProject.link}
                    id={`project-demo-btn-${activeProject.id}`}
                    className="inline-flex items-center gap-2 bg-brand-cyan text-[#050505] font-bold px-5 py-2.5 rounded-xl hover:bg-brand-cyan/85 transition-all duration-300 shadow-bento-glow transform hover:-translate-y-0.5 group"
                  >
                    <span>{isFa ? 'باز کردن وب‌سایت پروژه' : 'Launch Live App'}</span>
                    <Globe className="w-4 h-4 text-[#050505] group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
