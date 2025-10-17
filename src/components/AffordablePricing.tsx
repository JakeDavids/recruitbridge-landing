import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, TrendingDown, Shield, Users } from 'lucide-react';

const pricingComparison = [
  {
    name: 'RecruitBridge',
    price: '$29',
    period: '/month',
    features: ['Unlimited coach outreach', 'AI-powered emails', 'Full analytics dashboard', 'Your own recruiting email'],
    highlight: true,
  },
  {
    name: 'Competitor A',
    price: '$199',
    period: '/month',
    features: ['Limited outreach', 'Basic templates', 'Basic analytics', 'Profile builder'],
    highlight: false,
  },
  {
    name: 'Competitor B',
    price: '$299',
    period: '/month',
    features: ['Limited outreach', 'Manual emails', 'Basic analytics', 'Profile builder'],
    highlight: false,
  },
];

const trustBadges = [
  { icon: TrendingDown, label: 'Most Value for Price' },
  { icon: Users, label: 'Trusted by Athletes' },
  { icon: Shield, label: 'Transparent Pricing' },
];

export function AffordablePricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="pricing" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-[0.03]">
        <div className="absolute inset-0 bg-[#005BEA]" />
      </div>
      <div className="absolute bottom-0 right-0 w-1/4 h-2/3 opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#C9A24E] to-transparent" />
      </div>
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-texture opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section badge */}
          <motion.div
            className="inline-block px-6 py-3 bg-white border-2 border-[#005BEA]/20 rounded-full mb-8 shadow-sm"
            whileHover={{ scale: 1.05, borderColor: '#005BEA' }}
          >
            <span className="text-[#005BEA]" style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              SIMPLE, TRANSPARENT PRICING
            </span>
          </motion.div>
          
          <h2 className="mb-6 relative inline-block" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            <span className="text-[#2B2F35]">
              Recruiting shouldn't cost{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(135deg, #005BEA 0%, #00C6AE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                thousands
              </span>
            </span>
            
            {/* Gold underline */}
            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-2 bg-gradient-to-r from-transparent via-[#C9A24E] to-transparent rounded-full"
              style={{ width: '60%' }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          
          <p className="text-[#2B2F35] max-w-3xl mx-auto mt-10" style={{ fontSize: '1.5rem', lineHeight: '1.5', fontWeight: 600 }}>
            Start free or upgrade for $19/month
          </p>
          
          <p className="text-[#2B2F35]/70 max-w-2xl mx-auto mt-4" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
            No credit card required. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingComparison.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.highlight
                  ? 'bg-gradient-to-br from-[#005BEA] to-[#0047b8] text-white shadow-2xl scale-105 border-4 border-[#C9A24E]'
                  : 'bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl'
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: plan.highlight ? -8 : -4 }}
            >
              {plan.highlight && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#C9A24E] text-white rounded-full shadow-lg"
                  style={{ fontSize: '0.875rem', fontWeight: 700 }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6, type: 'spring' }}
                >
                  BEST VALUE
                </motion.div>
              )}
              
              <div className="text-center mb-6">
                <h3
                  className={`mb-2 ${plan.highlight ? 'text-white' : 'text-[#2B2F35]'}`}
                  style={{ fontSize: '1.5rem', fontWeight: 700 }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end justify-center gap-1">
                  <span
                    className={plan.highlight ? 'text-white' : 'text-[#005BEA]'}
                    style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`mb-2 ${plan.highlight ? 'text-white/80' : 'text-[#2B2F35]/60'}`}
                    style={{ fontSize: '1.125rem' }}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className={`flex-shrink-0 w-5 h-5 mt-0.5 ${
                        plan.highlight ? 'text-[#C9A24E]' : 'text-[#00C6AE]'
                      }`}
                    />
                    <span
                      className={plan.highlight ? 'text-white/90' : 'text-[#2B2F35]/80'}
                      style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <motion.button
                className={`w-full py-3 rounded-lg transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-white text-[#005BEA] hover:bg-gray-100 shadow-lg'
                    : 'bg-[#005BEA] text-white hover:bg-[#0047b8]'
                }`}
                style={{ fontSize: '1rem', fontWeight: 600 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = 'https://www.recruitbridge.app/'}
              >
                {plan.highlight ? 'Get Started Free' : 'Learn More'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border-2 border-[#005BEA]/10"
              whileHover={{ scale: 1.05, borderColor: '#005BEA' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <badge.icon className="w-5 h-5 text-[#005BEA]" />
              <span className="text-[#2B2F35]" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl shadow-2xl relative overflow-hidden"
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #005BEA 0%, #0047b8 100%)',
              color: 'white',
            }}
            whileHover={{ 
              scale: 1.08,
              boxShadow: '0 20px 60px rgba(0, 91, 234, 0.6), 0 0 100px rgba(0, 198, 174, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            />
            
            {/* Pulsing glow */}
            <motion.div
              className="absolute inset-0 bg-[#00C6AE]/20 rounded-xl blur-xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <span className="relative z-10">Get Started Free</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
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