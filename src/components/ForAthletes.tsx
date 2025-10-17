import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Zap, Shield, Award, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Smart Coach Matching',
    description: 'Find programs that fit your level, location, and major preferences.',
  },
  {
    icon: Zap,
    title: 'AI Email Generation',
    description: 'Personalized outreach emails written in seconds, not hours.',
  },
  {
    icon: Shield,
    title: 'Professional Templates',
    description: 'Proven email and profile templates that get coaches to respond.',
  },
  {
    icon: Award,
    title: 'Recruiting Dashboard',
    description: 'Track every interaction, response, and opportunity in one place.',
  },
];

export function ForAthletes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="athletes" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FA 50%, #E8F1FA 100%)' }}>
      {/* Blue gradient shapes */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.06]"
        initial={{ x: '100%' }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ duration: 1.2 }}
        style={{ background: 'linear-gradient(to left, #0046AD, transparent)' }}
      />
      
      {/* Diagonal gold accent stripe */}
      <div className="absolute top-1/4 right-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-[#F9B233]/30 to-transparent transform skew-x-12" />
      
      {/* Diagonal blue accent stripe */}
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1/3 bg-gradient-to-b from-transparent via-[#005BEA]/20 to-transparent transform -skew-x-12" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-texture opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#005BEA]/10 to-[#00C6AE]/10 rounded-full mb-8 border-2 border-[#005BEA]/30"
              whileHover={{ scale: 1.05, borderColor: '#00C6AE' }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-[#00C6AE]"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[#005BEA]" style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                FOR ATHLETES
              </span>
            </motion.div>
            
            <h2 className="mb-6 relative" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: '1.1' }}>
              <span className="text-[#2B2F35]">No more being </span>
              <span className="relative inline-block">
                <span
                  className="relative z-10 bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(135deg, #005BEA 0%, #0047b8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  overlooked
                </span>
                {/* Teal underline accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-3 bg-[#00C6AE]/30 -skew-x-12 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </span>
              .
            </h2>
            
            <p className="text-[#2B2F35]/80 mb-10 leading-relaxed" style={{ fontSize: '1.1875rem', lineHeight: '1.8' }}>
              You've put in the work. You've got the tape. Now let our{' '}
              <span className="text-[#005BEA] font-semibold">AI help you get in front</span> of the right coaches at the right time.
            </p>
            
            <div className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group flex gap-5 cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center relative overflow-hidden shadow-sm border-2 border-[#005BEA]/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 91, 234, 0.1) 0%, rgba(0, 198, 174, 0.05) 100%)',
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      borderColor: '#00C6AE',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-7 h-7 relative z-10 text-[#005BEA]" />
                    
                    {/* Teal glow on hover */}
                    <motion.div
                      className="absolute inset-0 bg-[#00C6AE]"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h4 className="text-[#2B2F35] mb-2 group-hover:text-[#005BEA] transition-colors" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      {feature.title}
                    </h4>
                    <p className="text-[#2B2F35]/70" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  <motion.div
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <ArrowRight className="w-5 h-5 text-[#00C6AE]" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              className="btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'https://www.recruitbridge.app/'}
            >
              Start Building Your Profile
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
          
          {/* Right: Cinematic Image with Blue/Gold Overlay */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1694879428210-512d5c43bdf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZm9vdGJhbGwlMjB0ZWFtJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYwNjY3NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="College football team celebrating victory"
                className="w-full h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
              
              {/* Blue/teal gradient overlay */}
              <div
                className="absolute inset-0 group-hover:opacity-90 transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 91, 234, 0.7) 0%, rgba(0, 91, 234, 0.5) 50%, rgba(0, 198, 174, 0.3) 100%)',
                }}
              />
              
              {/* Teal light streaks */}
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(0, 198, 174, 0.4) 50%, transparent 70%)',
                  backgroundSize: '200% 200%',
                }}
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              />
              
              {/* Brand color bars */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#005BEA] via-[#00C6AE] to-[#005BEA]" />
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#00C6AE] via-[#005BEA] to-[#00C6AE]" />
              
              {/* Stats overlay with glass effect */}
              <motion.div
                className="absolute bottom-8 left-8 right-8"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <div className="glass-effect backdrop-blur-xl rounded-2xl p-8 border-2 border-white/30">
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { value: '3.2x', label: 'More Responses' },
                      { value: '50+', label: 'Hours Saved' },
                      { value: '89%', label: 'Success Rate' }
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        className="text-center"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 1 + i * 0.1, type: 'spring' }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div
                          className="mb-1"
                          style={{
                            fontSize: '2rem',
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #00C6AE 0%, #00E5C8 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 0 10px rgba(0, 198, 174, 0.5))',
                          }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-white/90" style={{ fontSize: '0.8125rem', fontWeight: 500 }}>
                          {stat.label}
                        </div>
                        <motion.div
                          className="h-1 mt-2 rounded-full bg-[#00C6AE] mx-auto"
                          style={{ width: '60%' }}
                          animate={{ width: ['60%', '100%', '60%'] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Corner brand accents */}
              <div className="absolute top-8 right-8 w-20 h-20 border-t-4 border-r-4 border-[#00C6AE] rounded-tr-2xl" />
              <div className="absolute bottom-8 left-8 w-20 h-20 border-b-4 border-l-4 border-[#005BEA] rounded-bl-2xl" />
            </div>
            
            {/* Floating brand accent elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #00C6AE 0%, #00E5C8 100%)' }}
              animate={{
                rotate: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-xl shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #005BEA 0%, #0047b8 100%)' }}
              animate={{
                rotate: [0, -10, 0],
                y: [0, 10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Angled divider to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '120px' }}>
          <path d="M0,60 L1200,0 L1200,120 L0,120 Z" fill="#1C1F26" />
        </svg>
      </div>
    </section>
  );
}