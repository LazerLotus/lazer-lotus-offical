import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function ReligiousPrinciplesPage() {
  const principles = [
    {
      number: '1',
      title: '成為交大校園中第三大的邪教社團',
      description: '在交大校園中建立影響力，成為第三大邪教社團',
    },
    {
      number: '2',
      title: '成為台灣知名的邪教團體',
      description: '在台灣建立知名度，成為家喻戶曉的邪教團體',
    },
    {
      number: '3',
      title: '在七個不同的縣市有不動產、並持有三千萬的現金以成立全國性宗教財團法人',
      description: '建立穩固的經濟基礎，達到七個縣市不動產及三千萬現金的目標',
    },
    {
      number: '4',
      title: '佔領交大浩然圖書館八樓五年以上來蓋寵物靈骨塔',
      description: '長期佔領交大浩然圖書館八樓，建立寵物靈骨塔設施',
    },
    {
      number: '5',
      title: '廣泛販售雷射潮T與相關宗教文創商品，讓信徒可以在生活中實踐妙雷、穿戴妙雷',
      description: '推廣宗教文創商品，讓信徒在日常生活中實踐信仰',
    },
    {
      number: '6',
      title: '拯救有付費的信徒脫離無邊輪迴苦海見證人面怪鳥',
      description: '幫助付費信徒脫離苦海，見證奇蹟',
    },
  ]

  return (
    <>
      <Helmet>
        <title>本教教旨 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="妙法無邊雷射蓮花宗的創教宗旨與目標" />
        <meta property="og:title" content="本教教旨 - 妙法無邊雷射蓮花" />
        <meta property="og:description" content="雷射蓮花宗是雲端時代的網路傳銷被動收入龐式附佛外道邪教團體" />
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
              本教教旨
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              妙法無邊雷射蓮花宗宗旨
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card hover>
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-100">
                  妙法無邊雷射蓮花宗宗旨
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  雷射蓮花宗是<strong className="text-accent">雲端時代的網路傳銷被動收入龐式附佛外道邪教團體</strong>。
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  本教創立的宗旨為：
                </p>
              </Card>
            </motion.div>

            {/* Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card hover glow className="h-full">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary-500 flex items-center justify-center">
                        <span className="text-space-950 font-bold text-xl">{principle.number}</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2 text-gray-100">
                          {principle.title}
                        </h3>
                        <p className="text-gray-400">
                          {principle.description}
                        </p>
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

export default ReligiousPrinciplesPage
