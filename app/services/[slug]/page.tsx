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

  // Remove icon from service object before passing to client component
  const { icon, ...serviceData } = service

  return (
    <main className="min-h-screen">
      <Navbar />
      <ServiceContent service={{ ...serviceData, slug: params.slug }} />
      <Footer />
    </main>
  )
}
