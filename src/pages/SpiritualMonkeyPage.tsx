import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function SpiritualMonkeyPage() {
  return (
    <>
      <Helmet>
        <title>靈性猴 - 功德靈獸 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="靈性猴是最基本款的守護神，長臂猿，毛色是透明咖啡色" />
        <meta property="og:title" content="靈性猴 - 功德靈獸" />
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
              靈性猴
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              最基本款的守護神
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
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-4 text-gray-300 leading-relaxed">
                    <h2 className="text-3xl font-display font-bold text-gray-100 mb-4">
                      靈性猴
                    </h2>
                    <p className="text-lg">
                      靈性猴是<strong className="text-accent">最基本款的守護神</strong>。他是一隻長臂猿，毛色是<strong className="text-accent">透明咖啡色</strong>，透明是因為物理上不可觀測，咖啡色是因為我們信心上相信如此。
                    </p>
                    <p className="text-lg">
                      受到靈性猴庇護的時候信徒會感受到周圍有一股<strong className="text-accent">香蕉的清香</strong>，肩頸部分會覺得<strong className="text-accent">溫暖</strong>。
                    </p>
                    <p className="text-lg">
                      長期受到靈性猴庇護會導致肩頸痠痛，如果信徒覺得肩頸痠痛很可能就是太受靈性猴庇護。偶爾會覺得肩頸部分特別溫暖，別懷疑，那不是你的錯覺。
                    </p>
                    <p className="text-lg text-gray-400 italic mt-4">
                      目前的靈性猴由於功德金不足，由替代役暫代。
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src="/images/spiritual-monkey.jpg"
                      alt="靈性猴"
                      className="rounded-lg border border-accent/30 max-w-full h-auto shadow-lg"
                      loading="lazy"
                    />
                  </div>
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
                to="/spirit-animals"
                className="text-accent hover:text-accent-light transition-colors inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>返回功德靈獸</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

export default SpiritualMonkeyPage
