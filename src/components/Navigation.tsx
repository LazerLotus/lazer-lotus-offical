import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface NavItem {
  label: string
  path?: string
  key: string
  subItems?: NavItem[]
}

const navItems: NavItem[] = [
  {
    label: '了解妙雷',
    path: '/understanding-teachings',
    key: 'about',
    subItems: [
      { label: '本教宗旨', path: '/religious-principles', key: 'principles' },
      { label: '雷射蓮花', path: '/lazer-lotus', key: 'lazer-lotus' },
      { label: '雷射師父', path: '/lazer-master', key: 'lazer-master' },
    ],
  },
  {
    label: '功德靈獸',
    path: '/spirit-animals',
    key: 'animals',
    subItems: [
      { label: '靈性猴', path: '/spiritual-monkey', key: 'monkey' },
      { label: '大宇宙大智慧大刺蝟', path: '/great-universe-hedgehog', key: 'hedgehog' },
      { label: '靈性鵜鶘', path: '/spiritual-pelican', key: 'pelican' },
    ],
  },
  { label: '婚禮儀式', path: '/wedding', key: 'wedding' },
  { label: '手搖杯改運法', path: '/bubble-tea', key: 'bubble-tea' },
  { label: '法枯謁', path: '/dharma', key: 'dharma' },
  { label: '了凡視訊', path: '/video', key: 'video' },
  { label: '信徒見證', path: '/testimonials', key: 'testimonials' },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null)

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
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.subItems && setOpenSubmenu(item.key)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className="text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>{item.label}</span>
                    {item.subItems && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                ) : (
                  <span className="text-sm font-medium text-gray-300 flex items-center space-x-1">
                    <span>{item.label}</span>
                    {item.subItems && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                )}
                
                {/* Submenu Dropdown */}
                {item.subItems && openSubmenu === item.key && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 glass-card rounded-lg shadow-xl border border-white/20 overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          to={subItem.path!}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-accent hover:bg-white/5 transition-colors duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
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
                <div key={item.key}>
                  <div className="flex items-center justify-between">
                    {item.path ? (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="flex-1 block px-4 py-2 text-sm font-medium text-gray-300 hover:text-accent hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="flex-1 block px-4 py-2 text-sm font-medium text-gray-300">
                        {item.label}
                      </span>
                    )}
                    
                    {/* Expand/Collapse Button */}
                    {item.subItems && (
                      <button
                        onClick={() => setExpandedSubmenu(expandedSubmenu === item.key ? null : item.key)}
                        className="px-2 py-2 text-gray-400 hover:text-accent transition-colors"
                        aria-label={expandedSubmenu === item.key ? 'Collapse submenu' : 'Expand submenu'}
                      >
                        <motion.svg
                          animate={{ rotate: expandedSubmenu === item.key ? 180 : 0 }}
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Submenu - Expandable */}
                  {item.subItems && (
                    <AnimatePresence>
                      {expandedSubmenu === item.key && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-1 space-y-1 overflow-hidden"
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.key}
                              to={subItem.path!}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-accent hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
