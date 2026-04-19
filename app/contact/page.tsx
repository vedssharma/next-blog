export default function ContactPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact Me</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Have a question or want to work together? Send me a message and I'll get back to you.
      </p>
      <form
        action="https://formsubmit.co/vedssharma@gmail.com"
        method="POST"
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="_subject" value="New message from your blog" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://vedsharma.dev/contact?sent=true" />

        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="border border-neutral-200 dark:border-neutral-700 bg-transparent rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="border border-neutral-200 dark:border-neutral-700 bg-transparent rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Your message..."
            className="border border-neutral-200 dark:border-neutral-700 bg-transparent rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 resize-none"
          />
        </div>

        <button
          type="submit"
          className="self-start px-4 py-2 text-sm font-medium bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded hover:opacity-80 transition-opacity"
        >
          Send message
        </button>
      </form>
    </section>
  )
}
