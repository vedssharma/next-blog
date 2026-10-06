import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="border-t border-[var(--line)]">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group grid grid-cols-[1fr_1.25rem] items-baseline gap-x-4 gap-y-1 border-b border-[var(--line)] py-4 md:grid-cols-[10.5rem_1fr_1.25rem]"
            href={`/blog/${post.slug}`}
          >
            <p className="col-start-1 text-[0.8rem] uppercase tracking-[0.05em] text-[var(--muted)] tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="col-start-1 row-start-2 font-serif text-[1.15rem] font-medium leading-snug tracking-tight text-[var(--fg)] transition-colors group-hover:text-[var(--accent)] md:col-start-2 md:row-start-1">
              {post.metadata.title}
            </p>
            <span
              aria-hidden="true"
              className="col-start-2 row-span-2 row-start-1 self-center text-[var(--muted)] transition-all group-hover:translate-x-1 group-hover:text-[var(--accent)] md:col-start-3 md:row-span-1 md:self-baseline"
            >
              →
            </span>
          </Link>
        ))}
    </div>
  )
}
