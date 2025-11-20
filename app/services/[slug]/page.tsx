'use client'

import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { getServiceBySlug } from '@/lib/servicesData'

export default function ServicePage() {
  const params = useParams()
  const slug = params.slug as string
  const service = getServiceBySlug(slug)

  if (!service) {
    return <div>Service not found</div>
  }

  const Icon = service.icon

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className={`pt-32 pb-24 bg-gradient-to-br ${service.color} text-white`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Icon size={40} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading">{service.title}</h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-accent">
                Get Started <ArrowRight size={20} className="inline ml-2" />
              </a>
              <a href="/case-studies" className="btn-outline text-white border-white hover:bg-white hover:text-primary">
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6 font-heading">Overview</h2>
              <p className="text-lg text-textSecondary leading-relaxed">
                {service.longDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6 font-heading">What's Included</h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary flex-shrink-0 mt-0.5" size={24} />
                    <span className="text-textSecondary text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6 font-heading">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={24} />
                    <span className="text-textSecondary text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8 text-center font-heading">My Process</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      {index + 1}
                    </div>
                    <p className="text-textSecondary font-semibold">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6 font-heading">Tools & Technologies</h2>
              <p className="text-textSecondary mb-8">I use industry-leading tools to deliver the best results</p>
              <div className="flex flex-wrap justify-center gap-3">
                {service.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-white rounded-full text-textPrimary font-semibold shadow-sm border border-gray-100"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-4 font-heading">Ready to Get Started?</h2>
            <p className="text-2xl font-semibold text-accent mb-6">{service.pricing}</p>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your project and create a customized plan that fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-accent inline-flex items-center justify-center gap-2">
                Book a Free Consultation <ArrowRight size={20} />
              </a>
              <a href="/services" className="btn-outline text-white border-white hover:bg-white hover:text-primary">
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
