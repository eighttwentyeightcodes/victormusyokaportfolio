'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { servicesData } from '@/lib/servicesData'
import { navigationData } from '@/lib/navData'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeAllDropdowns = () => {
    setOpenDropdown(null)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary/30">
              <img 
                src="/IMG_0399.jpeg" 
                alt="Victor Musyoka" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold font-heading ${isScrolled ? 'text-primary' : 'text-white'}`}>
                Victor Musyoka
              </span>
              <span className={`text-xs ${isScrolled ? 'text-textSecondary' : 'text-white/80'}`}>
                Digital Marketing Analyst
              </span>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationData.map((navItem, index) => {
              // Special handling for Services to show service-specific dropdown
              if (navItem.name === 'Services') {
                return (
                  <motion.div
                    key={navItem.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown('Services')}
                    onMouseLeave={closeAllDropdowns}
                  >
                    <button
                      className={`font-medium transition-colors inline-flex items-center gap-1 ${
                        isScrolled ? 'text-textPrimary hover:text-secondary' : 'text-white hover:text-accent'
                      }`}
                    >
                      {navItem.name}
                      <ChevronDown size={16} className={`transition-transform ${openDropdown === 'Services' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === 'Services' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50"
                        >
                          <Link
                            href="/services"
                            className="block px-4 py-2 text-textPrimary hover:bg-secondary/10 hover:text-secondary font-semibold border-b border-gray-100 mb-2"
                            onClick={closeAllDropdowns}
                          >
                            View All Services
                          </Link>
                          {servicesData.map((service) => {
                            const ServiceIcon = service.icon
                            return (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="flex items-start gap-3 px-4 py-3 text-textPrimary hover:bg-secondary/10 hover:text-secondary transition-colors"
                                onClick={closeAllDropdowns}
                              >
                                <ServiceIcon size={20} className="flex-shrink-0 mt-0.5 text-secondary" />
                                <div>
                                  <div className="font-semibold text-sm">{service.title}</div>
                                  <div className="text-xs text-textSecondary line-clamp-1">{service.description}</div>
                                </div>
                              </Link>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              }
              
              // Dropdown menu for other items
              if (navItem.hasDropdown && navItem.dropdownItems) {
                return (
                  <motion.div
                    key={navItem.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(navItem.name)}
                    onMouseLeave={closeAllDropdowns}
                  >
                    <button
                      className={`font-medium transition-colors inline-flex items-center gap-1 ${
                        isScrolled ? 'text-textPrimary hover:text-secondary' : 'text-white hover:text-accent'
                      }`}
                    >
                      {navItem.name}
                      <ChevronDown size={16} className={`transition-transform ${openDropdown === navItem.name ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === navItem.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50"
                        >
                          {navItem.dropdownItems.map((item) => {
                            const ItemIcon = item.icon
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-start gap-3 px-4 py-3 text-textPrimary hover:bg-secondary/10 hover:text-secondary transition-colors"
                                onClick={closeAllDropdowns}
                              >
                                {ItemIcon && <ItemIcon size={20} className="flex-shrink-0 mt-0.5 text-secondary" />}
                                <div>
                                  <div className="font-semibold text-sm">{item.name}</div>
                                  {item.description && (
                                    <div className="text-xs text-textSecondary line-clamp-1">{item.description}</div>
                                  )}
                                </div>
                              </Link>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              }
              
              // Regular link without dropdown
              return (
                <motion.a
                  key={navItem.name}
                  href={navItem.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-textPrimary hover:text-secondary' : 'text-white hover:text-accent'
                  }`}
                >
                  {navItem.name}
                </motion.a>
              )
            })}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="btn-primary"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navigationData.map((navItem) => {
                  // Services dropdown in mobile
                  if (navItem.name === 'Services') {
                    return (
                      <div key={navItem.name}>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === 'Services' ? null : 'Services')}
                          className="text-textPrimary hover:text-secondary font-medium py-2 w-full text-left inline-flex items-center justify-between"
                        >
                          {navItem.name}
                          <ChevronDown size={16} className={`transition-transform ${openDropdown === 'Services' ? 'rotate-180' : ''}`} />
                        </button>
                        {openDropdown === 'Services' && (
                          <div className="pl-4 mt-2 space-y-2 border-l-2 border-secondary/20">
                            <Link
                              href="/services"
                              className="block text-textSecondary hover:text-secondary text-sm py-1.5 font-semibold"
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                closeAllDropdowns()
                              }}
                            >
                              View All Services
                            </Link>
                            {servicesData.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="block text-textSecondary hover:text-secondary text-sm py-1.5"
                                onClick={() => {
                                  setIsMobileMenuOpen(false)
                                  closeAllDropdowns()
                                }}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }
                  
                  // Other nav items with dropdowns
                  if (navItem.hasDropdown && navItem.dropdownItems) {
                    return (
                      <div key={navItem.name}>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === navItem.name ? null : navItem.name)}
                          className="text-textPrimary hover:text-secondary font-medium py-2 w-full text-left inline-flex items-center justify-between"
                        >
                          {navItem.name}
                          <ChevronDown size={16} className={`transition-transform ${openDropdown === navItem.name ? 'rotate-180' : ''}`} />
                        </button>
                        {openDropdown === navItem.name && (
                          <div className="pl-4 mt-2 space-y-2 border-l-2 border-secondary/20">
                            {navItem.dropdownItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block text-textSecondary hover:text-secondary text-sm py-1.5"
                                onClick={() => {
                                  setIsMobileMenuOpen(false)
                                  closeAllDropdowns()
                                }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }
                  
                  // Regular links without dropdown
                  return (
                    <Link
                      key={navItem.name}
                      href={navItem.href}
                      className="text-textPrimary hover:text-secondary font-medium py-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        closeAllDropdowns()
                      }}
                    >
                      {navItem.name}
                    </Link>
                  )
                })}
                <a href="/contact" className="btn-primary w-full text-center">
                  Contact Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
