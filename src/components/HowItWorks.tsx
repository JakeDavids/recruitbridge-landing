import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { UserPlus, Mail, Eye, Search, Send, BarChart3 } from 'lucide-react';

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1C1F26] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to get in front of college coaches
          </p>
        </motion.div>

        <div className="space-y-0">
          {/* Step 1: Build - Light Background */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center py-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005BEA] rounded-2xl mb-6">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#1C1F26] mb-4">Build</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Create your athlete profile in minutes with your stats, highlights, and goals—our system optimizes everything to catch coach attention.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Search className="w-20 h-20 mx-auto mb-4 text-[#005BEA]" />
                <p className="font-semibold">Profile Builder Preview</p>
              </div>
            </div>
          </motion.div>

          {/* Step 2: Reach - Dark Background */}
          <motion.div
            className="bg-[#1C1F26] rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center py-16 px-8">
              <div className="order-2 md:order-1 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Send className="w-20 h-20 mx-auto mb-4 text-[#FF6B24]" />
                  <p className="font-semibold">Email Automation Preview</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B24] rounded-2xl mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Reach</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  AI writes personalized emails to your target coaches and sends them automatically—no copy-paste, no stress.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 3: Track - Light Background */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center py-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005BEA] rounded-2xl mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#1C1F26] mb-4">Track</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                See who opened your emails, who replied, and which programs are most interested—so you know exactly where to focus.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="w-20 h-20 mx-auto mb-4 text-[#005BEA]" />
                <p className="font-semibold">Analytics Dashboard Preview</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
