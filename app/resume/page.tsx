'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Download, Briefcase, GraduationCap, Award, Wrench } from 'lucide-react'

export default function ResumePage() {
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
              My <span className="text-accent">Resume</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Digital Marketing Analyst with over 3 years of experience delivering high ROI through strategic campaigns.
            </p>
            <a href="/victor-musyoka-cv.pdf" download className="btn-accent inline-flex items-center gap-2">
              <Download size={20} />
              Download Full CV (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h2 className="text-4xl font-bold text-primary font-heading">Experience</h2>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-accent pl-6 pb-6">
                  <span className="text-secondary font-semibold">Jan 2025 - Present</span>
                  <h3 className="text-2xl font-bold text-primary mt-2 font-heading">Digital Marketing Executive & Web Developer</h3>
                  <p className="text-lg text-textSecondary mb-3">Implant & Aesthetic Medical Center</p>
                  <ul className="space-y-2 text-textSecondary">
                    <li>• Converted 30+ patients in the first 2 months, contributing over 50% increase in revenue</li>
                    <li>• Designed and managed clinic website (UI/UX improvements, SEO, and blog integration)</li>
                    <li>• Executed paid ad campaigns with 5X ROAS, improved organic traffic by 75% through SEO</li>
                    <li>• Created and executed end to end organic online and offline content strategies</li>
                    <li>• Produced analytic dashboards for lead tracking and conversion analysis</li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-6 pb-6">
                  <span className="text-secondary font-semibold">Jan 2025 - Feb 2025</span>
                  <h3 className="text-2xl font-bold text-primary mt-2 font-heading">Digital Marketing/SMM Strategist</h3>
                  <p className="text-lg text-textSecondary mb-3">Madfun Xperience (Burna Boy in Kenya Event)</p>
                  <ul className="space-y-2 text-textSecondary">
                    <li>• Doubled Instagram followers from 6K to 12K and achieved over 3 million profile views in one month</li>
                    <li>• Directed viral campaigns and influencer collaborations targeting Gen Z and youth engagement</li>
                    <li>• Conducted sentiment analysis and campaign reporting to inform event marketing</li>
                    <li>• Increased ticket sales by 60% through strategic content bursts and audience retargeting</li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-6 pb-6">
                  <span className="text-secondary font-semibold">May 2024 - Dec 2024</span>
                  <h3 className="text-2xl font-bold text-primary mt-2 font-heading">Content Creator & Social Media Manager</h3>
                  <p className="text-lg text-textSecondary mb-3">Mitchelle Ntalami</p>
                  <ul className="space-y-2 text-textSecondary">
                    <li>• Executed end-to-end content strategy across Instagram, TikTok, LinkedIn, and YouTube</li>
                    <li>• Achieved a 45% growth in monthly reach and 60% boost in audience engagement within 6 months</li>
                    <li>• Collaborated with visual teams to create brand-aligned, trend-responsive content</li>
                    <li>• Managed daily digital interactions and community building efforts</li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <span className="text-secondary font-semibold">Feb 2022 - April 2024</span>
                  <h3 className="text-2xl font-bold text-primary mt-2 font-heading">Digital Content Associate</h3>
                  <p className="text-lg text-textSecondary mb-3">Adawnage Band</p>
                  <ul className="space-y-2 text-textSecondary">
                    <li>• Created digital plans for music and ministry events, driving 70% growth in livestream viewership</li>
                    <li>• Maintained brand identity across social platforms, newsletters, and websites</li>
                    <li>• Used performance metrics to iterate digital strategies and boost engagement</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h2 className="text-4xl font-bold text-primary font-heading">Education & Certifications</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <GraduationCap className="text-secondary mb-3" size={32} />
                  <h3 className="text-xl font-bold text-primary mb-2 font-heading">Chuka University</h3>
                  <p className="text-textSecondary">Bachelor of Science in Wildlife Conservation & Enterprise Management</p>
                  <p className="text-sm text-textSecondary mt-1">Graduated: 2021</p>
                </div>

                <div className="card">
                  <Award className="text-accent mb-3" size={32} />
                  <h3 className="text-xl font-bold text-primary mb-2 font-heading">ALX Africa</h3>
                  <p className="text-textSecondary">Data Science Certificate</p>
                  <p className="text-sm text-textSecondary mt-1">Graduated: 2025</p>
                </div>

                <div className="card">
                  <Award className="text-secondary mb-3" size={32} />
                  <h3 className="text-xl font-bold text-primary mb-2 font-heading">Google</h3>
                  <p className="text-textSecondary">Digital Marketing & E-commerce Certificate</p>
                  <p className="text-sm text-textSecondary mt-1">Graduated: 2023</p>
                </div>

                <div className="card">
                  <Award className="text-accent mb-3" size={32} />
                  <h3 className="text-xl font-bold text-primary mb-2 font-heading">HubSpot</h3>
                  <p className="text-textSecondary">SEO/Digital Marketing Certification</p>
                  <p className="text-sm text-textSecondary mt-1">Graduated: 2023</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Wrench className="text-white" size={24} />
                </div>
                <h2 className="text-4xl font-bold text-primary font-heading">Tools & Technologies</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-primary mb-3 font-heading">Marketing & SEO</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Google Ads', 'Meta Suite', 'SEMrush', 'Ahrefs', 'RankMath', 'Screaming Frog', 'Hootsuite'].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-primary mb-3 font-heading">Analytics & Data Science</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'SQL', 'Machine Learning', 'NLP', 'GA4', 'Power BI', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Meta Insights', 'Excel'].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-primary mb-3 font-heading">Web Development & Design</h3>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS', 'WordPress', 'Canva', 'Adobe Premiere Pro', 'CapCut Pro'].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
