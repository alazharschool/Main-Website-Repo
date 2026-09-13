"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HeroSection() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const features = [
    { id: 'quran-reading', name: 'Quran Reading', href: '/services#quran-reading', top: '45%', left: '12%' },
    { id: 'hifz', name: 'Hifz (Memorization)', href: '/services#hifz', top: '45%', left: '32%' },
    { id: 'arabic', name: 'Arabic Language', href: '/services#arabic', top: '45%', left: '52%' },
    { id: 'islamic-studies', name: 'Islamic Studies', href: '/services#islamic-studies', top: '45%', left: '72%' },
    { id: 'teachers', name: 'Male & Female Teachers', href: '/services#teachers', top: '45%', left: '88%' },
  ]

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#f8f3eb]">
      {/* Base Visual Layer - Golden Master Image */}
      <div className="relative w-full h-screen">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/hero-gold-master.png"
            alt="Al-Azhar School Hero"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Interactive React/HTML Overlay Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        
        {/* Feature Icon Hotspots */}
        {features.map((feature) => (
          <Link
            key={feature.id}
            href={feature.href}
            className="absolute pointer-events-auto cursor-pointer group"
            style={{
              top: feature.top,
              left: feature.left,
              width: '8%',
              height: '12%',
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={() => setHoveredFeature(feature.id)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            {/* Invisible Hotspot */}
            <div className="w-full h-full rounded-full opacity-0 group-hover:opacity-20 bg-amber-500 transition-opacity duration-300" />
            
            {/* Tooltip */}
            {hoveredFeature === feature.id && (
              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#5a2600] text-white text-xs font-bold rounded-lg whitespace-nowrap z-50"
                style={{
                  fontFamily: 'Noto Serif',
                  fontWeight: 700,
                }}
              >
                {feature.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#5a2600]" />
              </div>
            )}
          </Link>
        ))}

        {/* CTA Overlay - Brown Ribbon */}
        <Link
          href="/contact"
          className="absolute pointer-events-auto cursor-pointer group"
          style={{
            bottom: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            height: '8%',
          }}
        >
          <div className="w-full h-full rounded-lg opacity-0 group-hover:opacity-10 bg-amber-500 transition-opacity duration-300" />
        </Link>

        {/* Social Media Hotspots (Bottom Right) */}
        <div className="absolute bottom-8 right-8 flex gap-3 pointer-events-auto">
          <Link
            href="https://www.youtube.com/@Al-AzharSchool-london"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-red-600/20 hover:bg-red-600/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <span className="text-white text-xs font-bold">YT</span>
          </Link>
          <Link
            href="https://www.facebook.com/al.azhar.school.2025"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-blue-600/20 hover:bg-blue-600/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <span className="text-white text-xs font-bold">FB</span>
          </Link>
          <Link
            href="https://www.instagram.com/school.alazhar/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-pink-600/20 hover:bg-pink-600/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <span className="text-white text-xs font-bold">IG</span>
          </Link>
        </div>

        {/* Book Now CTA Button (Bottom Center) */}
        <Link
          href="/contact"
          className="absolute pointer-events-auto cursor-pointer"
          style={{
            bottom: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <div
            className="px-8 py-3 rounded-lg font-black text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              fontFamily: 'Noto Serif',
              fontWeight: 900,
              background: 'linear-gradient(to right, #d4af37, #ffb300)',
              color: '#5a2600',
              border: '3px solid #5a2600',
              boxShadow: '0 8px 32px rgba(90,38,0,0.3)',
            }}
          >
            Book Now
          </div>
        </Link>
      </div>
    </div>
  )
}
