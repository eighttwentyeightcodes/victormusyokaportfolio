'use client'

import WhatsAppButton from './WhatsAppButton'
import AIChatbot from './AIChatbot'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <WhatsAppButton />
      <AIChatbot />
    </>
  )
}
