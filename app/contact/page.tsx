'use client'

import { useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import ScrollReveal from '@/components/ScrollReveal'

const serviceOptions = [
  'VFD Repair / Maintenance',
  'PLC Services / Upgrades',
  'Servo Drive Repair',
  'Generator Controller',
  'HMI / Panel Repair',
  'Control Cards / DC Drives',
  'Preventive Maintenance Contract',
  'Emergency On-site Service',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    device: '',
    urgency: 'standard',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, send to API route or form service
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-brand-dark min-h-[480px]">
        <div className="absolute right-0 inset-y-0 w-[52%]">
          <img src="/headers/_contact.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0a1628 0%, rgba(10,22,40,0.55) 35%, transparent 65%)' }} />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label text-brand-gold">Get in Touch</span>
            <h1 className="font-heading text-6xl md:text-7xl font-900 text-white mt-3 leading-tight" style={{ fontWeight: 900 }}>
              CONTACT US
            </h1>
            <div className="gold-line mt-4" />
            <p className="text-white/70 text-lg mt-6 leading-relaxed font-body max-w-2xl">
              Ready to revive your device? Get a free diagnostic assessment and quote from our expert engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-brand-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <SectionHeader
                  label="Reach Us"
                  title="Let's "
                  highlight="Talk"
                  subtitle="Our team is ready to help diagnose and repair your industrial equipment."
                />

                <div className="space-y-5">
                  {[
                    {
                      icon: '📍',
                      label: 'Address',
                      value: 'Suit # 10, 12-J, Block – VI, PECHS, Shahrah e Faisal, Karachi',
                      href: null,
                    },
                    {
                      icon: '📞',
                      label: 'Phone',
                      value: '03332707900',
                      href: 'tel:03332707900',
                    },
                    {
                      icon: '✉️',
                      label: 'Email',
                      value: 'info@hoaklabs.com',
                      href: 'mailto:info@hoaklabs.com',
                    },
                    {
                      icon: '🌐',
                      label: 'Website',
                      value: 'www.hoaklabs.com',
                      href: 'https://www.hoaklabs.com',
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 bg-white rounded-xl p-4 border border-brand-gray-light">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="section-label text-[10px]">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-brand-blue text-sm font-body hover:text-brand-gold transition-colors font-500" style={{ fontWeight: 500 }}>
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-brand-gray-dark text-sm font-body">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Working hours */}
                <div className="mt-6 bg-brand-blue-dark rounded-2xl p-6">
                  <h4 className="font-heading text-lg font-700 text-brand-gold mb-4" style={{ fontWeight: 700 }}>
                    Working Hours
                  </h4>
                  <div className="space-y-2 text-sm font-body">
                    <div className="flex justify-between text-white/70">
                      <span>Monday – Saturday</span>
                      <span className="text-white">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Sunday</span>
                      <span className="text-white">Emergency Only</span>
                    </div>
                  </div>
                  <p className="mt-4 text-brand-gold text-xs font-body">
                    ⚡ Emergency repairs available 24/7 — call 03332707900
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={150}>
                {submitted ? (
                  <div className="bg-white rounded-2xl border border-brand-gray-light shadow-sm p-12 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                    <div className="text-6xl mb-5">✅</div>
                    <h3 className="font-heading text-3xl font-800 text-brand-blue-dark mb-3" style={{ fontWeight: 800 }}>
                      Request Received!
                    </h3>
                    <p className="text-brand-gray-mid font-body max-w-md">
                      Thank you for contacting HOAK Labs. Our team will review your request and get back to you within 2-4 business hours.
                    </p>
                    <p className="mt-4 text-sm text-brand-gray-mid font-body">
                      For urgent queries, call: <a href="tel:03332707900" className="text-brand-blue font-600">03332707900</a>
                    </p>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border border-brand-gray-light shadow-sm p-8 md:p-10">
                    <h3 className="font-heading text-2xl font-800 text-brand-blue-dark mb-2" style={{ fontWeight: 800 }}>
                      Request a Free Quote
                    </h3>
                    <p className="text-brand-gray-mid text-sm font-body mb-8">
                      Fill in the details below and our team will get back to you with a diagnosis plan and quote.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block section-label mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Muhammad Ahmad"
                            className="w-full px-4 py-3 rounded-xl border border-brand-gray-light bg-brand-off-white text-brand-gray-dark font-body text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block section-label mb-2">Company / Organization</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company Pvt. Ltd."
                            className="w-full px-4 py-3 rounded-xl border border-brand-gray-light bg-brand-off-white text-brand-gray-dark font-body text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block section-label mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className="w-full px-4 py-3 rounded-xl border border-brand-gray-light bg-brand-off-white text-brand-gray-dark font-body text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block section-label mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="0300-0000000"
                            className="w-full px-4 py-3 rounded-xl border border-brand-gray-light bg-brand-off-white text-brand-gray-dark font-body text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block section-label mb-2">Service Required *</label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-brand-gray-light bg-brand-off-white text-brand-gray-dark font-body text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block section-label mb-2">Device / Equipment Details</label>
                        <input
                          type="text"
                          name="device"
                          value={formData.device}
                          onChange={handleChange}
                          placeholder="e.g. Siemens MICROMASTER 440, 18.5kW, fault code F0001"
                          className="w-full px-4 py-3 rounded-xl border border-brand-gray-light bg-brand-off-white text-brand-gray-dark font-body text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block section-label mb-2">Urgency Level</label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { value: 'standard', label: 'Standard', sub: '3-5 days' },
                            { value: 'priority', label: 'Priority', sub: '24-48 hrs' },
                            { value: 'emergency', label: 'Emergency', sub: 'Same day' },
                          ].map((opt) => (
                            <label
                              key={opt.value}
                              className={`cursor-pointer rounded-xl border-2 p-3 text-center transition-all ${
                                formData.urgency === opt.value
                                  ? 'border-brand-blue bg-brand-blue/5'
                                  : 'border-brand-gray-light hover:border-brand-blue/40'
                              }`}
                            >
                              <input
                                type="radio"
                                name="urgency"
                                value={opt.value}
                                checked={formData.urgency === opt.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <p className="font-body font-600 text-sm text-brand-blue-dark" style={{ fontWeight: 600 }}>{opt.label}</p>
                              <p className="text-brand-gray-mid text-xs font-body mt-0.5">{opt.sub}</p>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block section-label mb-2">Additional Information</label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe the symptoms, fault codes, or any other relevant details..."
                          className="w-full px-4 py-3 rounded-xl border border-brand-gray-light bg-brand-off-white text-brand-gray-dark font-body text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-gold w-full py-4 rounded-xl font-body font-700 text-white text-base"
                        style={{ fontWeight: 700 }}
                      >
                        Submit Request — Get Free Quote
                      </button>

                      <p className="text-center text-brand-gray-mid text-xs font-body">
                        We respond within 2-4 business hours. For emergencies, call{' '}
                        <a href="tel:03332707900" className="text-brand-blue hover:underline">03332707900</a>
                      </p>
                    </form>
                  </div>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
