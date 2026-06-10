import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { COLORS } from './theme/colors';

// Импорт логотипов
import LogoMainImg from './assets/LogoMain.png';
import LogoImg from './assets/Logo.png';

// Дорогой reveal-эффект с размытием (Пункт 12)
const premiumReveal = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 40 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Компонент премиальной карточки с анимированным градиентным бордером и Hover Lift (Пункты 7 и 8)
const PremiumBentoCard = ({ children, gridColumn = 'auto', style = {} }) => {
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
        padding: '1px', // Пространство для бордера
        background: 'linear-gradient(130deg, rgba(76,201,240,0.25), rgba(168,85,247,0.15), transparent 60%)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease',
        ...style
      }}
      className="bento-card-wrapper"
    >
      {/* Внутреннее тело карточки */}
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

const App = () => {
  // Состояние для Mouse Glow (Пункт 4)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
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
      fontFamily: "'Inter', sans-serif" // Премиальная типографика (Пункт 14)
    }}>
      
      {/* ГЛОБАЛЬНЫЕ ТЕХНИЧЕСКИЕ СТИЛИ И КЛЮЧЕВЫЕ АНИМАЦИИ */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap');

          /* Luxury Noise Layer (Пункт 2) */
          .noise-layer {
            position: fixed;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.025;
            pointer-events: none;
            z-index: 9999;
          }

          /* Анимации Авроры (Пункт 1) */
          @keyframes auroraFloat1 {
            0% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(60px, -40px) scale(1.15); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes auroraFloat2 {
            0% { transform: translate(0px, 0px) scale(1.1); }
            50% { transform: translate(-50px, 50px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1.1); }
          }

          /* Вращение энергетического кольца (Пункт 13) */
          @keyframes rotateEnergy {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }

          /* Кинематографичный запуск лого */
          @keyframes cinematicReveal {
            0% { opacity: 0; transform: scale(0.95) translateY(15px); filter: blur(15px); }
            100% { opacity: 1; transform: scale(1) translateY(0px); filter: blur(0px); }
          }
          @keyframes premiumFloat {
            0% { transform: translate3d(0px, 0px, 0px); }
            50% { transform: translate3d(0px, -12px, 0px); }
            100% { transform: translate3d(0px, 0px, 0px); }
          }
          @keyframes logoShimmer {
            0% { transform: translateX(-150%) skewX(-18deg); }
            100% { transform: translateX(250%) skewX(-18deg); }
          }

          /* Пульсация бэджей (Пункт 9) */
          @keyframes pulseGlow {
            0% { opacity: 0.8; box-shadow: 0 0 12px rgba(76,201,240,0.2); }
            50% { opacity: 1; box-shadow: 0 0 24px rgba(76,201,240,0.5), 0 0 4px rgba(76,201,240,0.3); }
            100% { opacity: 0.8; box-shadow: 0 0 12px rgba(76,201,240,0.2); }
          }

          /* Движение пакетов в схеме сети (Пункт 15) */
          @keyframes dataStream {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }

          /* Эффект свечения при ховере на карточки */
          .bento-card-wrapper:hover {
            box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(76,201,240,0.2);
          }
        `}
      </style>

      {/* ШУМ И ИНТЕРАКТИВНЫЙ КУРСОР */}
      <div className="noise-layer" />
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(76,201,240,0.06), transparent 65%)',
        transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
        pointerEvents: 'none',
        zIndex: 1,
        willChange: 'transform'
      }} />

      {/* PREMIUM GLASS NAVIGATION (Пункт 3) */}
      <header style={{ 
        position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)',
        width: 'calc(100% - 80px)', maxWidth: '1200px',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
        backdropFilter: 'blur(30px)',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 10px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        zIndex: 1000,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 30px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', fontSize: '16px', letterSpacing: '1.5px' }}>
          <img src={LogoImg} alt="Gelix Logo" style={{ height: '24px', width: 'auto' }} />
          <span>GELIX <span style={{ color: COLORS.textDark, fontWeight: '300', fontSize: '11px' }}>// SYSTEM ORCHESTRATOR</span></span>
        </div>
        <nav style={{ display: 'flex', gap: '35px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.5px' }}>
          <a href="#protocols" style={{ color: COLORS.textLight, textDecoration: 'none', transition: 'color 0.2s' }}>Протоколы</a>
          <a href="#inventory" style={{ color: COLORS.textLight, textDecoration: 'none', transition: 'color 0.2s' }}>Инвентарь</a>
          <a href="#features" style={{ color: COLORS.textLight, textDecoration: 'none', transition: 'color 0.2s' }}>Архитектура ядра</a>
        </nav>
      </header>

      {/* HERO SECTION С ЖИВЫМ ОКРУЖЕНИЕМ */}
      <section style={{ 
        position: 'relative', display: 'flex', flexDirection: 'column', 
        alignItems: 'center', textAlign: 'center', minHeight: '100vh', justifyContent: 'center',
        padding: '140px 40px 80px', overflow: 'hidden'
      }}>
        
        {/* FOUR LAYER AURORA BACKGROUND (Пункт 1) */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '15%', left: '25%', width: '45vw', height: '45vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(76,201,240,0.12) 0%, transparent 70%)', filter: 'blur(70px)', animation: 'auroraFloat1 14s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'auroraFloat2 12s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', top: '40%', right: '30%', width: '35vw', height: '35vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 65%)', filter: 'blur(60px)', animation: 'auroraFloat1 18s ease-in-out infinite reverse' }} />
        </div>

        {/* ЖИВАЯ СХЕМА СЕТИ ЗА ЛОГОТИПОМ (Пункт 15) */}
        <div style={{ position: 'absolute', width: '100vw', height: '100vh', top: 0, left: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.45 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            {/* Линии передачи данных с бегущими точками */}
            <path d="M 150 200 L 400 350 L 550 500 L 960 500" fill="none" stroke="rgba(76,201,240,0.15)" strokeWidth="1.5" />
            <path d="M 150 200 L 400 350 L 550 500 L 960 500" fill="none" stroke="#4cc9f0" strokeWidth="2" strokeDasharray="8, 40" style={{ animation: 'dataStream 4s linear infinite' }} />

            <path d="M 1770 250 L 1400 400 L 1150 500" fill="none" stroke="rgba(255,158,0,0.15)" strokeWidth="1.5" />
            <path d="M 1770 250 L 1400 400 L 1150 500" fill="none" stroke="#ff9e00" strokeWidth="2" strokeDasharray="10, 50" style={{ animation: 'dataStream 5s linear infinite reverse' }} />

            <path d="M 500 850 L 800 650 L 960 500" fill="none" stroke="rgba(168,85,247,0.15)" strokeWidth="1.5" />
            <path d="M 500 850 L 800 650 L 960 500" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="6, 35" style={{ animation: 'dataStream 3s linear infinite' }} />

            {/* Узлы топологии */}
            <circle cx="400" cy="350" r="4" fill="#4cc9f0" opacity="0.6"/>
            <circle cx="1400" cy="400" r="4" fill="#ff9e00" opacity="0.6"/>
            <circle cx="800" cy="650" r="4" fill="#a855f7" opacity="0.6"/>
          </svg>
        </div>

        {/* FLOATING DATA PARTICLES (Пункт 11) */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }}>
          {[
            { text: 'TX', x: '18%', y: '25%', color: '#4cc9f0', d: 10 },
            { text: 'RX', x: '82%', y: '30%', color: '#ff9e00', d: 14 },
            { text: 'NMOS', x: '22%', y: '65%', color: '#4cc9f0', d: 12 },
            { text: 'NDI', x: '78%', y: '70%', color: '#FCA311', d: 9 },
            { text: 'DANTE', x: '12%', y: '45%', color: '#E63946', d: 15 },
            { text: 'EMBER+', x: '85%', y: '50%', color: '#ff9e00', d: 11 }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ y: [0, -25, 0], x: [0, 12, 0], opacity: 0.35 }}
              transition={{ repeat: Infinity, duration: item.d, ease: 'easeInOut' }}
              style={{
                position: 'absolute', left: item.x, top: item.y,
                fontFamily: 'monospace', fontSize: '11px', fontWeight: 'bold',
                color: item.color, border: `1px solid ${item.color}30`,
                padding: '4px 10px', borderRadius: '4px', backgroundColor: 'rgba(9,9,11,0.6)'
              }}
            >
              {item.text}
            </motion.div>
          ))}
        </div>

        {/* АНИМИРОВАННЫЙ ЦЕНТРАЛЬНЫЙ ЛОГОТИП С ВРАЩАЮЩИМСЯ ЭНЕРГЕТИЧЕСКИМ КОЛЬЦОМ (Пункт 13) */}
        <div style={{
          position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
          animation: 'cinematicReveal 2s cubic-bezier(0.16, 1, 0.3, 1), premiumFloat 9s ease-in-out infinite 2s',
          marginBottom: '35px', zIndex: 3
        }}>
          {/* Energy Ring */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: '440px', height: '440px',
            background: 'conic-gradient(from 0deg, #4cc9f0, #a855f7, #ff9e00, #4cc9f0)',
            filter: 'blur(55px)', opacity: 0.35,
            animation: 'rotateEnergy 25s linear infinite',
            pointerEvents: 'none', transform: 'translate(-50%, -50%)'
          }} />
          
          {/* Shimmer Эффект */}
          <div style={{
            position: 'absolute', width: '35%', height: '160%',
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%)',
            filter: 'blur(10px)', zIndex: 3, pointerEvents: 'none',
            animation: 'logoShimmer 6s ease-in-out infinite', mixBlendMode: 'screen'
          }} />

          <img src={LogoMainImg} alt="Gelix Core Logo" style={{
            position: 'relative', width: '680px', maxWidth: '72vw', height: 'auto',
            zIndex: 2, mixBlendMode: 'screen',
            filter: 'drop-shadow(0 0 20px rgba(45,140,255,0.25)) drop-shadow(0 0 60px rgba(45,140,255,0.15))'
          }} />
        </div>
        
        {/* ТЕКСТ С ДОРОГОЙ ТИПОГРАФИКОЙ */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ zIndex: 10, position: 'relative' }}>
          <motion.h1 variants={premiumReveal} style={{ 
            fontSize: '52px', fontWeight: 100, margin: '0 0 24px', 
            letterSpacing: '-0.04em', lineHeight: '1.15', color: '#f4f4f5' 
          }}>
            Центральное ядро коммутации<br/>
            <span style={{ fontWeight: '700', color: '#fff' }}>и программного контроля</span>
          </motion.h1>
          
          <motion.p variants={premiumReveal} style={{ 
            fontSize: '16px', color: COLORS.textLight, maxWidth: '640px', 
            margin: '0 auto 45px', lineHeight: '1.65', fontWeight: 300 
          }}>
            Программный оркестратор Gelix разработан для бесшовного обнаружения, глубокого мониторинга и мгновенной маршрутизации потоков в гетерогенных IP-сетях вещания и автоматизации.
          </motion.p>
          
          {/* MAGNETIC BUTTON WITH GLOW (Пункты 5 и 6) */}
          <motion.div variants={premiumReveal} style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <motion.a 
              href="#protocols"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                background: 'linear-gradient(135deg, #4cc9f0, #73d7ff)', 
                color: '#000', border: 'none', padding: '16px 36px', 
                borderRadius: '8px', fontSize: '14px', fontWeight: '700', 
                cursor: 'pointer', textDecoration: 'none', letterSpacing: '0.5px',
                boxShadow: '0 0 40px rgba(76,201,240,0.35), 0 15px 50px rgba(76,201,240,0.25)'
              }}
            >
              Спецификация протоколов
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* 1. ПОДДЕРЖИВАЕМЫЕ ПРОТОКОЛЫ */}
      <section id="protocols" style={{ padding: '100px 40px', backgroundColor: COLORS.pageBg, borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={premiumReveal} style={{ marginBottom: '60px' }}>
            <span style={{ color: COLORS.tx, fontSize: '11px', fontWeight: '700', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>INTEGRATIONS MATRIX</span>
            <h2 style={{ fontSize: '36px', fontWeight: '200', letterSpacing: '-0.03em', margin: 0 }}>Поддерживаемые протоколы коммутации</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            
            {/* NMOS */}
            <PremiumBentoCard>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', letterSpacing: '-0.02em' }}>NMOS</h3>
                <span style={{ fontSize: '10px', color: COLORS.tx, border: `1px solid ${COLORS.tx}`, padding: '4px 10px', borderRadius: '4px', fontWeight: '700', animation: 'pulseGlow 3s infinite' }}>IS-04 NATIVE</span>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.65', fontWeight: 300 }}>
                Собственный автономный внутренний сервис <strong>IS-04 Registry</strong> и выделенный RDS прокси. Полное исключение сторонних зависимостей. Автоматическое сканирование топологии, регистрация узлов, устройств, сендеров и ресиверов.
              </p>
            </PremiumBentoCard>

            {/* NDI */}
            <PremiumBentoCard style={{ borderImage: 'linear-gradient(130deg, #FCA311, transparent) 1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#FCA311', letterSpacing: '-0.02em' }}>NDI</h3>
                <span style={{ fontSize: '10px', color: '#FCA311', border: '1px solid #FCA311', padding: '4px 10px', borderRadius: '4px', fontWeight: '700', animation: 'pulseGlow 3s infinite' }}>V4 / V5 / V6</span>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.65', fontWeight: 300, marginBottom: '18px' }}>
                Глубокая интеграция на уровне бэкенда и фронтенда. Полное управление инфраструктурой через выделенные интерфейсы Setup, Discovery, Inventory и Matrix.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Full NDI', 'NDI | HX', 'NDI | HX2', 'NDI | HX3'].map(type => (
                  <span key={type} style={{ fontSize: '10px', backgroundColor: 'rgba(252, 163, 17, 0.08)', color: '#FCA311', padding: '4px 10px', borderRadius: '4px', fontWeight: '600', border: '1px solid rgba(252,163,17,0.15)' }}>{type}</span>
                ))}
              </div>
            </PremiumBentoCard>

            {/* DANTE */}
            <PremiumBentoCard>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#E63946', letterSpacing: '-0.02em' }}>DANTE</h3>
                <span style={{ fontSize: '10px', color: '#E63946', border: '1px solid #E63946', padding: '4px 10px', borderRadius: '4px', fontWeight: '700', animation: 'pulseGlow 3s infinite' }}>MDNS DISCOVERY</span>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.65', fontWeight: 300 }}>
                Автоматическое сканирование аудио-инфраструктуры по сетевым интерфейсам в реальном времени. Полный опрос и синхронизация TX/RX каналов, считывание частоты дискретизации (Sample Rate) и битности аудиопотоков.
              </p>
            </PremiumBentoCard>

            {/* EMBER+ */}
            <PremiumBentoCard>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: COLORS.warning, letterSpacing: '-0.02em' }}>EMBER+</h3>
                <span style={{ fontSize: '10px', color: COLORS.warning, border: `1px solid ${COLORS.warning}`, padding: '4px 10px', borderRadius: '4px', fontWeight: '700', animation: 'pulseGlow 3s infinite' }}>DYNAMIC TREE</span>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.65', fontWeight: 300 }}>
                Универсальный парсинг и интерактивная визуализация древовидных структур параметров устройств любого уровня сложности. Свободный выбор, разметка и подмена путей трансмиттеров (Tx) и ресиверов (Rx) напрямую в инвентаре.
              </p>
            </PremiumBentoCard>

            {/* OPENFLOW */}
            <PremiumBentoCard>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#4CC9F0', letterSpacing: '-0.02em' }}>OPENFLOW</h3>
                <span style={{ fontSize: '10px', color: '#4CC9F0', border: '1px solid #4CC9F0', padding: '4px 10px', borderRadius: '4px', fontWeight: '700', animation: 'pulseGlow 3s infinite' }}>SDN NETWORK</span>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.65', fontWeight: 300 }}>
                Прямая низкоуровневая регистрация и программный контроль SDN-коммутаторов аппаратно-программных комплексов. Автоматическое считывание уникальных идентификаторов DPID при установлении хэндшейка с контроллером.
              </p>
            </PremiumBentoCard>

          </div>
        </div>
      </section>

      {/* 2. ИНВЕНТАРЬ ИМЁН */}
      <section id="inventory" style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={premiumReveal} style={{ marginBottom: '60px' }}>
          <span style={{ color: COLORS.matrix, fontSize: '11px', fontWeight: '700', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>ALGORITHMIC NAMING</span>
          <h2 style={{ fontSize: '36px', fontWeight: '200', letterSpacing: '-0.03em', margin: 0 }}>Четырехуровневая система абстракции имён (Inventory)</h2>
          <p style={{ color: COLORS.textMuted, marginTop: '10px', fontSize: '15px', fontWeight: 300 }}>Гибкое управление отображением портов и логических каналов на различных типах устройств.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {[
            { tag: 'Primary Name', label: 'Основное название', desc: 'Базовое имя порта во всем пользовательском веб-интерфейсе на управляющих ПК и планшетах инженеров. Не имеет ограничений по длине символов.' },
            { tag: 'Monitoring Name', label: 'Имя мониторинга', desc: 'Специализированное имя, передаваемое в систему Multiviewers и модули UMDS. По умолчанию наследует структуру и текстовые данные из Primary Name.' },
            { tag: 'Panel Name', label: 'Кнопочное имя', desc: 'Строго ограничено длиной до 8 символов. Применяется для дисплеев кнопок физических консолей. Генерируется на лету из основного имени встроенным алгоритмом сокращения.' },
            { tag: 'Name from Device', label: 'Аппаратное имя', desc: 'Прямое синхронное считывание конфигурации непосредственно с физического устройства или вещательного маршрутизатора. Обновляется на лету при детекции изменений.' }
          ].map((item, i) => (
            <PremiumBentoCard key={i}>
              <div style={{ fontFamily: 'monospace', color: COLORS.matrix, fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>[{item.tag}]</div>
              <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '14px', fontWeight: '700' }}>{item.label}</h4>
              <p style={{ fontSize: '13px', color: COLORS.textMuted, lineHeight: '1.55', fontWeight: 300 }}>{item.desc}</p>
            </PremiumBentoCard>
          ))}
        </div>
      </section>

      {/* 3. ТЕХНИЧЕСКИЕ ФИЧИ */}
      <section id="features" style={{ padding: '100px 40px', backgroundColor: COLORS.pageBg, borderTop: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={premiumReveal} style={{ marginBottom: '60px', textAlign: 'center' }}>
            <span style={{ color: COLORS.success, fontSize: '11px', fontWeight: '700', letterSpacing: '2px', display: 'block', marginBottom: '10px' }}>CORE ARCHITECTURE</span>
            <h2 style={{ fontSize: '36px', fontWeight: '200', letterSpacing: '-0.03em', margin: 0 }}>Технологический стек и возможности ядра</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            
            {/* РЕАЛТАЙМ МАТРИЦЫ И ВИРТУАЛИЗАЦИЯ */}
            <PremiumBentoCard gridColumn="span 2">
              <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '18px', fontWeight: '700', letterSpacing: '-0.01em' }}>Высокопроизводительные матрицы маршрутизации</h3>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.65', marginBottom: '16px', fontWeight: 300 }}>
                Ядро оптимизировано под обработку <strong>100+ многопоточных устройств</strong> на одной странице за счет сквозной виртуализации списков Matrix и Inventory. Математика полностью вынесена на сторону бэкенда.
              </p>
              <ul style={{ fontSize: '13px', color: COLORS.textMuted, paddingLeft: '18px', lineHeight: '1.7', fontWeight: 300 }}>
                <li>Пакетное (Bulk) добавление элементов в кастомные матрицы и инвентарь.</li>
                <li>Группировка каналов (Bundling / Followers) для управления многопоточными связками (видео + аудио).</li>
                <li>Интеллектуальная автогруппировка по сущностям <strong>SearchTags</strong> с цветовой дифференциацией сигналов.</li>
                <li>Поддержка механизма мгновенных снимков состояния коммутации (Matrix Snapshot) и макрокоманд (Salvos).</li>
              </ul>
            </PremiumBentoCard>

            {/* МАКСИМАЛЬНАЯ СКОРОСТЬ С LUXURY TYPOGRAPHY (Пункт 10) */}
            <PremiumBentoCard style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '14px', fontWeight: '700' }}>Ultra-Low Latency</h3>
                <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.6', fontWeight: 300 }}>
                  Гарантированная сквозная задержка прохождения управляющих команд и переключения кросспоинтов составляет <strong>менее 20 миллисекунд</strong>.
                </p>
              </div>
              <div style={{ 
                fontSize: '72px', 
                fontWeight: '800', 
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.05em',
                background: 'linear-gradient(180deg, #ffffff 30%, #4cc9f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginTop: '20px'
              }}>
                &lt; 20ms
              </div>
            </PremiumBentoCard>

            {/* ПРОГРАММНО-АППАРАТНАЯ ЭКОСИСТЕМА ПАНЕЛЕЙ */}
            <PremiumBentoCard>
              <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '14px', fontWeight: '700' }}>Контрольные панели</h3>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.65', fontWeight: 300 }}>
                Интеграция физических и программных консолей управления. Поддерживается страница <strong>PanelBuilderPage</strong> для сборки софт-панелей, виртуальный эмулятор железа, работающий 1:1 синхронно с реальным коммутационным полем, и переключение режимов фиксации команд (с кнопкой Take и без нее).
              </p>
            </PremiumBentoCard>

            {/* АВТОМАТИЗАЦИЯ СИГНАЛОВ И ЛОКИКИ */}
            <PremiumBentoCard gridColumn="span 2">
              <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '14px', fontWeight: '700' }}>Логические движки RulesEngine и TallyEngine</h3>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.65', fontWeight: 300 }}>
                Архитектура оркестратора базируется на трех китах внутренней логики автоматизации:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '16px', fontSize: '13px' }}>
                <div>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>ProtocolMaster:</strong> Ядро сквозной абстракции и трансляции коммутационных команд между разнородными протоколами на любых страницах системы.
                </div>
                <div>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>Rules & Tally Engine:</strong> Интеллектуальный расчет зависимостей, динамическое распределение прав и автоматическая индикация состояний сигналов.
                </div>
              </div>
            </PremiumBentoCard>

            {/* БЕЗОПАСНОСТЬ И КОНТЕЙНЕРИЗАЦИЯ */}
            <PremiumBentoCard gridColumn="span 2">
              <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '14px', fontWeight: '700' }}>Enterprise-безопасность и ролевая модель (RBAC)</h3>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.65', fontWeight: 300 }}>
                Многопользовательская система разграничения прав доступа внедрена на уровне бэкенда и фронтенда. Все сетевые запросы проходят строгую верификацию авторизации. Сервисы изолированы внутри защищенной Docker-инфраструктуры, имена контейнеров полностью скрыты, а лицензионные токены защищены сквозным пробросом по цепочке GelixManager-Launcher-Backend.
              </p>
            </PremiumBentoCard>

            {/* НАДЕЖНОСТЬ БАЗЫ ДАННЫХ */}
            <PremiumBentoCard style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '14px', fontWeight: '700' }}>Автоматические бэкапы</h3>
                <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.6', fontWeight: 300 }}>
                  Система резервного копирования баз данных отправляет дампы напрямую в лаунчер. Дамп БД создается автоматически при каждом обновлении ядра системы во избежание потери конфигураций матриц.
                </p>
              </div>
            </PremiumBentoCard>

          </div>
        </div>
      </section>

      {/* АРХИТЕКТУРА РАЗВЕРТЫВАНИЯ */}
      <section style={{ padding: '100px 40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={premiumReveal}>
          <h2 style={{ fontSize: '32px', fontWeight: '200', letterSpacing: '-0.03em', marginBottom: '14px' }}>Универсальный и отказоустойчивый деплой</h2>
          <p style={{ color: COLORS.textMuted, maxWidth: '600px', margin: '0 auto 35px', fontSize: '15px', lineHeight: '1.6', fontWeight: 300 }}>
            Веб-интерфейс полностью контейнеризирован на базе Docker-архитектуры. Для инженеров развертывание инсталляционных пакетов автоматизировано через кроссплатформенный настольный лаунчер и универсальный CLI-инсталлятор.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            {['Web-Based', 'Docker Architecture', 'Config Manage'].map(badge => (
              <span key={badge} style={{ fontSize: '11px', color: COLORS.textLight, border: `1px solid ${COLORS.border}`, padding: '6px 14px', borderRadius: '4px', fontFamily: 'monospace', backgroundColor: 'rgba(255,255,255,0.02)' }}>{badge}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ПОДВАЛ */}
      <footer style={{ padding: '40px', textAlign: 'center', borderTop: `1px solid ${COLORS.border}`, color: COLORS.textDark, fontSize: '12px', fontWeight: 300, letterSpacing: '0.5px' }}>
        <p>© 2026 Gelix Systems. Все права защищены. Разработано для критически важных медиа-сетей.</p>
      </footer>

    </div>
  );
};

export default App;