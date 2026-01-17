import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Card from '../components/Card'

function EnlightenmentVideoPage() {
  return (
    <>
      <Helmet>
        <title>了凡視訊 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="不論是對本教教義所疑義，或者是人生有所苦惱要尋求指引。寄信給師父的當下可以在腦中感應到師父的法相，瞬間解脫無明煩惱。" />
        <meta property="og:title" content="了凡視訊 - 妙法無邊雷射蓮花" />
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
              了凡視訊
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              尋求指引與解脫煩惱
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
                  了凡視訊
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg mb-6">
                    不論是對本教教義所疑義，或者是人生有所苦惱要尋求指引。
                  </p>
                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5 mb-6">
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                      寄信給師父的當下可以在腦中感應到師父的法相，瞬間解脫無明煩惱，是為了凡視訊。
                    </p>
                  </div>
                  <p className="text-lg mb-4">
                    請寄信到下列信箱：
                  </p>
                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5 text-center">
                    <p className="text-xl font-semibold text-accent mb-3">
                      📧 聯絡信箱
                    </p>
                    <a
                      href="mailto:magiclazerlotus@gmail.com"
                      className="text-2xl font-bold text-accent hover:text-accent-light transition-colors break-all"
                    >
                      magiclazerlotus@gmail.com
                    </a>
                  </div>
                  <p className="text-lg mt-6 text-gray-400">
                    師傅會定期巡視信箱然後隨著緣分跟宇宙刺蝟挑選問題回信，或者是刊登於雷射蓮花粉絲專頁。
                  </p>
                </div>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

export default EnlightenmentVideoPage
