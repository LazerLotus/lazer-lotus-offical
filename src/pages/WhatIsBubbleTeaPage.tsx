import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function WhatIsBubbleTeaPage() {
  return (
    <>
      <Helmet>
        <title>何謂手搖杯 - 手搖杯改運法 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="什麼是手搖杯？手搖杯的結構與能量原理" />
        <meta property="og:title" content="何謂手搖杯 - 手搖杯改運法" />
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
              何謂手搖杯？
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              手搖杯的結構與能量原理
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card hover>
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-100">
                  何謂手搖杯？
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5 mb-6">
                    <p className="text-xl font-semibold text-accent text-center">
                      台灣人人喝手搖杯，但是你知道手搖杯裡面蘊含著無限的神奇能量嗎？
                    </p>
                  </div>
                  <p className="text-lg">
                    什麼是手搖杯（Shaker）？這是大多數人在進入手搖杯世界的第一個問題。
                  </p>
                  <p className="text-lg">
                    這個問題非常基本，卻不好用文字形容，所以請信眾參考左邊的圖示。一般的手搖杯俗稱飲料，不過坊間很多的飲料也包含了寶特瓶、鋁箔包等等，為了避免混淆，這邊用較精確的名詞<strong className="text-accent">手搖杯</strong>來稱呼。
                  </p>
                  <p className="text-lg">
                    一個標準的手搖杯具備了<strong className="text-accent">杯子、基底跟填充料</strong>，還有最上面的封膜，手搖杯最重要的就是當中的基底跟填充料，基底就是液體的部分，諸如紅茶、果汁等等。而填充料就是所謂的固體，諸如珍珠、粉條等等。
                  </p>
                  
                  {/* Water Section */}
                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5 mt-6">
                    <h3 className="text-xl font-semibold text-accent mb-4">
                      💧 水的神奇特性
                    </h3>
                    <p className="text-lg mb-3">
                      一杯飲料當中最多的成分就是<strong className="text-accent">水（Aqua）</strong>，人體當中也有百分之七十是水，地球表面海洋的面積也剛好是七成，而純水在室溫底下的酸鹼值（ｐＨ）也剛好是７！這絕對不是巧合！
                    </p>
                    <p className="text-lg">
                      在科學上來說，水的結構式是Ｈ２Ｏ，由兩個氫加上一個氧，三個原子呈現一個<strong className="text-accent">１０４．５的角度</strong>，如同一個小型的金字塔一般。各位善信如果知道臭氧，臭氧是功效很強的負離子，是由三個氧組成的，但是水只有一個氧，另外兩個是氫，因此水是無色無味的。
                    </p>
                  </div>

                  {/* Energy Section */}
                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5 mt-6">
                    <h3 className="text-xl font-semibold text-accent mb-4">
                      ⚡ 水的能量特性
                    </h3>
                    <p className="text-lg mb-3">
                      而且因為只有帶一個氧原子，因此水只帶有微微的極性，但可別小看了這個微型金字塔能量體所攜帶的小小極性，地球地核深處融溶的鐵不斷的流動產生出了地球本身的磁場，而在人類血管中流轉的水。也就像個電磁鐵一樣，提供人體周圍能量的來源，諸如我們老祖宗所說的<strong className="text-accent">氣、或是印度人講的輪脈、忍者施展法術的查克拉</strong>，其實都是從這邊來的。
                    </p>
                    <p className="text-lg">
                      不過因為水本身的電性微弱，因此現代科學仍然無法精準測得，實在可惜。
                    </p>
                    <p className="text-lg mt-3">
                      一般人天天喝水，但是卻對喝進去的水沒有研究，而去研究那些很大的沙子－水晶，實在是白白浪費了改變機運的大好機會啊。
                    </p>
                  </div>

                  {/* Straw and Structure */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-100 mt-6">
                      🥤 手搖杯的結構與吸管
                    </h3>
                    <p className="text-lg">
                      再來看看手搖杯的結構，手搖杯有分開封前與開封後的，由於手搖杯在製作的時候取天地之精華封藏於小小一隅桶柱中，像是電池儲存電力一般，一般會用<strong className="text-accent">吸管（drinking straw）</strong>，將其能量導引出來。就根避雷針一樣。
                    </p>
                    <p className="text-lg">
                      一般人會小看這個吸管的作用，覺得不就是根管子嗎？這個觀念實在是大錯特錯。組裝電腦的時候最容易忽略的電源供應器，但是只要一個電壓不穩所有零件都報銷了。<strong className="text-accent">吸管之於手搖杯也是一樣</strong>，輕則無法順利吃完珍珠、重則杯破汁亡，不可不慎啊。
                    </p>
                    <p className="text-lg">
                      如果開封的時候，吸管穿透不了手搖杯而斷裂，表這杯的<strong className="text-accent">能量正強</strong>，是不可多得的好杯啊，應該要再接再厲，換一隻吸管，多試幾次。
                    </p>
                    <p className="text-lg">
                      基底則是整個手搖杯的主軸，當中不同的液體都有對應<strong className="text-accent">五行以及天體運行</strong>的功效。填充料就像是中醫所說的藥引，能夠搭配、互補、增強基底的功效，讓基底的磁場能夠完整的被激發出來。
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

export default WhatIsBubbleTeaPage
