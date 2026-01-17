import { ReactNode, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface BaseLayoutProps {
  children: ReactNode
}

function BaseLayout({ children }: BaseLayoutProps) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check system preference and set initial theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)
    document.documentElement.classList.toggle('dark', prefersDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
  }

  return (
    <div className="min-h-screen flex flex-col bg-space-950 text-gray-100">
      <Navigation onThemeToggle={toggleTheme} isDark={isDark} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default BaseLayout
