import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function LazerLotusPage() {
  const methods = [
    {
      title: '不可思議流明綠光法',
      subtitle: '綠光法是凡夫俗子肉眼最容易有感應的光線',
      description: '雷射蓮花妙法與生俱來就簡單易懂，引聚人心，潛心向善。凡領會綠光法的信徒，享受靈氣護身、綠光罩頂，於生活中、事業上、如廁中，都能夠更加順利、圓滿、法喜充滿。',
      detail: '如果有信徒想知道，是波長532nm。',
      icon: '💚',
    },
    {
      title: '燼火有餘神證蓮花法',
      subtitle: '蓮花是佛教中代表出淤泥而不染的聖潔',
      description: '表示佛自人世苦海中證得正覺。信徒受蓮花法實證，得以從煩惱嗔怒的塵世解脫，躍遷至無邊無惱之境界。',
      icon: '🪷',
    },
    {
      title: '吉珈拉岡究竟激射法',
      subtitle: '宇宙自始於大爆炸，縱使過了一百四十億年（也有一說是六千年），於今仍舊不斷的膨脹',
      description: '師傅所傳的激射法乃是大宇宙意念的展現，對抗不斷增加的煩惱熵，突破自身極限的堅毅展現。修習激射法的信徒會覺得體力充沛，煥然一新、鬥志激昂。',
      warning: '開車的時候盡量不要用。',
      icon: '⚡',
    },
  ]

  return (
    <>
      <Helmet>
        <title>雷射蓮花 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="雷射蓮花是聖 貝葛蘭巴師傅頓悟的絕妙修練心法，包含三種殊勝宇宙基本妙法" />
        <meta property="og:title" content="雷射蓮花 - 妙法無邊雷射蓮花" />
        <meta property="og:description" content="不可思議流明綠光法、燼火有餘神證蓮花法、吉珈拉岡究竟激射法" />
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
              雷射蓮花
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              師傅頓悟的絕妙修練心法
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card hover>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  雷射蓮花是聖 貝葛蘭巴師傅頓悟的絕妙修練心法。
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  師傅慈悲為懷，將此等妙法普傳，希望救天下芸芸眾生脫離無邊苦海輪迴。
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  雷射蓮花隱含宇宙常數與原理，包含了<strong className="text-accent">三種殊勝宇宙基本妙法</strong>。
                </p>
              </Card>
            </motion.div>

            {/* Methods */}
            <div className="space-y-8">
              {methods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card hover glow>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 text-5xl">{method.icon}</div>
                      <div className="flex-grow">
                        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 text-gray-100">
                          {method.title}
                        </h2>
                        <p className="text-lg text-accent mb-4 font-semibold">
                          {method.subtitle}
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-3">
                          {method.description}
                        </p>
                        {method.detail && (
                          <p className="text-gray-400 italic text-sm mt-4">
                            {method.detail}
                          </p>
                        )}
                        {method.warning && (
                          <div className="mt-4 p-4 rounded-lg border border-accent/30 bg-accent/5">
                            <p className="text-accent font-semibold">
                              ⚠️ {method.warning}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Back Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
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

export default LazerLotusPage
