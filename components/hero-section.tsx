"use client"

import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black"
            style={{
              fontFamily: 'Noto Serif',
              fontWeight: 900,
              color: '#5a2600',
              letterSpacing: '2px',
              textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
            }}
          >
            Al-Azhar School
          </h1>

          {/* Subtitle */}
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{
              fontFamily: 'Noto Serif',
              fontWeight: 700,
              color: '#d4af37',
              letterSpacing: '1px',
            }}
          >
            LEARN QURAN ONLINE
          </h2>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-3xl mx-auto">
            {[
              { icon: '📖', text: 'Quran Reading', href: '/services#quran-reading' },
              { icon: '📚', text: 'Memorization', href: '/services#hifz' },
              { icon: '🌍', text: 'Arabic', href: '/services#arabic' },
              { icon: '🕌', text: 'Islamic Studies', href: '/services#islamic-studies' },
              { icon: '👨‍🏫', text: 'Male Teachers', href: '/services#teachers' },
              { icon: '👩‍🏫', text: 'Female Teachers', href: '/services#teachers' },
            ].map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="flex flex-col items-center justify-center p-4 bg-white/90 backdrop-blur-sm border-2 border-[#d4af37] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="text-3xl mb-2">{feature.icon}</span>
                <span
                  className="text-sm font-bold text-center"
                  style={{
                    fontFamily: 'Noto Serif',
                    fontWeight: 700,
                    color: '#5a2600',
                  }}
                >
                  {feature.text}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg font-black text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-lg font-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                fontFamily: 'Noto Serif',
                fontWeight: 900,
                background: 'transparent',
                color: '#5a2600',
                border: '3px solid #5a2600',
              }}
            >
              Our Services
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 justify-center">
            {[
              { href: "https://www.youtube.com/@Al-AzharSchool-london", label: "YouTube", color: "bg-red-600" },
              { href: "https://www.facebook.com/al.azhar.school.2025", label: "Facebook", color: "bg-blue-600" },
              { href: "https://www.instagram.com/school.alazhar/", label: "Instagram", color: "bg-pink-600" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white font-bold hover:scale-110 transition-transform duration-300`}
              >
                {social.label[0]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
