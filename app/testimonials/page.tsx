'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'IAMC Management Team',
      role: 'Healthcare Organization',
      company: 'IAMC Medical Center',
      testimonial: 'Victor transformed our digital presence completely. The results speak for themselves - our revenue increased by 50% in just two months. His expertise in SEO, paid ads, and web development is exceptional.',
      results: '5X ROAS, 50% Revenue Increase',
      image: '/testimonials/iamc.jpg',
      rating: 5,
    },
    {
      name: 'Madfun Xperience Team',
      role: 'Event Director',
      company: 'Madfun Xperience',
      testimonial: 'The campaign exceeded all our expectations. Victor created a viral marketing strategy that drove massive engagement and sold out our Burna Boy event. His creative approach and execution are top-tier.',
      results: '3M+ Views, 60% Ticket Sales Increase',
      image: '/testimonials/madfun.jpg',
      rating: 5,
    },
    {
      name: 'Mitchelle Ntalami',
      role: 'Entrepreneur & Influencer',
      company: 'Personal Brand',
      testimonial: 'Victor understood my vision and helped me amplify my voice authentically. The growth in my reach and engagement has been phenomenal. I highly recommend his social media management services.',
      results: '+45% Reach, +60% Engagement',
      image: '/testimonials/mitchelle.jpg',
      rating: 5,
    },
    {
      name: 'Adawnage Band',
      role: 'Band Manager',
      company: 'Music & Ministry',
      testimonial: 'Victor helped us reach more people with our worship music through strategic digital campaigns. The livestream growth and social engagement have been transformative for our ministry.',
      results: '70% Livestream Growth',
      image: '/testimonials/adawnage.jpg',
      rating: 5,
    },
  ]

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
              Client <span className="text-accent">Testimonials</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Hear from the clients I have helped achieve remarkable digital marketing results and business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <Quote className="text-accent mb-4" size={40} />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={20} />
                  ))}
                </div>

                <p className="text-lg text-textPrimary mb-6 leading-relaxed italic">
                  {testimonial.testimonial}
                </p>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-primary text-lg font-heading">{testimonial.name}</h3>
                      <p className="text-textSecondary">{testimonial.role}</p>
                      <p className="text-secondary text-sm font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 px-4 py-3 bg-accent/10 rounded-lg">
                    <p className="text-accent font-semibold text-sm">✓ {testimonial.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-background to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center text-primary mb-12 font-heading">
              Client Success By The Numbers
            </h2>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-secondary mb-2 font-display">20+</div>
                <p className="text-textSecondary">Happy Clients</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-secondary mb-2 font-display">50+</div>
                <p className="text-textSecondary">Projects Completed</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-secondary mb-2 font-display">5X</div>
                <p className="text-textSecondary">Average ROAS</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-secondary mb-2 font-display">100%</div>
                <p className="text-textSecondary">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 font-heading">Become My Next Success Story</h2>
            <p className="text-xl text-white/90 mb-8">
              Ready to achieve similar results for your business? Let's work together to create your digital success story.
            </p>
            <a href="/contact" className="btn-accent">
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
