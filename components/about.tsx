"use client"

import { Gamepad2, Shield, Wallet } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Gamepad2,
      title: "Vast Game Library",
      description:
        "Access hundreds of games across PC, PlayStation, Xbox, and Nintendo platforms. New titles added weekly.",
    },
    {
      icon: Wallet,
      title: "Crypto Payments",
      description:
        "Pay with your favorite cryptocurrency. Fast, secure, and anonymous transactions powered by Cryptomus.",
    },
    {
      icon: Shield,
      title: "Instant Delivery",
      description: "Get your game keys delivered instantly after payment confirmation. Start playing within minutes.",
    },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background spotlight */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#5E3BFF] rounded-full blur-[120px] opacity-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#F5A45B] via-[#5E3BFF] to-[#2B67F6] bg-clip-text text-transparent">
              GameStore
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The modern way to buy games. Fast, secure, and built for the future of gaming.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5A45B]/10 via-[#5E3BFF]/10 to-[#2B67F6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F5A45B] to-[#5E3BFF] flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
