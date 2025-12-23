"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      platform: "Steam",
      price: 59.99,
      image: "/cyberpunk-cityscape.png",
      cryptoPrice: "0.00095 BTC",
    },
    {
      id: 2,
      title: "Elden Ring",
      platform: "PlayStation",
      price: 49.99,
      image: "/elden-ring-inspired-landscape.png",
      cryptoPrice: "0.00079 BTC",
    },
    {
      id: 3,
      title: "Baldurs Gate 3",
      platform: "Steam",
      price: 59.99,
      image: "/baldurs-gate-3-game.jpg",
      cryptoPrice: "0.00095 BTC",
    },
    {
      id: 4,
      title: "Starfield",
      platform: "Xbox",
      price: 69.99,
      image: "/starfield-game.png",
      cryptoPrice: "0.00111 BTC",
    },
    {
      id: 5,
      title: "Spider-Man 2",
      platform: "PlayStation",
      price: 69.99,
      image: "/spiderman-2-game.jpg",
      cryptoPrice: "0.00111 BTC",
    },
    {
      id: 6,
      title: "The Legend of Zelda",
      platform: "Nintendo",
      price: 59.99,
      image: "/zelda-tears-of-the-kingdom-game.jpg",
      cryptoPrice: "0.00095 BTC",
    },
  ]

  return (
    <section id="products" className="relative py-24 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#2B67F6] rounded-full blur-[120px] opacity-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#F5A45B] via-[#5E3BFF] to-[#2B67F6] bg-clip-text text-transparent">
              Games
            </span>
          </h2>
          <p className="text-white/60 text-lg">Explore our handpicked selection of the hottest games</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group bg-gradient-to-b from-white/5 to-white/0 border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                  {product.platform}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-[#F5A45B] group-hover:to-[#5E3BFF] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">${product.price}</div>
                    <div className="text-xs text-white/40">≈ {product.cryptoPrice}</div>
                  </div>

                  <Button className="bg-gradient-to-r from-[#F5A45B] via-[#5E3BFF] to-[#2B67F6] hover:opacity-90 text-white border-0">
                    Buy Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  )
}
