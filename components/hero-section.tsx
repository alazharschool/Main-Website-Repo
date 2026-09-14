"use client"

import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative w-full bg-[#f8f3eb] py-8 sm:py-12 lg:py-16">
      <div className="relative w-full max-w-[1600px] mx-auto aspect-[16/7] overflow-hidden">
        
        {/* Background Layer - Full Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-gold-master.png"
            alt="Al-Azhar School Hero"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 1600px) 100vw, 1600px"
          />
        </div>

        {/* Live Text Layer - Title */}
        <div className="absolute top-[12%] right-[10%] w-[45%] z-10 animate-fade-in-up">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center"
            style={{
              fontFamily: 'Noto Serif',
              fontWeight: 900,
              color: '#d4af37',
              letterSpacing: '3px',
              textShadow: '3px 3px 0 #5a2600, 4px 4px 8px rgba(0,0,0,0.3)',
              lineHeight: 1.1,
              animation: 'glow 2s ease-in-out infinite alternate',
            }}
          >
            Al-Azhar School
          </h1>
        </div>

        {/* Live Text Layer - Subtitle */}
        <div className="absolute top-[32%] right-[10%] w-[45%] z-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-center"
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

        {/* Feature Badges Layer */}
        <div className="absolute top-[50%] right-[10%] w-[45%] z-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-3 gap-2">
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
                className="flex flex-col items-center justify-center p-2 bg-white/90 backdrop-blur-sm border-2 border-[#d4af37] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${0.8 + index * 0.1}s both`,
                }}
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
                  {feature.text}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Ribbon CTA Layer */}
        <div className="absolute bottom-[12%] right-[10%] w-[45%] z-10 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <Link href="/contact" className="block w-full">
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

        {/* Social Media Layer */}
        <div className="absolute bottom-[2%] right-[2%] flex gap-2 z-20 animate-fade-in-up" style={{ animationDelay: '1.7s' }}>
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

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          from {
            text-shadow: 3px 3px 0 #5a2600, 4px 4px 8px rgba(0,0,0,0.3);
          }
          to {
            text-shadow: 3px 3px 0 #5a2600, 4px 4px 16px rgba(212, 175, 55, 0.6);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </div>
  )
}
