'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-nav py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="HOAK Labs"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-body font-500 transition-all duration-200 relative group ${
                    isActive
                      ? 'text-brand-gold font-600'
                      : scrolled
                      ? 'text-brand-gray-dark hover:text-brand-blue'
                      : 'text-white/90 hover:text-white'
                  }`}
                  style={{ fontWeight: isActive ? 600 : 500 }}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-brand-gold rounded-full transition-all duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="btn-gold px-5 py-2.5 rounded-lg text-sm font-body font-600 text-white"
            style={{ fontWeight: 600 }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? 'text-brand-blue-dark' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-brand-blue/5 text-brand-blue font-600'
                  : 'text-brand-gray-dark hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <Link
              href="/contact"
              className="btn-gold block text-center px-5 py-3 rounded-lg text-sm font-600 text-white"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
