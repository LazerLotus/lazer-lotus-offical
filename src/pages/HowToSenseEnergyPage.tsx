import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function HowToSenseEnergyPage() {
  return (
    <>
      <Helmet>
        <title>如何感應並發揮手搖杯的神奇力量？ - 手搖杯改運法 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="透過簡單的辦法體驗手搖杯具有的神奇能量場，用手掌感受到氣場的存在" />
        <meta property="og:title" content="如何感應並發揮手搖杯的神奇力量？ - 手搖杯改運法" />
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
              如何感應並發揮手搖杯的神奇力量？
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              體驗手搖杯具有的神奇能量場
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
                  如何感應並發揮手搖杯的神奇力量？
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5 mb-6">
                    <p className="text-xl font-semibold text-accent text-center mb-4">
                      透過簡單的辦法體驗手搖杯具有的神奇能量場。
                    </p>
                  </div>

                  <p className="text-lg">
                    這是許多人在進入手搖杯靈性世界所共有的問題。
                  </p>

                  <p className="text-lg">
                    「手搖杯有氣跟磁場？怎麼我感受不到？是不是跟路邊賣水晶隕石一樣是騙人的？」
                  </p>

                  <p className="text-lg">
                    為了讓各位善信能夠更加了解手搖杯的能量場，師傅在這邊要教授大家如何用自己的手掌感受到氣場的存在。
                  </p>

                  {/* Hand Exercise Instructions */}
                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5 mt-6">
                    <h3 className="text-xl font-semibold text-accent mb-4">
                      ✋ 手掌感應練習
                    </h3>
                    <p className="text-lg mb-3">
                      首先請各位善信伸出雙手，看看自己手掌的紋路，跟自己雙手相處多年，是不是把右手放在滑鼠、左手放在桌子底下居多，而從來沒有真正了解自己的雙手呢？
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-lg ml-4">
                      <li>先將拳頭緊緊握住，捏到掌心發白，是什麼感覺？是不是覺得該剪指甲了？</li>
                      <li>再將五指平伸併攏，繃緊，又是什麼感覺？是不是覺得該剪指甲了？</li>
                      <li>重複以上動作三十次，接下來將手掌放鬆，真正的放鬆。讓手掌手指微彎，肌肉筋骨血管都全然放鬆。</li>
                    </ol>
                    <p className="text-lg mt-4">
                      這時一些天生敏感的善信就能感受到自己指尖、掌心氣的溫熱跟流動了。
                    </p>
                  </div>

                  {/* Testing with Bubble Tea */}
                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5 mt-6">
                    <h3 className="text-xl font-semibold text-accent mb-4">
                      🥤 手搖杯感應測試
                    </h3>
                    <p className="text-lg mb-3">
                      這時候找杯手搖杯來，一隻手掌隔空緩慢環繞杯體，另一隻則對空氣做相同動作，靜心體會一下，看看是什麼感覺？
                    </p>
                    <p className="text-lg mb-3">
                      兩隻手在同樣的高度、相同的高度，肌肉的鬆緊度、血液流量都是相同的，因為控制變因相同，所以兩手的感覺應該是相同的；如果有不同的感受，那肯定就是唯一的操作變因－手搖杯的不同，而導致的。
                    </p>
                    <p className="text-lg">
                      如果不信邪，可以兩手交換靠近手搖杯，如果都是靠近手搖杯的手感到不同，那我們就可以斷定是手搖杯造成的。
                    </p>
                  </div>

                  {/* Different Sensations */}
                  <div className="space-y-4 mt-6">
                    <h3 className="text-xl font-semibold text-gray-100">
                      💫 不同的感應體驗
                    </h3>
                    <p className="text-lg">
                      至於會有什麼樣的感應？有些人說溫溫的，有些人說涼涼的，視裡面是冷飲熱飲或是個人體質不同而定，畢竟<strong className="text-accent">不同的體質有不同的感應</strong>嘛！
                    </p>
                    <p className="text-lg">
                      相同的地方在於，當大家手這樣放著大概十分鐘，都會有點刺刺麻麻，手臂會覺得酸痛，手掌有充滿氣的感覺，手好像要沉下去一樣。請記得這種感覺！這就是一般人對手搖杯氣場的感應。
                    </p>
                  </div>

                  {/* Hot Drinks Section */}
                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5 mt-6">
                    <h3 className="text-xl font-semibold text-accent mb-4">
                      ☕ 熱飲手搖杯的能量
                    </h3>
                    <p className="text-lg">
                      熱飲手搖杯因為內部<strong className="text-accent">微對流（Micro-Convection）</strong>，外在有強烈的能源場，最適合做此類的實驗了，常有擅長氣功的朋友買路邊便利超商的咖啡後說：「被燙到了！」，哈，這並不誇張，確確實實有很多這種例子發生，而驚訝於這麼小杯的飲品當中，竟然蘊藏如此巨大的能量。
                    </p>
                  </div>

                  {/* Final Notes */}
                  <div className="space-y-4 mt-6">
                    <p className="text-lg">
                      經過上述過程，絕大多數人都會有感應了，除了極少數<strong className="text-accent">「死硬派」、「科學派」、「雷龍派」</strong>外。
                    </p>
                    <p className="text-lg">
                      有些朋友會謙稱自己沒氣，沒能量，真要沒能量早就進入<strong className="text-accent">熱寂、申請死亡證明了</strong>，還會在這邊研究手搖杯嗎？這些朋友多半是「我執」太重，多是學習科學、邏輯的人，尤其浸淫越深、障礙越深，被自己的知識，阻絕了靈性上的發展。
                    </p>
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
                to="/bubble-tea"
                className="text-accent hover:text-accent-light transition-colors inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>返回手搖杯改運法</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

export default HowToSenseEnergyPage
