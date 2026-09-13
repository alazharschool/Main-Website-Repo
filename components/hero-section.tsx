"use client"

import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollingMarquee from "@/components/scrolling-marquee";

// Custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
)

// Custom Telegram icon component (circle blue with white paper plane)
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <circle cx="20" cy="20" r="20" fill="#229ED9" />
    <path d="M30.5 11.5L8.5 19.5C7.5 19.8333 7.5 20.5 8.33333 20.75L13.5 22.25L27.5 14.5C28.1667 14.1667 28.8333 14.3333 28.3333 14.8333L16.5 25.5V29.5C16.5 30.1667 17.1667 30.5 17.6667 30.1667L21.1667 27.6667L26.5 31.5C27.1667 32 28 31.6667 28 30.8333V12.5C28 11.6667 29 11.3333 29.5 12L30.5 11.5Z" fill="#fff"/>
  </svg>
)

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#f8f3eb] relative overflow-hidden">
      {/* Gold Ornate Frame Border */}
      <div className="absolute inset-0 pointer-events-none z-50">
        <div className="absolute inset-4 border-4 border-[#d4af37] rounded-lg opacity-60"></div>
        <div className="absolute inset-6 border-2 border-[#d4af37] rounded-lg opacity-40"></div>
      </div>

      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: "url('/islamic-pattern-new.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Main Hero Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Column - Quran Pedestal & Lantern */}
            <div className="relative flex flex-col items-center justify-center order-2 lg:order-1 space-y-6">
              {/* 3D Illuminated Quran Pedestal */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative z-10">
                  <Image
                    src="/quran_7221480.png"
                    alt="Quran on Illuminated Pedestal"
                    width={400}
                    height={500}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-400/30 to-transparent blur-3xl -z-10"></div>
              </div>

              {/* Lantern Image */}
              <div className="relative w-full max-w-sm mx-auto">
                <Image
                  src="/tajweed.png"
                  alt="Islamic Lantern"
                  width={200}
                  height={300}
                  className="w-full h-auto object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="relative flex flex-col items-center lg:items-start space-y-6 order-1 lg:order-2">
              
              {/* Golden Dome & Minarets Background */}
              <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 z-0 opacity-30">
                  <Image
                    src="/islamic.svg"
                    alt="Golden Dome and Minarets"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                
                {/* Al-Azhar School Title */}
                <div className="relative z-10 text-center lg:text-left">
                  <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black"
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
              </div>

              {/* Subtitle */}
              <div className="text-center lg:text-left">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black"
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

              {/* Feature Badges */}
              <div className="w-full max-w-2xl mx-auto lg:mx-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { icon: '📖', text: 'Quran Reading' },
                    { icon: '📚', text: 'Memorization' },
                    { icon: '🌍', text: 'Arabic Language' },
                    { icon: '🕌', text: 'Islamic Studies' },
                    { icon: '👨‍🏫', text: 'Male Teachers' },
                    { icon: '👩‍🏫', text: 'Female Teachers' },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border-2 border-[#d4af37] rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-2xl">{feature.icon}</span>
                      <span
                        className="text-sm sm:text-base font-bold"
                        style={{
                          fontFamily: 'Noto Serif',
                          fontWeight: 700,
                          color: '#5a2600',
                        }}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dark Brown Ribbon */}
              <div className="w-full max-w-2xl mx-auto lg:mx-0">
                <div
                  className="relative bg-gradient-to-r from-[#5a2600] via-[#8B4513] to-[#5a2600] px-6 py-4 shadow-xl"
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
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                {[
                  { Icon: Youtube, href: "https://www.youtube.com/@Al-AzharSchool-london", color: "#FF0000" },
                  { Icon: Facebook, href: "https://www.facebook.com/al.azhar.school.2025", color: "#1877F3" },
                  { Icon: Twitter, href: "https://x.com/AlAzharSchool19", color: "#1DA1F2" },
                  { Icon: TelegramIcon, href: "https://t.me/+SN-s-3GtM6FlMWQ0", color: "#229ED9" },
                  { Icon: Instagram, href: "https://www.instagram.com/school.alazhar/", color: "#E1306C" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/al-azhar-school-a67598332", color: "#0077B5" },
                  { Icon: TikTokIcon, href: "https://www.tiktok.com/@alazhar.school?_t=8pt46ygpr4q&_r=1", color: "#000" },
                ].map(({ Icon, href, color }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#5a2600] bg-[#fde6c3] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 hover:rotate-12 transition-all duration-300"
                    style={{ color: color || '#000' }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="font-black px-8 py-4 text-lg rounded-lg border transition-all duration-300 hover:scale-105 flex items-center justify-center text-white"
                  style={{
                    fontFamily: "Noto Serif",
                    fontWeight: 900,
                    background: 'linear-gradient(to right, #d4af37, #ffb300)',
                    color: '#5a2600',
                    border: '3px solid #5a2600',
                    boxShadow: '0 8px 32px rgba(90,38,0,0.3)',
                  }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Corner Elements */}
      <div className="hidden sm:block absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-[#d4af37] opacity-50"></div>
      <div className="hidden sm:block absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-[#d4af37] opacity-50"></div>
      <div className="hidden sm:block absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-[#d4af37] opacity-50"></div>
      <div className="hidden sm:block absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-[#d4af37] opacity-50"></div>
    </div>
  )
}
