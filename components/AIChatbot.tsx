'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, User, Bot } from 'lucide-react'
import Link from 'next/link'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  options?: { label: string; action: string }[]
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(
        "Hi! 👋 I'm Victor's AI assistant. I can help you learn about his services, view case studies, or get in touch. How can I help you today?",
        [
          { label: '📊 View Services', action: 'services' },
          { label: '💼 Case Studies', action: 'case-studies' },
          { label: '📞 Contact Victor', action: 'contact' },
          { label: '💬 Ask a Question', action: 'question' },
        ]
      )
    }
  }, [isOpen])

  const addBotMessage = (text: string, options?: { label: string; action: string }[]) => {
    setIsTyping(true)
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'bot',
        timestamp: new Date(),
        options,
      }
      setMessages((prev) => [...prev, newMessage])
      setIsTyping(false)
    }, 800)
  }

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleOptionClick = (action: string) => {
    switch (action) {
      case 'services':
        addUserMessage('Tell me about your services')
        addBotMessage(
          "Victor offers comprehensive digital marketing services including:\n\n• SEO & AI Search Optimization\n• Social Media Management\n• Paid Ads (Google & Meta)\n• Web Design & Development\n• Data Analytics & Reporting\n• Brand Strategy & Consulting\n\nWhich service interests you most?",
          [
            { label: '🔍 SEO Services', action: 'seo' },
            { label: '📱 Social Media', action: 'social' },
            { label: '💰 Paid Advertising', action: 'ads' },
            { label: '🌐 Web Development', action: 'web' },
            { label: '📧 Contact for Quote', action: 'contact' },
          ]
        )
        break

      case 'case-studies':
        addUserMessage('Show me case studies')
        addBotMessage(
          "Victor has delivered impressive results:\n\n• 5X ROAS for healthcare client\n• 75% traffic increase through SEO\n• 3M+ profile views on social media\n• 50% conversion rate improvement\n\nWould you like to see detailed case studies or discuss your project?",
          [
            { label: '📊 View All Case Studies', action: 'view-cases' },
            { label: '💬 Discuss My Project', action: 'contact' },
          ]
        )
        break

      case 'contact':
        addUserMessage('I want to contact Victor')
        addBotMessage(
          "Great! Here are the best ways to reach Victor:\n\n📧 Email: victormusyoka003@gmail.com\n📱 Phone: +254 113064648\n💼 LinkedIn: victor-musyoka\n\nYou can also fill out the contact form or chat directly on WhatsApp. What works best for you?",
          [
            { label: '📝 Fill Contact Form', action: 'contact-form' },
            { label: '💬 WhatsApp Chat', action: 'whatsapp' },
            { label: '📅 Schedule Call', action: 'schedule' },
          ]
        )
        break

      case 'question':
        addUserMessage('I have a question')
        addBotMessage(
          "I'm here to help! Common questions:\n\n• What services do you offer?\n• What are your rates?\n• How long does a project take?\n• Can you help with my specific industry?\n• Do you work with international clients?\n\nWhat would you like to know?",
          [
            { label: '💰 Pricing Information', action: 'pricing' },
            { label: '⏱️ Project Timeline', action: 'timeline' },
            { label: '🌍 International Work', action: 'international' },
            { label: '🎯 Custom Question', action: 'custom' },
          ]
        )
        break

      case 'seo':
        addUserMessage('Tell me about SEO services')
        addBotMessage(
          "Victor specializes in:\n\n• AI Search Optimization (ChatGPT, Gemini)\n• Technical SEO audits\n• On-page & off-page optimization\n• Local SEO for businesses\n• Content strategy\n• Link building\n\nRecent results: 75% traffic increase in 90 days!\n\nReady to boost your rankings?",
          [
            { label: '📈 See SEO Case Study', action: 'seo-case' },
            { label: '📞 Request SEO Audit', action: 'contact' },
          ]
        )
        break

      case 'social':
        addUserMessage('Tell me about social media services')
        addBotMessage(
          "Victor offers complete social media management:\n\n• Content creation & strategy\n• Community management\n• Paid social campaigns\n• Influencer partnerships\n• Analytics & reporting\n\nHe generated 3M+ profile views for a recent campaign!\n\nWant to grow your social presence?",
          [
            { label: '📱 See Social Media Results', action: 'social-case' },
            { label: '💬 Discuss Strategy', action: 'contact' },
          ]
        )
        break

      case 'ads':
        addUserMessage('Tell me about paid advertising')
        addBotMessage(
          "Victor manages high-performing ad campaigns:\n\n• Google Ads (Search, Display, Shopping)\n• Meta Ads (Facebook, Instagram)\n• Campaign strategy & optimization\n• Landing page design\n• Conversion tracking & analytics\n\nRecent achievement: 5X ROAS for healthcare client!\n\nReady to maximize your ad ROI?",
          [
            { label: '💰 See Paid Ads Results', action: 'ads-case' },
            { label: '📊 Request Strategy Session', action: 'contact' },
          ]
        )
        break

      case 'web':
        addUserMessage('Tell me about web development')
        addBotMessage(
          "Victor builds conversion-focused websites:\n\n• Custom web design & development\n• E-commerce solutions\n• Landing pages\n• Performance optimization\n• SEO-friendly architecture\n• Mobile-first responsive design\n\nRecent project: 50% conversion increase!\n\nNeed a new website or redesign?",
          [
            { label: '🌐 See Portfolio', action: 'portfolio' },
            { label: '💬 Discuss Web Project', action: 'contact' },
          ]
        )
        break

      case 'pricing':
        addUserMessage('What are your rates?')
        addBotMessage(
          "Pricing varies based on project scope and requirements:\n\n• SEO: Starting from $500/month\n• Social Media Management: From $400/month\n• Paid Ads Management: 15-20% of ad spend\n• Website Development: From $1,500\n• Consulting: $100/hour\n\nCustom packages available! Let's discuss your specific needs for accurate pricing.",
          [
            { label: '📧 Request Custom Quote', action: 'contact' },
            { label: '📞 Schedule Consultation', action: 'schedule' },
          ]
        )
        break

      case 'timeline':
        addUserMessage('How long does a project take?')
        addBotMessage(
          "Typical project timelines:\n\n• SEO Setup: 2-4 weeks (results in 2-3 months)\n• Website Development: 4-8 weeks\n• Social Media Setup: 1-2 weeks\n• Paid Ads Launch: 1-2 weeks\n• Brand Strategy: 2-3 weeks\n\nTimelines vary based on complexity. Victor can provide specific estimates after discussing your project.",
          [
            { label: '💬 Discuss My Timeline', action: 'contact' },
            { label: '🔙 Back to Main Menu', action: 'main' },
          ]
        )
        break

      case 'international':
        addUserMessage('Do you work with international clients?')
        addBotMessage(
          "Yes! Victor works with clients globally:\n\n✅ Remote collaboration via Zoom/Meet\n✅ Flexible scheduling across time zones\n✅ Experience with US, UK, and EU markets\n✅ International payment options\n✅ English language communication\n\nLocation is no barrier to great results!",
          [
            { label: '🌍 Discuss International Project', action: 'contact' },
            { label: '📊 See Global Results', action: 'case-studies' },
          ]
        )
        break

      case 'view-cases':
        addUserMessage('Show me detailed case studies')
        addBotMessage(
          "You can view all detailed case studies on the website. Each includes:\n\n• Client background & challenges\n• Strategy & approach\n• Results & metrics\n• Key takeaways\n\nShall I direct you there?",
          [
            { label: '📊 View Case Studies Page', action: 'case-studies-link' },
            { label: '💬 Discuss Similar Project', action: 'contact' },
          ]
        )
        break

      case 'contact-form':
        window.location.href = '/contact'
        break

      case 'whatsapp':
        window.open('https://wa.me/254113064648?text=Hi Victor! I found your portfolio and would like to discuss a project.', '_blank')
        addBotMessage("Opening WhatsApp chat... You'll be able to chat directly with Victor!")
        break

      case 'schedule':
        addUserMessage('I want to schedule a call')
        addBotMessage(
          "Perfect! To schedule a consultation:\n\n1. Fill out the contact form with your details\n2. Mention your preferred date/time\n3. Victor will confirm within 24 hours\n\nOr message him directly on WhatsApp for faster scheduling!",
          [
            { label: '📝 Contact Form', action: 'contact-form' },
            { label: '💬 WhatsApp', action: 'whatsapp' },
          ]
        )
        break

      case 'case-studies-link':
      case 'seo-case':
      case 'social-case':
      case 'ads-case':
        window.location.href = '/case-studies'
        break

      case 'portfolio':
        window.location.href = '/portfolio'
        break

      case 'main':
        addBotMessage(
          "How can I help you today?",
          [
            { label: '📊 View Services', action: 'services' },
            { label: '💼 Case Studies', action: 'case-studies' },
            { label: '📞 Contact Victor', action: 'contact' },
            { label: '💬 Ask a Question', action: 'question' },
          ]
        )
        break

      case 'custom':
        addUserMessage('I have a custom question')
        addBotMessage(
          "I'm a basic AI assistant, so for specific questions, it's best to contact Victor directly:\n\n📧 victormusyoka003@gmail.com\n📱 +254 113064648\n💬 WhatsApp (click the green button)\n\nHe typically responds within a few hours!",
          [
            { label: '📞 Contact Now', action: 'contact' },
            { label: '🔙 Back to Menu', action: 'main' },
          ]
        )
        break
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    addUserMessage(inputText)
    
    // Simple keyword matching for common questions
    const lowerText = inputText.toLowerCase()
    
    if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('rate')) {
      handleOptionClick('pricing')
    } else if (lowerText.includes('service') || lowerText.includes('what do you do')) {
      handleOptionClick('services')
    } else if (lowerText.includes('contact') || lowerText.includes('reach') || lowerText.includes('email')) {
      handleOptionClick('contact')
    } else if (lowerText.includes('case') || lowerText.includes('result') || lowerText.includes('portfolio')) {
      handleOptionClick('case-studies')
    } else if (lowerText.includes('seo')) {
      handleOptionClick('seo')
    } else if (lowerText.includes('social') || lowerText.includes('instagram') || lowerText.includes('facebook')) {
      handleOptionClick('social')
    } else if (lowerText.includes('ad') || lowerText.includes('google') || lowerText.includes('meta')) {
      handleOptionClick('ads')
    } else if (lowerText.includes('website') || lowerText.includes('web') || lowerText.includes('design')) {
      handleOptionClick('web')
    } else if (lowerText.includes('time') || lowerText.includes('how long') || lowerText.includes('duration')) {
      handleOptionClick('timeline')
    } else {
      addBotMessage(
        "I understand you have a specific question. Here are some helpful options:",
        [
          { label: '📊 Services & Pricing', action: 'services' },
          { label: '💼 View Case Studies', action: 'case-studies' },
          { label: '📞 Contact Victor', action: 'contact' },
          { label: '🔙 Main Menu', action: 'main' },
        ]
      )
    }
    
    setInputText('')
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-secondary to-accent text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            aria-label="Open AI Chat"
          >
            <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
            
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
              1
            </span>
            
            {/* Tooltip */}
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Chat with AI Assistant
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full border-8 border-transparent border-r-gray-900"></div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 left-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-secondary to-accent text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Bot className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold">AI Assistant</h3>
                  <p className="text-xs text-white/80">Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-white" />
                    </div>
                  )}
                  <div className={`max-w-[75%] ${message.sender === 'user' ? 'order-first' : ''}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-secondary text-white ml-auto'
                          : 'bg-white text-textPrimary'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                    {message.options && (
                      <div className="mt-2 space-y-2">
                        {message.options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleOptionClick(option.action)}
                            className="block w-full text-left px-4 py-2 bg-white hover:bg-secondary/10 border border-gray-200 rounded-lg text-sm text-textPrimary hover:text-secondary transition-colors"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <User size={16} className="text-white" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-secondary"
                />
                <button
                  type="submit"
                  className="bg-secondary text-white p-2 rounded-full hover:bg-secondary-600 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
