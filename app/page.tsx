import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import ScrollReveal from '@/components/ScrollReveal'

// ─── Data ───────────────────────────────────────────────
const stats = [
  { value: '500+', label: 'Devices Repaired' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Success Rate' },
  { value: '200+', label: 'Happy Clients' },
]

const services = [
  {
    id: 'vfd',
    icon: '⚡',
    title: 'VFD Services',
    subtitle: 'Variable Frequency Drives',
    description:
      'Comprehensive repair, troubleshooting, servicing, testing, and commissioning for all major VFD brands. Minimize downtime and maximize efficiency.',
    features: ['Repairing & Troubleshooting', 'Servicing & Testing', 'Commissioning'],
    href: '/services#vfd',
  },
  {
    id: 'plc',
    icon: '🖥',
    title: 'PLC Systems',
    subtitle: 'Programmable Logic Controllers',
    description:
      'Upgrade outdated control systems with modern PLCs for precise control, real-time monitoring, and significantly reduced operational downtime.',
    features: ['Precise Control', 'Real-time Monitoring', 'System Upgrades'],
    href: '/services#plc',
  },
  {
    id: 'servo',
    icon: '⚙️',
    title: 'Servo Drive Repair',
    subtitle: 'All Brands Supported',
    description:
      'Expert servo drive diagnostics and repair with fast turnaround. Our engineers restore equipment to full factory specification.',
    features: ['All Major Brands', 'Free Diagnostic Quote', 'Fast Turnaround'],
    href: '/services#servo',
  },
  {
    id: 'generator',
    icon: '🔋',
    title: 'Generator Controllers',
    subtitle: 'Power Continuity Solutions',
    description:
      'Keep your power running with expert generator controller repair, synchronization, and maintenance services.',
    features: ['Synchronizing Controllers', 'DSE & ComAp Systems', 'Quick Fix Service'],
    href: '/services#generator',
  },
  {
    id: 'hmi',
    icon: '📟',
    title: 'HMI Systems',
    subtitle: 'Human Machine Interface',
    description:
      'Repair and replacement of HMI panels, touchscreens, and display systems for seamless operator interaction with machinery.',
    features: ['Panel Repair', 'Screen Replacement', 'Software Updates'],
    href: '/services#hmi',
  },
  {
    id: 'control',
    icon: '🔌',
    title: 'Control Cards & Drives',
    subtitle: 'DC Drives & Power Supplies',
    description:
      'Specialized repair of control cards, DC drives, and industrial power supply units across all industrial sectors.',
    features: ['Control Cards', 'DC Drives', 'Power Supplies'],
    href: '/services#control',
  },
]

const benefits = [
  {
    title: 'Improved Reliability',
    desc: 'Restored devices perform to factory spec, eliminating unpredictable failures on the production floor.',
    icon: '🛡',
  },
  {
    title: 'Energy Savings',
    desc: 'Properly maintained VFDs and PLCs operate at optimal efficiency, cutting energy consumption significantly.',
    icon: '💡',
  },
  {
    title: 'Extended Lifespan',
    desc: 'Expert repair extends the operational life of expensive industrial equipment, delaying costly replacements.',
    icon: '⏳',
  },
  {
    title: 'Compliance & Safety',
    desc: 'All repaired units are tested to international safety standards before returning to service.',
    icon: '✅',
  },
]

const testimonials = [
  {
    quote:
      "HOAK Labs repaired our Siemens VFD that two other workshops couldn't fix. Back in operation within 48 hours. Exceptional work.",
    author: 'Muhammad Asif',
    role: 'Plant Manager, Textile Mill — Karachi',
    rating: 5,
  },
  {
    quote:
      'Their PLC upgrade project was delivered on time and on budget. The system has been running flawlessly for over a year now.',
    author: 'Engr. Tariq Mahmood',
    role: 'Maintenance Engineer, Food Processing — Lahore',
    rating: 5,
  },
  {
    quote:
      'Competitive pricing, fast turnaround, and genuine expertise. HOAK is now our go-to partner for all automation repairs.',
    author: 'Hassan Ali',
    role: 'Operations Director, Packaging — Karachi',
    rating: 5,
  },
]

// ─── Page ───────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient noise-overlay">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        {/* Right accent panel */}
        <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-bl from-white/5 to-transparent diagonal-divider pointer-events-none" />

        {/* Minimal floating dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-brand-gold/25 animate-float"
              style={{
                left: `${12 + i * 20}%`,
                top: `${25 + (i % 2) * 35}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${6 + i}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto pl-3 pr-4 sm:pl-3 sm:pr-6 lg:pl-0 lg:pr-8 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 items-center" style={{ gap: '18rem' }}>

            {/* ── Left: Copy ── */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-sm border border-white/12 rounded-full px-5 py-2 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse-gold flex-shrink-0" />
                <span className="text-white/70 text-xs font-mono tracking-[0.18em] uppercase">
                  Industrial Automation Specialists
                </span>
              </div>

              {/* Headline — tighter, more authoritative */}
              <h1
                className="font-heading text-5xl md:text-6xl lg:text-[4.25rem] text-white leading-[1.05] mb-5"
                style={{ fontWeight: 800, letterSpacing: '-0.01em' }}
              >
                PRECISION REPAIR
                <br />
                <span className="text-brand-gold">FOR INDUSTRIAL</span>
                <br />
                AUTOMATION
              </h1>

              {/* Gold rule */}
              <div className="w-10 h-0.5 bg-brand-gold rounded-full mb-5" />

              <p className="text-white/60 text-[0.9375rem] leading-relaxed max-w-md mb-8 font-body">
                Expert repair and maintenance for VFDs, PLCs, Servo Drives, Generator Controllers,
                and all industrial automation systems. Fast turnaround. Guaranteed results.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-gold px-6 py-3.5 rounded-lg font-body text-white text-sm"
                  style={{ fontWeight: 700 }}
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3.5 rounded-lg font-body text-white/80 text-sm border border-white/20 hover:border-white/50 hover:bg-white/8 hover:text-white transition-all duration-200"
                  style={{ fontWeight: 500 }}
                >
                  Our Services →
                </Link>
              </div>

              {/* Quick contact */}
              <div className="mt-9 pt-7 border-t border-white/10 flex flex-wrap gap-6">
                <a href="tel:021-34536335" className="flex items-center gap-2 text-white/45 hover:text-white/75 transition-colors text-sm font-body">
                  <svg className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  021-34536335
                </a>
                <a href="mailto:sales@hoakengineers.com" className="flex items-center gap-2 text-white/45 hover:text-white/75 transition-colors text-sm font-body">
                  <svg className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  sales@hoakengineers.com
                </a>
              </div>
            </div>

            {/* ── Right: Stats card ── */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/7 backdrop-blur-md border border-white/12 rounded-2xl p-7 shadow-blue-glow">

                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-brand-gold/15 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 text-sm font-body" style={{ fontWeight: 600 }}>Performance Overview</p>
                      <p className="text-white/35 text-xs font-body tracking-wide">Est. 2009 · Karachi, Pakistan</p>
                    </div>
                  </div>

                  {/* Stat grid */}
                  <div className="grid grid-cols-2 gap-3.5">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/5 rounded-xl p-4 border border-white/8 hover:border-brand-gold/25 hover:bg-white/8 transition-all duration-300"
                      >
                        <p className="font-heading text-3xl text-brand-gold leading-none mb-1" style={{ fontWeight: 800 }}>
                          {stat.value}
                        </p>
                        <p className="text-white/50 text-xs font-body tracking-wide">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Footer row */}
                  <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
                    <p className="text-white/40 text-xs font-body">Trusted across Pakistan</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-brand-gold rounded-xl px-4 py-2.5 shadow-gold-glow animate-float">
                  <p className="font-heading text-white text-xs uppercase tracking-wider" style={{ fontWeight: 800 }}>15+ Years</p>
                  <p className="text-white/80 text-xs font-body">of Excellence</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
          <span className="text-white/30 text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
          <svg className="w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW ════════════════════════════ */}
      <section className="py-24 bg-brand-off-white bg-circuit-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="What We Do"
              title="Complete "
              highlight="Automation"
              subtitle="From VFDs and PLCs to servo drives and generator controllers — HOAK Labs provides expert repair and maintenance services for the full spectrum of industrial automation equipment."
              centered
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 80}>
                <Link href={service.href}>
                  <div className="service-card bg-white rounded-2xl p-7 h-full shadow-sm cursor-pointer group">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-brand-blue/8 flex items-center justify-center text-2xl mb-5 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                      <span className="group-hover:grayscale-0">{service.icon}</span>
                    </div>

                    <p className="section-label mb-1">{service.subtitle}</p>
                    <h3 className="font-heading text-2xl font-800 text-brand-blue-dark mb-3" style={{ fontWeight: 800 }}>
                      {service.title}
                    </h3>
                    <p className="text-brand-gray-mid text-sm leading-relaxed font-body mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-brand-gray-dark font-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center gap-2 text-brand-blue text-sm font-600 group-hover:gap-3 transition-all" style={{ fontWeight: 600 }}>
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS STRIP ═══════════════════════════════ */}
      <section className="py-24 bg-brand-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Why Maintain Your Equipment"
              title="The Cost of "
              highlight="Neglect"
              subtitle="Industrial downtime costs thousands per hour. HOAK Labs keeps your operations running at peak performance."
              centered
              light
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-heading text-xl font-700 text-white mb-3" style={{ fontWeight: 700 }}>
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-body">{benefit.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="How It Works"
              title="Simple "
              highlight="4-Step"
              subtitle="Getting your device repaired is straightforward. We handle everything from initial diagnosis to final delivery."
              centered
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-brand-gold via-brand-blue to-brand-gold opacity-30" />

            {[
              { step: '01', title: 'Submit Request', desc: 'Contact us via phone, email, or our form with device details.' },
              { step: '02', title: 'Free Diagnosis', desc: 'Our engineers perform a thorough diagnostic assessment.' },
              { step: '03', title: 'Expert Repair', desc: 'Skilled technicians restore your device to full specification.' },
              { step: '04', title: 'Test & Deliver', desc: 'Rigorous testing before quick delivery back to your facility.' },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 120}>
                <div className="text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-5 shadow-blue-glow">
                    <span className="font-heading text-2xl font-900 text-brand-gold" style={{ fontWeight: 900 }}>
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-700 text-brand-blue-dark mb-2" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="text-brand-gray-mid text-sm leading-relaxed font-body">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═════════════════════════════════ */}
      <section className="py-24 bg-brand-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Client Feedback"
              title="What Our Clients "
              highlight="Say"
              centered
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 120}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-card-hover transition-all duration-300 border border-transparent hover:border-brand-gold/20 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, si) => (
                      <svg key={si} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-brand-gray-dark text-sm leading-relaxed font-body flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-6 pt-5 border-t border-brand-gray-light flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-hero-gradient flex items-center justify-center">
                      <span className="font-heading font-700 text-white text-sm" style={{ fontWeight: 700 }}>
                        {t.author[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-body font-600 text-sm text-brand-blue-dark" style={{ fontWeight: 600 }}>{t.author}</p>
                      <p className="text-brand-gray-mid text-xs font-body">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ═════════════════════════════════════ */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="section-label text-brand-gold">Ready to Get Started?</span>
            <h2 className="font-heading text-5xl md:text-6xl font-900 text-white mt-3 mb-5" style={{ fontWeight: 900 }}>
              Let&apos;s Fix Your Equipment
            </h2>
            <p className="text-white/70 text-lg mb-8 font-body">
              Contact our team today for a free diagnostic assessment and repair quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-gold px-8 py-4 rounded-xl font-700 text-white text-base font-body"
                style={{ fontWeight: 700 }}
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:021-34536335"
                className="px-8 py-4 rounded-xl font-600 text-white text-base font-body border-2 border-white/30 hover:bg-white/10 hover:border-white/60 transition-all duration-200"
                style={{ fontWeight: 600 }}
              >
                Call: 021-34536335
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
