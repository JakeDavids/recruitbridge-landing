import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms of Service | RecruitBridge';
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F9B233]/20 rounded-full mb-6">
            <FileText className="w-8 h-8 text-[#F9B233]" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Terms of Service</h1>
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using RecruitBridge ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use of Service</h2>
              <p className="mb-4">
                You may use RecruitBridge to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Create and manage your athlete profile</li>
                <li>Find and contact college coaches</li>
                <li>Track your recruiting progress</li>
                <li>Access educational resources</li>
              </ul>
              <p className="mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Share false or misleading information</li>
                <li>Spam coaches or abuse the email system</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Impersonate another person or entity</li>
                <li>Attempt to hack or disrupt the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Account Responsibilities</h2>
              <p className="mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Maintaining the confidentiality of your account</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring all information you provide is accurate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Subscription and Payments</h2>
              <p className="mb-4">
                RecruitBridge offers both free and paid subscription plans. Paid subscriptions are billed according to your chosen plan and will automatically renew unless canceled. You can cancel anytime through your account settings.
              </p>
              <p className="mb-4">
                Refunds are provided according to our refund policy. Contact support@recruitbridge.app for refund requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="mb-4">
                The Service and its original content, features, and functionality are owned by RecruitBridge and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. User Content</h2>
              <p className="mb-4">
                You retain all rights to content you submit to the Service. By submitting content, you grant us a license to use, store, and display that content as necessary to provide the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
              <p className="mb-4">
                The Service is provided "as is" without warranties of any kind. We do not guarantee that the Service will be uninterrupted, secure, or error-free. We do not guarantee that coaches will respond to your outreach.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, RecruitBridge shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
              <p className="mb-4">
                We reserve the right to terminate or suspend your account at any time for violations of these Terms. You may also terminate your account at any time through your account settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed by the laws of the United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
              <p className="mb-4">
                Questions about the Terms of Service should be sent to:
              </p>
              <p className="text-[#F9B233]">
                <a href="mailto:legal@recruitbridge.app" className="hover:text-[#FFC857]">
                  legal@recruitbridge.app
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
