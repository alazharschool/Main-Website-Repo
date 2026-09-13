"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HeroSection() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const features = [
    { id: 'quran-reading', name: 'Quran Reading', href: '/services#quran-reading', icon: '📖' },
    { id: 'hifz', name: 'Hifz (Memorization)', href: '/services#hifz', icon: '📚' },
    { id: 'arabic', name: 'Arabic Language', href: '/services#arabic', icon: '🌍' },
    { id: 'islamic-studies', name: 'Islamic Studies', href: '/services#islamic-studies', icon: '🕌' },
    { id: 'teachers', name: 'Male & Female Teachers', href: '/services#teachers', icon: '👨‍🏫' },
  ]

  return (
    <div className="w-full bg-[#f8f3eb] py-8 sm:py-12 lg:py-16">
      {/* Perfect Fit Container - Locked Aspect Ratio */}
      <div className="relative w-full max-w-[1400px] mx-auto aspect-[16/7] overflow-hidden">
        
        {/* Base Visual Layer - Golden Master Image with Contain */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero/hero-gold-master.png"
            alt="Al-Azhar School Hero"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
        </div>

        {/* Modular Component Layering - Desktop */}
        <div className="absolute inset-0 z-10 hidden md:block">
          
          {/* Left Layer - 3D Quran Pedestal */}
          <div className="absolute top-[10%] left-[3%] w-[38%] h-[80%] z-10">
            <div className="relative w-full h-full">
              <Image
                src="/quran_7221480.png"
                alt="Quran on Pedestal"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Title Layer - "Al-Azhar School" */}
          <div className="absolute top-[12%] right-[8%] w-[48%] z-10">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-black text-center"
              style={{
                fontFamily: 'Noto Serif',
                fontWeight: 900,
                color: '#d4af37',
                letterSpacing: '3px',
                textShadow: '3px 3px 0 #5a2600, 4px 4px 8px rgba(0,0,0,0.3)',
                lineHeight: 1.1,
              }}
            >
              Al-Azhar School
            </h1>
          </div>

          {/* Subtitle Layer - "LEARN QURAN ONLINE" */}
          <div className="absolute top-[32%] right-[8%] w-[48%] z-10">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-black text-center"
              style={{
                fontFamily: 'Noto Serif',
                fontWeight: 900,
                color: '#5a2600',
                letterSpacing: '2px',
                textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
              }}
            >
              LEARN QURAN ONLINE
            </h2>
          </div>

          {/* Subtitle & Badges Layer */}
          <div className="absolute top-[48%] right-[8%] w-[48%] z-10">
            <div className="grid grid-cols-3 gap-2">
              {features.map((feature, index) => (
                <Link
                  key={feature.id}
                  href={feature.href}
                  className="flex flex-col items-center justify-center p-2 bg-white/90 backdrop-blur-sm border-2 border-[#d4af37] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <span className="text-2xl mb-1">{feature.icon}</span>
                  <span
                    className="text-xs font-bold text-center"
                    style={{
                      fontFamily: 'Noto Serif',
                      fontWeight: 700,
                      color: '#5a2600',
                    }}
                  >
                    {feature.name}
                  </span>
                  {hoveredFeature === feature.id && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#5a2600] text-white text-xs font-bold rounded whitespace-nowrap">
                      {feature.name}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Ribbon CTA Layer */}
          <div className="absolute bottom-[10%] right-[8%] w-[48%] z-10">
            <Link
              href="/contact"
              className="block w-full"
            >
              <div
                className="relative bg-gradient-to-r from-[#5a2600] via-[#8B4513] to-[#5a2600] px-6 py-4 shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                style={{
                  borderRadius: '8px',
                  border: '3px solid #d4af37',
                }}
              >
                <div className="text-center space-y-2">
                  <p
                    className="text-lg sm:text-xl md:text-2xl font-black text-[#d4af37]"
                    style={{
                      fontFamily: 'Noto Serif',
                      fontWeight: 900,
                      letterSpacing: '1px',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    FLEXIBLE SCHEDULES WORLDWIDE
                  </p>
                  <p
                    className="text-sm sm:text-base md:text-lg font-semibold text-white"
                    style={{
                      fontFamily: 'Noto Serif',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                    }}
                  >
                    ONLINE CLASSES ANYTIME, ANYWHERE
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Social Media Hotspots */}
          <div className="absolute bottom-[2%] right-[2%] flex gap-2 z-20">
            {[
              { href: "https://www.youtube.com/@Al-AzharSchool-london", label: "YT", color: "bg-red-600" },
              { href: "https://www.facebook.com/al.azhar.school.2025", label: "FB", color: "bg-blue-600" },
              { href: "https://www.instagram.com/school.alazhar/", label: "IG", color: "bg-pink-600" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 ${social.color} rounded-full flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform duration-300`}
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Flex Column */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 md:hidden">
          
          {/* Mobile Title */}
          <div className="text-center mb-4">
            <h1
              className="text-3xl font-black"
              style={{
                fontFamily: 'Noto Serif',
                fontWeight: 900,
                color: '#d4af37',
                letterSpacing: '2px',
                textShadow: '2px 2px 0 #5a2600',
              }}
            >
              Al-Azhar School
            </h1>
            <h2
              className="text-lg font-black mt-2"
              style={{
                fontFamily: 'Noto Serif',
                fontWeight: 900,
                color: '#5a2600',
                letterSpacing: '1px',
              }}
            >
              LEARN QURAN ONLINE
            </h2>
          </div>

          {/* Mobile Quran Image */}
          <div className="w-48 h-48 mb-4">
            <Image
              src="/quran_7221480.png"
              alt="Quran on Pedestal"
              width={200}
              height={200}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Mobile Feature Badges */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-xs mb-4">
            {features.map((feature) => (
              <Link
                key={feature.id}
                href={feature.href}
                className="flex items-center space-x-2 p-2 bg-white/90 backdrop-blur-sm border-2 border-[#d4af37] rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="text-xl">{feature.icon}</span>
                <span
                  className="text-xs font-bold"
                  style={{
                    fontFamily: 'Noto Serif',
                    fontWeight: 700,
                    color: '#5a2600',
                  }}
                >
                  {feature.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Ribbon CTA */}
          <Link
            href="/contact"
            className="w-full max-w-xs"
          >
            <div
              className="bg-gradient-to-r from-[#5a2600] via-[#8B4513] to-[#5a2600] px-4 py-3 shadow-xl text-center"
              style={{
                borderRadius: '8px',
                border: '3px solid #d4af37',
              }}
            >
              <p
                className="text-sm font-black text-[#d4af37]"
                style={{
                  fontFamily: 'Noto Serif',
                  fontWeight: 900,
                }}
              >
                FLEXIBLE SCHEDULES WORLDWIDE
              </p>
              <p
                className="text-xs font-semibold text-white mt-1"
                style={{
                  fontFamily: 'Noto Serif',
                  fontWeight: 600,
                }}
              >
                ONLINE CLASSES ANYTIME, ANYWHERE
              </p>
            </div>
          </Link>

          {/* Mobile Social Media */}
          <div className="flex gap-2 mt-4">
            {[
              { href: "https://www.youtube.com/@Al-AzharSchool-london", label: "YT", color: "bg-red-600" },
              { href: "https://www.facebook.com/al.azhar.school.2025", label: "FB", color: "bg-blue-600" },
              { href: "https://www.instagram.com/school.alazhar/", label: "IG", color: "bg-pink-600" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 ${social.color} rounded-full flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform duration-300`}
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
