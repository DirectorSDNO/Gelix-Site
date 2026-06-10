import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from './theme/colors';
import { ConnectIcon, DiscoveryIcon, ServerIcon, CheckIcon, AutomationIcon } from './theme/Icons';

// Анимационные пресеты (Magic MCP style)
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const App = () => {
  return (
    <div style={{ backgroundColor: COLORS.background, minHeight: '100vh', color: COLORS.textMain }}>
      
      {/* HEADER */}
      <header style={{ 
        position: 'fixed', top: 0, width: '100%', 
        backgroundColor: 'rgba(9, 9, 11, 0.8)', backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${COLORS.border}`, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 40px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold', fontSize: '20px' }}>
          <ServerIcon color={COLORS.tx} /> GELIX
        </div>
        <nav style={{ display: 'flex', gap: '24px', fontSize: '14px', color: COLORS.textLight }}>
          <a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Capabilities</a>
          <a href="#protocols" style={{ color: 'inherit', textDecoration: 'none' }}>Supported</a>
          <a href="#roadmap" style={{ color: 'inherit', textDecoration: 'none' }}>Roadmap</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section style={{ 
        padding: '160px 40px 100px', display: 'flex', flexDirection: 'column', 
        alignItems: 'center', textAlign: 'center', minHeight: '80vh', justifyContent: 'center'
      }}>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeUp} style={{ 
            display: 'inline-block', padding: '6px 16px', borderRadius: '20px', 
            border: `1px solid ${COLORS.matrix}`, backgroundColor: 'rgba(168, 85, 247, 0.1)', 
            color: COLORS.matrix, fontSize: '12px', fontWeight: 'bold', marginBottom: '24px'
          }}>
            SYSTEM ORCHESTRATOR 1.0
          </motion.div>
          
          <motion.h1 variants={fadeUp} style={{ fontSize: '64px', fontWeight: '800', margin: '0 0 20px', letterSpacing: '-0.02em' }}>
            Unify Your Hardware.<br/>
            <span style={{ color: COLORS.tx }}>Command The Network.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} style={{ fontSize: '18px', color: COLORS.textMuted, maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            Gelix is an enterprise-grade orchestrator engineered to discover, route, and manage your network topology. Native support for NMOS, Dante, NDI, and more.
          </motion.p>
          
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button style={{ 
              backgroundColor: COLORS.tx, color: '#000', border: 'none', padding: '14px 28px', 
              borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: 'opacity 0.2s'
            }}>Request Access</button>
            <button style={{ 
              backgroundColor: 'transparent', color: COLORS.textMain, border: `1px solid ${COLORS.border}`, 
              padding: '14px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer'
            }}>View Documentation</button>
          </motion.div>
        </motion.div>
      </section>

      {/* SUPPORTED PROTOCOLS (BENTO BOX UX) */}
      <section id="protocols" style={{ padding: '80px 40px', backgroundColor: COLORS.pageBg, borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>Seamless Integration</h2>
            <p style={{ color: COLORS.textMuted, marginBottom: '40px' }}>Auto-discovery and synchronization out of the box.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}
          >
            {[
              { title: 'NMOS / IS-04', desc: 'Full IS-04 Registry support. Auto-detect Nodes, Devices, Senders and Receivers.', color: COLORS.tx, icon: <DiscoveryIcon size={32} color={COLORS.tx}/> },
              { title: 'DANTE', desc: 'mDNS network scanning. Detailed channel sync (TX/RX), Sample Rate, and Bit Depth metrics.', color: '#E63946', icon: <ServerIcon size={32} color="#E63946"/> },
              { title: 'NDI', desc: 'Native NDI Discovery Server integration. Instant source and receiver routing.', color: '#FCA311', icon: <ConnectIcon size={32} color="#FCA311"/> },
              { title: 'EMBER+', desc: 'TCP connection for Ember+ Controllers. Dynamic tree parsing and preset matching.', color: COLORS.warning, icon: <AutomationIcon size={32} color={COLORS.warning}/> },
              { title: 'OPENFLOW', desc: 'SDN Switch Registration. Automatic DPID retrieval for connected controllers (e.g., H3C).', color: '#4CC9F0', icon: <ServerIcon size={32} color="#4CC9F0"/> }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeUp} style={{
                backgroundColor: COLORS.inactive, border: `1px solid ${COLORS.border}`, 
                borderRadius: '16px', padding: '30px', position: 'relative', overflow: 'hidden'
              }}>
                <div style={{ marginBottom: '20px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '20px', marginBottom: '10px', color: COLORS.textMain }}>{feature.title}</h3>
                <p style={{ fontSize: '14px', color: COLORS.textMuted, lineHeight: '1.5' }}>{feature.desc}</p>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: `radial-gradient(circle, ${feature.color}20 0%, transparent 70%)`, filter: 'blur(20px)' }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section id="roadmap" style={{ padding: '100px 40px', maxWidth: '800px', margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px' }}>Development Roadmap</h2>
          <p style={{ color: COLORS.textMuted }}>What we are building next for the engineering teams.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {[
            { q: 'Q2 2026', title: 'CLI Version & Native Installer', desc: 'Releasing the native interactive CLI installer mirroring network hardware consoles for engineer comfort.', status: 'current' },
            { q: 'Q3 2026', title: 'Advanced SDN Routing', desc: 'Deep OpenFlow integration with graphical flow mapping and rule generation.', status: 'planned' },
            { q: 'Q4 2026', title: 'IS-05 Connection Management', desc: 'Direct patching between NMOS Senders and Receivers right from the Orchestrator Matrix.', status: 'planned' }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeUp} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ 
                width: '120px', flexShrink: 0, padding: '8px', textAlign: 'center', 
                borderRadius: '8px', backgroundColor: item.status === 'current' ? 'rgba(40, 247, 85, 0.1)' : COLORS.inactive,
                border: `1px solid ${item.status === 'current' ? COLORS.success : COLORS.border}`,
                color: item.status === 'current' ? COLORS.success : COLORS.textMuted, fontSize: '14px', fontWeight: 'bold'
              }}>
                {item.q}
              </div>
              <div style={{ paddingBottom: '30px', borderBottom: idx !== 2 ? `1px solid ${COLORS.border}` : 'none', flex: 1 }}>
                <h4 style={{ fontSize: '18px', marginBottom: '8px', color: COLORS.textMain }}>{item.title}</h4>
                <p style={{ fontSize: '14px', color: COLORS.textMuted, lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px', textAlign: 'center', borderTop: `1px solid ${COLORS.border}`, color: COLORS.textDark, fontSize: '13px' }}>
        <p>© 2026 Gelix Systems. Orchestrating the future.</p>
      </footer>

    </div>
  );
};

export default App;