'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { servicesData } from '@/lib/servicesData'

export default function ServicesPage() {
  const services = servicesData

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
              My <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Full-spectrum digital marketing and development services designed to drive measurable ROI and sustainable growth for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-primary font-heading">{service.title}</h3>
                  <p className="text-textSecondary mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1 flex-shrink-0">✓</span>
                          <span className="text-textSecondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Tools I Use:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-background rounded-full text-sm text-textSecondary">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-4 transition-all">
                      Learn More <ArrowRight size={20} />
                    </a>
                    <a href="/contact" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all">
                      Get Started <ArrowRight size={20} />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 font-heading">Ready to Grow Your Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how my services can help you achieve your digital marketing goals and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-accent">
                Book a Consultation
              </a>
              <a href="/case-studies" className="btn-outline text-white border-white hover:bg-white hover:text-primary">
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
