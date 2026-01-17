function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-space-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary-500 flex items-center justify-center">
                <span className="text-space-950 font-bold">雷</span>
              </div>
              <span className="text-lg font-display font-bold gradient-text">
                妙法無邊雷射蓮花
              </span>
            </div>
            <p className="text-sm text-gray-400">
              現代化修行方法<br />
              科技與靈性的完美結合
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4">快速連結</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-accent transition-colors">關於我們</a></li>
              <li><a href="/spirit-animals" className="hover:text-accent transition-colors">功德靈獸</a></li>
              <li><a href="/testimonials" className="hover:text-accent transition-colors">信徒見證</a></li>
            </ul>
          </div>

          {/* Contact/Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4">相關資訊</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>開放時間：24/7</li>
              <li>線上修行服務</li>
              <li>隨時接受新信徒</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} 妙法無邊雷射蓮花. All rights reserved.</p>
          <p className="mt-2 text-xs">This is a parody website for entertainment purposes.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
