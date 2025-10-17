import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Product: ['How It Works', 'Features', 'Pricing', 'FAQ'],
    Athletes: ['Build Profile', 'Find Coaches', 'Success Stories', 'Resources'],
    Parents: ['Why Trust Us', 'Safety & Privacy', 'Support', 'Testimonials'],
    Company: ['About Us', 'Careers', 'Contact', 'Blog'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jake-davids-b40741338/', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #001F3F 100%)' }}>
      {/* Brand gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0046AD] via-[#F9B233] to-[#0046AD]" />
      
      {/* Background pattern with brand blue */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,70,173,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,70,173,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      
      {/* Blue and gold diagonal accents */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 opacity-10" style={{ background: 'linear-gradient(to top left, #0046AD, transparent)' }} />
      <div className="absolute top-0 left-0 w-1/4 h-1/2 opacity-5" style={{ background: 'linear-gradient(to bottom right, #F9B233, transparent)' }} />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-texture opacity-[0.08]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-14 h-14 rounded-xl shadow-xl flex items-center justify-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0046AD 0%, #003580 100%)' }}
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                <span className="text-white relative z-10" style={{ fontSize: '1.5rem', fontWeight: 700 }}>RB</span>
                
                {/* Gold glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-[#F9B233]"
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="text-white" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.02em' }}>RecruitBridge</span>
            </div>
            <p className="text-white/70 mb-6" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
              AI-powered recruiting for high school and JUCO athletes. Built by athletes, for athletes.
            </p>
            
            {/* Social links with brand colors */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 relative overflow-hidden group"
                  whileHover={{
                    y: -4,
                    scale: 1.1,
                    borderColor: i % 2 === 0 ? '#0046AD' : '#F9B233',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Gold/blue glow on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-lg transition-opacity"
                    style={{ backgroundColor: i % 2 === 0 ? '#0046AD' : '#F9B233' }}
                  />
                  
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white relative z-10 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white mb-5 relative inline-block" style={{ fontSize: '0.9375rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                {category}
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#F9B233] to-transparent" />
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-white/70 hover:text-[#F9B233] transition-colors duration-300 inline-block"
                      style={{ fontSize: '0.875rem' }}
                      whileHover={{ x: 3 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t-2" style={{ borderColor: 'rgba(0, 70, 173, 0.3)' }}>
          <p className="text-white/60 text-center md:text-left" style={{ fontSize: '0.875rem' }}>
            © 2025 <span className="text-[#F9B233] font-semibold">RecruitBridge</span>. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <motion.a
                key={link}
                href="#"
                className="text-white/60 hover:text-[#F9B233] transition-colors duration-300 relative group"
                style={{ fontSize: '0.875rem' }}
                whileHover={{ y: -2 }}
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F9B233] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}