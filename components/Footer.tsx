import Link from 'next/link'

const services = [
  { label: 'VFD Repairing', href: '/services#vfd' },
  { label: 'PLC Services', href: '/services#plc' },
  { label: 'Servo Drive Repair', href: '/services#servo' },
  { label: 'Generator Controllers', href: '/services#generator' },
  { label: 'HMI Systems', href: '/services#hmi' },
  { label: 'Control Cards', href: '/services#control' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      {/* CTA Banner */}
      <div className="bg-brand-gold py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-800 text-white" style={{ fontWeight: 800 }}>
              Ready to Revive Your Devices?
            </h3>
            <p className="text-white/80 mt-1 text-sm font-body">
              Get a free diagnostic quote from our expert engineers today.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-white text-brand-blue-dark px-7 py-3 rounded-lg font-body font-700 text-sm hover:bg-brand-off-white transition-colors shadow-lg"
            style={{ fontWeight: 700 }}
          >
            Contact Us Now →
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="HOAK Labs"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-body">
              Specialists in industrial automation repair and maintenance. Serving Pakistan&apos;s manufacturing sector with precision engineering.
            </p>
            <div className="mt-5 flex gap-3">
              {['facebook', 'linkedin', 'twitter'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors"
                  aria-label={platform}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-700 text-sm tracking-widest uppercase text-brand-gold mb-4" style={{ fontWeight: 700 }}>
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 text-sm font-body hover:text-brand-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-700 text-sm tracking-widest uppercase text-brand-gold mb-4" style={{ fontWeight: 700 }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 text-sm font-body hover:text-brand-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-700 text-sm tracking-widest uppercase text-brand-gold mb-4" style={{ fontWeight: 700 }}>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-brand-gold mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                <p className="text-white/60 text-sm font-body leading-relaxed">
                  Suit # 10, 12-J, Block – VI, PECHS,<br />
                  Shahrah e Faisal, Karachi
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-brand-gold mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </span>
                <div className="text-white/60 text-sm font-body">
                  <p>03332707900</p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-brand-gold flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </span>
                <a href="mailto:info@hoaklabs.com" className="text-white/60 text-sm font-body hover:text-brand-gold transition-colors">
                  info@hoaklabs.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-brand-gold flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </span>
                <a href="https://www.hoaklabs.com" target="_blank" rel="noopener noreferrer" className="text-white/60 text-sm font-body hover:text-brand-gold transition-colors">
                  www.hoaklabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs font-body">
          <p>© {new Date().getFullYear()} HOAK Labs. All rights reserved.</p>
          <p>Designed with precision. Built for industry.</p>
        </div>
      </div>
    </footer>
  )
}
