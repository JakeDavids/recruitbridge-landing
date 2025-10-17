import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { UserCircle, Mail, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: UserCircle,
    title: 'Build Your Profile',
    description: 'Create a complete recruiting profile with stats, highlight videos, and academic info. Showcase what makes you special.',
  },
  {
    number: 2,
    icon: Mail,
    title: 'Reach Out to Coaches',
    description: 'Our AI automates personalized outreach to college coaches based on your fit, level, and goals. No more copy-paste.',
  },
  {
    number: 3,
    icon: TrendingUp,
    title: 'Track Interest & Offers',
    description: 'Monitor which coaches opened your profile, track responses, and manage your recruiting pipeline in one place.',
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="how-it-works" className="relative py-24 md:py-32 bg-[#F5F7FA] overflow-hidden">
      {/* Diagonal blue accent shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute inset-0 bg-[#0046AD] transform skew-x-12" />
      </div>
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#F9B233] to-transparent transform -skew-x-12" />
      </div>
      
      {/* Subtle noise */}
      <div className="absolute inset-0 noise-texture opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section badge */}
          <motion.div
            className="inline-block px-6 py-3 bg-white border-2 border-[#0046AD]/20 rounded-full mb-8 shadow-sm"
            whileHover={{ scale: 1.05, borderColor: '#0046AD' }}
          >
            <span className="text-[#0046AD]" style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              THE PROCESS
            </span>
          </motion.div>
          
          <h2 className="mb-6 relative inline-block" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(135deg, #0046AD 0%, #003580 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              How It Works
            </span>
            
            {/* Gold underline */}
            <motion.div
              className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-[#F9B233] via-[#FFC857] to-[#F9B233] rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          
          <p className="text-[#2B2F35]/70 max-w-2xl mx-auto mt-10" style={{ fontSize: '1.25rem', lineHeight: '1.7' }}>
            Three simple steps to take control of your recruiting journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, type: 'spring' }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-[#0046AD]/10 hover:border-[#F9B233]/50 overflow-hidden h-full">
                {/* Gold gradient on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(249, 178, 51, 0.05) 0%, transparent 100%)',
                  }}
                />
                
                {/* Corner gold accent */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-full h-full rounded-bl-full bg-gradient-to-bl from-[#F9B233]/10 to-transparent" />
                </div>
                
                {/* Large step number background */}
                <div
                  className="absolute top-4 right-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity"
                  style={{
                    fontSize: '10rem',
                    fontWeight: 700,
                    color: '#0046AD',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </div>
                
                {/* Step number badge with brand colors */}
                <motion.div
                  className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #005BEA 0%, #0047b8 100%)',
                  }}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white relative z-10" style={{ fontSize: '2rem', fontWeight: 700 }}>
                    {step.number}
                  </span>
                  
                  {/* Teal ring animation */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-[#00C6AE]"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                <div className="relative z-10 pt-10">
                  {/* Icon */}
                  <motion.div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden border-2 border-[#0046AD]/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 91, 234, 0.1) 0%, rgba(0, 198, 174, 0.05) 100%)',
                    }}
                    whileHover={{ scale: 1.1, borderColor: '#00C6AE' }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-10 h-10 relative z-10 text-[#005BEA]" />
                    
                    {/* Animated glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-[#00C6AE]"
                      animate={{
                        opacity: [0, 0.2, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-[#2B2F35] mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    {step.title}
                  </h3>
                  
                  <p className="text-[#2B2F35]/70 leading-relaxed mb-6" style={{ fontSize: '1.0625rem', lineHeight: '1.8' }}>
                    {step.description}
                  </p>
                  
                  {/* Supporting Metrics */}
                  {index === 0 && (
                    <div className="text-[#00C6AE]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      📊 2,000+ profiles created
                    </div>
                  )}
                  {index === 1 && (
                    <div className="text-[#00C6AE]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      ✉️ 15,000+ emails sent this month
                    </div>
                  )}
                  {index === 2 && (
                    <div className="text-[#00C6AE]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      🎯 87% response rate
                    </div>
                  )}
                </div>
                
                {/* Blue bottom accent bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1.5 rounded-b-2xl bg-gradient-to-r from-[#005BEA] to-[#00C6AE]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  whileHover={{ scaleX: 1, height: '6px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                />
              </div>
              
              {/* Connection line (except last) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-5 w-10 h-0.5 z-0 bg-gradient-to-r from-[#005BEA] to-[#00C6AE]"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={isInView ? { scaleX: 1, opacity: 0.4 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                >
                  {/* Animated dot */}
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#00C6AE] absolute top-1/2 -translate-y-1/2 shadow-lg"
                    style={{ boxShadow: '0 0 10px rgba(0, 198, 174, 0.6)' }}
                    animate={{ x: ['0%', '400%'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Curved divider to next section */}
      <div className="curve-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}