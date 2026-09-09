"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, BookOpen, LogOut } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Admin', href: '/admin-login' }
  ]

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4 bg-stone-50/80 backdrop-blur-md border-b border-amber-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">

        {/* 3. CALL TO ACTION (AUTH) BUTTONS - LEFT side in RTL */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden sm:inline-block text-[15px] font-bold text-stone-700 transition-colors duration-200 hover:text-amber-700 px-3 py-2"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-[15px] font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 shadow-md shadow-amber-700/20 hover:from-amber-500 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-600/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 hover:bg-amber-50 transition-all duration-100"
              >
                <Menu className="w-9 h-9" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col space-y-4 sm:space-y-6 mt-6">
                <div className="flex items-center space-x-2 mb-6 sm:mb-8 group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-100">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                  <span className="text-sm sm:text-base group-hover:text-amber-600 transition-colors duration-100">Al-Azhar School</span>
                </div>
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded-xl text-[15px] font-semibold text-stone-700 transition-all duration-200 hover:text-amber-700 hover:bg-amber-50/60"
                    onClick={() => setIsOpen(false)}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 mt-4 sm:mt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="bg-transparent hover:bg-amber-50 text-stone-700 border-stone-300 rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  >
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* 2. NAVIGATION LINKS SECTION - CENTER */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded-xl text-[15px] font-semibold text-stone-700 transition-all duration-200 hover:text-amber-700 hover:bg-amber-50/60 relative group"
            >
              {link.name}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-amber-600 scale-x-0 transition-transform duration-200 group-hover:scale-x-100 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* 1. BRAND LOGO SECTION - RIGHT side in RTL */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-amber-500 bg-amber-50/50 p-1 transition-transform duration-300 group-hover:scale-105 shadow-inner">
            <Image
              src="/logo.png"
              alt="Al-Azhar School Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-stone-900 tracking-wide font-serif leading-none">
              Al-Azhar
            </span>
            <span className="text-sm font-bold text-amber-600 tracking-widest uppercase mt-0.5">
              School
            </span>
          </div>
        </Link>

      </div>
    </header>
  )
}
