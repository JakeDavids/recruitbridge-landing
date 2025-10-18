import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy | RecruitBridge';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: 'linear-gradient(135deg, #0e1320 0%, #1C1F26 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005BEA]/20 rounded-full mb-6">
            <Shield className="w-8 h-8 text-[#005BEA]" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/60">Last updated: December 2024</p>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 prose prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Name, email address, and phone number</li>
                <li>Athletic profile information (sport, position, stats, etc.)</li>
                <li>School and academic information</li>
                <li>Coach contact preferences</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Help you connect with college coaches</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We share your information with college coaches only when you explicitly choose to send outreach emails. We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information. All data is encrypted in transit and at rest using industry-standard protocols.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Export your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to analyze usage patterns and improve user experience. You can control cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Children's Privacy</h2>
              <p className="mb-4">
                Our services are designed for users aged 13 and older. If we learn we have collected information from a child under 13, we will delete it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this privacy policy, please contact us at:
              </p>
              <p className="text-[#F9B233]">
                <a href="mailto:privacy@recruitbridge.app" className="hover:text-[#FFC857]">
                  privacy@recruitbridge.app
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
