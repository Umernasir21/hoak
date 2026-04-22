interface SectionHeaderProps {
  label?: string
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  label,
  title,
  highlight,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  const titleParts = highlight ? title.split(highlight) : [title]

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className={`section-label ${light ? 'text-brand-gold' : 'text-brand-gold-dark'}`}>
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-4xl md:text-5xl mt-2 leading-tight ${
          light ? 'text-white' : 'text-brand-blue-dark'
        }`}
        style={{ fontWeight: 800 }}
      >
        {titleParts[0]}
        {highlight && (
          <span className="text-brand-gold">{highlight}</span>
        )}
        {titleParts[1]}
      </h2>
      <div className={`gold-line mt-4 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl font-body ${
            light ? 'text-white/70' : 'text-brand-gray-mid'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
