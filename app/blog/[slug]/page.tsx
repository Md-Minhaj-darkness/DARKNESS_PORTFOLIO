import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, ShieldHalf } from 'lucide-react';
import { blogPosts, siteConfig } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Cyber Security Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cyber-black pb-24 pt-28">
        {/* Top back-link bar */}
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/#blog"
            className="focus-ring mb-10 inline-flex items-center gap-2 font-mono text-sm text-cyber-green hover:text-cyber-blue"
          >
            <ArrowLeft className="h-4 w-4" /> back to writeups
          </Link>
        </div>

        <article className="mx-auto max-w-3xl px-6">
          {/* Tags */}
          <div className="mb-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyber-green/30 bg-cyber-green/5 px-3 py-1 font-mono text-[11px] text-cyber-green"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title - large, Medium-style */}
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {post.title}
          </h1>

          {/* Excerpt / dek */}
          <p className="mt-5 text-xl leading-relaxed text-gray-400">{post.excerpt}</p>

          {/* Author + meta byline */}
          <div className="mt-8 flex items-center gap-3 border-y border-cyber-border/60 py-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyber-green/40 bg-cyber-green/10">
              <ShieldHalf className="h-5 w-5 text-cyber-green" />
            </div>
            <div>
              <p className="font-medium text-white">{siteConfig.name}</p>
              <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Article body - Medium-style typography: wide line-height, larger font, generous spacing */}
          <div className="mt-12 space-y-7 text-[19px] leading-[1.9] text-gray-200">
            {post.content.map((block, i) =>
              block.startsWith('## ') ? (
                <h2
                  key={i}
                  className="!mt-14 !mb-2 text-2xl font-bold text-white first:!mt-0 sm:text-3xl"
                >
                  {block.replace('## ', '')}
                </h2>
              ) : (
                <p key={i}>{block}</p>
              )
            )}
          </div>

          {/* Footer nav back to writeups */}
          <div className="mt-16 border-t border-cyber-border/60 pt-8">
            <Link
              href="/#blog"
              className="focus-ring inline-flex items-center gap-2 font-mono text-sm text-cyber-green hover:text-cyber-blue"
            >
              <ArrowLeft className="h-4 w-4" /> back to all writeups
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
