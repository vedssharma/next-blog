import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hey guys! I am Ved. I am a developer currently looking for a job.
        In my freetime, I like to code, lift weights, and read books. Welcome to my blog/portfolio site.
        It will have all the stuff I have worked on (blog posts and side projects)`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
