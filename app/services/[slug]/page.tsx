import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getServiceBySlug, servicesData } from '@/lib/servicesData'
import ServiceContent from './ServiceContent'

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ServiceContent service={service} />
      <Footer />
    </main>
  )
}
