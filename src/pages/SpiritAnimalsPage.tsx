import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from '../components/Card'

function SpiritAnimalsPage() {
  const spiritAnimals = [
    {
      name: '靈性猴',
      path: '/spiritual-monkey',
      key: 'monkey',
      description: '最基本款的守護神',
      icon: '🐵',
    },
    {
      name: '大宇宙大智慧大刺蝟',
      path: '/great-universe-hedgehog',
      key: 'hedgehog',
      description: '大千世界當中最有靈性跟悟性的神獸',
      icon: '🦔',
    },
    {
      name: '靈性鵜鶘',
      path: '/spiritual-pelican',
      key: 'pelican',
      description: '全自動化員工，提供更優質的服務',
      icon: '🦢',
    },
  ]

  return (
    <>
      <Helmet>
        <title>功德靈獸 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="本教師傅連接大宇宙智慧，開悟本教獨有的神聖靈獸，保護教友、護持眾生" />
        <meta property="og:title" content="功德靈獸 - 妙法無邊雷射蓮花" />
        <meta property="og:description" content="信仰雷射蓮花宗的信徒目前可以選擇三種靈獸作為守護神" />
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
              功德靈獸
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              神聖靈獸，保護教友、護持眾生
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
                  功德靈獸
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    本教師傅連接大宇宙智慧，開悟本教獨有的<strong className="text-accent">神聖靈獸</strong>，保護教友、護持眾生。
                  </p>
                  <p className="text-lg">
                    信仰雷射蓮花宗的信徒目前可以選擇<strong className="text-accent">三種靈獸</strong>作為守護神。
                  </p>
                  <ol className="list-decimal list-inside ml-4 space-y-2 text-lg">
                    <li>靈性猴</li>
                    <li>大宇宙大智慧大刺蝟</li>
                    <li>靈性鵜鶘</li>
                  </ol>
                  <p className="text-lg mt-4 text-gray-400">
                    師傅會不定期增加新的靈獸。
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Spirit Animals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {spiritAnimals.map((animal, index) => (
                <motion.div
                  key={animal.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Link to={animal.path}>
                    <Card hover glow className="h-full text-center">
                      <div className="text-6xl mb-4">{animal.icon}</div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-100">
                        {animal.name}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {animal.description}
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

export default SpiritAnimalsPage
