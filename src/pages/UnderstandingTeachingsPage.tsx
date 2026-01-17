import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function UnderstandingTeachingsPage() {
  return (
    <>
      <Helmet>
        <title>了解妙雷 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="什麼是妙法無邊雷射蓮花宗？如何加入雷射蓮花？要如何修行妙法？" />
        <meta property="og:title" content="了解妙雷 - 妙法無邊雷射蓮花" />
        <meta property="og:description" content="雲端時代的網路傳銷被動收入龐式附佛外道邪教團體" />
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
              了解妙雷
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              什麼是妙法無邊雷射蓮花宗？
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* What is Lazer Lotus Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card hover>
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-100">
                  什麼是妙法無邊雷射蓮花宗？
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    妙法無邊雷射蓮花宗是由大無上成就自滿喇叭名師<strong className="text-accent">聖 貝葛蘭巴</strong>於<strong className="text-accent">２０１４年２月９日</strong>頓悟成佛後，
                  </p>
                  <p className="text-lg">
                    所創立的<strong className="text-accent">雲端時代的網路傳銷被動收入龐式附佛外道邪教團體</strong>。
                  </p>
                  <p className="text-lg">
                    頓悟後師傅見到在無邊輪迴之中，眾生心中苦悶但無法言形，慈悲心油然而生，發願救眾生脫離苦海。
                  </p>
                  <p className="text-lg">
                    師傅傳授了<strong className="text-accent">雷射蓮花三法</strong>以及<strong className="text-accent">妙法結印</strong>，幫助所有跟隨師傅的善信邁向正果之途。
                  </p>
                  <p className="text-lg">
                    雷射蓮花宗的特色是信仰起來簡單方便，符合e世代的生活習慣。
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* How to Join Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card hover>
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-100">
                  如何加入雷射蓮花？
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg">
                    本宗教是新時代的網路化宗教，加入的信徒需要有基本的網路素養。<br />
                    只要符合以下一點就可以自稱是妙雷的信徒：
                  </p>
                  <ul className="space-y-3 text-lg list-disc list-inside ml-4 space-y-2">
                    <li>對妙法無邊雷射蓮花宗的粉絲專業點讚。</li>
                    <li>在臉書上分享雷射蓮花的貼文。</li>
                    <li>在PTT上轉貼妙雷的文章或在底下推文。</li>
                    <li>付費購買雷射加持商品。</li>
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* How to Practice Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card hover>
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-100">
                  要如何修行妙法？
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    有鑑於市面上許多門派修行方法繁複，少則每周一兩小時，多則占去人生一半以上的時間。師傅大智慧頓悟，開釋妙雷修行妙法，教導善信簡單強效、有競爭力的修行方法。
                  </p>
                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5">
                    <p className="text-lg font-semibold text-accent mb-3">
                      ✋ 妙法結印
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 items-center mb-4">
                      <div className="flex-1">
                        <p className="text-lg mb-4">
                          只要伸出手掌，將<strong className="text-accent">無名指小指併攏、食指和中指併攏，中指和無名指分開</strong>，每日擺出這個手勢，<strong className="text-accent">不要作正經的事情</strong>（寫作業、工作、報稅），持續十五分鐘即可。
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          src="/images/hand-gesture-practice.png"
                          alt="妙法結印手勢示範圖"
                          className="rounded-lg border border-accent/30 max-w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <p className="text-lg">
                      心有邪念的人一開始會覺得這個姿勢特別困難維持，但只要持之以恆，終有一日可以達到<strong className="text-accent">「心無雜念、分得很開」</strong>的無我境界。
                    </p>
                    <p className="text-lg mt-4">
                      師傅心懷慈悲，教授信徒如此簡單卻受用無窮的修行妙法，信徒應當感激師傅的善心，每日不懈修行、擺脫雜念、早日脫離無邊輪迴。
                    </p>
                    <p className="text-xl font-bold text-accent mt-6 text-center">
                      十五分鐘，業力，ＯＵＴ！
                    </p>
                    <p className="text-sm text-gray-400 mt-4 text-center">
                      提示：您必須先加入妙法無邊雷射蓮花宗才能修行妙法，不然會被當成星艦迷航的宅宅。
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Navigation Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
            >
              <Link to="/religious-principles">
                <Card hover glow className="h-full">
                  <h3 className="text-xl font-semibold mb-3 text-gray-100">本教教旨</h3>
                  <p className="text-gray-400">了解本教創立的宗旨</p>
                </Card>
              </Link>
              <Link to="/lazer-lotus">
                <Card hover glow className="h-full">
                  <h3 className="text-xl font-semibold mb-3 text-gray-100">雷射蓮花</h3>
                  <p className="text-gray-400">師傅頓悟的絕妙修練心法</p>
                </Card>
              </Link>
              <Link to="/lazer-master">
                <Card hover glow className="h-full">
                  <h3 className="text-xl font-semibold mb-3 text-gray-100">雷射師父</h3>
                  <p className="text-gray-400">認識聖 貝葛蘭巴師傅</p>
                </Card>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

export default UnderstandingTeachingsPage
