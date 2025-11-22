import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

export const metadata: Metadata = {
  title: 'Victor Musyoka | Digital Marketing Analyst',
  description: 'Digital Marketing Analyst with 3+ years experience. Proven results: 5X ROAS, 75% organic traffic growth, 50% revenue increase, 3M+ profile views. Expert in SEO, AI Search Optimization, Paid Media, Web Development & Analytics.',
  keywords: 'digital marketing, SEO, AI search optimization, web development, data science, data analytics, content strategy, paid ads, Google Ads, Meta Ads, social media marketing, conversion optimization, Kenya, Nairobi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
