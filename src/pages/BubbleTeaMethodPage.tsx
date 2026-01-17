import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function BubbleTeaMethodPage() {
  const sections = [
    {
      name: '何謂手搖杯',
      path: '/what-is-bubble-tea',
      key: 'what-is',
      description: '台灣人人喝手搖杯，但是你知道手搖杯裡面蘊含著無限的神奇能量嗎？',
      icon: '🥤',
    },
    {
      name: '如何感應手搖杯能量',
      path: '/how-to-sense-energy',
      key: 'sense-energy',
      description: '透過簡單的辦法體驗手搖杯具有的神奇能量場。',
      icon: '⚡',
    },
    {
      name: '讓手搖杯消磁',
      path: '/demagnetizing-bubble-tea',
      key: 'demagnetize',
      description: '不是買了飲料就好，要消除手搖杯不好的記憶才能發正功。透過消除不好的磁場，才能使手搖杯發揮正面功效，而不會對善信造成身心上的危害。',
      icon: '🧲',
    },
  ]

  return (
    <>
      <Helmet>
        <title>手搖杯改運法 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="讓手搖妙雷宗致力於提供信徒廉價而實惠的信仰需求，利用台灣四處隨手可得的手搖杯飲料就能夠改運" />
        <meta property="og:title" content="手搖杯改運法 - 妙法無邊雷射蓮花" />
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
              手搖杯改運法
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              買飲料改運，就算沒有用。至少，飲料，還可以喝。
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
                  手搖杯改運法
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    讓手搖妙雷宗致力於提供信徒<strong className="text-accent">廉價而實惠的信仰需求</strong>，現在推出利用台灣四處隨手可得、價錢便宜的手搖杯飲料就能夠改運的方法。
                  </p>
                  <p className="text-lg">
                    覺得花大錢購買水晶、骨董、改變房間格局卻覺得財運沒有起色嗎？
                  </p>
                  <p className="text-lg">
                    覺得魚缸跟八卦鏡對自己的桃花運還有官運毫無助益嗎？
                  </p>
                  <p className="text-lg">
                    手搖杯改運法是師傅精心研究陰陽五行、易理吠陀新紀元、以及市面上諸多寶石改運書籍，參透出來一種更加<strong className="text-accent">廉價樸實的改運方法</strong>，不必再花大錢添購沒有用的裝飾了。
                  </p>
                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5 mt-6">
                    <p className="text-xl font-bold text-accent text-center mb-2">
                      &nbsp;買飲料改運，就算沒有用。
                    </p>
                    <p className="text-xl font-bold text-accent text-center">
                      &nbsp;至少，飲料，還可以喝。
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Link to={section.path}>
                    <Card hover glow className="h-full text-center">
                      <div className="text-6xl mb-4">{section.icon}</div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-100">
                        {section.name}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {section.description}
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

export default BubbleTeaMethodPage
