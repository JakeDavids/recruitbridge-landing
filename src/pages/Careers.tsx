import { motion } from 'motion/react';
import { Briefcase, Heart, Rocket, Users } from 'lucide-react';
import { useEffect } from 'react';

export default function Careers() {
  useEffect(() => {
    document.title = 'Careers | RecruitBridge';
    window.scrollTo(0, 0);
  }, []);

  const positions = [
    {
      title: 'Full-Stack Engineer',
      type: 'Full-Time',
      location: 'Remote',
      description: 'Help build the future of college recruiting technology. Work with React, Node.js, and cutting-edge AI.'
    },
    {
      title: 'Product Designer',
      type: 'Full-Time',
      location: 'Remote',
      description: 'Design intuitive experiences for athletes and coaches. Shape the visual identity of RecruitBridge.'
    },
    {
      title: 'Recruiting Specialist',
      type: 'Part-Time',
      location: 'Remote',
      description: 'Help athletes navigate the recruiting process. Former college athlete or coach experience required.'
    },
    {
      title: 'Content Creator',
      type: 'Contract',
      location: 'Remote',
      description: 'Create educational content about recruiting. Social media, blog posts, and video content.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: 'linear-gradient(135deg, #0e1320 0%, #1C1F26 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-[#F9B233]">Team</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Help us level the playing field for under-recruited athletes across the country
          </p>
        </motion.div>

        {/* Why Join Us */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Why RecruitBridge?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Heart,
                title: 'Mission-Driven',
                description: 'Work on something that truly matters. Every feature you build helps an athlete achieve their dreams.'
              },
              {
                icon: Rocket,
                title: 'Fast Growth',
                description: 'Join a fast-growing startup where you can make a real impact from day one.'
              },
              {
                icon: Users,
                title: 'Remote-First',
                description: 'Work from anywhere. We believe in flexibility and trust our team to do their best work.'
              },
              {
                icon: Briefcase,
                title: 'Great Benefits',
                description: 'Competitive salary, equity, health insurance, and unlimited PTO. We take care of our team.'
              }
            ].map((benefit, i) => (
              <div key={benefit.title} className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #005BEA 0%, #F9B233 100%)' }}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((position, i) => (
              <motion.div
                key={position.title}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F9B233]/50 transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-white/70 mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#005BEA]/20 text-[#005BEA] rounded-full text-sm font-semibold border border-[#005BEA]/30">
                        {position.type}
                      </span>
                      <span className="px-3 py-1 bg-[#F9B233]/20 text-[#F9B233] rounded-full text-sm font-semibold border border-[#F9B233]/30">
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href="mailto:careers@recruitbridge.app"
                    className="px-6 py-3 bg-[#F9B233] text-[#0046AD] font-bold rounded-lg hover:bg-[#FFC857] transition-all whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Don't see a fit? */}
        <motion.div
          className="bg-gradient-to-br from-[#005BEA]/20 to-[#F9B233]/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Don't See a Perfect Fit?</h2>
          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            We're always looking for talented, passionate people. Send us your resume and tell us why you want to join RecruitBridge.
          </p>
          <a
            href="mailto:careers@recruitbridge.app"
            className="inline-block px-8 py-4 bg-white text-[#0046AD] font-bold rounded-xl text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
