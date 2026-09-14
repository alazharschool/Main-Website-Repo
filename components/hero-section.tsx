"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/hero/hero-gold-master.png"
        alt="Al-Azhar School Hero"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
    </div>
  )
}
