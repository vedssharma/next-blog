export default function ResumePage() {
  return (
    <section>
      <h1 className="page-title">My Resume</h1>
      <iframe
        src="https://drive.google.com/file/d/1ZfMWAYXyf1VQjSTSazKhTMK58EdFtuDH/preview"
        className="w-full border border-[var(--line)]"
        style={{ height: '85vh' }}
        allow="autoplay"
      />
    </section>
  )
}
