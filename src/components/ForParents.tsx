import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle2, Lock, Users, HeartHandshake } from 'lucide-react';

const trustPoints = [
  {
    icon: CheckCircle2,
    title: 'Verified & Transparent',
    description: 'Every interaction is tracked and visible. Know exactly what\'s happening with your athlete\'s recruiting.',
  },
  {
    icon: Lock,
    title: 'Safe & Secure',
    description: 'Built with student-athlete privacy in mind. Your data is protected and never shared without permission.',
  },
  {
    icon: Users,
    title: 'Built by Experts',
    description: 'Created by former athletes, college coaches, and recruiting professionals who\'ve been through this.',
  },
  {
    icon: HeartHandshake,
    title: 'Family-Focused Support',
    description: 'We understand this is a family decision. Our team is here to guide you through every step.',
  },
];

export function ForParents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="parents" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #1C1F26 0%, #0e1320 100%)' }}>
      {/* Blue gradient shapes with depth */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full opacity-20"
        initial={{ x: '-100%' }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ duration: 1.2 }}
        style={{ background: 'radial-gradient(circle at left, rgba(0, 70, 173, 0.6) 0%, transparent 70%)' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20"
        initial={{ x: '100%' }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{ background: 'radial-gradient(circle at right, rgba(249, 178, 51, 0.4) 0%, transparent 70%)' }}
      />
      
      {/* Grid pattern with brand blue */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,70,173,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,70,173,0.8)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-texture opacity-[0.08]" />
      
      {/* Floating brand badges */}
      <motion.div
        className="absolute top-20 right-20 hidden lg:block"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-44 h-44 rounded-3xl p-1 shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F9B233 0%, #FFC857 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
          
          <div className="w-full h-full rounded-3xl flex flex-col items-center justify-center relative z-10" style={{ background: 'linear-gradient(135deg, #0046AD 0%, #003580 100%)' }}>
            <CheckCircle2 className="w-16 h-16 text-[#F9B233] mb-3" />
            <span className="text-white" style={{ fontSize: '1rem', fontWeight: 700 }}>VERIFIED</span>
            <span className="text-white/70" style={{ fontSize: '0.75rem' }}>PLATFORM</span>
          </div>
          
          {/* Gold ring animation */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-[#F9B233]"
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1, 0.95] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-24 left-20 hidden lg:block"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-40 h-40 rounded-3xl p-1 shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0046AD 0%, #003580 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-transparent" />
          
          <div className="w-full h-full rounded-3xl flex flex-col items-center justify-center relative z-10 bg-[#001F3F]">
            <Lock className="w-14 h-14 text-[#F9B233] mb-3" />
            <span className="text-white" style={{ fontSize: '0.875rem', fontWeight: 700 }}>AI RECRUITING</span>
          </div>
        </div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 border-2 backdrop-blur-sm"
            style={{
              background: 'rgba(249, 178, 51, 0.15)',
              borderColor: 'rgba(249, 178, 51, 0.5)',
            }}
            whileHover={{ scale: 1.05, borderColor: '#F9B233' }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[#F9B233]"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[#F9B233]" style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              FOR PARENTS
            </span>
          </motion.div>
          
          <h2 className="mb-6 relative inline-block" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            <span className="text-white">A system you can </span>
            <span className="relative">
              <span
                className="relative z-10 bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(135deg, #F9B233 0%, #FFC857 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                trust
              </span>
              {/* Gold glow underline */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-4 bg-[#F9B233]/40 blur-lg"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.div
                className="absolute bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-[#F9B233] via-[#FFC857] to-[#F9B233]"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
            .
          </h2>
          
          <p className="text-white/90 max-w-2xl mx-auto mt-8" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Built by athletes, coaches, and recruiters — for families who care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="h-full glass-effect backdrop-blur-xl rounded-2xl p-10 border-2 border-white/20 hover:border-[#F9B233]/60 transition-all duration-500 relative overflow-hidden group-hover:shadow-2xl">
                {/* Gold gradient on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(249, 178, 51, 0.1) 0%, transparent 100%)',
                  }}
                />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute top-0 right-0 w-full h-full rounded-bl-full"
                    style={{ background: 'linear-gradient(to bottom left, rgba(249, 178, 51, 0.15), transparent)' }}
                  />
                </div>
                
                {/* Icon with brand styling */}
                <motion.div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden shadow-lg border-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(249, 178, 51, 0.2) 0%, rgba(0, 70, 173, 0.1) 100%)',
                    borderColor: 'rgba(249, 178, 51, 0.3)',
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -10, 10, 0],
                    borderColor: '#F9B233',
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <point.icon className="w-9 h-9 relative z-10 text-[#F9B233]" />
                  
                  {/* Pulsing glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-[#F9B233]"
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                <h3 className="text-white mb-4 relative z-10" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {point.title}
                </h3>
                
                <p className="text-white/80 relative z-10 leading-relaxed" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
                  {point.description}
                </p>
                
                {/* Gold bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1.5 rounded-b-2xl bg-gradient-to-r from-[#F9B233] to-[#FFC857]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.button
            className="btn-outline group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'https://www.recruitbridge.app/'}
          >
            Learn More About Our Process
            <motion.span
              className="inline-block ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Curved divider */}
      <div className="curve-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,100 900,100 1200,60 L1200,120 L0,120 Z" fill="#F5F7FA" />
        </svg>
      </div>
    </section>
  );
}