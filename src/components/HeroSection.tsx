import { motion } from 'motion/react';
import { ArrowRight, Play, Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import logoImage from 'figma:asset/828da3dd8fbcbb5e38ce9b93a6dc683b9fb62485.png';

export function HeroSection() {
  const headlines = [
    { main: "From overlooked to", highlight: "recruited" },
    { main: "From dream to", highlight: "offer" },
    { main: "Your bridge to", highlight: "success" },
  ];
  
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.current.x;
      const deltaY = e.clientY - lastMousePos.current.y;
      
      setRotation(prev => ({
        x: prev.x - deltaY * 0.5,
        y: prev.y + deltaX * 0.5,
      }));
      
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(180deg, #1C1F26 0%, #0e1320 50%, #005BEA 100%)',
            'linear-gradient(180deg, #1C1F26 0%, #0e1320 50%, #00C6AE 100%)',
            'linear-gradient(180deg, #1C1F26 0%, #0e1320 50%, #005BEA 100%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Cinematic background gradients */}
      <div className="absolute inset-0">
        {/* Deep blue radiating gradient */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-40"
          animate={{
            background: [
              'radial-gradient(circle at center, rgba(0, 70, 173, 0.4) 0%, transparent 70%)',
              'radial-gradient(circle at center, rgba(0, 70, 173, 0.6) 0%, transparent 70%)',
              'radial-gradient(circle at center, rgba(0, 70, 173, 0.4) 0%, transparent 70%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Gold light streaks */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#F9B233]/30 to-transparent"
            style={{
              width: `${Math.random() * 400 + 300}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [-200, 200],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,70,173,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,70,173,0.5)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-texture opacity-[0.06]" />
      
      {/* Floating particles with gold accents */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              backgroundColor: i % 4 === 0 ? '#F9B233' : 'rgba(255, 255, 255, 0.3)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
        {/* Official 3D Logo with Glow Effect */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.3 }}
        >
          <div className="relative" ref={logoRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {/* Gold halo glow */}
            <motion.div
              className="absolute inset-0 blur-3xl opacity-60"
              style={{
                background: 'radial-gradient(circle, rgba(201, 162, 78, 0.5) 0%, rgba(0, 91, 234, 0.4) 50%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            {/* Blue depth glow */}
            <motion.div
              className="absolute inset-0 blur-2xl opacity-50"
              style={{
                background: 'radial-gradient(circle, rgba(0, 91, 234, 0.8) 0%, transparent 60%)',
              }}
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            {/* Interactive 3D Logo Container */}
            <motion.div
              className="relative z-10"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={() => setIsDragging(true)}
              animate={{
                rotateX: rotation.x,
                rotateY: rotation.y,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            >
              <motion.div
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(50px)',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={logoImage}
                  alt="RecruitBridge Logo"
                  className="w-[300px] md:w-[350px] h-auto drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(201, 162, 78, 0.4)) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))',
                  }}
                />
              </motion.div>
            </motion.div>
            
            {/* Orbiting gold particles */}
            {[0, 90, 180, 270].map((angle) => (
              <motion.div
                key={angle}
                className="absolute w-3 h-3 bg-[#F9B233] rounded-full shadow-lg"
                style={{
                  top: '50%',
                  left: '50%',
                  marginLeft: '-6px',
                  marginTop: '-6px',
                  boxShadow: '0 0 20px rgba(201, 162, 78, 0.6)',
                }}
                animate={{
                  rotate: [angle, angle + 360],
                  x: [0, 130 * Math.cos((angle * Math.PI) / 180)],
                  y: [0, 130 * Math.sin((angle * Math.PI) / 180)],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Animated headline */}
        <motion.div
          className="h-32 md:h-24 flex items-center justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="relative" style={{ fontSize: 'clamp(2.75rem, 7vw, 5rem)', fontWeight: 700, lineHeight: '1.1' }}>
            <motion.span
              key={currentHeadline}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="block"
            >
              <span className="text-white">{headlines[currentHeadline].main} </span>
              <span
                className="inline-block relative"
                style={{
                  background: 'linear-gradient(135deg, #F9B233 0%, #FFC857 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {headlines[currentHeadline].highlight}.
              </span>
            </motion.span>
            
            {/* Gold accent underline */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1.5 rounded-full bg-gradient-to-r from-transparent via-[#C9A24E] to-transparent"
              initial={{ width: '0%' }}
              animate={{ width: '60%' }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </h1>
        </motion.div>
        
        {/* New Subheadline */}
        <motion.p
          className="text-white max-w-2xl mx-auto mb-6"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: '1.5', fontWeight: 600 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Automate coach emails, track responses, and finally get seen.
        </motion.p>
        
        {/* Subheadline */}
        <motion.p
          className="text-white/85 max-w-3xl mx-auto mb-12"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.6' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          AI-powered recruiting platform connecting under-recruited athletes{' '}
          <span className="text-[#00C6AE] font-semibold">with college coaches nationwide</span>.
        </motion.p>
        
        {/* CTA buttons with enhanced hover glow */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="btn-primary group relative"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 50px rgba(0, 91, 234, 0.7), 0 0 80px rgba(0, 198, 174, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'https://www.recruitbridge.app/'}
          >
            {/* Enhanced shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
        
        {/* Trust indicators with brand colors */}
        <motion.div
          className="pt-12 border-t border-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: '1,200+', label: 'Active Athletes' },
              { value: '87%', label: 'Response Rate' },
              { value: '350+', label: 'Offers Extended' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <motion.div
                    className="text-transparent bg-clip-text mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #00C6AE 0%, #00E5C8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontWeight: 700,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/80" style={{ fontSize: '0.875rem' }}>
                    {stat.label}
                  </div>
                  
                  {/* Teal accent line */}
                  <motion.div
                    className="h-1 mt-3 rounded-full bg-gradient-to-r from-transparent via-[#00C6AE] to-transparent mx-auto"
                    style={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Curved divider */}
      <div className="curve-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="#F5F7FA" />
        </svg>
      </div>
    </section>
  );
}