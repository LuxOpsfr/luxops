type BrandLogoProps = {
  tone?: 'dark' | 'light'
  showTagline?: boolean
  showMonogram?: boolean
  compact?: boolean
  className?: string
}

export default function BrandLogo({
  tone = 'dark',
  showTagline = false,
  showMonogram = false,
  compact = false,
  className = '',
}: BrandLogoProps) {
  const primary = tone === 'light' ? '#f5f1e9' : '#0f211a'
  const secondary = tone === 'light' ? '#c3aa80' : '#a58658'
  const muted = tone === 'light' ? '#aeb6af' : '#687169'

  return (
    <span className={`inline-flex items-center ${compact ? 'gap-2.5' : 'gap-3.5'} ${className}`.trim()}>
      {showMonogram && (
        <span
          aria-hidden="true"
          className="relative inline-flex shrink-0 items-center justify-center"
          style={{ width: compact ? 34 : 40, height: compact ? 34 : 40, border: `1px solid ${primary}` }}
        >
          <span className="absolute inset-[3px]" style={{ border: `1px solid ${secondary}`, opacity: 0.72 }} />
          <span
            style={{
              color: primary,
              fontFamily: 'var(--font-brand)',
              fontSize: compact ? '0.76rem' : '0.9rem',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            LO
          </span>
        </span>
      )}

      <span className="inline-flex min-w-0 flex-col">
        <span
          className="brand-wordmark"
          style={{
            color: primary,
            fontSize: compact ? '1.65rem' : '2rem',
            lineHeight: 0.88,
          }}
        >
          LuxOps
        </span>
        {showTagline && (
          <span
            className="mt-1.5 hidden font-semibold uppercase sm:block"
            style={{ color: muted, fontSize: '0.59rem', lineHeight: 1.25, letterSpacing: 0 }}
          >
            Standardizing Excellence in High-End Hospitality
          </span>
        )}
      </span>
    </span>
  )
}
