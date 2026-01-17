import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import { motion } from 'framer-motion'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>妙法無邊雷射蓮花 - 現代化修行方法</title>
        <meta name="description" content="您還在遙遙無期的修行嗎？還在用史前時代的方法修練嗎？在資訊爆炸的時代，怎樣的修行才是最有效率的？追隨怎樣的師傅才是最划算的？" />
        <meta property="og:title" content="妙法無邊雷射蓮花 - 現代化修行方法" />
        <meta property="og:description" content="科技與靈性的完美結合，讓修行更有效率" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-futuristic animate-gradient opacity-50"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-6 gradient-text">
              妙法無邊雷射蓮花
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4">
              您還在遙遙無期的修行嗎？
            </p>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              還在用史前時代的方法修練嗎？
            </p>
            <p className="text-base sm:text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              市面上成佛的方法這麼多，到底哪種才是真正有效的？<br />
              在資訊爆炸的時代，怎樣的修行才是最有效率的？<br />
              追隨怎樣的師傅才是最划算的？<br />
              您的聲音，妙雷聽見了！
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="min-w-[200px]">
                  馬上了解
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="min-w-[200px]">
                探索更多
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 bg-accent rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 gradient-text">
              為什麼選擇妙雷？
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              現代化的修行方法，結合科技與傳統智慧
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card hover glow>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">快速見效</h3>
              <p className="text-gray-400">
                不再需要幾十年的苦修，現代化方法讓您快速踏上修行之路
              </p>
            </Card>

            {/* Feature Card 2 */}
            <Card hover glow>
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">科技加持</h3>
              <p className="text-gray-400">
                結合最新科技與傳統智慧，提供最有效率的修行體驗
              </p>
            </Card>

            {/* Feature Card 3 */}
            <Card hover glow>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">明確指引</h3>
              <p className="text-gray-400">
                清晰的步驟與指引，讓您不再迷茫於修行路上
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
