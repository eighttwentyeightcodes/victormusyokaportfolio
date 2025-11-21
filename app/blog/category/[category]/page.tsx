import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getBlogPostsByCategory, categories } from '@/lib/blogData'
import Link from 'next/link'
import CategoryContent from './CategoryContent'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = categories.find((c) => c.slug === params.category)

  if (!category) {
    return {
      title: 'Category not found | Blog',
      description: 'The requested blog category could not be found.'
    }
  }

  const posts = getBlogPostsByCategory(params.category)
  const count = posts.length
  const title = `${category.name} Articles | Blog`
  const description = `Explore ${count > 0 ? count : 'the latest'} articles in ${category.name}. Insights, guides, and strategies curated by Victor Musyoka.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://your-domain.com/blog/category/${params.category}`,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const posts = getBlogPostsByCategory(params.category)
  const category = categories.find(c => c.slug === params.category)

  if (!category) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-24 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Category Not Found</h1>
          <Link href="/blog" className="text-secondary hover:text-accent">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <CategoryContent category={category} posts={posts} />
      <Footer />
    </main>
  )
}
