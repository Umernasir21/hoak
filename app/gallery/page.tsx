'use client'

import { useState, useEffect, useCallback } from 'react'

type MediaType = 'image' | 'video'
type FilterType = 'all' | 'image' | 'video'

interface MediaItem {
  id: number
  type: MediaType
  src: string
  alt: string
}

const media: MediaItem[] = [
  { id: 1,  type: 'image', src: '/gallery/img-01.jpg',  alt: 'Hager EG010 timer module repair' },
  { id: 2,  type: 'video', src: '/gallery/vid-01.mp4',  alt: 'Workshop repair process' },
  { id: 3,  type: 'image', src: '/gallery/img-02.jpg',  alt: 'Control board diagnostics' },
  { id: 4,  type: 'video', src: '/gallery/vid-02.mp4',  alt: 'Component testing procedure' },
  { id: 5,  type: 'image', src: '/gallery/img-03.jpg',  alt: 'PCB component level repair' },
  { id: 6,  type: 'image', src: '/gallery/img-04.jpg',  alt: 'Drive system inspection' },
  { id: 7,  type: 'video', src: '/gallery/vid-03.mp4',  alt: 'Drive commissioning' },
  { id: 8,  type: 'image', src: '/gallery/img-05.jpg',  alt: 'Control panel servicing' },
  { id: 9,  type: 'image', src: '/gallery/img-06.jpg',  alt: 'Servo drive repair' },
  { id: 10, type: 'video', src: '/gallery/vid-04.mp4',  alt: 'System load testing' },
  { id: 11, type: 'image', src: '/gallery/img-07.jpg',  alt: 'Generator controller overhaul' },
  { id: 12, type: 'image', src: '/gallery/img-08.jpg',  alt: 'DEIF controller repair' },
  { id: 13, type: 'video', src: '/gallery/vid-05.mp4',  alt: 'Equipment commissioning' },
  { id: 14, type: 'image', src: '/gallery/img-09.jpg',  alt: 'Industrial electronics repair' },
  { id: 15, type: 'image', src: '/gallery/img-10.jpg',  alt: 'Automation component servicing' },
  { id: 16, type: 'image', src: '/gallery/img-11.jpg',  alt: 'Control system overhaul' },
]

const imageCount = media.filter(m => m.type === 'image').length
const videoCount = media.filter(m => m.type === 'video').length

