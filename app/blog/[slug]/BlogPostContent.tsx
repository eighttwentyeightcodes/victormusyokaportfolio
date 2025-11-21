'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { BlogPost } from '@/lib/blogData'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-32 pb-24 bg-gradient-to-br from-primary via-primary-800 to-primary-700 text-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>

            <div className="mb-4">
              <span className="px-4 py-2 bg-secondary text-white rounded-full text-sm font-semibold">
                {post.category.replace('-', ' ').toUpperCase()}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                {post.subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{post.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-heading prose-a:text-secondary prose-a:no-underline hover:prose-a:text-accent prose-strong:text-primary prose-code:text-secondary prose-code:bg-background prose-code:px-2 prose-code:py-1 prose-code:rounded"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <Tag size={20} className="text-secondary" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-background text-textPrimary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Author CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 p-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
                Need Help With Your Digital Marketing?
              </h3>
              <p className="text-textSecondary mb-6">
                I help businesses grow through data-driven digital marketing strategies, SEO, paid advertising, and web development.
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </article>
    </>
  )
}
