export default function LegalPage() {
  return (
    <div className="pt-16 py-24 max-w-3xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-[#111111] mb-8">
        Mentions Légales / Legal Notices
      </h1>
      <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
        <p>
          <strong className="text-[#111111]">LuxOps</strong> — Contact:{' '}
          <a href="mailto:contact@luxops.com" className="text-[#111111] underline">
            contact@luxops.com
          </a>
        </p>
        <p>
          This website is currently in development. Complete legal information will be
          provided upon official launch.
        </p>
        <p>All content © 2026 LuxOps. All rights reserved.</p>
      </div>
    </div>
  )
}
