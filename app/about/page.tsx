import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import ScrollReveal from '@/components/ScrollReveal'

const values = [
  { title: 'Precision', desc: 'Every repair is performed with meticulous attention to detail and verified by rigorous testing.', icon: '🎯' },
  { title: 'Speed', desc: 'We understand downtime costs money. Our streamlined processes ensure the fastest possible turnaround.', icon: '⚡' },
  { title: 'Integrity', desc: 'Transparent diagnostics, honest quotes, and no surprise charges — ever.', icon: '🤝' },
  { title: 'Expertise', desc: 'Our engineers are trained across all major industrial brands and continuously update their skills.', icon: '🎓' },
]

const team = [
  { name: 'Chief Engineer', role: 'Head of VFD & Drive Systems', exp: '18 yrs', initial: 'CE' },
  { name: 'Senior Technician', role: 'PLC & Automation Specialist', exp: '12 yrs', initial: 'ST' },
  { name: 'Repair Lead', role: 'Servo & Generator Systems', exp: '10 yrs', initial: 'RL' },
  { name: 'QA Engineer', role: 'Testing & Commissioning', exp: '8 yrs', initial: 'QA' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-brand-dark min-h-[480px]">
        <div className="absolute right-0 inset-y-0 w-[52%]">
          <img src="/headers/_about.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0a1628 0%, rgba(10,22,40,0.55) 35%, transparent 65%)' }} />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label text-brand-gold">About HOAK Labs</span>
            <h1 className="font-heading text-6xl md:text-7xl font-900 text-white mt-3 leading-tight" style={{ fontWeight: 900 }}>
              WHO WE ARE
            </h1>
            <div className="gold-line mt-4" />
            <p className="text-white/70 text-lg mt-6 leading-relaxed font-body max-w-2xl">
              HOAK Labs is Karachi&apos;s premier industrial automation repair specialist. For over 15 years,
              we have been reviving the devices that power Pakistan&apos;s manufacturing sector.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <SectionHeader
                  label="Our Story"
                  title="Built on "
                  highlight="Engineering"
                  subtitle="HOAK Labs was founded with a single mission: give industrial equipment a second life."
                />
                <p className="text-brand-gray-mid leading-relaxed font-body text-sm mb-4">
                  What began as a small workshop in Karachi has grown into a trusted name across Pakistan&apos;s
                  industrial landscape. We started by repairing the variable frequency drives and PLCs that
                  factories were discarding as unrepairable — and proving them wrong.
                </p>
                <p className="text-brand-gray-mid leading-relaxed font-body text-sm mb-6">
                  Today, HOAK Labs services clients across manufacturing, textiles, food processing, energy,
                  and more. Our team of certified engineers handles everything from basic VFD diagnostics to
                  complex PLC system upgrades, always with the same commitment to quality and speed.
                </p>
                <Link
                  href="/contact"
                  className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-600 text-white text-sm"
                  style={{ fontWeight: 600 }}
                >
                  Talk to Our Team →
                </Link>
              </div>
            </ScrollReveal>

            {/* Stats panel */}
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Devices Revived', sub: 'Across all brands & models' },
                  { value: '15+', label: 'Years Experience', sub: 'In industrial automation' },
                  { value: '98%', label: 'Success Rate', sub: 'On first-time repairs' },
                  { value: '200+', label: 'Clients Served', sub: 'Across Pakistan' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-brand-off-white rounded-2xl p-6 border border-brand-gray-light hover:border-brand-gold/40 hover:shadow-card-hover transition-all duration-300"
                  >
                    <p className="font-heading text-4xl font-900 text-brand-gold" style={{ fontWeight: 900 }}>{s.value}</p>
                    <p className="font-heading text-sm font-700 text-brand-blue-dark mt-1" style={{ fontWeight: 700 }}>{s.label}</p>
                    <p className="text-brand-gray-mid text-xs font-body mt-0.5">{s.sub}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-brand-gold/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-heading text-3xl font-800 text-white mb-4" style={{ fontWeight: 800 }}>Our Mission</h3>
                <div className="gold-line mb-5" />
                <p className="text-white/70 leading-relaxed font-body">
                  To extend the operational life of industrial automation equipment through expert repair,
                  maintenance and upgrades — reducing waste, cutting costs, and keeping Pakistan&apos;s
                  factories running at peak efficiency.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-brand-gold/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">🔭</span>
                </div>
                <h3 className="font-heading text-3xl font-800 text-white mb-4" style={{ fontWeight: 800 }}>Our Vision</h3>
                <div className="gold-line mb-5" />
                <p className="text-white/70 leading-relaxed font-body">
                  To be the most trusted name in industrial automation services across South Asia —
                  recognised not just for technical excellence, but for the partnerships we build
                  with every client we serve.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-off-white bg-circuit-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Our Core Values"
              title="What Drives "
              highlight="Us"
              centered
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 text-center service-card shadow-sm">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-heading text-xl font-700 text-brand-blue-dark mb-3" style={{ fontWeight: 700 }}>{v.title}</h3>
                  <p className="text-brand-gray-mid text-sm leading-relaxed font-body">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Our People"
              title="Meet Our "
              highlight="Engineers"
              subtitle="Certified professionals with deep expertise in industrial automation systems."
              centered
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-24 h-24 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-5 shadow-blue-glow group-hover:scale-105 transition-transform duration-300">
                    <span className="font-heading text-2xl font-800 text-brand-gold" style={{ fontWeight: 800 }}>{member.initial}</span>
                  </div>
                  <h4 className="font-heading text-lg font-700 text-brand-blue-dark" style={{ fontWeight: 700 }}>{member.name}</h4>
                  <p className="text-brand-gray-mid text-sm font-body mt-1">{member.role}</p>
                  <span className="inline-block mt-2 bg-brand-gold/10 text-brand-gold-dark text-xs font-mono px-3 py-1 rounded-full">
                    {member.exp} Experience
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="section-label text-brand-gold">Why HOAK Labs</span>
            <h2 className="font-heading text-5xl font-900 text-white mt-3 mb-10" style={{ fontWeight: 900 }}>
              The HOAK Difference
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'All Brands', desc: 'Siemens, ABB, Schneider, Mitsubishi, Allen-Bradley and more.', icon: '🏭' },
                { title: 'Free Diagnosis', desc: 'We assess your device thoroughly before committing to a quote.', icon: '🔬' },
                { title: 'Guaranteed Work', desc: 'All repairs come with a service warranty for your peace of mind.', icon: '🛡' },
              ].map((item) => (
                <div key={item.title} className="bg-white/10 border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-all duration-300">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-heading text-xl font-700 text-white mb-2" style={{ fontWeight: 700 }}>{item.title}</h3>
                  <p className="text-white/60 text-sm font-body">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/contact" className="btn-gold px-8 py-4 rounded-xl font-700 text-white font-body" style={{ fontWeight: 700 }}>
                Contact Our Team →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
