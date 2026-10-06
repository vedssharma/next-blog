import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="page-title">
        My Portfolio
      </h1>
      <p className="max-w-[36em] text-[1.15rem] leading-relaxed text-[var(--soft)] first-letter:font-serif first-letter:font-semibold first-letter:text-[var(--accent)]">
        {`Hey guys! I am Ved. I am a developer currently looking for a job.
        In my freetime, I like to code, lift weights, play video games, and read books. Welcome to my blog/portfolio site.
        It will have all the stuff I have worked on (blog posts and side projects)`}
      </p>
      <div className="mt-12">
        <BlogPosts />
      </div>
    </section>
  )
}
