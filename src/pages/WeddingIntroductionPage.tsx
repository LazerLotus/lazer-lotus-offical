import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function WeddingIntroductionPage() {
  return (
    <>
      <Helmet>
        <title>緒論 - 妙雷宗婚禮儀式 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="妙雷宗婚禮儀式介紹與說明" />
        <meta property="og:title" content="緒論 - 妙雷宗婚禮儀式" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-futuristic animate-gradient opacity-30"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 gradient-text">
              緒論
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              妙雷宗婚禮儀式介紹
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card hover>
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-100">
                  緒論
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg text-gray-400 italic text-center py-8">
                    施工中，請稍候。
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Back Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-8 text-center"
            >
              <Link
                to="/wedding"
                className="text-accent hover:text-accent-light transition-colors inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>返回妙雷宗婚禮儀式</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

export default WeddingIntroductionPage
