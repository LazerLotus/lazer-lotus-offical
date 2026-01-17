import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Card from '../components/Card'

function DharmaDeclarationPage() {
  const commandments = [
    {
      number: '一',
      title: '知道自己是誰',
      stars: '★★☆',
      levels: [
        { 
          stars: '★☆☆', 
          text: '了解自己人際關係當中的自己',
          detail: '例如你當的是爸媽，就不要試圖控制小孩的人生。是老師，就不要試圖操心小孩爸媽該操心的事。是親戚，就不要幫對方操心結婚對象。反過來也是，請制止搞不清楚狀況的親戚跟朋友。'
        },
        { 
          stars: '★★☆', 
          text: '了解社會當中的自己',
          detail: '不要幫法官跟檢調操心無罪推定、不要幫老闆擔憂怎樣賺錢，如果你是員工就該要求加薪、如果是勞工就不要關心公司一例一修會不會虧損。'
        },
        { 
          stars: '★★★', 
          text: '了解世界中的自己',
          detail: '台灣明明就是東南亞的一部份，而且不是有幾億人的地方，不要繼續照搬美國產業策略來用啦。一直想跟德國法國裝熟，應該是去認識東協的那幾個國家吧。'
        },
      ],
    },
    {
      number: '二',
      title: '保護好自己',
      stars: '★★☆',
      levels: [
        { 
          stars: '★☆☆', 
          text: '不做死就不會死',
          detail: '騎車戴安全帽、走廊不奔跑、轉彎換車道提早打方向燈、打炮要戴套，本教沒有拿到達爾文獎的信徒。'
        },
        { 
          stars: '★★☆', 
          text: '主動避免危險',
          detail: '定期檢查建築物消防設施跟動線、上路前檢查五油三水、辦大型活動前一定要與消防隊聯絡。'
        },
        { 
          stars: '★★★', 
          text: '主動增加防禦',
          detail: '...'
        },
      ],
    },
    {
      number: '三',
      title: '表達你的意見',
      stars: '★★☆',
      levels: [
        { 
          stars: '★☆☆', 
          text: '覺得不高興就講',
          detail: '好信徒應該抒發自己的不滿，不管是臉書、PTT還是跟朋友訴苦，都不要當個溫馴的人。'
        },
        { 
          stars: '★★☆', 
          text: '勇敢的拒絕',
          detail: '勇敢的拒絕上級不合理的命令、親人的情緒勒索'
        },
        { 
          stars: '★★★', 
          text: '對社會發聲',
          detail: '把你的意見整理成一套系統與論述，嘗試成為意見領袖，宣揚本教價值。'
        },
      ],
      intro: '好的教徒不該是溫良恭儉讓的教徒，開心就該笑、被欺負就叫，有功勞就拿。',
    },
    {
      number: '四',
      title: '誠實是最佳策略',
      stars: '★★☆',
      levels: [
        { 
          stars: '★☆☆', 
          text: '對自己誠實',
          detail: '喜歡的就說喜歡、討厭的就說討厭，不要看著別人決定自己的喜好。'
        },
        { 
          stars: '★★☆', 
          text: '對其他人誠實',
          detail: '不要欺騙你身邊的朋友，同時誠實表達你對他們的感受。'
        },
        { 
          stars: '★★★', 
          text: '對社會誠實',
          detail: '不要因為社會上大家怎麼做就跟著做，經過思考後才做出決定。如果想房價太貴，就去靠邀房價太貴，因為真的很貴。不要吞下去，這才叫誠實。'
        },
      ],
    },
    {
      number: '五',
      title: '答應的事就要做到',
      stars: '★★☆',
      levels: [
        { 
          stars: '★☆☆', 
          text: '不輕易做出承諾',
          detail: '週六睡到十二點才起得來就不要跟人家約十點。'
        },
        { 
          stars: '★★☆', 
          text: '盡力完成承諾',
          detail: '跟人家約十點到盡量九點五十就到'
        },
        { 
          stars: '★★★', 
          text: '做出更好的承諾',
          detail: '約定時對方如果只講中午或下午，請記得約好精確的時間(到分鐘)，以及確定的地點，讓承諾更完整可信。'
        },
      ],
    },
    {
      number: '六',
      title: '尊重微小，懷疑權威',
      stars: '★★☆',
      levels: [
        { 
          stars: '★☆☆', 
          text: '不要從比你弱的人身上牟利',
          detail: '不要欺負部屬、學生。當老闆不要凹員工的加班費。'
        },
        { 
          stars: '★★☆', 
          text: '上級在講幹話的時候嗆他',
          detail: '這有兩個好處，第一個是他下次就不會亂講幹話。第二是整天講幹話的當不成上級。'
        },
        { 
          stars: '★★★', 
          text: '看到上位者在欺負弱者時幫弱者站出來'
        },
      ],
      intro: '尊重職位年紀比你低的，你欺負他，你不知道他甚麼時候會背後捅你。反推也是。位子高的低能也不少，記得不要被馴化了。',
    },
    {
      number: '七',
      title: '不做不能說的事情，做了不要怕人說',
      stars: '★★☆',
      levels: [
        { 
          stars: '★☆☆', 
          text: '不要做不能做的事情',
          detail: '當老師上學生、勾結官員圍標、包庇論文造假等等，大家不要做這種事。'
        },
        { 
          stars: '★★☆', 
          text: '有人做了拉基事大聲的喊出來',
          detail: '「有人在論文造假喔」「有人在吃案喔」，大概是這個樣子。'
        },
        { 
          stars: '★★★', 
          text: '有人做了拉基事順手踹一腳',
          detail: '「幹，給他死。」'
        },
      ],
    },
    {
      number: '八',
      title: '工作的時候不要講幹話',
      stars: '★★☆',
      levels: [
        { 
          stars: '★☆☆', 
          text: '不要因為上級指示就發出低能公告',
          detail: '報稅系統用Mac報稅常常失敗，不要發公告說「建議跟朋友借電腦」。平常都在製造新聞，就不要以新聞道德在關鍵時刻消音加害人的姓名。不要上級只用line就去「善意」提醒媒體不能報導加害人姓名。特別是平常明明就沒在抓。'
        },
        { 
          stars: '★★☆', 
          text: '看清楚跟工作相關的法規、說明書'
        },
        { 
          stars: '★★★', 
          text: '同事上級講幹話，嗆他'
        },
      ],
    },
    {
      number: '九',
      title: '心懷戾氣，有仇必報',
      stars: '★★☆',
      levels: [
        { stars: '★☆☆', text: '當有人無因打你左臉的時候，不要忘記他打過你。' },
        { stars: '★★☆', text: '當有人無因打你左臉的時候，你就連他右臉一起打。' },
        { stars: '★★★', text: '當有人無因打其他人左臉的時候，你就一起揍他。' },
      ],
    },
    {
      number: '十',
      title: '歛聚財富跟權力',
      stars: '★★☆',
      levels: [
        { stars: '★☆☆', text: '養活自己' },
        { stars: '★★☆', text: '養好家人' },
        { stars: '★★★', text: '成為官員或是資本額大於兩千萬的企業' },
      ],
    },
    {
      number: '十一',
      title: '我不是單數',
      stars: '',
      special: true,
    },
    {
      number: '十二',
      title: '把人當人看',
      stars: '',
      special: true,
    },
  ]

  return (
    <>
      <Helmet>
        <title>法枯謁 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="本教教主於２０１４年交大吃義大利麵的時候頓悟成佛，受無上大宇宙大智慧大刺蝟的啟發，寫下此捲經書普傳世人" />
        <meta property="og:title" content="法枯謁 - 妙法無邊雷射蓮花" />
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
              法枯謁
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              信徒誡命
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
                  法枯謁
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    本教教主於<strong className="text-accent">２０１４年交大吃義大利麵的時候頓悟成佛</strong>，受無上大宇宙大智慧大刺蝟的啟發，寫下此捲經書普傳世人。
                  </p>
                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5 mt-6">
                    <p className="text-xl font-bold text-accent text-center mb-4">
                      <strong>所有的宗教都是勸人向善的，</strong> <strong>基本上就是廢話。</strong>
                    </p>
                    <p className="text-lg text-center">
                      就跟人被殺、就會死一樣。
                    </p>
                    <p className="text-lg text-center mt-3">
                      因為教主可以自由決定什麼是好事。
                    </p>
                  </div>
                  <p className="text-lg mt-6">
                    本教開宗明義，認為一個<strong className="text-accent">好的信徒應該是個守時守信、認真負責、有仇必報、落井下石、做自己的人</strong>。
                  </p>
                  <p className="text-lg">
                    台灣社會就是因為太多人太快放下、沒有補償就先原諒，導致一堆智障當到高官在台上講幹話都以為沒人會把他轟走。
                  </p>
                  <p className="text-lg">
                    一點怨氣、一點恨意、多一點執著，社會才會更美好。
                  </p>
                  <p className="text-lg">
                    有制止力的復仇使邪念卻步，如果大家不好欺負，要做壞事前大家就會考慮更多
                  </p>
                  <p className="text-lg">
                    一個沒辦法保護自己的好人只是助紂為虐、一個不能維護正義的良民只是個鄉愿而已。
                  </p>
                  <p className="text-lg mt-4">
                    本教目前沒有來世的概念，而且不相信天譴的存在。
                  </p>
                  <p className="text-lg">
                    如果碰到倒楣事千萬不要安慰自己：對方會有報應的。
                  </p>
                  <p className="text-lg">
                    報應是人手造成的，少你一隻手，就會有下個受害者。
                  </p>
                  <p className="text-xl font-bold text-accent mt-6 text-center">
                    當個凶狠的好信徒。
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Commandments Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card hover>
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-100">
                  第一章、信徒誡命
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  本教的誡命類似於Candy Crush，分為一到三星，星星少是不會怎樣啦。<br />
                  但是越多星星越能獲得宇宙大刺蝟跟靈性鵜鶘的加持。
                </p>
              </Card>
            </motion.div>

            {/* Commandments List */}
            <div className="space-y-6">
              {commandments.map((commandment, index) => (
                <motion.div
                  key={commandment.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card hover glow>
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="flex-shrink-0 text-2xl font-bold text-accent">
                        {commandment.number}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-display font-bold text-gray-100">
                            {commandment.title}
                          </h3>
                          {commandment.stars && (
                            <span className="text-accent text-xl font-bold">
                              {commandment.stars}
                            </span>
                          )}
                        </div>
                        {commandment.intro && (
                          <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                            {commandment.intro}
                          </p>
                        )}
                        {commandment.levels && (
                          <div className="space-y-4 mt-4 ml-4">
                            {commandment.levels.map((level, idx) => (
                              <div key={idx} className="space-y-1">
                                <div className="flex items-start space-x-2">
                                  <span className="text-accent font-bold">{level.stars}</span>
                                  <p className="text-gray-300 font-medium">{level.text}</p>
                                </div>
                                {level.detail && (
                                  <p className="text-gray-400 text-sm ml-6">{level.detail}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        {commandment.special && (
                          <div className="mt-4 ml-4 text-gray-300 leading-relaxed">
                            {commandment.number === '十一' && (
                              <div className="space-y-3">
                                <p className="text-lg">
                                  這條比較沒有遵守的問題。比較像是信念。<br />
                                  由於人是社會的動物，每個人都是由跟其他人的關係集合而成，才能構成本體。<br />
                                  「我」是某某人的兒子、某某的父親，是某某的員工、閨蜜、上司、朋友。<br />
                                  因此我無法單獨存在。<br />
                                  同樣的一個人的累積的成就，也必然是整個社會給予的，信徒需要認知到這一點。<br />
                                  老闆無法獨立於社會而存在、首長也無法、上司也無法。
                                </p>
                              </div>
                            )}
                            {commandment.number === '十二' && (
                              <div className="space-y-3">
                                <p className="text-lg font-bold text-accent mb-2">
                                  沒有誡命比這條更大的了。
                                </p>
                                <p className="text-lg">
                                  你想成這是黑桃大老二誡命。<br />
                                  面對問題，最終就是要把人當人看。<br />
                                  不要把小孩當寵物、戰利品來炫耀。<br />
                                  不要把爸媽當成撲滿，丟錢進去就算盡到義務。<br />
                                  不要把員工當機器，不要把女生當成走路的子宮。<br />
                                  大概是這樣。
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default DharmaDeclarationPage
