import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog | RecruitBridge';
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      title: '10 Tips for Writing Cold Emails to College Coaches',
      excerpt: 'Learn how to craft compelling introduction emails that get responses from coaches.',
      author: 'RecruitBridge Team',
      date: 'December 15, 2024',
      category: 'Email Tips',
      readTime: '5 min read'
    },
    {
      title: 'How to Build a Recruiting Target List',
      excerpt: 'Strategic approach to identifying which schools and coaches to reach out to based on your profile.',
      author: 'Coach Mike Johnson',
      date: 'December 10, 2024',
      category: 'Strategy',
      readTime: '7 min read'
    },
    {
      title: 'The Importance of Highlight Reels in 2025',
      excerpt: 'What coaches are looking for in your highlight videos and how to create one that stands out.',
      author: 'Sarah Williams',
      date: 'December 5, 2024',
      category: 'Video',
      readTime: '6 min read'
    },
    {
      title: 'Understanding Division Levels: D1, D2, D3, NAIA',
      excerpt: 'A comprehensive guide to different college athletic divisions and finding the right fit.',
      author: 'RecruitBridge Team',
      date: 'November 28, 2024',
      category: 'Education',
      readTime: '8 min read'
    },
    {
      title: 'Timeline: When to Start Your Recruiting Process',
      excerpt: 'Age-by-age breakdown of what you should be doing to maximize your recruiting opportunities.',
      author: 'Coach David Martinez',
      date: 'November 20, 2024',
      category: 'Timeline',
      readTime: '10 min read'
    },
    {
      title: 'NIL Deals for High School Athletes: What You Need to Know',
      excerpt: 'Everything about Name, Image, and Likeness opportunities before you get to college.',
      author: 'Legal Team',
      date: 'November 15, 2024',
      category: 'NIL',
      readTime: '12 min read'
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
            Recruiting <span className="text-[#F9B233]">Insights</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Expert tips, strategies, and stories to help you navigate the college recruiting process
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F9B233]/50 transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-[#005BEA]/20 text-[#005BEA] rounded-full text-sm font-semibold border border-[#005BEA]/30">
                  {post.category}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#F9B233] transition-colors">
                {post.title}
              </h2>

              <p className="text-white/70 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-white/50 text-sm">{post.readTime}</span>
                <button className="flex items-center gap-2 text-[#F9B233] font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          className="bg-gradient-to-br from-[#005BEA]/20 to-[#F9B233]/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">More Content Coming Soon!</h2>
          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            We're constantly publishing new articles, guides, and success stories. Subscribe to stay updated!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#F9B233] focus:border-transparent"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-[#F9B233] text-[#0046AD] font-bold rounded-lg hover:bg-[#FFC857] transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
