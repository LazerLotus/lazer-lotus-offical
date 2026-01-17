import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function GreatUniverseHedgehogPage() {
  return (
    <>
      <Helmet>
        <title>大宇宙大智慧大刺蝟 - 功德靈獸 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="大宇宙大智慧大刺蝟是大千世界當中最有靈性跟悟性的神獸" />
        <meta property="og:title" content="大宇宙大智慧大刺蝟 - 功德靈獸" />
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
              大宇宙大智慧大刺蝟
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              大千世界當中最有靈性跟悟性的神獸
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
                      大宇宙大智慧大刺蝟
                    </h2>
                    <p className="text-lg">
                      大宇宙大智慧大刺蝟是<strong className="text-accent">大千世界當中最有靈性跟悟性的神獸</strong>。
                    </p>
                    <p className="text-lg">
                      受到大宇宙大智慧大刺蝟保佑的信徒會在需要靈光一閃的活動上感到長足的進步，比方說<strong className="text-accent">算微積分、寫論文、debug、路邊挑水果殺價、捉姦在床</strong>等等。
                    </p>
                    <p className="text-lg">
                      受到本靈獸保護的信徒會覺得早上醒來頭髮特別的有型、但是把頭靠在椅背時會感到<strong className="text-accent">肩頸有刺痛感</strong>。
                    </p>
                    <div className="glass-card p-4 rounded-lg border border-accent/30 bg-accent/5 mt-4">
                      <p className="text-lg font-semibold text-accent mb-2">能力加成：</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-300">
                        <li>增加智力3點</li>
                        <li>能量護盾回復速率5%</li>
                        <li>降低10%渾沌傷害</li>
                      </ul>
                    </div>
                    <p className="text-lg mt-4">
                      信徒只要<strong className="text-accent">快速連續呼喊大宇宙大智慧大刺蝟十次</strong>，就能夠得到他的庇護。前提是你要夠快。信徒可以在周圍沒有其他人的時候試試。
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src="/images/great-universe-hedgehog.jpg"
                      alt="大宇宙大智慧大刺蝟"
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

export default GreatUniverseHedgehogPage
