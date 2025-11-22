'use client'

import { useState, useEffect } from 'react'

interface TypingEffectProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  cursorClassName?: string
}

export default function TypingEffect({ 
  text, 
  speed = 50, 
  delay = 0,
  className = '',
  cursorClassName = ''
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Initial delay before starting typing
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, speed)

        return () => clearTimeout(timeout)
      } else {
        setIsComplete(true)
      }
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [currentIndex, text, speed, delay])

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={className}>
      {displayedText}
      <span 
        className={`inline-block w-0.5 h-5 md:h-7 ml-1 ${cursorClassName} ${
          showCursor ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-100`}
        style={{ 
          backgroundColor: 'currentColor',
          verticalAlign: 'middle'
        }}
      />
    </span>
  )
}
