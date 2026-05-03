import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    id: 'vfd',
    tag: 'VFD',
    title: 'Variable Frequency Drives',
    subtitle: 'Repair, Maintenance & Commissioning',
    description:
      'Variable Frequency Drives are the workhorses of modern industrial operations. When they fail, production stops. HOAK Labs offers comprehensive VFD services covering all major brands, from single-phase domestic drives to large industrial multi-drive systems.',
    services: [
      'Complete VFD repair & overhaul',
      'Fault diagnosis & troubleshooting',
      'Preventive maintenance programs',
      'Testing & commissioning',
      'Parameter backup & programming',
      'Power capacitor replacement',
      'IGBT module testing & replacement',
      'CPU & control board repairs',
    ],
    causes: ['Power Supply Failures', 'CPU Board Failure', 'Power Board Failures', 'Encoder Card Faulty', 'Power Capacitor Weak/Faulty', 'Overheating Issues', 'Cooling System Failure'],
    brands: ['Siemens', 'ABB', 'Schneider', 'Mitsubishi', 'Yaskawa', 'INVT', 'Delta', 'Danfoss'],
    icon: '⚡',
    image: '/services/vfd.png',
  },
  {
    id: 'plc',
    tag: 'PLC',
    title: 'Programmable Logic Controllers',
    subtitle: 'Installation, Repair & Upgrades',
    description:
      'Outdated or faulty PLCs compromise production efficiency and safety. HOAK Labs provides complete PLC services — from repairing damaged controllers to upgrading legacy systems to modern platforms for better performance and connectivity.',
    services: [
      'PLC diagnostics & repair',
      'System upgrades & migration',
      'Program backup & documentation',
      'I/O module testing & replacement',
      'Communication module repair',
      'New PLC installation & commissioning',
      'SCADA/HMI integration',
      'Preventive maintenance schedules',
    ],
    causes: ['I/O Module Failures', 'Power Supply Faults', 'Communication Errors', 'Battery Failure', 'Program Corruption', 'Environmental Damage'],
    brands: ['Siemens S7', 'Allen-Bradley', 'Mitsubishi', 'Schneider Modicon', 'Omron', 'Delta', 'GE Fanuc'],
    icon: '🖥',
    image: '/services/plc.png',
  },
  {
    id: 'servo',
    tag: 'SERVO',
    title: 'Servo Drive Repairing',
    subtitle: 'Fast, Reliable Service for All Types',
    description:
      'Servo drives demand precision. Even minor faults can cause cascading production issues. Our engineers have deep expertise in servo drive diagnosis and repair, returning equipment to factory specification with full load testing before delivery.',
    services: [
      'Complete servo drive overhaul',
      'Power stage & driver board repair',
      'Encoder interface repair',
      'Parameter restoration',
      'Motor matching & tuning',
      'Control card diagnostics',
      'Free repair quotation',
      'Express turnaround available',
    ],
    causes: ['Overheating', 'Power Stage Failure', 'Encoder Faults', 'Control Board Damage', 'Power Supply Issues', 'Motor Winding Faults'],
    brands: ['Siemens Sinamics', 'Fanuc', 'Mitsubishi MR-J', 'Yaskawa Sigma', 'Bosch Rexroth', 'Beckhoff', 'Parker'],
    icon: '⚙️',
    image: '/services/servo_drive.png',
  },
  {
    id: 'generator',
    tag: 'GENERATOR',
    title: 'Generator Controllers',
    subtitle: 'Power Continuity Solutions',
    description:
      'Your generator is only as reliable as its controller. HOAK Labs specialises in the repair and maintenance of all types of generator control panels, AMF units, and synchronizing controllers — ensuring your backup power is always ready.',
    services: [
      'Generator controller repair',
      'AMF panel servicing',
      'Synchronizing controller repair',
      'DSE module repair',
      'ComAp controller service',
      'Voltage regulator repair',
      'Load sharing configuration',
      'On-site service available',
    ],
    causes: ['AVR Failure', 'Controller Board Damage', 'Communication Faults', 'Sensor Failures', 'Battery/Charging Issues', 'Firmware Corruption'],
    brands: ['Deep Sea Electronics (DSE)', 'ComAp', 'Woodward', 'Stamford', 'Mecc Alte', 'Leroy Somer'],
    icon: '🔋',
    image: '/services/generators_controllers.png',
  },
  {
    id: 'hmi',
    tag: 'HMI',
    title: 'Human Machine Interface',
    subtitle: 'Panel Repair & Screen Replacement',
    description:
      'HMI panels are the operator interface to your automation systems. Cracked screens, communication failures, or software glitches can halt operations. HOAK Labs repairs HMI systems rapidly to minimize downtime.',
    services: [
      'Touchscreen replacement',
      'Display panel repair',
      'Communication board repair',
      'Software & firmware updates',
      'Backlight replacement',
      'Project data recovery',
      'Complete panel overhaul',
      'Spare unit programming',
    ],
    causes: ['Touchscreen Failure', 'Display Issues', 'Communication Errors', 'Power Supply Faults', 'Software Corruption'],
    brands: ['Siemens TP/OP', 'Allen-Bradley PanelView', 'Mitsubishi GOT', 'Schneider Magelis', 'Weintek', 'Delta DOP', 'Proface'],
    icon: '📟',
    image: '/services/hmi_systems.png',
  },
  {
    id: 'control',
    tag: 'CONTROL',
    title: 'Control Cards & DC Drives',
    subtitle: 'Power Supplies & Control Electronics',
    description:
      'From precision control cards to DC drives and industrial power supplies, HOAK Labs repairs the full range of control electronics that keep industrial processes running. Component-level repair delivers faster turnaround and greater cost savings.',
    services: [
      'Control card diagnostics',
      'Component-level PCB repair',
      'DC drive repair & testing',
      'Industrial power supply repair',
      'SMPS repair',
      'Relay & contactor servicing',
      'Custom circuit board repair',
      'Burn-in testing & validation',
    ],
    causes: ['Component Failure', 'Overvoltage Damage', 'Moisture/Corrosion', 'Thermal Damage', 'Short Circuit Damage'],
    brands: ['All Makes', 'Custom PCBs', 'Industrial OEM Boards'],
    icon: '🔌',
    image: '/services/controlcards&drives.png',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-brand-dark min-h-[480px]">
        <div className="absolute right-0 inset-y-0 w-[52%]">
          <img src="/headers/_services.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0a1628 0%, rgba(10,22,40,0.55) 35%, transparent 65%)' }} />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label text-brand-gold">What We Offer</span>
            <h1 className="font-heading text-6xl md:text-7xl font-900 text-white mt-3 leading-tight" style={{ fontWeight: 900 }}>
              OUR SERVICES
            </h1>
            <div className="gold-line mt-4" />
            <p className="text-white/70 text-lg mt-6 leading-relaxed font-body max-w-2xl">
              Comprehensive industrial automation repair and maintenance. All major brands. Expert engineers. Guaranteed results.
            </p>
          </div>
        </div>
      </section>

      {/* Service Anchors Nav */}
      <div className="sticky top-[60px] z-40 bg-white border-b border-brand-gray-light shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 rounded-lg text-xs font-mono font-600 text-brand-gray-dark hover:bg-brand-blue/5 hover:text-brand-blue transition-colors whitespace-nowrap"
                style={{ fontWeight: 600 }}
              >
                {s.tag}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-brand-off-white bg-circuit-pattern'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Left: Content */}
              <ScrollReveal>
                <div>
                  <div className="inline-flex items-center gap-2 bg-brand-gold/10 rounded-full px-4 py-2 mb-6">
                    <span className="text-lg">{service.icon}</span>
                    <span className="section-label">{service.tag} Services</span>
                  </div>
                  <h2 className="font-heading text-4xl md:text-5xl font-900 text-brand-blue-dark leading-tight" style={{ fontWeight: 900 }}>
                    {service.title}
                  </h2>
                  <p className="text-brand-gold-dark text-sm font-mono mt-1 mb-4">{service.subtitle}</p>
                  <div className="gold-line mb-6" />
                  <p className="text-brand-gray-mid leading-relaxed font-body text-sm mb-8">
                    {service.description}
                  </p>

                  {/* Services list */}
                  <div className="grid grid-cols-2 gap-2.5 mb-8">
                    {service.services.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                        <span className="text-brand-gray-dark text-xs font-body leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-600 text-white text-sm" style={{ fontWeight: 600 }}>
                    Get a Quick Fix Quote →
                  </Link>
                </div>
              </ScrollReveal>

              {/* Right: Cards */}
              <ScrollReveal delay={200}>
                <div className="space-y-5">
                  {/* Service image */}
                  <div className="rounded-2xl overflow-hidden border border-brand-gray-light shadow-sm">
                    <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
                  </div>

                  {/* Common faults */}
                  <div className="bg-brand-blue-dark rounded-2xl p-7">
                    <h4 className="font-heading text-lg font-700 text-brand-gold mb-4" style={{ fontWeight: 700 }}>
                      Common Failure Causes
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.causes.map((c) => (
                        <span key={c} className="bg-white/10 text-white/80 text-xs font-body px-3 py-1.5 rounded-lg border border-white/10">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Brands */}
                  <div className="bg-white border border-brand-gray-light rounded-2xl p-7 shadow-sm">
                    <h4 className="font-heading text-lg font-700 text-brand-blue-dark mb-4" style={{ fontWeight: 700 }}>
                      Brands We Service
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.brands.map((b) => (
                        <span key={b} className="bg-brand-off-white text-brand-blue text-xs font-mono px-3 py-1.5 rounded-lg border border-brand-gray-light hover:border-brand-gold/40 transition-colors">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA mini card */}
                  <div className="bg-brand-gold rounded-2xl p-6">
                    <p className="font-heading text-lg font-800 text-white" style={{ fontWeight: 800 }}>
                      Need urgent {service.tag} repair?
                    </p>
                    <p className="text-white/80 text-sm font-body mt-1 mb-4">
                      Call us now for same-day assessment.
                    </p>
                    <a href="tel:03332707900" className="inline-flex items-center gap-2 bg-white text-brand-gold-dark text-sm font-700 font-body px-5 py-2.5 rounded-lg hover:bg-brand-off-white transition-colors" style={{ fontWeight: 700 }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      03332707900
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-5xl font-900 text-white mb-5" style={{ fontWeight: 900 }}>
              Not sure what you need?
            </h2>
            <p className="text-white/70 font-body mb-8">
              Our engineers will diagnose your device and recommend the right solution. Free initial assessment.
            </p>
            <Link href="/contact" className="btn-gold px-8 py-4 rounded-xl font-700 text-white font-body" style={{ fontWeight: 700 }}>
              Book a Free Diagnosis →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
