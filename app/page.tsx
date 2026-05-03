import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import ScrollReveal from '@/components/ScrollReveal'

// ─── Data ───────────────────────────────────────────────
const services = [
  {
    id: 'vfd',
    title: 'VFD Services',
    subtitle: 'Variable Frequency Drives',
    description:
      'Comprehensive repair, troubleshooting, servicing, testing, and commissioning for all major VFD brands. Minimize downtime and maximize efficiency.',
    features: ['Repairing & Troubleshooting', 'Servicing & Testing', 'Commissioning'],
    href: '/services#vfd',
    image: '/services/vfd.png',
  },
  {
    id: 'plc',
    title: 'PLC Services',
    subtitle: 'Programmable Logic Controllers',
    description:
      'Upgrade outdated control systems with modern PLCs for precise control, real-time monitoring, and significantly reduced operational downtime.',
    features: ['Precise Control', 'Real-time Monitoring', 'System Upgrades'],
    href: '/services#plc',
    image: '/services/plc.png',
  },
  {
    id: 'servo',
    title: 'Servo Drive Repair',
    subtitle: 'All Brands Supported',
    description:
      'Expert servo drive diagnostics and repair with fast turnaround. Our engineers restore equipment to full factory specification.',
    features: ['All Major Brands', 'Free Diagnostic Quote', 'Fast Turnaround'],
    href: '/services#servo',
    image: '/services/servo_drive.png',
  },
  {
    id: 'generator',
    title: 'Generator Controllers',
    subtitle: 'Power Continuity Solutions',
    description:
      'Keep your power running with expert generator controller repair, synchronization, and maintenance services.',
    features: ['Synchronizing Controllers', 'DSE & ComAp Systems', 'Quick Fix Service'],
    href: '/services#generator',
    image: '/services/generators_controllers.png',
  },
  {
    id: 'hmi',
    title: 'HMI Systems',
    subtitle: 'Human Machine Interface',
    description:
      'Repair and replacement of HMI panels, touchscreens, and display systems for seamless operator interaction with machinery.',
    features: ['Panel Repair', 'Screen Replacement', 'Software Updates'],
    href: '/services#hmi',
    image: '/services/hmi_systems.png',
  },
  {
    id: 'control',
    title: 'Control Cards & Drives',
    subtitle: 'DC Drives & Power Supplies',
    description:
      'Specialized repair of control cards, DC drives, and industrial power supply units across all industrial sectors.',
    features: ['Control Cards', 'DC Drives', 'Power Supplies'],
    href: '/services#control',
    image: '/services/controlcards&drives.png',
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
      <section className="relative w-full" style={{ height: '100vh' }}>
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
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
                  <div className="service-card bg-white rounded-2xl overflow-hidden h-full shadow-sm cursor-pointer group flex flex-col">
                    <div className="h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <p className="section-label mb-1">{service.subtitle}</p>
                      <h3 className="font-heading text-2xl font-800 text-brand-blue-dark mb-3" style={{ fontWeight: 800 }}>
                        {service.title}
                      </h3>
                      <p className="text-brand-gray-mid text-sm leading-relaxed font-body mb-5">
                        {service.description}
                      </p>

                      <ul className="space-y-1.5 mb-5">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-brand-gray-dark font-body">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex items-center gap-2 text-brand-blue text-sm font-600 group-hover:gap-3 transition-all" style={{ fontWeight: 600 }}>
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
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
                  <h3 className="font-heading text-3xl font-700 text-white mb-3" style={{ fontWeight: 700 }}>
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

      {/* ═══ BANNER IMAGE ════════════════════════════════ */}
      <section className="w-full">
        <img
          src="/banner.jpeg"
          alt="HOAK Labs Industrial Automation"
          className="w-full object-contain block"
        />
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
                href="tel:03332707900"
                className="px-8 py-4 rounded-xl font-600 text-white text-base font-body border-2 border-white/30 hover:bg-white/10 hover:border-white/60 transition-all duration-200"
                style={{ fontWeight: 600 }}
              >
                Call: 03332707900
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
