import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from '../components/Card'

function WeddingCeremoniesPage() {
  const ceremonies = [
    {
      name: '緒論',
      path: '/wedding-introduction',
      key: 'introduction',
      description: '妙雷宗婚禮儀式介紹',
      icon: '📖',
    },
    {
      name: '結婚儀式',
      path: '/marriage-ceremony',
      key: 'marriage',
      description: '神聖的結婚典禮儀式',
      icon: '💒',
    },
    {
      name: '靈性動物介紹',
      path: '/spirit-animal-introduction',
      key: 'spirit-animal',
      description: '婚禮中使用的靈性動物',
      icon: '🦌',
    },
    {
      name: '離婚儀式',
      path: '/divorce-ceremony',
      key: 'divorce',
      description: '莊嚴的離婚儀式',
      icon: '📜',
    },
  ]

  return (
    <>
      <Helmet>
        <title>妙雷宗婚禮儀式 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="妙雷宗婚禮儀式相關資訊與流程" />
        <meta property="og:title" content="妙雷宗婚禮儀式 - 妙法無邊雷射蓮花" />
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
              妙雷宗婚禮儀式
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              神聖莊嚴的婚禮與離婚儀式
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
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-100">
                  妙雷宗婚禮儀式
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    歡迎了解妙雷宗的<strong className="text-accent">婚禮與離婚儀式</strong>。
                  </p>
                  <p className="text-lg text-gray-400 italic">
                    施工中，請稍候。
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Ceremonies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ceremonies.map((ceremony, index) => (
                <motion.div
                  key={ceremony.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Link to={ceremony.path}>
                    <Card hover glow className="h-full text-center">
                      <div className="text-6xl mb-4">{ceremony.icon}</div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-100">
                        {ceremony.name}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {ceremony.description}
                      </p>
                      <span className="text-accent text-sm font-medium">
                        了解更多 →
                      </span>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default WeddingCeremoniesPage
