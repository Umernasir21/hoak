import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import ScrollReveal from '@/components/ScrollReveal'

const industries = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: '🏭',
    description:
      'Production lines depend on reliable automation. HOAK Labs keeps manufacturing facilities running with fast-response VFD, PLC and servo drive repair services that minimize costly downtime.',
    applications: ['Conveyor Systems', 'CNC Machines', 'Injection Moulding', 'Assembly Lines', 'Packaging Lines', 'Robotic Systems'],
    benefit: 'Reduce unplanned downtime by up to 70% with preventive maintenance programs.',
  },
  {
    id: 'textile',
    title: 'Textile Industry',
    icon: '🧵',
    description:
      'Textile mills are heavily dependent on variable speed motor control. HOAK Labs has deep expertise in the VFDs and servo drives that power spinning, weaving and finishing equipment.',
    applications: ['Spinning Machines', 'Weaving Looms', 'Dyeing Machines', 'Winding Equipment', 'Finishing Lines', 'Water Treatment'],
    benefit: 'Expert in all drives used in major Pakistani textile mills.',
  },
  {
    id: 'energy',
    title: 'Energy & Power',
    icon: '⚡',
    description:
      'Power generation and distribution facilities require the highest standards of reliability. HOAK Labs services generator controllers, synchronizing panels, and control systems for energy sector clients.',
    applications: ['Generator Sets', 'Synchronizing Panels', 'Substations', 'UPS Systems', 'Solar Inverters', 'Pump Stations'],
    benefit: 'Critical power systems repaired with zero-compromise quality standards.',
  },
  {
    id: 'food',
    title: 'Food & Beverage',
    icon: '🍶',
    description:
      'Food processing facilities require automation that meets hygiene standards and operates without interruption. Our repair services are designed for the unique demands of food industry equipment.',
    applications: ['Filling Lines', 'Mixing Systems', 'Conveyor Belts', 'Cooling Systems', 'Packaging Machines', 'Pasteurizers'],
    benefit: 'Rapid response service to prevent product spoilage from downtime.',
  },
  {
    id: 'cement',
    title: 'Cement & Chemicals',
    icon: '🏗',
    description:
      'Heavy industry applications demand robust, reliable control systems. HOAK Labs services the large-scale drives and controllers used in cement plants, chemical facilities, and process industries.',
    applications: ['Kiln Drives', 'Crusher Systems', 'Mill Drives', 'Compressor Control', 'Pump Systems', 'Process Controllers'],
    benefit: 'Experience with high-power industrial drives up to several MW.',
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    icon: '🔧',
    description:
      'Not every problem fits a standard solution. HOAK Labs offers custom engineering services for unique automation challenges, from reverse engineering obsolete boards to designing replacement systems.',
    applications: ['Obsolete Equipment', 'Legacy System Support', 'Custom PCB Repair', 'System Redesign', 'Integration Projects', 'Training Services'],
    benefit: 'If it can be fixed, we will find a way. No job is too complex.',
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label text-brand-gold">Industry Expertise</span>
            <h1 className="font-heading text-6xl md:text-7xl font-900 text-white mt-3 leading-tight" style={{ fontWeight: 900 }}>
              INDUSTRIES<br />WE SERVE
            </h1>
            <div className="gold-line mt-4" />
            <p className="text-white/70 text-lg mt-6 leading-relaxed font-body max-w-2xl">
              From textile mills to cement plants, HOAK Labs brings deep sector knowledge to every repair.
            </p>
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Sectors"
              title="Cross-Industry "
              highlight="Expertise"
              subtitle="We have serviced automation equipment across virtually every segment of Pakistani industry."
              centered
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <ScrollReveal key={industry.id} delay={i * 80}>
                <div className="service-card bg-white rounded-2xl border border-brand-gray-light shadow-sm p-8 h-full">
                  <div className="text-5xl mb-5">{industry.icon}</div>
                  <h3 className="font-heading text-2xl font-800 text-brand-blue-dark mb-3" style={{ fontWeight: 800 }}>
                    {industry.title}
                  </h3>
                  <p className="text-brand-gray-mid text-sm leading-relaxed font-body mb-5">
                    {industry.description}
                  </p>

                  {/* Applications */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {industry.applications.map((app) => (
                      <span key={app} className="bg-brand-off-white text-brand-gray-dark text-xs font-body px-2.5 py-1 rounded-lg border border-brand-gray-light">
                        {app}
                      </span>
                    ))}
                  </div>

                  {/* Benefit */}
                  <div className="bg-brand-gold/10 border-l-4 border-brand-gold rounded-r-xl p-4">
                    <p className="text-brand-gold-dark text-xs font-body leading-relaxed">
                      {industry.benefit}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions strip */}
      <section className="py-20 bg-brand-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Our Approach"
              title="Industry-Specific "
              highlight="Solutions"
              subtitle="We don't just repair equipment — we understand the context in which it operates."
              centered
              light
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'On-Site Assessment', desc: 'We come to your facility for complex or critical systems requiring in-place diagnosis.', icon: '📍' },
              { title: 'Emergency Response', desc: 'Priority service for critical production failures. We understand downtime costs.', icon: '🚨' },
              { title: 'Preventive Programs', desc: 'Scheduled maintenance contracts to prevent failures before they impact production.', icon: '📅' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-brand-gold/30 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-heading text-xl font-700 text-white mb-3" style={{ fontWeight: 700 }}>{item.title}</h3>
                  <p className="text-white/60 text-sm font-body">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-off-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="section-label">Get Sector-Specific Help</span>
            <h2 className="font-heading text-4xl font-900 text-brand-blue-dark mt-3 mb-5" style={{ fontWeight: 900 }}>
              Tell Us About Your Industry
            </h2>
            <p className="text-brand-gray-mid font-body mb-8">
              Our team has industry-specific experience to provide the right solution for your application.
            </p>
            <Link href="/contact" className="btn-gold px-8 py-4 rounded-xl font-700 text-white font-body" style={{ fontWeight: 700 }}>
              Discuss Your Requirements →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
