'use client'

import WhatsAppIcon from './icons/WhatsApp'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const phoneNumber = '+254113064648' // Victor's phone number
  const message = 'Hi Victor! I found your portfolio and I\'d like to discuss a project.'
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={24} className="md:w-7 md:h-7 group-hover:rotate-12 transition-transform" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
      
      {/* Tooltip - Hidden on mobile */}
      <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
      </div>
    </motion.button>
  )
}
