import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function SpiritualPelicanPage() {
  return (
    <>
      <Helmet>
        <title>靈性鵜鶘 - 功德靈獸 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="因應妙雷靈性動物工會罷工，本教引進全自動化員工" />
        <meta property="og:title" content="靈性鵜鶘 - 功德靈獸" />
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
              靈性鵜鶘
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              全自動化員工，提供更優質的服務
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
                      靈性鵜鶘
                    </h2>
                    <p className="text-lg">
                      因應<strong className="text-accent">妙雷靈性動物工會罷工</strong>，協商後本教不得使約聘靈獸身兼數職，並調漲工資為<strong className="text-accent">早上四顆李子，晚上三顆李子</strong>，非公會會員不得享有優惠(拒絕工賊，人人有責)。
                    </p>
                    <p className="text-lg">
                      現在本教引進<strong className="text-accent">全自動化員工</strong>以降低人事成本，提供更優質的服務。
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src="/images/spiritual-pelican.png"
                      alt="靈性鵜鶘"
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

export default SpiritualPelicanPage
