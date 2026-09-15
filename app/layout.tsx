import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_Arabic } from "next/font/google"
import "@/styles/globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingChatButton from "@/components/floating-chat-button"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Al-Azhar School",
              "url": "https://alazharschool.com",
              "logo": "https://alazharschool.com/images/logo.png",
              "description": "Learn the Holy Quran from Al-Azhar scholars anywhere in the world. Online Quran memorization, Arabic language, and Islamic studies courses.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cairo",
                "addressCountry": "Egypt"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+20-1023594533",
                "contactType": "customer service",
                "email": "al.azhar.school.london@gmail.com"
              },
              "sameAs": [
                "https://www.youtube.com/@Al-AzharSchool-london",
                "https://www.facebook.com/al.azhar.school.2025",
                "https://www.instagram.com/school.alazhar/"
              ],
              "offers": {
                "@type": "Offer",
                "category": "Educational Services",
                "priceCurrency": "USD",
                "description": "Online Quran and Arabic language courses"
              }
            })
          }}
        />
      </head>
      <body className={`${notoSansArabic.className} overflow-x-hidden`} style={{
        backgroundImage: "url('/images/hero/islamic-bg-arch.jpg')",
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
        imageRendering: 'auto',
      }}>
        <Navigation />
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
        <FloatingChatButton />
      </body>
    </html>
  )
}

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Al-Azhar School - Learn Quran & Arabic Online",
  description: "Learn the Holy Quran from Al-Azhar scholars anywhere in the world. Online Quran memorization, Arabic language, and Islamic studies courses with certified teachers.",
  keywords: ["Quran learning", "Online Quran classes", "Arabic language courses", "Islamic studies", "Hifz program", "Tajweed", "Al-Azhar education", "Memorize Quran online"],
  authors: [{ name: "Al-Azhar School" }],
  creator: "Al-Azhar School",
  publisher: "Al-Azhar School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://alazharschool.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ar',
    url: 'https://alazharschool.com',
    title: 'Al-Azhar School - Learn Quran & Arabic Online',
    description: 'Learn the Holy Quran from Al-Azhar scholars anywhere in the world. Online Quran memorization, Arabic language, and Islamic studies courses.',
    siteName: 'Al-Azhar School',
    images: [
      {
        url: '/images/hero/islamic-bg-arch.jpg',
        width: 1200,
        height: 630,
        alt: 'Al-Azhar School - Online Quran Learning Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al-Azhar School - Learn Quran & Arabic Online',
    description: 'Learn the Holy Quran from Al-Azhar scholars anywhere in the world. Online Quran memorization, Arabic language, and Islamic studies courses.',
    images: ['/images/hero/islamic-bg-arch.jpg'],
    creator: '@AlAzharSchool',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}
