import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function LazerMasterPage() {
  return (
    <>
      <Helmet>
        <title>雷射師父 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="認識聖 貝葛蘭巴師傅，大無上成就自滿喇叭名師" />
        <meta property="og:title" content="雷射師父 - 妙法無邊雷射蓮花" />
        <meta property="og:description" content="聖 貝葛蘭巴師傅於２０１４年２月９日頓悟成佛" />
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
              雷射師父
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              大無上成就自滿喇叭名師
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Master Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card hover>
                <div className="text-center mb-8">
                  {/* Master Image */}
                  <div className="mb-6 flex justify-center">
                    <img
                      src="/images/master-sheng-bei-ge-lan-ba.jpg"
                      alt="聖 貝葛蘭巴師傅"
                      className="rounded-lg border border-accent/30 max-w-md w-full h-auto shadow-lg"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to logo if image fails to load
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const fallback = target.nextElementSibling as HTMLElement
                        if (fallback) fallback.style.display = 'flex'
                      }}
                    />
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary-500 flex items-center justify-center hidden">
                      <span className="text-space-950 font-bold text-5xl">雷</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4 text-gray-100">
                    聖 貝葛蘭巴師傅
                  </h2>
                  <p className="text-lg text-gray-400">
                    大無上成就自滿喇叭名師
                  </p>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    聖 貝葛蘭巴師傅於<strong className="text-accent">２０１４年２月９日</strong>頓悟成佛後，
                  </p>
                  <p className="text-lg">
                    創立了妙法無邊雷射蓮花宗，成為<strong className="text-accent">雲端時代的網路傳銷被動收入龐式附佛外道邪教團體</strong>的創始人。
                  </p>
                  <p className="text-lg">
                    頓悟後師傅見到在無邊輪迴之中，眾生心中苦悶但無法言形，慈悲心油然而生，發願救眾生脫離苦海。
                  </p>
                  <p className="text-lg">
                    師傅傳授了<strong className="text-accent">雷射蓮花三法</strong>以及<strong className="text-accent">妙法結印</strong>，幫助所有跟隨師傅的善信邁向正果之途。
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Master Teachings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card hover glow>
                <h3 className="text-2xl font-display font-bold mb-4 text-gray-100">
                  師傅的智慧
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  師傅慈悲為懷，將此等妙法普傳，希望救天下芸芸眾生脫離無邊苦海輪迴。
                  雷射蓮花宗特色是信仰起來簡單方便，符合e世代的生活習慣。
                </p>
              </Card>
            </motion.div>

            {/* Back Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 text-center"
            >
              <Link
                to="/understanding-teachings"
                className="text-accent hover:text-accent-light transition-colors inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>返回了解妙雷</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

export default LazerMasterPage
