import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Fonts are loaded via CSS @import in globals.css for portability

export const metadata: Metadata = {
  title: 'HOAK Labs — Reviving Your Devices',
  description:
    'Expert repair, maintenance and upgrade services for VFDs, PLCs, Servo Drives, Generator Controllers and industrial automation systems. Based in Karachi.',
  keywords:
    'VFD repair, PLC repair, servo drive, generator controller, industrial automation, Karachi',
  openGraph: {
    title: 'HOAK Labs — Reviving Your Devices',
    description: 'Industrial automation repair & maintenance specialists.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body bg-white text-brand-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
