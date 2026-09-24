import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../theme/colors';

// Импорт логотипов
import LogoMainImg from '../assets/LogoMain.png';
import LogoImg from '../assets/Logo.png';

// Импорт изображений команды
import MaximImg from '../assets/Maxim.PNG';
import ArtemImg from '../assets/Artem.PNG';
import TolikImg from '../assets/Tolik.PNG';

// Дорогой reveal-эффект с размытием
const premiumReveal = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 40 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const PromoFolderIcon = ({ color, size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
       style={{ filter: `drop-shadow(0 0 8px ${color}80)` }}>
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
  </svg>
);

const PromoContainerIcon = ({ color, size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
       style={{ filter: `drop-shadow(0 0 8px ${color}80)` }}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

// --- SVG ВИЗУАЛИЗАЦИЯ УСТРОЙСТВА LES KR-118RGE ---
const LesDeviceGraphic = () => (
  <div style={{ width: '100%', marginBottom: '25px', display: 'flex', justifyContent: 'center' }}>
    <svg viewBox="0 0 800 280" style={{ width: '100%', maxWidth: '750px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' }}>
      <defs>
        <linearGradient id="metal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8f9fa" />
          <stop offset="15%" stopColor="#e9ecef" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="85%" stopColor="#dee2e6" />
          <stop offset="100%" stopColor="#ced4da" />
        </linearGradient>
        <linearGradient id="darkMetal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#adb5bd" />
          <stop offset="100%" stopColor="#6c757d" />
        </linearGradient>
        <linearGradient id="blackPlastic" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#343a40" />
          <stop offset="100%" stopColor="#212529" />
        </linearGradient>
        <filter id="ledGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <style>
          {`
            @keyframes pulse { 0% { opacity: 0.7; } 50% { opacity: 1; } 100% { opacity: 0.7; } }
            @keyframes blink { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } 70% { opacity: 0.2; } 80% { opacity: 1; } }
            .led-power { animation: pulse 2s infinite; }
            .led-eth { animation: blink 1.5s infinite; }
          `}
        </style>
      </defs>

      {/* ФРОНТАЛЬНАЯ ПАНЕЛЬ */}
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="800" height="110" rx="3" fill="url(#metal)" stroke="#adb5bd" strokeWidth="1" />
        <rect x="0" y="0" width="800" height="4" fill="#ffffff" opacity="0.6" />
        <rect x="0" y="108" width="800" height="2" fill="#6c757d" opacity="0.5" />
        <rect x="0" y="0" width="10" height="110" fill="url(#darkMetal)" />
        <rect x="790" y="0" width="10" height="110" fill="url(#darkMetal)" />
        <circle cx="5" cy="15" r="2.5" fill="#e9ecef" stroke="#495057" strokeWidth="0.5" />
        <circle cx="5" cy="95" r="2.5" fill="#e9ecef" stroke="#495057" strokeWidth="0.5" />
        <circle cx="795" cy="15" r="2.5" fill="#e9ecef" stroke="#495057" strokeWidth="0.5" />
        <circle cx="795" cy="95" r="2.5" fill="#e9ecef" stroke="#495057" strokeWidth="0.5" />

        <g transform="translate(60, 50)">
          <text x="0" y="0" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="42" letterSpacing="-2" fill="#343a40">les</text>
          <text x="75" y="-20" fontFamily="sans-serif" fontWeight="bold" fontSize="10" fill="#343a40">®</text>
          <rect x="-2" y="-35" width="85" height="2" fill="url(#metal)" />
          <rect x="-2" y="-29" width="85" height="2" fill="url(#metal)" />
          <rect x="-2" y="-23" width="85" height="2" fill="url(#metal)" />
          <rect x="-2" y="-17" width="85" height="2" fill="url(#metal)" />
          <rect x="-2" y="-11" width="85" height="2" fill="url(#metal)" />
          <rect x="-2" y="-5" width="85" height="2" fill="url(#metal)" />
          <text x="0" y="20" fontFamily="sans-serif" fontWeight="900" fontSize="14" letterSpacing="0.5" fill="#212529">KR-118RGE</text>
        </g>

        <circle cx="280" cy="70" r="5" fill="#2ecc71" filter="url(#ledGlow)" className="led-power" />
        <rect x="235" y="82" width="510" height="12" rx="6" fill="#111" />
        <text x="250" y="91" fontFamily="sans-serif" fontWeight="bold" fontSize="9" fill="#f8f9fa">POWER</text>
      </g>

      {/* ЗАДНЯЯ ПАНЕЛЬ */}
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="800" height="110" rx="3" fill="url(#metal)" stroke="#adb5bd" strokeWidth="1" />
        <rect x="0" y="0" width="800" height="4" fill="#ffffff" opacity="0.6" />
        <rect x="0" y="108" width="800" height="2" fill="#6c757d" opacity="0.5" />
        <rect x="0" y="0" width="10" height="110" fill="url(#darkMetal)" />
        <rect x="790" y="0" width="10" height="110" fill="url(#darkMetal)" />
        <circle cx="5" cy="15" r="2.5" fill="#e9ecef" stroke="#495057" strokeWidth="0.5" />
        <circle cx="5" cy="95" r="2.5" fill="#e9ecef" stroke="#495057" strokeWidth="0.5" />
        <circle cx="795" cy="15" r="2.5" fill="#e9ecef" stroke="#495057" strokeWidth="0.5" />
        <circle cx="795" cy="95" r="2.5" fill="#e9ecef" stroke="#495057" strokeWidth="0.5" />

        <g transform="translate(30, 10)">
          <rect x="0" y="0" width="120" height="90" rx="6" fill="none" stroke="#343a40" strokeWidth="1.5" />
          <rect x="0" y="0" width="120" height="16" rx="3" fill="#343a40" />
          <text x="60" y="11" fontFamily="sans-serif" fontWeight="bold" fontSize="10" fill="#fff" textAnchor="middle">GPI OUT 9-12 REL</text>
          <g transform="translate(25, 20)">
            <path d="M 0,0 L 70,0 L 65,22 L 5,22 Z" fill="url(#darkMetal)" stroke="#343a40" strokeWidth="1" />
            <path d="M 12,4 L 58,4 L 54,16 L 16,16 Z" fill="#212529" />
            <circle cx="18" cy="8" r="1.5" fill="#f1c40f"/><circle cx="26" cy="8" r="1.5" fill="#f1c40f"/><circle cx="34" cy="8" r="1.5" fill="#f1c40f"/><circle cx="42" cy="8" r="1.5" fill="#f1c40f"/><circle cx="50" cy="8" r="1.5" fill="#f1c40f"/>
            <circle cx="22" cy="13" r="1.5" fill="#f1c40f"/><circle cx="30" cy="13" r="1.5" fill="#f1c40f"/><circle cx="38" cy="13" r="1.5" fill="#f1c40f"/><circle cx="46" cy="13" r="1.5" fill="#f1c40f"/>
            <circle cx="-5" cy="11" r="3" fill="url(#metal)" stroke="#495057" strokeWidth="1"/>
            <circle cx="75" cy="11" r="3" fill="url(#metal)" stroke="#495057" strokeWidth="1"/>
          </g>
          <rect x="0" y="74" width="120" height="16" rx="3" fill="#343a40" />
          <text x="60" y="85" fontFamily="sans-serif" fontWeight="bold" fontSize="10" fill="#fff" textAnchor="middle">GPI OUT 1-8</text>
          <g transform="translate(25, 48)">
            <path d="M 0,0 L 70,0 L 65,22 L 5,22 Z" fill="url(#darkMetal)" stroke="#343a40" strokeWidth="1" />
            <path d="M 12,4 L 58,4 L 54,16 L 16,16 Z" fill="#212529" />
            <circle cx="18" cy="8" r="1.5" fill="#f1c40f"/><circle cx="26" cy="8" r="1.5" fill="#f1c40f"/><circle cx="34" cy="8" r="1.5" fill="#f1c40f"/><circle cx="42" cy="8" r="1.5" fill="#f1c40f"/><circle cx="50" cy="8" r="1.5" fill="#f1c40f"/>
            <circle cx="22" cy="13" r="1.5" fill="#f1c40f"/><circle cx="30" cy="13" r="1.5" fill="#f1c40f"/><circle cx="38" cy="13" r="1.5" fill="#f1c40f"/><circle cx="46" cy="13" r="1.5" fill="#f1c40f"/>
            <circle cx="-5" cy="11" r="3" fill="url(#metal)" stroke="#495057" strokeWidth="1"/>
            <circle cx="75" cy="11" r="3" fill="url(#metal)" stroke="#495057" strokeWidth="1"/>
          </g>
        </g>

        <g transform="translate(160, 10)">
          <rect x="0" y="0" width="100" height="42" rx="6" fill="none" stroke="#343a40" strokeWidth="1.5" />
          <rect x="0" y="0" width="100" height="16" rx="3" fill="#343a40" />
          <text x="50" y="11" fontFamily="sans-serif" fontWeight="bold" fontSize="10" fill="#fff" textAnchor="middle">GPI IN 1-8</text>
          <g transform="translate(15, 20)">
            <path d="M 0,0 L 70,0 L 65,22 L 5,22 Z" fill="url(#darkMetal)" stroke="#343a40" strokeWidth="1" />
            <path d="M 12,4 L 58,4 L 54,16 L 16,16 Z" fill="#212529" />
            <circle cx="18" cy="8" r="1.5" fill="#f1c40f"/><circle cx="26" cy="8" r="1.5" fill="#f1c40f"/><circle cx="34" cy="8" r="1.5" fill="#f1c40f"/><circle cx="42" cy="8" r="1.5" fill="#f1c40f"/><circle cx="50" cy="8" r="1.5" fill="#f1c40f"/>
            <circle cx="22" cy="13" r="1.5" fill="#f1c40f"/><circle cx="30" cy="13" r="1.5" fill="#f1c40f"/><circle cx="38" cy="13" r="1.5" fill="#f1c40f"/><circle cx="46" cy="13" r="1.5" fill="#f1c40f"/>
            <circle cx="-5" cy="11" r="3" fill="url(#metal)" stroke="#495057" strokeWidth="1"/>
            <circle cx="75" cy="11" r="3" fill="url(#metal)" stroke="#495057" strokeWidth="1"/>
          </g>
          <g transform="translate(15, 60)">
            <path d="M 0,0 L 70,0 L 65,22 L 5,22 Z" fill="url(#darkMetal)" stroke="#343a40" strokeWidth="1" />
            <path d="M 12,4 L 58,4 L 54,16 L 16,16 Z" fill="#212529" />
            <circle cx="18" cy="8" r="1.5" fill="#f1c40f"/><circle cx="26" cy="8" r="1.5" fill="#f1c40f"/><circle cx="34" cy="8" r="1.5" fill="#f1c40f"/><circle cx="42" cy="8" r="1.5" fill="#f1c40f"/><circle cx="50" cy="8" r="1.5" fill="#f1c40f"/>
            <circle cx="22" cy="13" r="1.5" fill="#f1c40f"/><circle cx="30" cy="13" r="1.5" fill="#f1c40f"/><circle cx="38" cy="13" r="1.5" fill="#f1c40f"/><circle cx="46" cy="13" r="1.5" fill="#f1c40f"/>
            <circle cx="-5" cy="11" r="3" fill="url(#metal)" stroke="#495057" strokeWidth="1"/>
            <circle cx="75" cy="11" r="3" fill="url(#metal)" stroke="#495057" strokeWidth="1"/>
          </g>
        </g>

        <g transform="translate(430, 10)">
          <rect x="0" y="0" width="70" height="90" rx="6" fill="none" stroke="#343a40" strokeWidth="1.5" />
          <text x="35" y="14" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="#343a40" textAnchor="middle">ETHERNET</text>
          <g transform="translate(15, 20)" stroke="#343a40" strokeWidth="1.5" fill="none">
            <rect x="15" y="0" width="10" height="8" />
            <line x1="20" y1="8" x2="20" y2="12" />
            <line x1="5" y1="12" x2="35" y2="12" />
            <line x1="5" y1="12" x2="5" y2="16" />
            <line x1="20" y1="12" x2="20" y2="16" />
            <line x1="35" y1="12" x2="35" y2="16" />
            <rect x="0" y="16" width="10" height="8" />
            <rect x="15" y="16" width="10" height="8" />
            <rect x="30" y="16" width="10" height="8" />
          </g>
          <g transform="translate(15, 55)">
            <rect x="0" y="0" width="40" height="25" fill="url(#darkMetal)" rx="2" />
            <path d="M 5,5 L 35,5 L 35,20 L 25,20 L 25,25 L 15,25 L 15,20 L 5,20 Z" fill="#111" />
            <rect x="10" y="5" width="1.5" height="6" fill="#f1c40f"/><rect x="13" y="5" width="1.5" height="6" fill="#f1c40f"/><rect x="16" y="5" width="1.5" height="6" fill="#f1c40f"/><rect x="19" y="5" width="1.5" height="6" fill="#f1c40f"/><rect x="22" y="5" width="1.5" height="6" fill="#f1c40f"/><rect x="25" y="5" width="1.5" height="6" fill="#f1c40f"/><rect x="28" y="5" width="1.5" height="6" fill="#f1c40f"/>
            <circle cx="8" cy="2" r="1.5" fill="#2ecc71" className="led-eth" filter="url(#ledGlow)"/>
            <circle cx="32" cy="2" r="1.5" fill="#f1c40f" />
          </g>
        </g>

        <g transform="translate(510, 10)">
          <rect x="0" y="0" width="30" height="90" rx="6" fill="none" stroke="#343a40" strokeWidth="1.5" />
          <text x="15" y="14" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="#343a40" textAnchor="middle">UPD</text>
          <circle cx="15" cy="70" r="4.5" fill="#212529" stroke="#111" strokeWidth="1" />
        </g>

        <g transform="translate(555, 15)">
          <rect x="0" y="0" width="190" height="80" fill="url(#blackPlastic)" rx="4" stroke="#495057" strokeWidth="1" />
          <g transform="translate(15, 10)">
            <rect x="0" y="0" width="40" height="60" fill="#111" rx="2" />
            <rect x="5" y="5" width="30" height="50" fill="#e74c3c" rx="3" />
            <line x1="20" y1="12" x2="20" y2="25" stroke="#fff" strokeWidth="3" />
            <circle cx="20" cy="42" r="6" fill="none" stroke="#fff" strokeWidth="2" />
          </g>
          <g transform="translate(65, 15)">
            <rect x="0" y="0" width="35" height="50" fill="#111" />
            <rect x="10" y="5" width="15" height="40" fill="#212529" stroke="#343a40" strokeWidth="1" />
            <path d="M 10,25 L 25,25" stroke="#495057" strokeWidth="1" strokeDasharray="2,2" />
          </g>
          <g transform="translate(110, 15)">
            <rect x="0" y="0" width="70" height="50" fill="#111" />
            <path d="M 5,5 L 65,5 L 65,35 L 55,45 L 15,45 L 5,35 Z" fill="#212529" stroke="#000" strokeWidth="2" />
            <rect x="15" y="15" width="8" height="3" fill="#e9ecef" />
            <rect x="47" y="15" width="8" height="3" fill="#e9ecef" />
            <rect x="31" y="32" width="8" height="3" fill="#e9ecef" />
          </g>
          <text x="210" y="45" transform="rotate(-90 210 45)" fontFamily="sans-serif" fontWeight="bold" fontSize="10" fill="#343a40">110-230VAC</text>
        </g>
      </g>
    </svg>
  </div>
);

const PremiumBentoCard = ({ children, gridColumn = 'auto', style = {}, className = '' }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={premiumReveal}
      whileHover={{ y: -10, scale: 1.015 }}
      style={{
        gridColumn: gridColumn,
        position: 'relative',
        borderRadius: '12px',
        padding: '1px',
        background: 'linear-gradient(130deg, rgba(76,201,240,0.25), rgba(168,85,247,0.15), transparent 60%)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease',
        ...style
      }}
      className={`bento-card-wrapper ${className}`}
    >
      <div style={{
        backgroundColor: 'rgba(22, 22, 26, 0.75)',
        backdropFilter: 'blur(20px)',
        borderRadius: '11px',
        padding: '35px',
        height: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 2,
      }}>
        {children}
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Gelix Corp";
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ 
      backgroundColor: COLORS.background, 
      minHeight: '100vh', 
      color: COLORS.textMain, 
      overflowX: 'hidden',
      fontFamily: "'Inter', sans-serif" 
    }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap');
          .noise-layer { position: fixed; inset: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); opacity: 0.025; pointer-events: none; z-index: 9999; }
          @keyframes auroraFloat1 { 0% { transform: translate(0px, 0px) scale(1); } 50% { transform: translate(60px, -40px) scale(1.15); } 100% { transform: translate(0px, 0px) scale(1); } }
          @keyframes auroraFloat2 { 0% { transform: translate(0px, 0px) scale(1.1); } 50% { transform: translate(-50px, 50px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1.1); } }
          @keyframes rotateEnergy { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }
          @keyframes cinematicReveal { 0% { opacity: 0; transform: scale(0.95) translateY(15px); filter: blur(15px); } 100% { opacity: 1; transform: scale(1) translateY(0px); filter: blur(0px); } }
          @keyframes premiumFloat { 0% { transform: translate3d(0px, 0px, 0px); } 50% { transform: translate3d(0px, -12px, 0px); } 100% { transform: translate3d(0px, 0px, 0px); } }
          @keyframes pulseGlow { 0% { opacity: 0.8; box-shadow: 0 0 12px rgba(76,201,240,0.2); } 50% { opacity: 1; box-shadow: 0 0 24px rgba(76,201,240,0.5), 0 0 4px rgba(76,201,240,0.3); } 100% { opacity: 0.8; box-shadow: 0 0 12px rgba(76,201,240,0.2); } }
          @keyframes dataStream { 0% { stroke-dashoffset: 100; } 100% { stroke-dashoffset: 0; } }
          .bento-card-wrapper:hover { box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(76,201,240,0.2); }
          @media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } .features-grid > .bento-card-wrapper { grid-column: span 1 !important; } }
          @media (max-width: 768px) { .premium-header { width: calc(100% - 32px) !important; top: 12px !important; padding: 12px 20px !important; flex-direction: column !important; gap: 12px !important; } .premium-nav { gap: 20px !important; flex-wrap: wrap !important; justify-content: center !important; } .hero-section { padding: 160px 20px 60px !important; } .hero-title { font-size: 32px !important; line-height: 1.2 !important; } .hero-desc { font-size: 14px !important; margin-bottom: 30px !important; } .energy-ring { width: 280px !important; height: 280px !important; } .hero-logo-img { max-width: 90vw !important; } .features-grid { grid-template-columns: 1fr !important; } .features-grid > .bento-card-wrapper { grid-column: span 1 !important; } .rules-grid { grid-template-columns: 1fr !important; gap: 15px !important; } .latency-value { font-size: 56px !important; } .section-padding { padding: 60px 20px !important; } .section-title { font-size: 28px !important; } .card-artem { order: 1 !important; } .card-maxim { order: 2 !important; } .card-tolik { order: 3 !important; } }
          @media (max-width: 480px) { .header-subtitle-text { display: none !important; } .premium-nav { gap: 15px !important; font-size: 11px !important; } }
        `}
      </style>

      <div className="noise-layer" />
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(76,201,240,0.06), transparent 65%)',
        transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
        pointerEvents: 'none', zIndex: 1, willChange: 'transform'
      }} />

      <header className="premium-header" style={{ 
        position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)',
        width: 'calc(100% - 80px)', maxWidth: '1200px',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
        backdropFilter: 'blur(30px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 10px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 30px', transition: 'all 0.3s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', fontSize: '16px', letterSpacing: '1.5px' }}>
          <img src={LogoImg} alt="Gelix Logo" style={{ height: '24px', width: 'auto' }} />
          <span>GELIX <span className="header-subtitle-text" style={{ color: COLORS.textDark, fontWeight: '300', fontSize: '11px' }}>// SYSTEM ORCHESTRATOR</span></span>
        </div>
        <nav className="premium-nav" style={{ display: 'flex', gap: '35px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.5px' }}>
          <a href="#protocols" style={{ color: COLORS.textLight, textDecoration: 'none', transition: 'color 0.2s' }}>Протоколы</a>
          <a href="#hardware" style={{ color: COLORS.textLight, textDecoration: 'none', transition: 'color 0.2s' }}>Железо и GPI/O</a>
          <a href="#inventory" style={{ color: COLORS.textLight, textDecoration: 'none', transition: 'color 0.2s' }}>Инвентарь</a>
          <a href="#features" style={{ color: COLORS.textLight, textDecoration: 'none', transition: 'color 0.2s' }}>Архитектура ядра</a>
        </nav>
      </header>

      <section className="hero-section" style={{ 
        position: 'relative', display: 'flex', flexDirection: 'column', 
        alignItems: 'center', textAlign: 'center', minHeight: '100vh', justifyContent: 'center',
        padding: '140px 40px 80px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '15%', left: '25%', width: '45vw', height: '45vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(76,201,240,0.12) 0%, transparent 70%)', filter: 'blur(70px)', animation: 'auroraFloat1 14s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'auroraFloat2 12s ease-in-out infinite' }} />
        </div>

        <div style={{
          position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
          animation: 'cinematicReveal 2s cubic-bezier(0.16, 1, 0.3, 1), premiumFloat 9s ease-in-out infinite 2s', marginBottom: '35px', zIndex: 3
        }}>
          <div className="energy-ring" style={{
            position: 'absolute', top: '50%', left: '50%', width: '440px', height: '440px', background: 'conic-gradient(from 0deg, #4cc9f0, #a855f7, #ff9e00, #4cc9f0)',
            filter: 'blur(55px)', opacity: 0.35, animation: 'rotateEnergy 25s linear infinite', pointerEvents: 'none', transform: 'translate(-50%, -50%)', transition: 'all 0.3s ease'
          }} />
          <img className="hero-logo-img" src={LogoMainImg} alt="Gelix Core Logo" style={{
            position: 'relative', width: '680px', maxWidth: '72vw', height: 'auto', zIndex: 2, mixBlendMode: 'screen',
            filter: 'drop-shadow(0 0 20px rgba(45,140,255,0.25)) drop-shadow(0 0 60px rgba(45,140,255,0.15))', transition: 'all 0.3s ease'
          }} />
        </div>
        
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ zIndex: 10, position: 'relative' }}>
          <motion.h1 className="hero-title" variants={premiumReveal} style={{ fontSize: '52px', fontWeight: 100, margin: '0 0 24px', letterSpacing: '-0.04em', lineHeight: '1.15', color: '#f4f4f5', transition: 'all 0.3s ease' }}>
            Центральное ядро коммутации<br/><span style={{ fontWeight: '700', color: '#fff' }}>и программного контроля</span>
          </motion.h1>
          
          <motion.p className="hero-desc" variants={premiumReveal} style={{ fontSize: '16px', color: COLORS.textLight, maxWidth: '640px', margin: '0 auto 45px', lineHeight: '1.65', fontWeight: 300, transition: 'all 0.3s ease' }}>
            Программный оркестратор Gelix разработан для бесшовного обнаружения, глубокого мониторинга и мгновенной маршрутизации потоков в гетерогенных IP-сетях вещания и автоматизации.
          </motion.p>
          
          <motion.div variants={premiumReveal} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a 
              href="#protocols"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                background: 'linear-gradient(135deg, #4cc9f0, #73d7ff)', color: '#000', border: 'none', padding: '16px 36px', 
                borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', textDecoration: 'none', letterSpacing: '0.5px',
                boxShadow: '0 0 40px rgba(76,201,240,0.35), 0 15px 50px rgba(76,201,240,0.25)'
              }}
            >
              Спецификация протоколов
            </motion.a>

            <motion.button 
              onClick={() => navigate('/configurator')}
              whileHover={{ scale: 1.04, y: -2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '16px 36px', 
                borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', letterSpacing: '0.5px',
                backdropFilter: 'blur(10px)', transition: 'all 0.3s ease'
              }}
            >
              Конфигуратор сервера
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* 1. ПОДДЕРЖИВАЕМЫЕ ПРОТОКОЛЫ */}
      <section id="protocols" className="section-padding" style={{ padding: '100px 40px', backgroundColor: COLORS.pageBg, borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumReveal} style={{ marginBottom: '60px' }}>
            <span style={{ color: COLORS.tx, fontSize: '11px', fontWeight: '700', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>INTEGRATIONS MATRIX</span>
            <h2 className="section-title" style={{ fontSize: '36px', fontWeight: '200', letterSpacing: '-0.03em', margin: 0 }}>Поддерживаемые протоколы коммутации</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
            <PremiumBentoCard>
              <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '20px' }}>NMOS</h3>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.65', fontWeight: 300 }}>
                Собственный автономный внутренний сервис <strong>IS-04 Registry</strong> и выделенный RDS прокси. Полное исключение сторонних зависимостей. Автоматическое сканирование топологии и регистрация узлов.
              </p>
            </PremiumBentoCard>
            <PremiumBentoCard>
              <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#FCA311', marginBottom: '20px' }}>NDI</h3>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.65', fontWeight: 300 }}>
                Глубокая интеграция на уровне бэкенда и фронтенда. Полное управление инфраструктурой Full NDI и NDI | HX через выделенные интерфейсы Setup, Discovery и Matrix.
              </p>
            </PremiumBentoCard>
            <PremiumBentoCard>
              <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#E63946', marginBottom: '20px' }}>DANTE</h3>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.65', fontWeight: 300 }}>
                Автоматическое сканирование аудио-инфраструктуры по mDNS в реальном времени. Синхронизация TX/RX каналов, считывание частоты дискретизации и битности аудиопотоков.
              </p>
            </PremiumBentoCard>
          </div>
        </div>
      </section>

      {/* НОВЫЙ БЛОК: АППАРАТНАЯ ИНТЕГРАЦИЯ LES GPI/O */}
      <section id="hardware" className="section-padding" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={premiumReveal} style={{ marginBottom: '50px', textAlign: 'center' }}>
          <span style={{ color: COLORS.success, fontSize: '11px', fontWeight: '700', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>HARDWARE INTEGRATION</span>
          <h2 className="section-title" style={{ fontSize: '36px', fontWeight: '200', letterSpacing: '-0.03em', margin: 0 }}>Поддержка аппаратных контроллеров LES GPI/O</h2>
          <p style={{ color: COLORS.textMuted, marginTop: '10px', fontSize: '15px', fontWeight: 300, maxWidth: '750px', marginInline: 'auto' }}>
            Оркестратор из коробки интегрирован с профессиональными аппаратными интерфейсами ввода-вывода. Ниже представлена схема поддерживаемой модели <strong>LES KR-118RGE</strong>.
          </p>
        </motion.div>

        <PremiumBentoCard>
          <LesDeviceGraphic />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '30px', borderTop: `1px solid ${COLORS.border}`, paddingTop: '25px' }}>
            <div>
              <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Модель: LES KR-118RGE</h4>
              <p style={{ color: COLORS.textMuted, fontSize: '13px', lineHeight: '1.6', fontWeight: 300 }}>
                Стоечный аппаратный модуль коммутации сигналов с поддержкой удаленного сетевого мониторинга и управления.
              </p>
            </div>
            <div>
              <h4 style={{ color: COLORS.success, fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>8 GPI Inputs</h4>
              <p style={{ color: COLORS.textMuted, fontSize: '13px', lineHeight: '1.6', fontWeight: 300 }}>
                Дискретные оптически развязанные входы для считывания внешних триггеров и команд автоматизации.
              </p>
            </div>
            <div>
              <h4 style={{ color: COLORS.rx, fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>12 GPO Outputs (с реле)</h4>
              <p style={{ color: COLORS.textMuted, fontSize: '13px', lineHeight: '1.6', fontWeight: 300, margin: 0 }}>
                Высоконадежные релейные выходы для коммутации внешнего оборудования, световой индикации и Tally-систем.
              </p>
            </div>
          </div>
        </PremiumBentoCard>
      </section>

      {/* 2. ИНВЕНТАРЬ ИМЁН И СТРУКТУРЫ */}
      <section id="inventory" className="section-padding" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto', borderTop: `1px solid ${COLORS.border}` }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={premiumReveal} style={{ marginBottom: '60px' }}>
          <span style={{ color: COLORS.matrix, fontSize: '11px', fontWeight: '700', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>ALGORITHMIC NAMING</span>
          <h2 className="section-title" style={{ fontSize: '36px', fontWeight: '200', letterSpacing: '-0.03em', margin: 0 }}>Абстракция имён и тегирование</h2>
          <p style={{ color: COLORS.textMuted, marginTop: '10px', fontSize: '15px', fontWeight: 300 }}>Гибкое управление отображением портов, логических каналов и метаданных на различных типах устройств.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {[
            { tag: 'Primary Name', desc: 'Базовое имя порта. При ручном изменении автоматически пересобирает Monitoring Name и Panel Name для кнопок консолей.' },
            { tag: 'Stream View Analytics', desc: 'Единая таблица потоков с поддержкой сквозной фильтрации по Containers, Matrices, Matrix Tags и Device Name.' },
            { tag: 'Panel Name', desc: 'Строго ограничено длиной до 8 символов для отображения на дисплеях физических аппаратных панелей управления.' }
          ].map((item, i) => (
            <PremiumBentoCard key={i}>
              <h4 style={{ fontFamily: 'monospace', color: COLORS.matrix, fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>[{item.tag}]</h4>
              <p style={{ fontSize: '14px', color: COLORS.textMuted, lineHeight: '1.65', fontWeight: 300 }}>{item.desc}</p>
            </PremiumBentoCard>
          ))}
        </div>
      </section>

      {/* ИНФОРМАЦИЯ О РАЗРАБОТЧИКАХ */}
      <section id="team" className="section-padding" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto', borderTop: `1px solid ${COLORS.border}` }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={premiumReveal} style={{ marginBottom: '60px', textAlign: 'center' }}>
          <span style={{ color: COLORS.matrix, fontSize: '11px', fontWeight: '700', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>DEVELOPMENT TEAM</span>
          <h2 className="section-title" style={{ fontSize: '36px', fontWeight: '200', letterSpacing: '-0.03em', margin: 0 }}>Команда проекта Gelix</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', justifyContent: 'center' }}>
          <PremiumBentoCard className="card-maxim">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '110px', height: '110px', marginBottom: '24px' }}>
                <img src={MaximImg} alt="Максим Кривцов" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: `1px solid ${COLORS.rx}` }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#fff', marginBottom: '6px' }}>Максим Кривцов</h3>
              <p style={{ fontSize: '13px', color: COLORS.rx, fontWeight: 500, textTransform: 'uppercase' }}>Product Owner</p>
            </div>
          </PremiumBentoCard>

          <PremiumBentoCard className="card-artem">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '110px', height: '110px', marginBottom: '24px' }}>
                <img src={ArtemImg} alt="Артем Барабаш" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: `1px solid ${COLORS.tx}` }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#fff', marginBottom: '6px' }}>Артем Барабаш</h3>
              <p style={{ fontSize: '13px', color: COLORS.tx, fontWeight: 500, textTransform: 'uppercase' }}>Technical Lead & Lead Developer</p>
            </div>
          </PremiumBentoCard>

          <PremiumBentoCard className="card-tolik">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '110px', height: '110px', marginBottom: '24px' }}>
                <img src={TolikImg} alt="Анатолий Овчинников" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: `1px solid ${COLORS.matrix}` }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#fff', marginBottom: '6px' }}>Анатолий Овчинников</h3>
              <p style={{ fontSize: '13px', color: COLORS.matrix, fontWeight: 500, textTransform: 'uppercase' }}>Software Developer</p>
            </div>
          </PremiumBentoCard>
        </div>
      </section>

      <footer style={{ padding: '40px', textAlign: 'center', borderTop: `1px solid ${COLORS.border}`, color: COLORS.textDark, fontSize: '12px', fontWeight: 300, letterSpacing: '0.5px' }}>
        <p>© 2026 Gelix Systems. Все права защищены. Разработано для критически важных медиа-сетей.</p>
      </footer>
    </div>
  );
};

export default Home;