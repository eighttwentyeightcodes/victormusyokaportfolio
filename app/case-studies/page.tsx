'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Target, Zap, ArrowRight } from 'lucide-react'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'IAMC Medical Center',
      subtitle: '50% Revenue Increase in 60 Days',
      category: 'Healthcare | Digital Marketing',
      challenge: 'IAMC Medical Center needed to increase patient bookings, improve online visibility, and establish a strong digital presence in a competitive healthcare market.',
      solution: [
        'Comprehensive website redesign with improved UX',
        'AI Search Optimization & SEO strategy',
        'Google Ads & Meta Ads campaigns',
        'Lead tracking dashboards with Power BI',
        'Content marketing & blog strategy',
      ],
      results: [
        { metric: '50%', label: 'Revenue Increase', icon: TrendingUp },
        { metric: '5X', label: 'ROAS Achieved', icon: Target },
        { metric: '75%', label: 'Organic Traffic Growth', icon: Zap },
      ],
      tools: ['Google Ads', 'Meta Ads', 'GA4', 'Power BI', 'WordPress', 'SEMrush'],
      testimonial: 'Victor transformed our digital presence completely. The results speak for themselves - our revenue increased by 50% in just two months.',
      client: 'IAMC Management Team',
      color: 'from-secondary to-accent',
    },
    {
      title: 'Madfun Xperience',
      subtitle: 'Burna Boy Event - 3M+ Profile Views & Viral Success',
      category: 'Events & Entertainment | Social Media Marketing',
      challenge: 'Drive ticket sales for a major Burna Boy concert event while building brand awareness and creating viral buzz across social media platforms.',
      solution: [
        'Multi-platform viral campaign strategy',
        'Influencer collaborations & partnerships',
        'Engaging content creation (reels, stories, posts)',
        'Targeted paid social campaigns',
        'Real-time sentiment analysis',
        'Community engagement & management',
      ],
      results: [
        { metric: '3M+', label: 'Profile Views', icon: Users },
        { metric: '60%', label: 'Ticket Sales Increase', icon: TrendingUp },
        { metric: '2X', label: 'Follower Growth', icon: Zap },
      ],
      tools: ['Instagram', 'TikTok', 'Meta Ads', 'Canva', 'CapCut', 'Analytics Tools'],
      testimonial: 'The campaign exceeded all our expectations. His creative approach and execution drove massive engagement and sold out our event.',
      client: 'Madfun Xperience Event Director',
      color: 'from-accent to-secondary',
    },
    {
      title: 'Mitchelle Ntalami',
      subtitle: 'Personal Brand Growth & Engagement',
      category: 'Personal Branding | Social Media Management',
      challenge: 'Grow personal brand reach and engagement across multiple social platforms while maintaining authentic voice and content quality.',
      solution: [
        'Multi-platform content strategy',
        'Trend-based content creation',
        'Professional photography & videography',
        'Caption writing & hashtag optimization',
        'Engagement strategy & community building',
        'Analytics & performance tracking',
      ],
      results: [
        { metric: '+45%', label: 'Monthly Reach', icon: TrendingUp },
        { metric: '+60%', label: 'Engagement Rate', icon: Users },
        { metric: '4X', label: 'Content Output', icon: Zap },
      ],
      tools: ['Instagram', 'TikTok', 'LinkedIn', 'Later', 'Lightroom', 'Analytics'],
      testimonial: 'Victor understood my vision and helped me amplify my voice authentically. The growth has been phenomenal.',
      client: 'Mitchelle Ntalami',
      color: 'from-secondary-600 to-primary',
    },
    {
      title: 'Adawnage Band',
      subtitle: 'Digital Presence & Livestream Growth',
      category: 'Music & Ministry | Digital Strategy',
      challenge: 'Establish a strong digital presence for Adawnage Band, grow livestream viewership, and expand audience reach for worship music content.',
      solution: [
        'Brand identity development',
        'YouTube & social media strategy',
        'Livestream optimization',
        'Content calendar planning',
        'Cross-platform promotion',
        'Audience analytics & insights',
      ],
      results: [
        { metric: '70%', label: 'Livestream Growth', icon: Users },
        { metric: '3X', label: 'Social Engagement', icon: TrendingUp },
        { metric: '50K+', label: 'New Followers', icon: Zap },
      ],
      tools: ['YouTube', 'Instagram', 'Facebook', 'StreamYard', 'Canva'],
      testimonial: 'Victor helped us reach more people with our music ministry. The digital strategy has been transformative for our mission.',
      client: 'Adawnage Band Manager',
      color: 'from-primary to-accent-600',
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
              Case <span className="text-accent">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Real results from real clients. See how data-driven strategies and creative execution drive measurable business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${study.color} p-8 md:p-12 text-white`}>
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                    {study.category}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-3 font-heading">{study.title}</h2>
                  <p className="text-2xl text-white/90">{study.subtitle}</p>
                </div>

                <div className="p-8 md:p-12">
                  {/* Challenge */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-4 font-heading">The Challenge</h3>
                    <p className="text-lg text-textSecondary leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-4 font-heading">The Solution</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {study.solution.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1 flex-shrink-0">✓</span>
                          <span className="text-textSecondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-6 font-heading">The Results</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {study.results.map((result, i) => {
                        const Icon = result.icon
                        return (
                          <div key={i} className="text-center p-6 bg-background rounded-2xl">
                            <Icon className="text-secondary mx-auto mb-3" size={32} />
                            <div className="text-5xl font-bold text-secondary mb-2 font-display">{result.metric}</div>
                            <div className="text-textSecondary">{result.label}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-primary mb-4 font-heading">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.tools.map((tool, i) => (
                        <span key={i} className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-background to-white p-6 border-l-4 border-accent">
                    <p className="text-lg text-textPrimary italic mb-3">"{study.testimonial}"</p>
                    <p className="text-secondary font-semibold">— {study.client}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6 font-heading">Ready for Similar Results?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a custom strategy tailored to your business goals and drive measurable growth.
            </p>
            <a href="/contact" className="btn-accent inline-flex items-center gap-2">
              Start Your Project <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
