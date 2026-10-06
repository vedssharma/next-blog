function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="rule-top mb-16 mt-16 pt-5">
      <ul className="flex flex-col gap-2 text-[0.9rem] text-[var(--muted)] md:flex-row md:gap-6">
        <li>
          <a
            className="flex items-center transition-colors hover:text-[var(--accent)]"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 leading-7">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-colors hover:text-[var(--accent)]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/vercel/next.js"
          >
            <ArrowIcon />
            <p className="ml-2 leading-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-colors hover:text-[var(--accent)]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://vercel.com/templates/next.js/portfolio-starter-kit"
          >
            <ArrowIcon />
            <p className="ml-2 leading-7">view source</p>
          </a>
        </li>
      </ul>
      <p className="mt-5 text-[0.9rem] text-[var(--muted)]">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}
