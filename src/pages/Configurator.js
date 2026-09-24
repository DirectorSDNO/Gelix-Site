import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../theme/colors';
import LogoImg from '../assets/Logo.png';

// Анимации
const premiumReveal = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 40 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Премиальная карточка (BentoCard)
const PremiumBentoCard = ({ children, style = {}, className = '', gridColumn = 'auto' }) => {
  return (
    <motion.div
      variants={premiumReveal}
      style={{
        gridColumn: gridColumn,
        position: 'relative', borderRadius: '12px', padding: '1px',
        background: 'linear-gradient(130deg, rgba(76,201,240,0.25), rgba(168,85,247,0.15), transparent 60%)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)', overflow: 'hidden',
        transition: 'box-shadow 0.3s ease',
        ...style
      }}
      className={`bento-card-wrapper ${className}`}
      whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0,0,0,0.4)' }}
    >
      <div style={{
        backgroundColor: 'rgba(22, 22, 26, 0.85)', backdropFilter: 'blur(30px)',
        borderRadius: '11px', padding: '30px', height: '100%', boxSizing: 'border-box'
      }}>
        {children}
      </div>
    </motion.div>
  );
};

// Компонент таблицы
const Th = ({ children }) => <th style={{ padding: '16px', textAlign: 'left', borderBottom: `1px solid ${COLORS.border || 'rgba(255,255,255,0.1)'}`, color: COLORS.textLight || '#a1a1aa', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{children}</th>;
const Td = ({ children, strong }) => <td style={{ padding: '16px', borderBottom: `1px solid rgba(255,255,255,0.03)`, color: strong ? '#fff' : (COLORS.textMuted || '#a1a1aa'), fontWeight: strong ? 600 : 300, fontSize: '14px' }}>{children}</td>;

const Configurator = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: COLORS.background || '#09090b', minHeight: '100vh', color: COLORS.textMain || '#fff', fontFamily: "'Inter', sans-serif", paddingBottom: '80px' }}>
      <div className="noise-layer" style={{ position: 'fixed', inset: 0, opacity: 0.025, pointerEvents: 'none', zIndex: 9999 }} />
      
      {/* HEADER */}
      <header style={{ 
        padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        borderBottom: `1px solid ${COLORS.border || 'rgba(255,255,255,0.1)'}`, background: 'rgba(9, 9, 11, 0.8)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', fontSize: '16px' }}>
          <img src={LogoImg} alt="Gelix Logo" style={{ height: '24px' }} />
          <span>GELIX <span style={{ color: COLORS.textMuted || '#71717a', fontWeight: '300', fontSize: '12px' }}>// SERVER SPECIFICATION</span></span>
        </div>
        <motion.button 
          onClick={() => navigate('/')}
          whileHover={{ x: -4 }}
          style={{ 
            background: 'transparent', color: COLORS.tx || '#4cc9f0', border: 'none', fontSize: '13px', 
            fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '1px'
          }}
        >
          ← НАЗАД К ОПИСАНИЮ
        </motion.button>
      </header>

      <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        
        {/* ТИТУЛЬНЫЙ БЛОК */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ marginBottom: '50px' }}>
          <motion.h1 variants={premiumReveal} style={{ fontSize: '42px', fontWeight: '200', letterSpacing: '-0.03em', margin: '0 0 16px', color: '#fff' }}>
            Спецификация и параметры сервера
          </motion.h1>
          <motion.p variants={premiumReveal} style={{ color: COLORS.textMuted || '#a1a1aa', fontSize: '16px', fontWeight: 300, maxWidth: '800px', lineHeight: '1.6' }}>
            Требования к вычислительным ресурсам определяются масштабом вашей инфраструктуры: количеством одновременно обслуживаемых устройств, частотой изменения соединений, размером базы данных и числом активных операторов.
          </motion.p>
        </motion.div>

        {/* ТАБЛИЦА СИСТЕМНЫХ ТРЕБОВАНИЙ */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ marginBottom: '60px' }}>
          <motion.h2 variants={premiumReveal} style={{ fontSize: '24px', fontWeight: '300', marginBottom: '24px', color: '#fff' }}>Матрица системных требований</motion.h2>
          <PremiumBentoCard variants={premiumReveal} style={{ padding: '0', background: 'rgba(22, 22, 26, 0.6)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <Th>Параметр</Th>
                    <Th>Минимальные</Th>
                    <Th>Рекомендуемые</Th>
                    <Th>Крупная инсталляция</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Td strong>Ожидаемая нагрузка</Td>
                    <Td><span style={{ color: COLORS.success || '#28f755', fontWeight: 600 }}>до 1 000 потоков</span></Td>
                    <Td><span style={{ color: COLORS.tx || '#4cc9f0', fontWeight: 600 }}>до 5 000 потоков</span></Td>
                    <Td><span style={{ color: COLORS.rx || '#a855f7', fontWeight: 600 }}>10 000+ потоков</span></Td>
                  </tr>
                  <tr>
                    <Td strong>Процессор (CPU)</Td>
                    <Td>4 физических ядра</Td>
                    <Td>8 физических ядер</Td>
                    <Td>16 физических ядер</Td>
                  </tr>
                  <tr>
                    <Td strong>Память (RAM)</Td>
                    <Td>8 ГБ</Td>
                    <Td>16 ГБ</Td>
                    <Td>32 ГБ</Td>
                  </tr>
                  <tr>
                    <Td strong>Диск (Storage)</Td>
                    <Td>100 ГБ SSD</Td>
                    <Td>250 ГБ NVMe</Td>
                    <Td>500 ГБ NVMe</Td>
                  </tr>
                  <tr>
                    <Td strong>Сетевой интерфейс</Td>
                    <Td>1 Gbps Ethernet</Td>
                    <Td>1 Gbps Ethernet</Td>
                    <Td>10 Gbps <span style={{ fontSize: '11px', color: COLORS.textMuted }}>(для ядра сети)</span></Td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PremiumBentoCard>
        </motion.div>

        {/* ДЕТАЛИЗАЦИЯ ТРЕБОВАНИЙ */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          
          <PremiumBentoCard variants={premiumReveal}>
            <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '16px', fontWeight: '600' }}>Процессор (CPU)</h3>
            <p style={{ fontSize: '13px', color: '#e4e4e7', lineHeight: '1.6', marginBottom: '12px', fontWeight: 300 }}>
              Оркестратору требуется многопоточность для асинхронной обработки REST API, WebSocket, JSON, подписок NMOS, Ember+, OpenFlow и Dante API. Сверхбыстрые ядра менее критичны, чем их количество.
            </p>
            <ul style={{ fontSize: '12px', color: COLORS.textMuted || '#a1a1aa', paddingLeft: '16px', lineHeight: '1.7' }}>
              <li><strong>Архитектура:</strong> x86-64</li>
              <li><strong>Серверные:</strong> Intel Xeon Silver/Gold, AMD EPYC</li>
              <li><strong>Десктопные:</strong> Intel Core i7/i9, AMD Ryzen 7/9</li>
            </ul>
          </PremiumBentoCard>

          <PremiumBentoCard variants={premiumReveal}>
            <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '16px', fontWeight: '600' }}>Память (RAM)</h3>
            <p style={{ fontSize: '13px', color: '#e4e4e7', lineHeight: '1.6', marginBottom: '12px', fontWeight: 300 }}>
              Даже при 10k потоках сервисы ASP.NET Core и PostgreSQL редко выходят за пределы 10–15 ГБ. 32 ГБ обеспечивают идеальный запас для кэширования. Frontend (React) практически не расходует ресурсы сервера.
            </p>
            <ul style={{ fontSize: '12px', color: COLORS.textMuted || '#a1a1aa', paddingLeft: '16px', lineHeight: '1.7' }}>
              <li>Память уходит на PostgreSQL и Docker</li>
              <li>Кэширование тысяч объектов устройств</li>
              <li>Поддержание истории соединений и WebSocket-клиентов</li>
            </ul>
          </PremiumBentoCard>

          <PremiumBentoCard variants={premiumReveal}>
            <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '16px', fontWeight: '600' }}>Среда и Хранение</h3>
            <p style={{ fontSize: '13px', color: '#e4e4e7', lineHeight: '1.6', marginBottom: '12px', fontWeight: 300 }}>
              HDD не поддерживаются из-за низкого IOPS. Для хранения логов, истории соединений, аудита и автоматических бэкапов БД настоятельно рекомендуется <strong>NVMe SSD</strong>.
            </p>
            <ul style={{ fontSize: '12px', color: COLORS.textMuted || '#a1a1aa', paddingLeft: '16px', lineHeight: '1.7' }}>
              <li><strong>Linux:</strong> Ubuntu Server 22.04 LTS+, Debian 12+</li>
              <li><strong>Windows:</strong> Win Server 2022+ (Win 11 Pro для тестов)</li>
              <li><strong>Среда:</strong> Docker Engine + Docker Compose</li>
            </ul>
            <div style={{ marginTop: '12px', fontSize: '12px', padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}>
              <strong style={{color: COLORS.tx || '#4cc9f0'}}>Внешняя БД:</strong> Если Postgres выносится из встроенного контейнера отдельно, ему рекомендуется минимум 4 CPU и 8 ГБ RAM.
            </div>
          </PremiumBentoCard>

        </motion.div>
      </main>
    </div>
  );
};

export default Configurator;