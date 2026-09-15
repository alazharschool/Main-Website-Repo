import { Card } from "@/components/ui/card"
import { BookOpen, Globe, Award, Users, Clock, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeInSection } from "@/components/fade-in-section"
import { AnimatedButton } from "@/components/animated-button"
import { ShimmerBackground } from "@/components/shimmer-background"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <ShimmerBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInSection>
            <div className="bg-white/95 backdrop-blur-md border-t-4 border-amber-600 rounded-2xl p-8 my-10 shadow-xl max-w-3xl mx-auto text-center transition-all duration-300 hover:shadow-2xl">
              <h1 className="text-3xl md:text-4xl font-extrabold text-amber-900 tracking-wide mb-4 relative inline-block">
                Our Services
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-500 rounded-full"></span>
              </h1>
              <p className="text-base md:text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto mt-4 font-medium">
                Explore our comprehensive educational programs, virtual classrooms, and specialized Islamic curricula.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quran Memorization */}
            <FadeInSection direction="right" delay={200}>
              <Card className="bg-[#FAF6EF] border-2 border-[#D4AF37] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center mb-4 hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1B3B36] text-center">Quran Memorization</h3>
                    <p className="text-lg font-semibold text-[#1B3B36]/80 text-center">Hifz Program</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-base text-gray-800 leading-relaxed text-center">
                      Master the art of Quran memorization with our comprehensive Hifz program. Our certified teachers
                      provide personalized guidance to help you memorize the Holy Quran with proper Tajweed and
                      understanding.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-[#D4AF37] mr-3" />
                        <span className="text-gray-800">Individual & Group Lessons</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-[#D4AF37] mr-3" />
                        <span className="text-gray-800">Tajweed Focus</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-[#D4AF37] mr-3" />
                        <span className="text-gray-800">Flexible Scheduling</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-[#D4AF37] mr-3" />
                        <span className="text-gray-800">Certified Teachers</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="block w-full text-center bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] text-white px-6 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-lg"
                    style={{ fontFamily: 'Noto Serif', fontWeight: 900 }}
                  >
                    Book Now
                  </a>
                </div>
              </Card>
            </FadeInSection>

            {/* Arabic Language */}
            <FadeInSection direction="up" delay={400}>
              <Card className="bg-[#FAF6EF] border-2 border-[#D4AF37] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center mb-4 hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg">
                      <Globe className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1B3B36] text-center">Arabic Language</h3>
                    <p className="text-lg font-semibold text-[#1B3B36]/80 text-center">From Letters to Fluency</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-base text-gray-800 leading-relaxed text-center">
                      Learn Arabic from basic letters to advanced fluency with our structured curriculum. Whether you're
                      a complete beginner or looking to improve your existing skills, our courses cater to all levels.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 text-[#D4AF37] mr-3" />
                        <span className="text-gray-800">All Levels Welcome</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-[#D4AF37] mr-3" />
                        <span className="text-gray-800">Interactive Classes</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="w-5 h-5 text-[#D4AF37] mr-3" />
                        <span className="text-gray-800">Cultural Context</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-[#D4AF37] mr-3" />
                        <span className="text-gray-800">Progress Tracking</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="block w-full text-center bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] text-white px-6 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-lg"
                    style={{ fontFamily: 'Noto Serif', fontWeight: 900 }}
                  >
                    Book Your Lesson Now
                  </a>
                </div>
              </Card>
            </FadeInSection>

            {/* Islamic Studies */}
            <FadeInSection direction="left" delay={600}>
              <Card className="bg-[#FAF6EF] border-2 border-[#D4AF37] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center mb-4 hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1B3B36] text-center">Islamic Studies</h3>
                    <p className="text-lg font-semibold text-[#1B3B36]/80 text-center">Comprehensive Islamic Education</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-base text-gray-800 leading-relaxed text-center">
                      Deepen your understanding of Islam through our comprehensive Islamic Studies program covering the basics of creed (Aqeedah), jurisprudence (Fiqh), Prophet's biography (Seerah), and Quranic interpretation (Tafseer).
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 text-[#D4AF37] mr-3" />
                        <span className="text-gray-800">Aqeedah & Fiqh</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-[#D4AF37] mr-3" />
                        <span className="text-gray-800">Seerah Studies</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-[#D4AF37] mr-3" />
                        <span className="text-gray-800">Tafseer Classes</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-[#D4AF37] mr-3" />
                        <span className="text-gray-800">Discussion Forums</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="block w-full text-center bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] text-white px-6 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-lg"
                    style={{ fontFamily: 'Noto Serif', fontWeight: 900 }}
                  >
                    Book Your Lesson Now
                  </a>
                </div>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center relative overflow-hidden" style={{ position: 'relative' }}>
        <img src="/images/backgrund1.svg" alt="background decorative" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, pointerEvents: 'none' }} />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 animate-pulse opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div
              className="content-overlay-heavy bg-white/90 text-[#5a2600] rounded-2xl p-8 shadow-lg w-full"
              style={{
                border: '4px solid #8B4513', // بني داكن
                boxShadow: '0 4px 32px #8B451344', // ظل بني خفيف
                padding: '2.5rem 1.5rem'
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin?</h2>
              <p className="text-xl mb-8 opacity-90">
                Choose the program that best fits your learning goals and start your journey with our expert teachers
                today.
              </p>
              <a
                href="/pricing"
                className="block w-fit mx-auto bg-white text-amber-600 px-8 py-4 text-lg rounded-full font-bold border border-[#8B4513] transition-all duration-200 hover:bg-[#ffb300] hover:text-white"
                style={{ borderWidth: '1.2px', boxShadow: '0 6px 24px #000b', fontFamily: 'Noto Serif', fontWeight: 900 }}
              >
                View Our Pricing
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
