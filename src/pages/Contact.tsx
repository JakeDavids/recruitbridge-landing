import { motion } from 'motion/react';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | RecruitBridge';
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    const mailtoLink = `mailto:support@recruitbridge.app?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

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
            Get In <span className="text-[#F9B233]">Touch</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>

            <div className="space-y-6 mb-12">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'support@recruitbridge.app',
                  href: 'mailto:support@recruitbridge.app'
                },
                {
                  icon: MessageSquare,
                  title: 'Live Chat',
                  value: 'Available 9am-5pm ET',
                  href: 'https://www.recruitbridge.app/'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  value: 'Coming Soon',
                  href: null
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  value: 'Remote-First Company',
                  href: null
                }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #005BEA 0%, #F9B233 100%)' }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#F9B233] hover:text-[#FFC857] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/70">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="https://www.recruitbridge.app/" className="block text-[#F9B233] hover:text-[#FFC857] transition-colors">
                  → Get Started for Free
                </a>
                <a href="/about" className="block text-white/70 hover:text-white transition-colors">
                  → Learn About Us
                </a>
                <a href="/careers" className="block text-white/70 hover:text-white transition-colors">
                  → Join Our Team
                </a>
                <a href="/blog" className="block text-white/70 hover:text-white transition-colors">
                  → Read Our Blog
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✉️</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/70">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F9B233] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F9B233] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F9B233] focus:border-transparent"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F9B233] focus:border-transparent resize-none"
                      placeholder="Tell us more about your question or concern..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#F9B233] text-[#0046AD] font-bold rounded-lg hover:bg-[#FFC857] transition-all shadow-lg text-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
