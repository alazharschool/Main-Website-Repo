"use client"

import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden" aria-label="Al-Azhar School Hero Section">
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black"
            style={{
              fontFamily: 'Noto Serif',
              fontWeight: 900,
              color: '#1B3B36',
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
              color: '#D4AF37',
              letterSpacing: '1px',
            }}
          >
            LEARN QURAN ONLINE
          </h2>

          {/* Feature Badges */}
          <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-3xl mx-auto" aria-label="Service Categories">
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
                className="flex flex-col items-center justify-center p-4 bg-[#FAF6EF]/90 backdrop-blur-sm border-2 border-[#D4AF37] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                aria-label={`View ${feature.text} services`}
              >
                <span className="text-3xl mb-2" aria-hidden="true">{feature.icon}</span>
                <span
                  className="text-sm font-bold text-center"
                  style={{
                    fontFamily: 'Noto Serif',
                    fontWeight: 700,
                    color: '#1B3B36',
                  }}
                >
                  {feature.text}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg font-black text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                fontFamily: 'Noto Serif',
                fontWeight: 900,
                background: 'linear-gradient(to right, #D4AF37, #B8860B)',
                color: '#1B3B36',
                border: '3px solid #1B3B36',
                boxShadow: '0 8px 32px rgba(27,59,54,0.3)',
              }}
              aria-label="Book a consultation now"
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
                color: '#1B3B36',
                border: '3px solid #1B3B36',
              }}
              aria-label="View our services"
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
                aria-label={`Follow us on ${social.label}`}
              >
                {social.label[0]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
