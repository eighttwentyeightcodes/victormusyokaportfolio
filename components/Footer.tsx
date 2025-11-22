'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react'
import Link from 'next/link'
import { servicesData } from '@/lib/servicesData'
import DiscoveryCallButton from './DiscoveryCallButton'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Resume', href: '/resume' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      'Digital Marketing Strategy',
      'SEO & AI Search Optimization',
      'Social Media Management',
      'Web Design & Development',
      'Data Analytics & Reporting',
    ],
  }

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                <img 
                  src="/IMG_0399.jpeg" 
                  alt="Victor Musyoka" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading">Victor Musyoka</h3>
                <p className="text-white/70 text-sm">Digital Marketing Analyst</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Data-driven digital marketer and web developer helping brands achieve measurable growth through strategic SEO, content marketing, and conversion-focused web design.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:victormusyoka003@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Mail size={18} />
                <span>victormusyoka003@gmail.com</span>
              </a>
              <a href="tel:+254113064648" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Phone size={18} />
                <span>+254 113064648</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin size={18} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Services</h4>
            <ul className="space-y-2">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-white/70 hover:text-accent transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links and Call To Action */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Victor Musyoka. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="http://linkedin.com/in/victor-musyoka" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/eighttwentyeightcodes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.instagram.com/fmdafrica?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <DiscoveryCallButton size="sm" className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
