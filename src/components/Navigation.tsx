import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/828da3dd8fbcbb5e38ce9b93a6dc683b9fb62485.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundColor: isScrolled ? 'rgba(28, 31, 38, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative h-12 w-12"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#005BEA]/40"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#F9B233]/40"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                />

                {/* Logo with enhanced glow */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    filter: 'drop-shadow(0 0 12px rgba(0, 91, 234, 0.6))',
                  }}
                >
                  <img
                    src={logoImage}
                    alt="RecruitBridge"
                    className="h-10 w-10 object-contain relative z-10"
                    draggable={false}
                  />
                </motion.div>

                {/* Pulsing background glow */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-2xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(0, 91, 234, 0.4) 0%, rgba(249, 178, 51, 0.2) 50%, transparent 70%)',
                    zIndex: -1,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.3, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>

              <span
                className="text-white"
                style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}
              >
                RecruitBridge
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-white/80 hover:text-white transition-colors duration-300"
                  style={{ fontSize: '0.9375rem', fontWeight: 500 }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#005BEA]"
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="https://www.recruitbridge.app/"
                className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-white/30 text-white rounded-lg transition-all duration-300 hover:border-white/60 hover:bg-white/10"
                style={{ fontSize: '0.9375rem', fontWeight: 600 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.a>
              <motion.a
                href="https://www.recruitbridge.app/"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-[#005BEA] text-white rounded-lg shadow-lg transition-all duration-300"
                style={{ fontSize: '0.9375rem', fontWeight: 600 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 30px rgba(0, 91, 234, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        />

        {/* Menu Panel */}
        <motion.div
          className="absolute top-20 left-0 right-0 bg-[#1C1F26] border-t border-white/10"
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: mobileMenuOpen ? 0 : -20,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                style={{ fontSize: '1rem', fontWeight: 500 }}
                initial={{ x: -20, opacity: 0 }}
                animate={{
                  x: mobileMenuOpen ? 0 : -20,
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                transition={{ delay: index * 0.05 }}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <div className="h-0.5 mt-2 bg-[#005BEA] rounded-full" style={{ width: '40px' }} />
                )}
              </motion.a>
            ))}
            <motion.a
              href="https://www.recruitbridge.app/"
              className="block btn-primary text-center mt-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: mobileMenuOpen ? 0 : 20,
                opacity: mobileMenuOpen ? 1 : 0,
              }}
              transition={{ delay: 0.3 }}
            >
              Get Started Free
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}