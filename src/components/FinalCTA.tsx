import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="contact" className="relative py-32 md:py-40 pb-40 md:pb-48 overflow-hidden">
      {/* Background image with brand color overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1757588034131-5c18ffed8ad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRlYW0lMjBodWRkbGV8ZW58MXx8fHwxNzYwNTgxNDIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Team huddle"
          className="w-full h-full object-cover"
        />
        {/* Deep blue gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 70, 173, 0.95) 0%, rgba(0, 31, 63, 0.92) 50%, rgba(249, 178, 51, 0.15) 100%)',
          }}
        />
        
        {/* Animated diagonal gold stripes */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(249, 178, 51, 0.3) 60px, rgba(249, 178, 51, 0.3) 120px)',
          }}
          animate={{ backgroundPosition: ['0px 0px', '120px 120px'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      
      {/* Dynamic grid with brand blue */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,70,173,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,70,173,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-texture opacity-[0.08]" />
      
      {/* Energetic floating particles with gold */}
      <div className="absolute inset-0">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              backgroundColor: i % 3 === 0 ? '#F9B233' : 'rgba(255, 255, 255, 0.4)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: i % 3 === 0 ? '0 0 10px rgba(249, 178, 51, 0.8)' : 'none',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      {/* Gold light rays */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute h-1 bg-gradient-to-r from-transparent via-[#F9B233]/40 to-transparent blur-sm"
          style={{
            width: `${Math.random() * 600 + 400}px`,
            top: `${20 + i * 20}%`,
            left: `${Math.random() * 50}%`,
          }}
          animate={{
            x: [-300, 300],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, type: 'spring' }}
        >
          {/* Badge with brand colors */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full mb-12 border-2"
            style={{ borderColor: 'rgba(249, 178, 51, 0.5)' }}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 0 30px rgba(249, 178, 51, 0.3)',
                '0 0 50px rgba(249, 178, 51, 0.6)',
                '0 0 30px rgba(249, 178, 51, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-[#F9B233]" />
            </motion.div>
            <span className="text-white" style={{ fontSize: '0.9375rem', fontWeight: 700, letterSpacing: '0.05em' }}>
              MOST ATHLETES SEE RESULTS WITHIN 7 DAYS
            </span>
          </motion.div>
          
          {/* Headline with gold emphasis */}
          <motion.h2
            className="mb-10 relative"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: '1.1' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white block mb-3">Your recruiting journey</span>
            <motion.span
              className="inline-block relative"
              style={{
                background: 'linear-gradient(135deg, #F9B233 0%, #FFC857 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                textShadow: [
                  '0 0 30px rgba(249, 178, 51, 0.6)',
                  '0 0 50px rgba(249, 178, 51, 0.9)',
                  '0 0 30px rgba(249, 178, 51, 0.6)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              starts here.
            </motion.span>
            
            {/* Gold dynamic underline */}
            <motion.div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-2 rounded-full bg-gradient-to-r from-transparent via-[#F9B233] to-transparent"
              initial={{ width: '0%' }}
              animate={isInView ? { width: '70%' } : {}}
              transition={{ duration: 1, delay: 0.7 }}
            />
            <motion.div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-2 blur-lg bg-gradient-to-r from-transparent via-[#F9B233] to-transparent"
              initial={{ width: '0%' }}
              animate={isInView ? { width: '70%' } : {}}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </motion.h2>
          
          {/* Subtext */}
          <motion.p
            className="text-white/95 max-w-2xl mx-auto mb-16"
            style={{ fontSize: '1.5rem', lineHeight: '1.6', fontWeight: 500 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            It's time to take control of your recruiting story.
          </motion.p>
          
          {/* Enhanced CTA Button with brand styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8, type: 'spring', bounce: 0.4 }}
          >
            <motion.button
              className="inline-flex items-center gap-4 px-14 py-7 rounded-2xl shadow-2xl group relative overflow-hidden"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                minHeight: '44px',
                background: 'linear-gradient(135deg, #F9B233 0%, #FFC857 100%)',
                color: '#0046AD',
              }}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'https://www.recruitbridge.app/'}
            >
              {/* Animated shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
              />
              
              {/* Pulsing white glow */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <span className="relative z-10">Join RecruitBridge</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-7 h-7" />
              </motion.div>
            </motion.button>
          </motion.div>
          
          {/* Trust line */}
          <motion.p
            className="text-white/85 mt-8"
            style={{ fontSize: '0.9375rem' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Join 500+ athletes already getting recruited • Free to start • No credit card required
          </motion.p>
        </motion.div>
        
        {/* Enhanced stats bar with brand colors */}
        <motion.div
          className="mt-28 pt-14 border-t-2"
          style={{ borderColor: 'rgba(249, 178, 51, 0.3)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '24/7', label: 'Support Available', icon: '🔥' },
              { value: '5K+', label: 'Coaches Connected', icon: '⚡' },
              { value: '100%', label: 'Free to Start', icon: '🎯' },
              { value: '4.9★', label: 'Average Rating', icon: '💪' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3 + i * 0.1, type: 'spring' }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                {/* Gold glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'radial-gradient(circle, rgba(249, 178, 51, 0.4) 0%, transparent 70%)' }}
                />
                
                <div className="relative glass-effect backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 group-hover:border-[#F9B233]/60 transition-all">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <motion.div
                    className="mb-2"
                    style={{
                      fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #F9B233 0%, #FFC857 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                    animate={{
                      filter: [
                        'drop-shadow(0 0 20px rgba(249, 178, 51, 0.4))',
                        'drop-shadow(0 0 30px rgba(249, 178, 51, 0.7))',
                        'drop-shadow(0 0 20px rgba(249, 178, 51, 0.4))',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/85" style={{ fontSize: '0.9375rem', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                  
                  {/* Gold accent bar */}
                  <motion.div
                    className="h-1 mt-5 rounded-full bg-gradient-to-r from-transparent via-[#F9B233] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    whileHover={{ scaleY: 2 }}
                    transition={{ duration: 0.8, delay: 1.4 + i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}