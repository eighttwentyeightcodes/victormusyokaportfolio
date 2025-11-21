import React from 'react'

export default function DiscoveryCallButton({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  }
  return (
    <a
      href="tel:+254113064648"
      className={`${sizes[size]} inline-flex items-center justify-center rounded-full font-semibold bg-secondary text-white hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}
    >
      Discovery Call
    </a>
  )
}
