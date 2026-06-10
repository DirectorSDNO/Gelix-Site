import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from './theme/colors';
import { 
  DiscoveryIcon, ConnectIcon, AutomationIcon, 
  MatrixIcon, ShieldIcon, TerminalIcon, CpuIcon, DatabaseIcon 
} from './theme/Icons';

// Импорт логотипов
import LogoMainImg from './assets/LogoMain.png';
import LogoImg from './assets/Logo.png';

// Плавные физические анимации появления
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

// Стили из вашего Promo экрана
const promoStyles = {
  backgroundGradient: {
    position: 'absolute', inset: '-20%',
    background: `radial-gradient(circle at 30% 30%, rgba(45,140,255,0.12), transparent 40%), radial-gradient(circle at 70% 70%, rgba(120,180,255,0.08), transparent 45%)`,
    animation: 'backgroundMove 18s ease-in-out infinite',
    filter: 'blur(50px)', willChange: 'transform',
  },
  ambientGlow: {
    position: 'absolute', width: '55vw', height: '55vw', maxWidth: '850px', maxHeight: '850px',
    top: '40%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(45,140,255,0.22) 0%, rgba(45,140,255,0.10) 35%, rgba(45,140,255,0.00) 75%)',
    filter: 'blur(30px)', animation: 'auraBreathing 10s ease-in-out infinite', pointerEvents: 'none', willChange: 'transform, opacity',
  },
  secondaryGlow: {
    position: 'absolute', width: '38vw', height: '38vw', maxWidth: '500px', maxHeight: '500px',
    top: '40%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(120,190,255,0.16) 0%, rgba(120,190,255,0.00) 70%)',
    filter: 'blur(60px)', opacity: 0.7, animation: 'auraBreathing 7s ease-in-out infinite reverse', pointerEvents: 'none',
  },
  logoWrapper: {
    position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
    animation: `cinematicReveal 2s cubic-bezier(0.16, 1, 0.3, 1), premiumFloat 9s ease-in-out infinite 2s, microPulse 6s ease-in-out infinite 2s`,
    willChange: 'transform, opacity', marginBottom: '20px', zIndex: 10
  },
  logoImage: {
    position: 'relative', width: '700px', maxWidth: '70vw', height: 'auto', zIndex: 2, pointerEvents: 'none',
    userSelect: 'none', mixBlendMode: 'screen',
    filter: `drop-shadow(0 0 12px rgba(45,140,255,0.22)) drop-shadow(0 0 40px rgba(45,140,255,0.18)) drop-shadow(0 0 90px rgba(45,140,255,0.12))`,
    backfaceVisibility: 'hidden', transform: 'translateZ(0)',
  },
  shimmer: {
    position: 'absolute', width: '35%', height: '180%',
    background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.02) 65%, rgba(255,255,255,0) 100%)`,
    filter: 'blur(8px)', zIndex: 3, pointerEvents: 'none', animation: 'logoShimmer 7s ease-in-out infinite', mixBlendMode: 'screen',
  }
};

const App = () => {
  return (
    <div style={{ backgroundColor: COLORS.background, minHeight: '100vh', color: COLORS.textMain, overflowX: 'hidden' }}>
      
      {/* CSS-анимации для Promo логотипа */}
      <style>
        {`
          @keyframes cinematicReveal {
            0% { opacity: 0; transform: scale(0.94) translateY(20px); filter: blur(12px); }
            45% { opacity: 1; transform: scale(1.015) translateY(0px); filter: blur(0px); }
            100% { opacity: 1; transform: scale(1); filter: blur(0px); }
          }
          @keyframes premiumFloat {
            0% { transform: translate3d(0px, 0px, 0px); }
            25% { transform: translate3d(0px, -8px, 0px); }
            50% { transform: translate3d(0px, -14px, 0px); }
            75% { transform: translate3d(0px, -7px, 0px); }
            100% { transform: translate3d(0px, 0px, 0px); }
          }
          @keyframes auraBreathing {
            0% { opacity: 0.35; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.75; transform: translate(-50%, -50%) scale(1.18); }
            100% { opacity: 0.35; transform: translate(-50%, -50%) scale(1); }
          }
          @keyframes logoShimmer {
            0% { opacity: 0; transform: translateX(-120%) skewX(-18deg); }
            15% { opacity: 0.9; }
            45% { opacity: 0.45; }
            100% { opacity: 0; transform: translateX(220%) skewX(-18deg); }
          }
          @keyframes microPulse {
            0% { opacity: 0.9; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.018); }
            100% { opacity: 0.9; transform: scale(1); }
          }
          @keyframes backgroundMove {
            0% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.08) rotate(2deg); }
            100% { transform: scale(1) rotate(0deg); }
          }
        `}
      </style>

      {/* ФИКСИРОВАННАЯ КЛИЕНТСКАЯ НАВИГАЦИЯ */}
      <header style={{ 
        position: 'fixed', top: 0, width: '100%', 
        backgroundColor: 'rgba(9, 9, 11, 0.75)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${COLORS.border}`, zIndex: 1000,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 40px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 'bold', fontSize: '18px', letterSpacing: '1px' }}>
          <img src={LogoImg} alt="Gelix Logo" style={{ height: '28px', width: 'auto' }} />
          <span>GELIX <span style={{ color: COLORS.textDark, fontWeight: 'normal', fontSize: '12px' }}>// ORCHESTRATOR</span></span>
        </div>
        <nav style={{ display: 'flex', gap: '30px', fontSize: '13px', fontWeight: '500' }}>
          <a href="#protocols" style={{ color: COLORS.textLight, textDecoration: 'none', transition: 'color 0.2s' }}>Протоколы</a>
          <a href="#inventory" style={{ color: COLORS.textLight, textDecoration: 'none', transition: 'color 0.2s' }}>Инвентарь имён</a>
          <a href="#features" style={{ color: COLORS.textLight, textDecoration: 'none', transition: 'color 0.2s' }}>Технические фичи</a>
        </nav>
      </header>

      {/* ГЛАВНЫЙ ЭКРАН (HERO С АНИМИРОВАННЫМ ЛОГОТИПОМ) */}
      <section style={{ 
        position: 'relative', display: 'flex', flexDirection: 'column', 
        alignItems: 'center', textAlign: 'center', minHeight: '100vh', justifyContent: 'center',
        padding: '100px 40px 60px', overflow: 'hidden',
        background: 'radial-gradient(circle at center, rgb(18, 22, 35) 0%, rgb(7, 9, 15) 100%)'
      }}>
        {/* Анимированный фон и свечения из Promo */}
        <div style={promoStyles.backgroundGradient}></div>
        <div style={promoStyles.ambientGlow}></div>
        <div style={promoStyles.secondaryGlow}></div>

        {/* Анимированный логотип */}
        <div style={promoStyles.logoWrapper}>
          <div style={promoStyles.shimmer}></div>
          <img src={LogoMainImg} alt="Orchestrator Promo Logo" style={promoStyles.logoImage} />
        </div>
        
        {/* Текстовая часть */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ zIndex: 10, position: 'relative' }}>
          <motion.h1 variants={fadeUp} style={{ fontSize: '42px', fontWeight: '300', margin: '0 0 20px', letterSpacing: '-0.01em', lineHeight: '1.15' }}>
            Центральное ядро коммутации<br/>
            <span style={{ fontWeight: 'bold', color: '#fff' }}>и программного контроля</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} style={{ fontSize: '16px', color: COLORS.textLight, maxWidth: '640px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            Программный оркестратор Gelix разработан для бесшовного обнаружения, глубокого мониторинга и мгновенной маршрутизации потоков в гетерогенных IP-сетях вещания и автоматизации.
          </motion.p>
          
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="#protocols" style={{ 
              backgroundColor: COLORS.tx, color: '#000', border: 'none', padding: '14px 28px', 
              borderRadius: '6px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'none'
            }}>Спецификация протоколов</a>
          </motion.div>
        </motion.div>
      </section>

      {/* 1. ПОДДЕРЖИВАЕМЫЕ ПРОТОКОЛЫ */}
      <section id="protocols" style={{ padding: '90px 40px', backgroundColor: COLORS.pageBg, borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ marginBottom: '50px' }}>
            <span style={{ color: COLORS.tx, fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>INTEGRATIONS MATRIX</span>
            <h2 style={{ fontSize: '32px', fontWeight: '400', margin: 0 }}>Поддерживаемые протоколы коммутации</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}
          >
            {/* NMOS */}
            <motion.div variants={fadeUp} style={{ backgroundColor: COLORS.inactive, border: `1px solid ${COLORS.border}`, borderRadius: '8px', padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#fff' }}>NMOS</h3>
                <span style={{ fontSize: '11px', color: COLORS.tx, border: `1px solid ${COLORS.tx}`, padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>IS-04 NATIVE</span>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.6' }}>
                Собственный автономный внутренний сервис <strong>IS-04 Registry</strong> и выделенный RDS прокси. Полное исключение сторонних зависимостей. Автоматическое сканирование топологии, регистрация узлов, устройств, сендеров и ресиверов.
              </p>
            </motion.div>

            {/* NDI */}
            <motion.div variants={fadeUp} style={{ backgroundColor: COLORS.inactive, border: `1px solid ${COLORS.border}`, borderRadius: '8px', padding: '32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#FCA311' }}>NDI</h3>
                <span style={{ fontSize: '11px', color: '#FCA311', border: '1px solid #FCA311', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>V4 / V5 / V6</span>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.6', marginBottom: '14px' }}>
                Глубокая интеграция на уровне бэкенда и фронтенда. Полное управление инфраструктурой через выделенные интерфейсы Setup, Discovery, Inventory и Matrix.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Full NDI', 'NDI | HX', 'NDI | HX2', 'NDI | HX3'].map(type => (
                  <span key={type} style={{ fontSize: '11px', backgroundColor: 'rgba(252, 163, 17, 0.1)', color: '#FCA311', padding: '4px 10px', borderRadius: '4px', fontWeight: '600' }}>{type}</span>
                ))}
              </div>
            </motion.div>

            {/* DANTE */}
            <motion.div variants={fadeUp} style={{ backgroundColor: COLORS.inactive, border: `1px solid ${COLORS.border}`, borderRadius: '8px', padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#E63946' }}>DANTE</h3>
                <span style={{ fontSize: '11px', color: '#E63946', border: '1px solid #E63946', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>MDNS DISCOVERY</span>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.6' }}>
                Автоматическое сканирование аудио-инфраструктуры по сетевым интерфейсам в реальном времени. Полный опрос и синхронизация TX/RX каналов, считывание частоты дискретизации (Sample Rate) и битности аудиопотоков.
              </p>
            </motion.div>

            {/* EMBER+ */}
            <motion.div variants={fadeUp} style={{ backgroundColor: COLORS.inactive, border: `1px solid ${COLORS.border}`, borderRadius: '8px', padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: COLORS.warning }}>EMBER+</h3>
                <span style={{ fontSize: '11px', color: COLORS.warning, border: `1px solid ${COLORS.warning}`, padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>DYNAMIC TREE</span>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.6' }}>
                Универсальный парсинг и интерактивная визуализация древовидных структур параметров устройств любого уровня сложности. Свободный выбор, разметка и подмена путей трансмиттеров (Tx) и ресиверов (Rx) напрямую в инвентаре.
              </p>
            </motion.div>

            {/* OPENFLOW */}
            <motion.div variants={fadeUp} style={{ backgroundColor: COLORS.inactive, border: `1px solid ${COLORS.border}`, borderRadius: '8px', padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#4CC9F0' }}>OPENFLOW</h3>
                <span style={{ fontSize: '11px', color: '#4CC9F0', border: '1px solid #4CC9F0', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>SDN NETWORK</span>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.6' }}>
                Прямая низкоуровневая регистрация и программный контроль SDN-коммутаторов аппаратно-программных комплексов. Автоматическое считывание уникальных идентификаторов DPID при установлении хэндшейка с контроллером.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. ИНВЕНТАРЬ ИМЁН */}
      <section id="inventory" style={{ padding: '90px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: '52px' }}>
          <span style={{ color: COLORS.matrix, fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>ALGORITHMIC NAMING</span>
          <h2 style={{ fontSize: '32px', fontWeight: '400', margin: 0 }}>Четырехуровневая система абстракции имён (Inventory)</h2>
          <p style={{ color: COLORS.textMuted, marginTop: '8px', fontSize: '15px' }}>Гибкое управление отображением портов и логических каналов на различных типах устройств.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {[
            { tag: 'Primary Name', label: 'Основное название', desc: 'Базовое имя порта во всем пользовательском веб-интерфейсе на управляющих ПК и планшетах инженеров. Не имеет ограничений по длине символов.' },
            { tag: 'Monitoring Name', label: 'Имя мониторинга', desc: 'Специализированное имя, передаваемое в систему Multiviewers и модули UMDS. По умолчанию наследует структуру и текстовые данные из Primary Name.' },
            { tag: 'Panel Name', label: 'Кнопочное имя', desc: 'Строго ограничено длиной до 8 символов. Применяется для дисплеев кнопок физических консолей. Генерируется на лету из основного имени встроенным алгоритмом сокращения.' },
            { tag: 'Name from Device', label: 'Аппаратное имя', desc: 'Прямое синхронное считывание конфигурации непосредственно с физического устройства или вещательного маршрутизатора. Обновляется на лету при детекции изменений.' }
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: COLORS.inputBg, border: `1px solid ${COLORS.border}`, borderRadius: '6px', padding: '24px' }}>
              <div style={{ fontFamily: 'monospace', color: COLORS.matrix, fontSize: '13px', fontWeight: 'bold', marginBottom: '6px' }}>[{item.tag}]</div>
              <h4 style={{ color: '#fff', fontSize: '17px', marginBottom: '12px', fontWeight: '600' }}>{item.label}</h4>
              <p style={{ fontSize: '13px', color: COLORS.textMuted, lineHeight: '1.5' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ТЕХНИЧЕСКИЕ ФИЧИ */}
      <section id="features" style={{ padding: '90px 40px', backgroundColor: COLORS.pageBg, borderTop: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: '52px', textAlign: 'center' }}>
            <span style={{ color: COLORS.success, fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>CORE ARCHITECTURE</span>
            <h2 style={{ fontSize: '32px', fontWeight: '400', margin: 0 }}>Технологический стек и возможности ядра</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            
            {/* РЕАЛТАЙМ МАТРИЦЫ И ВИРТУАЛИЗАЦИЯ */}
            <div style={{ gridColumn: 'span 2', backgroundColor: COLORS.inactive, border: `1px solid ${COLORS.border}`, borderRadius: '8px', padding: '30px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                <MatrixIcon color={COLORS.tx} size={24} />
                <h3 style={{ fontSize: '19px', color: '#fff' }}>Высокопроизводительные матрицы маршрутизации</h3>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.6', marginBottom: '12px' }}>
                Ядро оптимизировано под обработку <strong>100+ многопоточных устройств</strong> на одной странице за счет сквозной виртуализации списков Matrix и Inventory. Математика полностью вынесена на сторону бэкенда.
              </p>
              <ul style={{ fontSize: '13px', color: COLORS.textMuted, paddingLeft: '18px', lineHeight: '1.6' }}>
                <li>Пакетное (Bulk) добавление элементов в кастомные матрицы и инвентарь.</li>
                <li>Группировка каналов (Bundling / Followers) для управления многопоточными связками (видео + аудио).</li>
                <li>Интеллектуальная автогруппировка по сущностям <strong>SearchTags</strong> с цветовой дифференциацией сигналов.</li>
                <li>Поддержка механизма мгновенных снимков состояния коммутации (Matrix Snapshot) и макрокоманд (Salvos).</li>
              </ul>
            </div>

            {/* МАКСИМАЛЬНАЯ СКОРОСТЬ */}
            <div style={{ backgroundColor: COLORS.inactive, border: `1px solid ${COLORS.border}`, borderRadius: '8px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                  <CpuIcon color={COLORS.success} size={24} />
                  <h3 style={{ fontSize: '19px', color: '#fff' }}>Ultra-Low Latency</h3>
                </div>
                <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.6' }}>
                  Гарантированная сквозная задержка прохождения управляющих команд и переключения кросспоинтов составляет <strong>менее 20 миллисекунд</strong>.
                </p>
              </div>
              <div style={{ fontSize: '38px', fontWeight: 'bold', color: COLORS.success, fontFamily: 'monospace' }}>&lt; 20ms</div>
            </div>

            {/* ПРОГРАММНО-АППАРАТНАЯ ЭКОСИСТЕМА ПАНЕЛЕЙ */}
            <div style={{ backgroundColor: COLORS.inactive, border: `1px solid ${COLORS.border}`, borderRadius: '8px', padding: '30px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                <AutomationIcon color={COLORS.warning} size={24} />
                <h3 style={{ fontSize: '19px', color: '#fff' }}>Контрольные панели</h3>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.6' }}>
                Интеграция физических и программных консолей управления. Поддерживается страница <strong>PanelBuilderPage</strong> для сборки софт-панелей, виртуальный эмулятор железа, работающий 1:1 синхронно с реальным коммутационным полем, и переключение режимов фиксации команд.
              </p>
            </div>

            {/* АВТОМАТИЗАЦИЯ СИГНАЛОВ И ЛОГИКИ */}
            <div style={{ gridColumn: 'span 2', backgroundColor: COLORS.inactive, border: `1px solid ${COLORS.border}`, borderRadius: '8px', padding: '30px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                <ConnectIcon color="#4CC9F0" size={24} />
                <h3 style={{ fontSize: '19px', color: '#fff' }}>Логические движки RulesEngine и TallyEngine</h3>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.6' }}>
                Архитектура оркестратора базируется на трех китах внутренней логики автоматизации:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '12px', fontSize: '13px' }}>
                <div>
                  <strong style={{ color: '#fff' }}>ProtocolMaster:</strong> Ядро сквозной абстракции и трансляции коммутационных команд между разнородными протоколами на любых страницах системы.
                </div>
                <div>
                  <strong style={{ color: '#fff' }}>Rules & Tally Engine:</strong> Интеллектуальный расчет зависимостей, динамическое распределение прав и автоматическая индикация состояний сигналов.
                </div>
              </div>
            </div>

            {/* БЕЗОПАСНОСТЬ И КОНТЕЙНЕРИЗАЦИЯ */}
            <div style={{ gridColumn: 'span 2', backgroundColor: COLORS.inactive, border: `1px solid ${COLORS.border}`, borderRadius: '8px', padding: '30px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                <ShieldIcon color={COLORS.error} size={24} />
                <h3 style={{ fontSize: '19px', color: '#fff' }}>Enterprise-безопасность и ролевая модель (RBAC)</h3>
              </div>
              <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.6' }}>
                Многопользовательская система разграничения прав доступа внедрена на уровне бэкенда и фронтенда. Все сетевые запросы проходят строгую верификацию авторизации. Сервисы изолированы внутри защищенной Docker-инфраструктуры, имена контейнеров полностью скрыты, а лицензионные токены защищены сквозным пробросом.
              </p>
            </div>

            {/* НАДЕЖНОСТЬ БАЗЫ ДАННЫХ */}
            <div style={{ backgroundColor: COLORS.inactive, border: `1px solid ${COLORS.border}`, borderRadius: '8px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                  <DatabaseIcon color="#a855f7" size={24} />
                  <h3 style={{ fontSize: '19px', color: '#fff' }}>Автоматические бэкапы</h3>
                </div>
                <p style={{ fontSize: '14px', color: COLORS.textLight, lineHeight: '1.5' }}>
                  Система резервного копирования баз данных интегрирована непосредственно в лаунчер. Дамп БД создается автоматически при каждом обновлении ядра системы во избежание потери конфигураций матриц.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* АРХИТЕКТУРА РАЗВЕРТЫВАНИЯ */}
      <section style={{ padding: '90px 40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '32px' }}>
          <TerminalIcon color={COLORS.tx} size={32} style={{ marginBottom: '12px' }} />
          <h2 style={{ fontSize: '28px', fontWeight: '400' }}>Универсальный и отказоустойчивый деплой</h2>
          <p style={{ color: COLORS.textMuted, marginTop: '10px', fontSize: '15px' }}>
            Веб-интерфейс полностью контейнеризирован на базе Docker-архитектуры. Для инженеров развертывание инсталляционных пакетов автоматизировано через кроссплатформенный настольный лаунчер и универсальный CLI-инсталлятор.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <span style={{ fontSize: '12px', color: COLORS.textDark, border: `1px solid ${COLORS.border}`, padding: '6px 12px', borderRadius: '4px', fontFamily: 'monospace' }}>Web-Based</span>
          <span style={{ fontSize: '12px', color: COLORS.textDark, border: `1px solid ${COLORS.border}`, padding: '6px 12px', borderRadius: '4px', fontFamily: 'monospace' }}>Docker Architecture</span>
          <span style={{ fontSize: '12px', color: COLORS.textDark, border: `1px solid ${COLORS.border}`, padding: '6px 12px', borderRadius: '4px', fontFamily: 'monospace' }}>Config Manage</span>
        </div>
      </section>

      {/* ПОДВАЛ */}
      <footer style={{ padding: '40px', textAlign: 'center', borderTop: `1px solid ${COLORS.border}`, color: COLORS.textDark, fontSize: '12px' }}>
        <p>© 2026 Gelix Systems. Все права защищены. Разработано для критически важных медиа-сетей.</p>
      </footer>

    </div>
  );
};

export default App;