export default function GalleryPage() {
  const [filter, setFilter]         = useState<FilterType>('all')
  const [lightbox, setLightbox]     = useState<MediaItem | null>(null)
  const [lightboxIdx, setLightboxIdx] = useState(0)

  const filtered = filter === 'all' ? media : media.filter(m => m.type === filter)

  const openLightbox = (item: MediaItem) => {
    setLightboxIdx(filtered.indexOf(item))
    setLightbox(item)
  }

  const close = () => setLightbox(null)

  const prev = useCallback(() => {
    const i = (lightboxIdx - 1 + filtered.length) % filtered.length
    setLightboxIdx(i)
    setLightbox(filtered[i])
  }, [lightboxIdx, filtered])

  const next = useCallback(() => {
    const i = (lightboxIdx + 1) % filtered.length
    setLightboxIdx(i)
    setLightbox(filtered[i])
  }, [lightboxIdx, filtered])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      close()
      if (e.key === 'ArrowLeft')   prev()
      if (e.key === 'ArrowRight')  next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, prev, next])

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        {/* Decorative gold accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-gold/5 blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label text-brand-gold">Behind the Scenes</span>
          <h1
            className="font-heading text-6xl md:text-7xl font-900 text-white mt-3 leading-tight"
            style={{ fontWeight: 900 }}
          >
            OUR GALLERY
          </h1>
          <div className="gold-line mt-4" />
          <p className="text-white/70 text-lg mt-6 leading-relaxed font-body max-w-2xl">
            A look inside our workshop — real repairs, real engineers, real results.
            Browse photos and videos straight from the field.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span className="text-white/60 text-sm font-mono">{imageCount} Photos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span className="text-white/60 text-sm font-mono">{videoCount} Videos</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ───────────────────────────────────── */}
      <div className="sticky top-[60px] z-40 bg-white border-b border-brand-gray-light shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3">
            {(
              [
                { key: 'all',   label: 'All',    count: media.length },
                { key: 'image', label: 'Photos', count: imageCount },
                { key: 'video', label: 'Videos', count: videoCount },
              ] as { key: FilterType; label: string; count: number }[]
            ).map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-5 py-2 rounded-full text-sm font-mono font-600 transition-all duration-200 ${
                  filter === key
                    ? 'bg-brand-gold text-white shadow-sm'
                    : 'bg-brand-off-white text-brand-gray-dark hover:bg-brand-gray-light'
                }`}
                style={{ fontWeight: 600 }}
              >
                {label}
                <span className={`ml-1.5 text-xs ${filter === key ? 'text-white/70' : 'text-brand-gray-mid'}`}>
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MASONRY GALLERY ──────────────────────────────── */}
      <section className="py-14 bg-[#f0f2f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid mb-5 group cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                {item.type === 'image' ? (
                  /* ── IMAGE CARD ── */
                  <div className="relative overflow-hidden rounded-2xl shadow-sm border border-white">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full object-cover block group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-brand-blue-dark/0 group-hover:bg-brand-blue-dark/40 transition-all duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/95 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                        <svg className="w-6 h-6 text-brand-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6m0 0v6m0-6L10 14M9 5H3a2 2 0 00-2 2v13a2 2 0 002 2h13a2 2 0 002-2v-6" />
                        </svg>
                      </div>
                    </div>
                    {/* Alt text badge */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-xs font-body truncate">{item.alt}</p>
                    </div>
                  </div>
                ) : (
                  /* ── VIDEO CARD ── */
                  <div className="relative overflow-hidden rounded-2xl shadow-sm border border-white bg-brand-blue-dark aspect-video">
                    <video
                      src={`${item.src}#t=0.5`}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-300"
                      muted
                      preload="metadata"
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-brand-gold group-hover:bg-brand-gold-light shadow-gold-glow flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-xs font-mono tracking-widest uppercase bg-black/30 px-3 py-1 rounded-full">
                        Play Video
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
          onClick={close}
        >
          {/* ✕ Close button — top-right, always visible */}
          <button
            onClick={(e) => { e.stopPropagation(); close() }}
            className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.35)' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5a800')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)')}
            aria-label="Close"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter — top-left */}
          <div className="absolute top-5 left-5 z-20 flex items-center gap-3">
            <span className="text-white/60 text-sm font-mono bg-black/40 px-3 py-1 rounded-full">
              {lightboxIdx + 1} / {filtered.length}
            </span>
          </div>

          {/* Caption — top-center */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
            <span className="text-white/50 text-xs font-body bg-black/30 px-3 py-1 rounded-full max-w-xs truncate block">
              {lightbox.alt}
            </span>
          </div>

          {/* ← Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-200"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.25)' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5a800')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Media viewer */}
          <div
            className="w-full max-w-5xl px-16 sm:px-20 flex items-center justify-center"
            style={{ maxHeight: '80vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === 'image' ? (
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-w-full object-contain rounded-xl shadow-2xl"
                style={{ maxHeight: '80vh' }}
              />
            ) : (
              <video
                key={lightbox.src}
                src={lightbox.src}
                controls
                autoPlay
                className="max-w-full w-full rounded-xl shadow-2xl"
                style={{ maxHeight: '80vh' }}
              />
            )}
          </div>

          {/* → Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-200"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.25)' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5a800')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnail strip */}
          <div
            className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 px-4 py-4 overflow-x-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}
          >
            {filtered.map((item, i) => (
              <button
                key={item.id}
                onClick={() => { setLightboxIdx(i); setLightbox(item) }}
                className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden transition-all duration-200 ${
                  i === lightboxIdx
                    ? 'ring-2 ring-brand-gold scale-110'
                    : 'opacity-50 hover:opacity-100 ring-1 ring-white/20'
                }`}
              >
                {item.type === 'image' ? (
                  <img src={item.src} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-brand-blue-dark flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
