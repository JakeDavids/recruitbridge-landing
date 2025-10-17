import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Caleb Irving',
    role: 'Defensive Lineman • Now at UNC Charlotte',
    quote: 'Coming out of high school, I had 30+ offers from top programs like Purdue, Cal, Arizona State, and Arizona. RecruitBridge helped me reach 100+ coaches and manage all the interest. The platform made it easy to stay organized and find the right fit.',
    image: 'https://images.unsplash.com/photo-1758506971667-fbaa8942258a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwcnVubmluZyUyMGRldGVybWluYXRpb258ZW58MXx8fHwxNzYwNTgxNDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Aiden Martinez',
    role: 'O-Lineman • Class of 2028',
    quote: 'RecruitBridge changed my recruiting game. I reached 86 coaches, sent over 3,000 emails, and earned 20+ offers. The AI made it so much easier to stay on top of everything.',
    image: 'https://images.unsplash.com/photo-1757588265301-f2b982cbcb2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZm9vdGJhbGwlMjBwbGF5ZXIlMjBhY3Rpb258ZW58MXx8fHwxNzYwNjY2OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Marcus Thompson',
    role: 'Safety • Now at San Diego State',
    quote: 'I was getting zero looks from D1 programs. RecruitBridge helped me reach 40+ coaches in a week. Two months later, I had three offers.',
    image: 'https://images.unsplash.com/photo-1759022484952-6b5cab43a99e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwZm9vdGJhbGwlMjBwbGF5ZXIlMjBhY3Rpb258ZW58MXx8fHwxNzYwNTgxNDIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Jordan Williams',
    role: 'Wide Receiver • Class of 2027',
    quote: 'As a JUCO transfer, finding the right D1 program felt impossible. RecruitBridge connected me with 50+ coaches and I landed 12 offers. Now I\'m playing at the next level.',
    image: 'https://images.unsplash.com/photo-1758506971667-fbaa8942258a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwcnVubmluZyUyMGRldGVybWluYXRpb258ZW58MXx8fHwxNzYwNTgxNDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Tyler Brooks',
    role: 'Linebacker • Now at Montana State',
    quote: 'I sent hundreds of emails on my own with no response. RecruitBridge\'s AI helped me personalize my outreach and track everything. Within a month, I had 8 offers from FCS programs.',
    image: 'https://images.unsplash.com/photo-1694879428210-512d5c43bdf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZm9vdGJhbGwlMjB0ZWFtJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYwNjY3NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Devon Carter',
    role: 'Running Back • Class of 2026',
    quote: 'My parents and I were overwhelmed with recruiting. RecruitBridge gave us a clear dashboard to track all communications and follow-ups. It took the stress out of the process.',
    image: 'https://images.unsplash.com/photo-1757588265301-f2b982cbcb2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZm9vdGJhbGwlMjBwbGF5ZXIlMjBhY3Rpb258ZW58MXx8fHwxNzYwNjY2OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Show 3 testimonials at a time on desktop
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section ref={ref} id="testimonials" className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F5F7FA 0%, #FFFFFF 50%, #E8F1FA 100%)' }}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-[0.02]">
        <Quote className="w-full h-full text-[#0046AD]" />
      </div>
      
      {/* Brand accent shapes */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-[#F9B233]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#0046AD]/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1/3 bg-gradient-to-b from-transparent via-[#005BEA]/20 to-transparent transform -skew-x-12" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-texture opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-6 py-3 bg-white border-2 border-[#0046AD]/20 rounded-full mb-8 shadow-sm"
            whileHover={{ scale: 1.05, borderColor: '#F9B233' }}
          >
            <span className="text-[#0046AD]" style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              SUCCESS STORIES
            </span>
          </motion.div>
          
          <h2 className="mb-6 relative inline-block" style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', fontWeight: 700 }}>
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(135deg, #0046AD 0%, #003580 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Real Stories, Real Results
            </span>
            
            {/* Gold underline */}
            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1.5 bg-gradient-to-r from-transparent via-[#F9B233] to-transparent rounded-full"
              style={{ width: '80%' }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          
          <p className="text-[#2B2F35]/70 max-w-2xl mx-auto mt-8" style={{ fontSize: '1.125rem' }}>
            From athletes and families who took control of their recruiting
          </p>
        </motion.div>

        {/* Desktop: 3-card carousel */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-[#0046AD]/10 hover:border-[#F9B233]/60 relative overflow-hidden group"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  {/* Animated brand accent on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(135deg, rgba(0, 70, 173, 0.03) 0%, rgba(249, 178, 51, 0.05) 100%)' }}
                  />
                  
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F9B233]/15 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="mb-6 relative">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Quote className="w-12 h-12 text-[#0046AD] opacity-50" />
                    </motion.div>
                  </div>
                  
                  <p className="text-[#2B2F35] mb-6 relative z-10" style={{ fontSize: '1.0625rem', lineHeight: '1.8', fontStyle: 'italic' }}>
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t-2 border-gradient-to-r from-[#005BEA]/20 to-[#00C6AE]/20 relative z-10">
                    <motion.div 
                      className="w-14 h-14 rounded-full overflow-hidden p-0.5 shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #0046AD 0%, #F9B233 100%)' }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                    <div>
                      <div className="text-[#2B2F35]" style={{ fontSize: '1rem', fontWeight: 600 }}>
                        {testimonial.name}
                      </div>
                      <div className="text-[#2B2F35]/60" style={{ fontSize: '0.875rem' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Desktop Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-[#005BEA] to-[#0047b8] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white"
              aria-label="Previous testimonials"
              whileHover={{ scale: 1.1, boxShadow: '0 12px 40px rgba(0, 91, 234, 0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#005BEA] w-12' : 'bg-[#005BEA]/30 w-2.5 hover:bg-[#005BEA]/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-[#005BEA] to-[#0047b8] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white"
              aria-label="Next testimonials"
              whileHover={{ scale: 1.1, boxShadow: '0 12px 40px rgba(0, 91, 234, 0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Mobile: Single card slider */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#005BEA]/10"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-[#0046AD] opacity-50" />
              </div>
              
              <p className="text-[#2B2F35] mb-6" style={{ fontSize: '1rem', lineHeight: '1.7', fontStyle: 'italic' }}>
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t-2 border-[#2B2F35]/10">
                <div className="w-12 h-12 rounded-full overflow-hidden p-0.5" style={{ background: 'linear-gradient(135deg, #0046AD, #F9B233)' }}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-[#2B2F35]" style={{ fontSize: '1rem', fontWeight: 600 }}>
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-[#2B2F35]/60" style={{ fontSize: '0.875rem' }}>
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Mobile Slider controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-[#005BEA] text-white flex items-center justify-center hover:bg-[#0047b8] transition-colors shadow-lg"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#005BEA] w-8' : 'bg-[#005BEA]/30 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#005BEA] text-white flex items-center justify-center hover:bg-[#0047b8] transition-colors shadow-lg"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
