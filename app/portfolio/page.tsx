'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Code, Camera, BarChart3, ArrowRight } from 'lucide-react'

export default function PortfolioPage() {
  const portfolioCategories = [
    {
      title: 'Web Development',
      icon: Code,
      color: 'from-secondary to-secondary-600',
      projects: [
        {
          name: 'IAMC Medical Center Website',
          description: 'Complete website redesign with improved UX, lead generation forms, and conversion optimization',
          tech: ['Next.js', 'React', 'Tailwind CSS', 'WordPress'],
          impact: '75% increase in organic traffic, 50% revenue growth',
        },
        {
          name: 'E-commerce Solutions',
          description: 'Custom e-commerce platforms with payment integration and inventory management',
          tech: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
          impact: 'Conversion rate optimization, seamless checkout experience',
        },
        {
          name: 'Landing Pages',
          description: 'High-converting landing pages for marketing campaigns and lead generation',
          tech: ['Webflow', 'HTML/CSS', 'JavaScript', 'Analytics'],
          impact: 'Average 35% conversion rate across campaigns',
        },
      ],
    },
    {
      title: 'Content Creation',
      icon: Camera,
      color: 'from-accent to-accent-600',
      projects: [
        {
          name: 'Social Media Content',
          description: 'Professional photography, reels, and short-form video content for brands',
          tech: ['Photography', 'Videography', 'CapCut', 'Lightroom'],
          impact: '3M+ views, viral content for Madfun Xperience event',
        },
        {
          name: 'Product Photography',
          description: 'High-quality product shoots for e-commerce and marketing materials',
          tech: ['Studio Photography', 'Photo Editing', 'Retouching'],
          impact: 'Enhanced product presentation, increased sales',
        },
        {
          name: 'Campaign Visuals',
          description: 'Creative direction and visual content for digital marketing campaigns',
          tech: ['Canva', 'Adobe Suite', 'Figma'],
          impact: 'Consistent brand identity, engaging visual storytelling',
        },
      ],
    },
    {
      title: 'Marketing Dashboards & Analytics',
      icon: BarChart3,
      color: 'from-secondary-600 to-primary',
      projects: [
        {
          name: 'Power BI Dashboards',
          description: 'Custom analytics dashboards for tracking KPIs, conversions, and ROI',
          tech: ['Power BI', 'Google Analytics', 'Data Visualization'],
          impact: 'Real-time performance insights, data-driven decisions',
        },
        {
          name: 'GA4 Setup & Configuration',
          description: 'Complete Google Analytics 4 setup with custom events and conversion tracking',
          tech: ['Google Analytics 4', 'Google Tag Manager', 'GTM'],
          impact: 'Comprehensive tracking, improved attribution',
        },
        {
          name: 'SEO Performance Reports',
          description: 'Monthly SEO reports with keyword rankings, traffic analysis, and recommendations',
          tech: ['SEMrush', 'Ahrefs', 'Google Search Console', 'Looker Studio'],
          impact: 'Clear ROI tracking, actionable insights',
        },
      ],
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
              My <span className="text-accent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              A showcase of web development projects, content creation, and data analytics work that delivers measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Categories */}
      {portfolioCategories.map((category, catIndex) => {
        const Icon = category.icon
        return (
          <section key={category.title} className={catIndex % 2 === 0 ? 'py-24 bg-white' : 'py-24 bg-background'}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-12"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-primary font-heading">{category.title}</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.projects.map((project, index) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="card hover:scale-105 transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-primary mb-3 font-heading">{project.name}</h3>
                      <p className="text-textSecondary mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-primary mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-background rounded text-xs text-textSecondary">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-secondary font-semibold">✓ {project.impact}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 font-heading">Let's Build Something Amazing</h2>
            <p className="text-xl text-white/90 mb-8">
              Ready to start your next project? Let's discuss how I can help bring your vision to life.
            </p>
            <a href="/contact" className="btn-accent inline-flex items-center gap-2">
              Start a Project <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
