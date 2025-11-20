'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Calendar, User, Briefcase, MessageSquare, RefreshCw } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Lead } from '@/types/contact'

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchLeads = async () => {
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/leads')
      const data = await response.json()
      
      if (response.ok) {
        setLeads(data.leads)
      } else {
        setError(data.error || 'Failed to load leads')
      }
    } catch (err) {
      setError('Failed to connect to server')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800'
      case 'converted':
        return 'bg-green-100 text-green-800'
      case 'closed':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                  Lead Management
                </h1>
                <p className="text-xl text-white/90">
                  Track and manage contact form submissions
                </p>
              </div>
              <button
                onClick={fetchLeads}
                disabled={loading}
                className="btn-accent inline-flex items-center gap-2"
              >
                <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
                Refresh
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leads List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-secondary mb-1">{leads.length}</div>
                <div className="text-sm text-gray-600">Total Leads</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {leads.filter(l => l.status === 'new').length}
                </div>
                <div className="text-sm text-gray-600">New</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-yellow-600 mb-1">
                  {leads.filter(l => l.status === 'contacted').length}
                </div>
                <div className="text-sm text-gray-600">Contacted</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {leads.filter(l => l.status === 'converted').length}
                </div>
                <div className="text-sm text-gray-600">Converted</div>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-secondary border-t-transparent mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading leads...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
                <p className="text-red-600 font-semibold">{error}</p>
              </div>
            ) : leads.length === 0 ? (
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
                <p className="text-gray-500 text-lg">No leads yet</p>
                <p className="text-gray-400 mt-2">Contact form submissions will appear here</p>
              </div>
            ) : (
              <div className="space-y-4">
                {leads.map((lead, index) => (
                  <motion.div
                    key={lead.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <User size={18} className="text-gray-400" />
                              <h3 className="text-xl font-bold text-primary">{lead.name}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(lead.status)}`}>
                                {lead.status}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Mail size={16} className="text-gray-400" />
                                <a href={`mailto:${lead.email}`} className="hover:text-secondary">
                                  {lead.email}
                                </a>
                              </div>
                              {lead.phone && lead.phone !== 'Not provided' && (
                                <div className="flex items-center gap-1">
                                  <Phone size={16} className="text-gray-400" />
                                  <a href={`tel:${lead.phone}`} className="hover:text-secondary">
                                    {lead.phone}
                                  </a>
                                </div>
                              )}
                              <div className="flex items-center gap-1">
                                <Calendar size={16} className="text-gray-400" />
                                {formatDate(lead.submittedAt)}
                              </div>
                            </div>
                          </div>
                        </div>

                        {lead.service && lead.service !== 'Not specified' && (
                          <div className="flex items-center gap-2 mb-3">
                            <Briefcase size={16} className="text-secondary" />
                            <span className="text-sm font-semibold text-secondary">{lead.service}</span>
                          </div>
                        )}

                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start gap-2">
                            <MessageSquare size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
                            <p className="text-gray-700 leading-relaxed">{lead.message}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
