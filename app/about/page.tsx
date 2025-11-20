'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Award, Target, Zap, Users, TrendingUp, Code } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const skills = [
    { name: 'SEO & AI Search Optimization', level: 95, icon: TrendingUp, color: 'bg-secondary' },
    { name: 'Digital Marketing Strategy', level: 90, icon: Target, color: 'bg-accent' },
    { name: 'Web Development', level: 85, icon: Code, color: 'bg-secondary' },
    { name: 'Data Analytics (GA4, Power BI)', level: 90, icon: Zap, color: 'bg-accent' },
    { name: 'Paid Ads (Google & Meta)', level: 88, icon: Users, color: 'bg-secondary' },
    { name: 'Content Creation & Strategy', level: 92, icon: Award, color: 'bg-accent' },
  ]

  const timeline = [
    {
      year: 'Jan 2025 - Present',
      role: 'Digital Marketing Executive & Web Developer',
      company: 'Implant & Aesthetic Medical Center',
      achievements: ['50% revenue increase in 2 months', '5X ROAS achieved', '75% organic traffic increase'],
    },
    {
      year: 'Jan 2025 - Feb 2025',
      role: 'Digital Marketing/SMM Strategist',
      company: 'Madfun Xperience (Burna Boy Event)',
      achievements: ['3M+ profile views in one month', 'Doubled Instagram followers (6K to 12K)', '60% ticket sales increase'],
    },
    {
      year: 'May 2024 - Dec 2024',
      role: 'Content Creator & Social Media Manager',
      company: 'Mitchelle Ntalami',
      achievements: ['45% growth in monthly reach', '60% boost in audience engagement', 'Multi-platform content strategy'],
    },
    {
      year: 'Feb 2022 - April 2024',
      role: 'Digital Content Associate',
      company: 'Adawnage Band',
      achievements: ['70% growth in livestream viewership', 'Brand identity management', 'Event digital planning'],
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
              About <span className="text-accent">Me</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Data-driven Digital Marketing Specialist and Certified Data Scientist with over 3 years of experience transforming insights into actionable strategies that generate leads, drive revenue, and grow communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Bio with Photo */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Circular Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-secondary/20">
                  <Image
                    src="/victor-professional-1.jpg"
                    alt="Victor Musyoka - Professional Portrait"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Bio Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1"
              >
                <h2 className="section-title">Who I Am</h2>
                <p className="text-lg text-textSecondary leading-relaxed mb-6">
                  I'm a <strong>Data-driven Digital Marketing Specialist</strong> and <strong>Certified Data Scientist</strong> with over 3 years of experience in Digital strategy, Business Process Automation, Web Development, SEO, AI Search Optimization, Content Creation, Content Marketing, Paid Media, Conversion Optimization and Analytics & Reporting.
                </p>
                <p className="text-lg text-textSecondary leading-relaxed mb-6">
                  I have a proven track record of building brand strategy, awareness, visibility, and delivering high ROI through strategic campaigns across social media, web, and AI search engines. My achievements include <strong className="text-secondary">5X ROAS</strong>, <strong className="text-secondary">75% organic traffic increases</strong>, <strong className="text-secondary">50% revenue growth</strong>, and <strong className="text-secondary">3M+ profile views</strong> in just 30 days.
                </p>
                <p className="text-lg text-textSecondary leading-relaxed">
                  I hold a <strong>Bachelor of Science in Wildlife Conservation & Enterprise Management</strong> from Chuka University, and certifications from <strong>ALX Africa (Data Science)</strong>, <strong>Google Digital Marketing & E-commerce</strong>, and <strong>HubSpot SEO/Digital Marketing</strong>. I'm passionate about transforming insights into actionable strategies that generate leads, drive revenue, and grow communities.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">My Philosophy</h2>
              <p className="text-xl text-textSecondary">The principles that drive my work</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Data-Driven', description: 'Every decision backed by analytics and insights' },
                { title: 'Storytelling', description: 'Compelling narratives that resonate with audiences' },
                { title: 'Growth Mindset', description: 'Continuous learning and adaptation' },
                { title: 'AI-Integrated', description: 'Leveraging AI for marketing excellence' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <h3 className="text-xl font-bold mb-3 text-primary font-heading">{item.title}</h3>
                  <p className="text-textSecondary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Breakdown */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Skills & Expertise</h2>
              <p className="text-xl text-textSecondary">What I bring to the table</p>
            </motion.div>

            <div className="space-y-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 rounded-lg ${skill.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-primary">{skill.name}</span>
                        <span className="text-textSecondary font-display">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full ${skill.color} rounded-full`}
                        />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-background to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Experience Timeline</h2>
              <p className="text-xl text-textSecondary">My professional journey</p>
            </motion.div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-8"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-secondary font-display">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="w-4 h-4 bg-accent rounded-full mt-2"></div>
                    {index !== timeline.length - 1 && (
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-accent/30"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-12">
                    <h3 className="text-2xl font-bold text-primary mb-1 font-heading">{item.role}</h3>
                    <p className="text-lg text-secondary mb-4">{item.company}</p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span className="text-textSecondary">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CV */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 font-heading">Want to Know More?</h2>
            <p className="text-xl text-white/90 mb-8">
              Download my full CV for a comprehensive overview of my experience, education, and certifications.
            </p>
            <a href="/victor-musyoka-cv.pdf" download className="btn-accent inline-block">
              Download CV (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
