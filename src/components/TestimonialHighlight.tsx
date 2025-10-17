import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import calebImage from 'figma:asset/79abf25b1c4257e7807a7b0a686b751c4ce583ac.png';

export function TestimonialHighlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0e1320 0%, #1C1F26 50%, #0046AD 100%)' }}>
      {/* Background accents */}
      <div className="absolute inset-0">
        {/* Animated gradient shapes */}
        <motion.div 
          className="absolute top-0 right-0 w-2/3 h-full opacity-[0.15]" 
          style={{ background: 'radial-gradient(circle at top right, #005BEA, transparent)' }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/2 h-2/3 opacity-[0.1]" 
          style={{ background: 'radial-gradient(circle at bottom left, #00C6AE, transparent)' }}
          animate={{
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Diagonal accent stripes */}
        <div className="absolute top-1/4 right-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-[#F9B233]/20 to-transparent transform skew-x-12" />
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1/3 bg-gradient-to-b from-transparent via-[#005BEA]/15 to-transparent transform -skew-x-12" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 noise-texture opacity-20" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                backgroundColor: i % 3 === 0 ? '#F9B233' : 'rgba(255, 255, 255, 0.3)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="relative bg-gradient-to-br from-[#005BEA] to-[#0047b8] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden border-2 border-[#C9A24E]"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: 'spring' }}
          whileHover={{ y: -5 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, rgba(249, 178, 51, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, rgba(0, 198, 174, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 0% 0%, rgba(249, 178, 51, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Gold corner accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#F9B233]/20 to-transparent rounded-bl-full" />
          
          {/* Quote icon */}
          <motion.div
            className="absolute top-6 left-6 opacity-10"
            initial={{ scale: 0, rotate: -45 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Quote className="w-24 h-24 text-white" />
          </motion.div>

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A24E] text-white rounded-full mb-6"
              style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star className="w-4 h-4 fill-current" />
              SUCCESS STORY
            </motion.div>

            {/* Testimonial */}
            <motion.blockquote
              className="text-white mb-8"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', lineHeight: '1.5', fontWeight: 600 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              "RecruitBridge helped me reach over 80 college coaches and land 20+ offers — it completely changed my recruiting process."
            </motion.blockquote>

            {/* Author */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24E] to-[#F9B233] p-1 shadow-xl overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={calebImage} 
                    alt="Caleb Irving" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="text-white" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                  Caleb Irving
                </div>
                <div className="text-white/80" style={{ fontSize: '0.9375rem' }}>
                  D-Lineman • Class of 2028
                </div>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t-2 border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { label: 'Coaches Reached', value: '86' },
                { label: 'Emails Sent', value: '3,000+' },
                { label: 'Offers', value: '20+' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className="text-[#F9B233] mb-1"
                    style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700 }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/80" style={{ fontSize: '0.75rem', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              boxShadow: '0 0 60px rgba(201, 162, 78, 0.4)',
            }}
            animate={{
              boxShadow: [
                '0 0 60px rgba(201, 162, 78, 0.4)',
                '0 0 100px rgba(201, 162, 78, 0.6)',
                '0 0 60px rgba(201, 162, 78, 0.4)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}