import { motion } from 'motion/react';
import { ArrowRight, Users, TrendingUp, Award } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-[#005BEA] via-[#0046AD] to-[#1C1F26]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-[#FF6B24] rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get seen by college coaches faster — with AI that writes, sends, and tracks every message for you.
        </motion.h1>

        {/* Subheader */}
        <motion.p
          className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          RecruitBridge connects under-recruited athletes with college coaches through automated outreach and analytics.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="bg-[#FF6B24] hover:bg-[#FF6B24]/90 text-white px-10 py-6 rounded-xl text-xl font-bold shadow-2xl inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'https://www.recruitbridge.app/'}
          >
            Get Started Free
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Proof Bar */}
        <motion.div
          className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-white">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[#FF6B24]" />
              <div>
                <div className="text-2xl font-bold">Built by a D1 athlete</div>
                <div className="text-sm text-blue-200">at UNC Charlotte</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#FF6B24]" />
              <div>
                <div className="text-2xl font-bold">14-day</div>
                <div className="text-sm text-blue-200">money-back guarantee</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#FF6B24]" />
              <div>
                <div className="text-2xl font-bold">Secure checkout</div>
                <div className="text-sm text-blue-200">by Stripe</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
