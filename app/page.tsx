'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Award, FileText, BookOpen, MessageSquare, FolderOpen, User } from 'lucide-react'

export default function Home() {
  const sections = [
    {
      title: 'About Me',
      description: 'Learn about my journey, skills, and professional philosophy',
      icon: User,
      href: '/about',
      color: 'bg-accent',
    },
    {
      title: 'Services',
      description: 'Explore the digital marketing and web development services I offer',
      icon: Briefcase,
      href: '/services',
      color: 'bg-secondary',
    },
    {
      title: 'Case Studies',
      description: 'See how I helped brands achieve measurable growth',
      icon: Award,
      href: '/case-studies',
      color: 'bg-accent',
    },
    {
      title: 'Portfolio',
      description: 'Browse my latest projects and client work',
      icon: FolderOpen,
      href: '/portfolio',
      color: 'bg-secondary',
    },
    {
      title: 'Resume',
      description: 'View my complete professional experience and credentials',
      icon: FileText,
      href: '/resume',
      color: 'bg-accent',
    },
    {
      title: 'Blog',
      description: 'Read insights on digital marketing, SEO, and web development',
      icon: BookOpen,
      href: '/blog',
      color: 'bg-secondary',
    },
    {
      title: 'Testimonials',
      description: 'Hear what clients say about working with me',
      icon: MessageSquare,
      href: '/testimonials',
      color: 'bg-accent',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Quick Access Sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Explore My Portfolio</h2>
            <p className="text-xl text-textSecondary max-w-3xl mx-auto">
              Discover my work, expertise, and how I can help your business grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.a
                  key={section.title}
                  href={section.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group card hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${section.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 font-heading">
                    {section.title}
                  </h3>
                  <p className="text-textSecondary mb-4">
                    {section.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all">
                    Explore <ArrowRight size={20} />
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss how I can help you achieve your digital marketing goals and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-accent inline-flex items-center justify-center gap-2">
                Get In Touch <ArrowRight size={20} />
              </a>
              <a href="/case-studies" className="btn-outline text-white border-white hover:bg-white hover:text-primary inline-flex items-center justify-center gap-2">
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
