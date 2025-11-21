import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getBlogPostBySlug, blogPosts } from '@/lib/blogData'
import Link from 'next/link'
import BlogPostContent from './BlogPostContent'

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
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
