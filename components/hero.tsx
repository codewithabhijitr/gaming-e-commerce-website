"use client"

import { Button } from "@/components/ui/button"
import Spline from "@splinetool/react-spline/next"

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] overflow-hidden">
      {/* Spotlight effects */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#F5A45B] rounded-full blur-[120px] opacity-20" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#5E3BFF] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#2B67F6] rounded-full blur-[120px] opacity-20" />

      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-8 h-full items-center pt-20">
          {/* Left side - Text and CTA */}
          <div className="space-y-6 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              The Ultimate
              <span className="block bg-gradient-to-r from-[#F5A45B] via-[#5E3BFF] to-[#2B67F6] bg-clip-text text-transparent">
                Gaming Store
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-lg">
              Discover the best games across all platforms. Pay with crypto and start playing instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F5A45B] via-[#5E3BFF] to-[#2B67F6] hover:opacity-90 text-white border-0 text-lg px-8"
              >
                Browse Games
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 bg-transparent"
              >
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#F5A45B] to-[#5E3BFF] bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-white/60 text-sm">Games Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#5E3BFF] to-[#2B67F6] bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-white/60 text-sm">Happy Gamers</div>
              </div>
            </div>
          </div>

          {/* Right side - 3D Model */}
          <div className="h-full relative flex items-center justify-center">
            {/* Large soft spotlight effect behind 3D model */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[600px] h-[600px] bg-gradient-to-br from-[#F5A45B]/30 via-[#5E3BFF]/30 to-[#2B67F6]/30 rounded-full blur-[150px]" />
            </div>

            {/* Transparent container for 3D model */}
            <div className="relative w-full h-full">
              <Spline scene="https://prod.spline.design/K9a36qv3N1FN6bdy/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
