'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/data';

export default function Blog() {
  return (
    <section id="blog" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-cyber-green">08. // blog</p>
          <h2 className="section-heading mt-2 text-3xl font-bold text-white sm:text-4xl">
            Latest <span className="gradient-text">Writeups</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="cyber-card glass group flex flex-col rounded-xl p-6"
            >
              <div className="mb-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-cyber-border px-2 py-0.5 font-mono text-[11px] text-cyber-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mb-2 flex items-start justify-between gap-2 font-semibold text-white group-hover:text-cyber-green">
                {post.title}
                <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-500 group-hover:text-cyber-green" />
              </h3>
              <p className="mb-4 flex-1 text-sm text-gray-400">{post.excerpt}</p>
              <div className="flex items-center gap-4 border-t border-cyber-border pt-3 font-mono text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
