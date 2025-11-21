import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getBlogPostBySlug, blogPosts } from '@/lib/blogData'
import Link from 'next/link'
import BlogPostContent from './BlogPostContent'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug)
  if (!post) {
    return {
      title: 'Post not found | Blog',
      description: 'The requested blog post could not be found.'
    }
  }

  const title = post.metaTitle ?? `${post.title} | Blog`
  const description = post.metaDescription ?? post.excerpt

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://your-domain.com/blog/${post.slug}`,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.image ? [post.image] : undefined,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-24 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
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
      <BlogPostContent post={post} />
      <Footer />
    </main>
  )
}
