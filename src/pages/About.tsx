import { motion } from 'motion/react';
import { Target, Users, Zap, Heart } from 'lucide-react';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'About Us | RecruitBridge';
    window.scrollTo(0, 0);
  }, []);

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
            About <span className="text-[#F9B233]">RecruitBridge</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Empowering under-recruited athletes to take control of their recruiting journey
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-4">
            RecruitBridge was built to solve a critical problem in college athletics: talented athletes going unnoticed because they lack the resources, connections, or knowledge to effectively market themselves to college coaches.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            We believe every athlete deserves a fair shot at playing at the next level. That's why we created a platform that automates the tedious parts of recruiting—finding coaches, crafting emails, tracking responses—so athletes can focus on what matters: their game.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: 'Athlete-First',
              description: 'Every feature is designed with the athlete\'s success in mind. We put you in control of your recruiting journey.',
              color: '#005BEA'
            },
            {
              icon: Users,
              title: 'Accessibility',
              description: 'College recruiting shouldn\'t be limited to those who can afford expensive recruiting services. We make it affordable for everyone.',
              color: '#F9B233'
            },
            {
              icon: Zap,
              title: 'Efficiency',
              description: 'Automate the repetitive tasks so you can reach more coaches faster. Time is precious—we help you make the most of it.',
              color: '#00C6AE'
            },
            {
              icon: Heart,
              title: 'Authenticity',
              description: 'We help you tell your unique story. No generic templates—just you, your stats, and your passion for the game.',
              color: '#FF6B6B'
            }
          ].map((value, i) => (
            <motion.div
              key={value.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ background: `${value.color}20` }}
              >
                <value.icon className="w-7 h-7" style={{ color: value.color }} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-white/70 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          className="bg-gradient-to-br from-[#005BEA]/20 to-[#F9B233]/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">The Story Behind RecruitBridge</h2>
          <div className="space-y-4 text-lg text-white/80 leading-relaxed">
            <p>
              RecruitBridge was founded by former college athletes and recruiting professionals who saw firsthand how broken the system was. Too many talented players were being overlooked simply because they didn't know how to navigate the recruiting process.
            </p>
            <p>
              We watched athletes send hundreds of emails manually, struggle to find coach contact information, and lose opportunities because they didn't follow up at the right time. We knew there had to be a better way.
            </p>
            <p>
              So we built RecruitBridge—a platform that combines automation, data, and AI to level the playing field. Whether you're a 5-star recruit or an under-the-radar player, you deserve the tools to showcase your talent. That's what we're here to provide.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {[
            { value: '500+', label: 'Athletes Helped' },
            { value: '5,000+', label: 'Coaches Reached' },
            { value: '50,000+', label: 'Emails Sent' },
            { value: '95%', label: 'Success Rate' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#F9B233] mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <a
            href="https://www.recruitbridge.app/"
            className="inline-block px-8 py-4 bg-[#F9B233] text-[#0046AD] font-bold rounded-xl text-lg hover:bg-[#FFC857] transition-all shadow-lg hover:shadow-2xl"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </div>
  );
}
