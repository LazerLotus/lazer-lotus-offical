import { ReactNode } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface BaseLayoutProps {
  children: ReactNode
}

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-space-950 text-gray-100">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default BaseLayout
