import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

function Card({ children, className = '', hover = true, glow = false }: CardProps) {
  const baseClasses = 'glass-card p-6 rounded-2xl'
  const hoverClasses = hover ? 'transition-transform duration-300 hover:scale-105' : ''
  const glowClasses = glow ? 'shadow-lg shadow-accent/20' : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseClasses} ${hoverClasses} ${glowClasses} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
