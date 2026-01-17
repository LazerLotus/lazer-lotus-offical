import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: '了解妙雷', path: '/', key: 'about' },
  { label: '功德靈獸', path: '/spirit-animals', key: 'animals' },
  { label: '婚禮儀式', path: '/wedding', key: 'wedding' },
  { label: '手搖杯改運法', path: '/bubble-tea', key: 'bubble-tea' },
  { label: '法枯謁', path: '/dharma', key: 'dharma' },
  { label: '了凡視訊', path: '/video', key: 'video' },
  { label: '信徒見證', path: '/testimonials', key: 'testimonials' },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary-500 flex items-center justify-center">
              <span className="text-space-950 font-bold text-lg">雷</span>
            </div>
            <span className="text-xl lg:text-2xl font-display font-bold gradient-text hidden sm:block">
              妙法無邊雷射蓮花
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-space-950/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-accent hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
