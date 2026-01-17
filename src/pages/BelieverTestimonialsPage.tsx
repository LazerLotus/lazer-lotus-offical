import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Card from '../components/Card'

function BelieverTestimonialsPage() {
  // Helper function to render stars (filled + empty = 5 total)
  const renderStars = (rating: number) => {
    const filled = '★'
    const empty = '☆'
    return filled.repeat(rating) + empty.repeat(5 - rating)
  }

  // Mock testimonial cards template for future use
  const testimonialTemplate = {
    name: '信徒姓名',
    date: '2024年',
    content: '在此輸入信徒見證內容...',
    rating: 5, // 1-5 stars
    image: '/images/testimonial-placeholder.jpg', // Placeholder path for profile image
    contentImages: ['/images/testimony-photo-1.jpg'], // Array of images to show in content
  }

  return (
    <>
      <Helmet>
        <title>信徒見證 - 妙法無邊雷射蓮花</title>
        <meta name="description" content="妙雷宗信徒的見證與分享" />
        <meta property="og:title" content="信徒見證 - 妙法無邊雷射蓮花" />
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
              信徒見證
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              分享您的修行體驗
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Email Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card hover glow>
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-100">
                  分享您的見證
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    如果您想分享修行妙雷的體驗與見證，歡迎與我們聯繫：
                  </p>
                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5 mt-6 text-center">
                    <p className="text-xl font-semibold text-accent mb-3">
                      📧 聯絡信箱
                    </p>
                    <a
                      href="mailto:magiclazerlotus@gmail.com"
                      className="text-2xl font-bold text-accent hover:text-accent-light transition-colors break-all"
                    >
                      magiclazerlotus@gmail.com
                    </a>
                    <p className="text-sm text-gray-400 mt-4">
                      歡迎信徒投稿見證，經審核後會刊登在此頁面
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Testimonials Grid - Template for future use */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-100 text-center">
                  信徒見證
                </h2>
                <p className="text-gray-400 text-center mb-8">
                  目前尚無見證，歡迎信徒投稿分享您的修行體驗
                </p>
              </div>

              {/* Mock testimonial card template - can be replaced with actual testimonials later */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-50">
                <Card hover className="relative">
                  <div className="absolute top-4 right-4 text-accent font-bold text-lg">
                    {renderStars(testimonialTemplate.rating)}
                  </div>
                  <div className="pr-20">
                    <div className="flex items-start space-x-4 mb-4">
                      {/* Image placeholder */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-700 border-2 border-accent/30 flex items-center justify-center overflow-hidden">
                        <span className="text-gray-500 text-2xl">📷</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-100 mb-1">
                          {testimonialTemplate.name}
                        </h3>
                        <p className="text-sm text-gray-400">{testimonialTemplate.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic leading-relaxed mb-4">
                      "{testimonialTemplate.content}"
                    </p>
                    {/* Content images placeholder */}
                    {testimonialTemplate.contentImages && testimonialTemplate.contentImages.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {testimonialTemplate.contentImages.map((_img, idx) => (
                          <div
                            key={idx}
                            className="w-full aspect-video bg-gray-800 border border-accent/30 rounded-lg flex items-center justify-center overflow-hidden"
                          >
                            <span className="text-gray-600 text-sm">見證照片 {idx + 1}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>

                <Card hover className="relative">
                  <div className="absolute top-4 right-4 text-accent font-bold text-lg">
                    {renderStars(4)}
                  </div>
                  <div className="pr-20">
                    <div className="flex items-start space-x-4 mb-4">
                      {/* Image placeholder */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-700 border-2 border-accent/30 flex items-center justify-center overflow-hidden">
                        <span className="text-gray-500 text-2xl">📷</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-100 mb-1">
                          {testimonialTemplate.name}
                        </h3>
                        <p className="text-sm text-gray-400">{testimonialTemplate.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic leading-relaxed mb-4">
                      "{testimonialTemplate.content}"
                    </p>
                    {/* Content images placeholder */}
                    {testimonialTemplate.contentImages && testimonialTemplate.contentImages.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {testimonialTemplate.contentImages.map((_img, idx) => (
                          <div
                            key={idx}
                            className="w-full aspect-video bg-gray-800 border border-accent/30 rounded-lg flex items-center justify-center overflow-hidden"
                          >
                            <span className="text-gray-600 text-sm">見證照片 {idx + 1}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </div>

              <p className="text-center text-sm text-gray-500 mt-8 italic">
                * 此為模板範例，實際見證將於收到信徒投稿後更新
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

export default BelieverTestimonialsPage
