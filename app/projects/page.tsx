import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import ScrollReveal from '@/components/ScrollReveal'

const projects = [
  {
    id: 1,
    tag: 'VFD Repair',
    title: 'Siemens MICROMASTER 440 Fleet Overhaul',
    industry: 'Textile Manufacturing — Karachi',
    challenge:
      'A major textile mill had 12 Siemens MICROMASTER 440 VFDs failing intermittently, causing frequent production stoppages and quality defects in yarn production.',
    solution:
      'HOAK Labs performed full diagnostic analysis identifying power capacitor degradation and IGBT driver board faults as the root cause. All 12 units were systematically overhauled over a scheduled maintenance window.',
    result: '100% success rate. Production downtime reduced by 85%. Estimated savings of PKR 2.4M per year in lost production.',
    duration: '3 weeks',
    value: 'PKR 1.8M project',
    tags: ['Siemens', 'VFD', 'Textile', 'Preventive Maintenance'],
  },
  {
    id: 2,
    tag: 'PLC Upgrade',
    title: 'Legacy PLC Migration — Food Processing Plant',
    industry: 'Food & Beverage — Karachi Industrial Area',
    challenge:
      'An aging Allen-Bradley PLC-5 system controlling a high-speed filling line was becoming unreliable with spare parts no longer available. The client needed a migration path without halting production.',
    solution:
      'HOAK Labs developed a phased migration plan to CompactLogix platform, with complete program translation, I/O remap, and parallel testing. The cutover was executed during a planned shutdown weekend.',
    result: 'Seamless migration completed in 54 hours. System uptime improved from 87% to 99.2%. Full remote monitoring capability added.',
    duration: '6 weeks',
    value: 'PKR 3.2M project',
    tags: ['Allen-Bradley', 'PLC Upgrade', 'Food Processing', 'Migration'],
  },
  {
    id: 3,
    tag: 'Servo Drive',
    title: 'Multi-Axis Servo Drive Recovery',
    industry: 'Packaging — Lahore',
    challenge:
      'A packaging machine manufacturer had a critical Fanuc servo drive system fail, affecting a customer installation. The original supplier quoted 8-week lead time for replacement.',
    solution:
      'HOAK Labs received the failed drives, performed component-level diagnosis identifying a failed power stage and corrupted parameter memory. Repair was completed within 4 days including full load testing.',
    result: 'Machine operational within 5 days vs 8-week replacement. Client saved 90% on repair vs replacement cost. Machine has run 14 months without fault.',
    duration: '4 days',
    value: 'PKR 280K vs PKR 2.8M replacement',
    tags: ['Fanuc', 'Servo Drive', 'Packaging', 'Emergency Repair'],
  },
  {
    id: 4,
    tag: 'Generator Control',
    title: 'Data Centre Synchronizing Controller Repair',
    industry: 'IT Infrastructure — Karachi',
    challenge:
      'A data centre\'s DSE 8610 synchronizing controller failed during maintenance, leaving the facility relying on a single generator without proper load sharing and synchronization protection.',
    solution:
      'Emergency on-site attendance within 2 hours. DSE module diagnosed with CPU board failure. Component replaced and system recalibrated and recommissioned on-site.',
    result: 'Full redundancy restored within 6 hours of initial call. Zero data loss or service interruption. Annual maintenance contract established.',
    duration: '6 hours',
    value: 'Emergency response',
    tags: ['DSE', 'Generator', 'Data Centre', 'Emergency'],
  },
  {
    id: 5,
    tag: 'HMI Repair',
    title: 'Siemens TP2200 Comfort Panel Restoration',
    industry: 'Cement — Hub Industrial Zone',
    challenge:
      'Cement plant\'s primary process HMI suffered touchscreen failure and corrupted project data. The OEM quoted 16 weeks delivery for a replacement panel at high cost.',
    solution:
      'HOAK Labs replaced the damaged touchscreen overlay, recovered and re-flashed the project data from backup, and performed full functional testing against the SCADA system.',
    result: 'Panel fully operational within 10 days. Cost was 30% of replacement price. Customer data fully recovered.',
    duration: '10 days',
    value: 'PKR 320K vs PKR 1.1M replacement',
    tags: ['Siemens', 'HMI', 'Cement', 'Screen Repair'],
  },
  {
    id: 6,
    tag: 'DC Drive',
    title: 'DC Drive Fleet Maintenance — Steel Mill',
    industry: 'Steel Processing — Karachi',
    challenge:
      'A steel processing facility had 8 aging DC drives showing signs of deterioration with no local repair capability and long overseas repair times.',
    solution:
      'HOAK Labs established a preventive maintenance schedule, cleaning, inspecting, and recalibrating all drives. Two units required armature firing circuit board repairs.',
    result: 'All drives restored to optimal performance. Zero unplanned failures in subsequent 12 months. Annual contract signed.',
    duration: 'Ongoing contract',
    value: 'Annual maintenance program',
    tags: ['DC Drives', 'Steel', 'Preventive Maintenance', 'Fleet'],
  },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label text-brand-gold">Our Work</span>
            <h1 className="font-heading text-6xl md:text-7xl font-900 text-white mt-3 leading-tight" style={{ fontWeight: 900 }}>
              CASE STUDIES
            </h1>
            <div className="gold-line mt-4" />
            <p className="text-white/70 text-lg mt-6 leading-relaxed font-body max-w-2xl">
              Real projects. Real results. See how HOAK Labs has helped clients across Pakistan reduce downtime and recover critical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-brand-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Devices Repaired' },
              { value: '98%', label: 'First-Fix Success Rate' },
              { value: '48hr', label: 'Average Turnaround' },
              { value: 'PKR 50M+', label: 'Client Savings Generated' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl md:text-5xl font-900 text-white" style={{ fontWeight: 900 }}>{stat.value}</p>
                <p className="text-white/80 text-sm font-body mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Selected Projects"
              title="Proven "
              highlight="Results"
              subtitle="Each project represents a customer whose production was restored, costs were saved, and trust was earned."
            />
          </ScrollReveal>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 60}>
                <div className="service-card bg-white border border-brand-gray-light rounded-2xl overflow-hidden shadow-sm">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Main content */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-brand-blue/10 text-brand-blue text-xs font-mono px-3 py-1.5 rounded-full">
                          {project.tag}
                        </span>
                        <span className="text-brand-gray-mid text-xs font-body">{project.industry}</span>
                      </div>

                      <h3 className="font-heading text-2xl font-800 text-brand-blue-dark mb-5" style={{ fontWeight: 800 }}>
                        {project.title}
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <p className="section-label mb-1">The Challenge</p>
                          <p className="text-brand-gray-mid text-sm font-body leading-relaxed">{project.challenge}</p>
                        </div>
                        <div>
                          <p className="section-label mb-1">Our Solution</p>
                          <p className="text-brand-gray-mid text-sm font-body leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="bg-brand-off-white text-brand-gray-dark text-xs font-body px-2.5 py-1 rounded-lg border border-brand-gray-light">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Result panel */}
                    <div className="bg-brand-blue-dark p-8 flex flex-col justify-between">
                      <div>
                        <p className="section-label text-brand-gold mb-3">Result</p>
                        <p className="text-white/80 text-sm font-body leading-relaxed">{project.result}</p>
                      </div>

                      <div className="mt-6 space-y-3 pt-6 border-t border-white/10">
                        <div className="flex justify-between items-center">
                          <span className="text-white/50 text-xs font-body">Duration</span>
                          <span className="text-brand-gold text-xs font-mono font-600" style={{ fontWeight: 600 }}>{project.duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white/50 text-xs font-body">Value</span>
                          <span className="text-brand-gold text-xs font-mono font-600" style={{ fontWeight: 600 }}>{project.value}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-5xl font-900 text-white mb-5" style={{ fontWeight: 900 }}>
              Your Success Story Starts Here
            </h2>
            <p className="text-white/70 font-body mb-8">
              Join hundreds of satisfied clients who trust HOAK Labs to keep their operations running.
            </p>
            <Link href="/contact" className="btn-gold px-8 py-4 rounded-xl font-700 text-white font-body" style={{ fontWeight: 700 }}>
              Start Your Project →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
