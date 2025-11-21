'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { BlogPost } from '@/lib/blogData'
import Link from 'next/link'

interface CategoryContentProps {
  category: {
    slug: string
    name: string
  }
  posts: BlogPost[]
}

export default function CategoryContent({ category, posts }: CategoryContentProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
              {category.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} in this category
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-textSecondary text-lg mb-6">No articles in this category yet.</p>
              <Link href="/blog" className="btn-primary">
                View All Posts
              </Link>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-secondary text-white rounded-full text-sm font-semibold">
                          {post.category.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-textSecondary mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-primary mb-3 font-heading group-hover:text-secondary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-textSecondary mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-secondary font-semibold group-hover:gap-4 transition-all">
                        Read More <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
