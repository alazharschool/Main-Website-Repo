"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative w-full bg-[#f8f3eb] py-8 sm:py-12 lg:py-16">
      <div className="relative w-full max-w-[1600px] mx-auto aspect-[16/7] overflow-hidden">
        <Image
          src="/images/hero/hero-gold-master.png"
          alt="Al-Azhar School Hero"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 1600px) 100vw, 1600px"
        />
      </div>
    </div>
  )
}
