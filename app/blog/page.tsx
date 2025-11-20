'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const blogPosts = [
    {
      title: '10 SEO Strategies That Actually Work in 2024',
      excerpt: 'Discover the latest SEO techniques including AI search optimization, E-E-A-T principles, and how to rank in the age of ChatGPT and Google SGE.',
      category: 'SEO',
      date: 'Nov 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800',
    },
    {
      title: 'How I Achieved 5X ROAS for a Healthcare Client',
      excerpt: 'A detailed breakdown of the strategy, tactics, and tools I used to deliver exceptional ROI for IAMC Medical Center in just 60 days.',
      category: 'Case Study',
      date: 'Nov 10, 2024',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
    {
      title: 'The Ultimate Guide to Creating Viral Social Media Content',
      excerpt: 'Learn the exact framework I used to generate 3M+ profile views for an event campaign and how you can replicate this success.',
      category: 'Social Media',
      date: 'Nov 5, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    },
    {
      title: 'Web Design Trends That Convert in 2024',
      excerpt: 'Modern web design principles focused on conversion optimization, user experience, and performance that drive real business results.',
      category: 'Web Development',
      date: 'Oct 28, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
    },
    {
      title: 'Google Analytics 4: Complete Setup Guide',
      excerpt: 'Step-by-step tutorial on setting up GA4, configuring custom events, and creating dashboards that provide actionable insights.',
      category: 'Analytics',
      date: 'Oct 20, 2024',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    },
    {
      title: 'Paid Ads Strategy: Google vs Meta in 2024',
      excerpt: 'Comprehensive comparison of Google Ads and Meta Ads platforms, when to use each, and how to maximize ROI across both channels.',
      category: 'Paid Ads',
      date: 'Oct 12, 2024',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800',
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
              Blog & <span className="text-accent">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Digital marketing strategies, case studies, and industry insights to help you grow your business online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{backgroundImage: `url(${post.image})`}}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-secondary text-white rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-textSecondary mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-primary mb-3 font-heading group-hover:text-secondary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-textSecondary mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-secondary font-semibold group-hover:gap-4 transition-all">
                    Read More <ArrowRight size={16} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 font-heading">Stay Updated</h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest digital marketing insights, strategies, and case studies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full text-textPrimary"
              />
              <button className="btn-accent whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
