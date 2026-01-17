import { ReactNode, ButtonHTMLAttributes } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const variants = {
  primary: 'bg-gradient-to-r from-accent to-primary-500 text-space-950 font-semibold hover:shadow-lg hover:shadow-accent/50',
  secondary: 'bg-space-800 text-gray-100 hover:bg-space-700 border border-white/20',
  outline: 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10',
  ghost: 'bg-transparent text-gray-300 hover:text-accent hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'btn-base rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center'
  const variantClasses = variants[variant]
  const sizeClasses = sizes[size]
  const widthClasses = fullWidth ? 'w-full' : ''

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${widthClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
