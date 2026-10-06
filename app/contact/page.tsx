export default function ContactPage() {
  return (
    <section>
      <h1 className="page-title">Contact Me</h1>
      <p className="mb-8 max-w-[36em] text-[1.1rem] text-[var(--soft)]">
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
          <label htmlFor="name" className="text-[0.8rem] font-medium uppercase tracking-[0.07em] text-[var(--muted)]">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="border border-[var(--line)] bg-[var(--code)] text-[var(--fg)] placeholder:text-[var(--muted)] rounded-sm px-3 py-2.5 text-base focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-[0.8rem] font-medium uppercase tracking-[0.07em] text-[var(--muted)]">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="border border-[var(--line)] bg-[var(--code)] text-[var(--fg)] placeholder:text-[var(--muted)] rounded-sm px-3 py-2.5 text-base focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-[0.8rem] font-medium uppercase tracking-[0.07em] text-[var(--muted)]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Your message..."
            className="border border-[var(--line)] bg-[var(--code)] text-[var(--fg)] placeholder:text-[var(--muted)] rounded-sm px-3 py-2.5 text-base focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] resize-none"
          />
        </div>

        <button
          type="submit"
          className="self-start px-5 py-2.5 text-[0.85rem] font-medium uppercase tracking-[0.07em] bg-[var(--accent)] text-[var(--accent-fg)] rounded-sm hover:opacity-85 transition-opacity"
        >
          Send message
        </button>
      </form>
    </section>
  )
}
