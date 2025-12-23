"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function StoreProducts() {
  const products = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      platform: "Steam",
      price: 3,
      image: "/cyberpunk-cityscape.png",
    },
    {
      id: 2,
      title: "Elden Ring",
      platform: "PlayStation",
      price: 2,
      image: "/elden-ring-inspired-landscape.png",
    },
    {
      id: 3,
      title: "Baldurs Gate 3",
      platform: "Steam",
      price: 3,
      image: "/baldurs-gate-3-game.jpg",
    },
    {
      id: 4,
      title: "Starfield",
      platform: "Xbox",
      price: 3,
      image: "/starfield-game.png",
    },
    {
      id: 5,
      title: "Spider-Man 2",
      platform: "PlayStation",
      price: 3,
      image: "/spiderman-2-game.jpg",
    },
    {
      id: 6,
      title: "The Legend of Zelda",
      platform: "Nintendo",
      price: 2,
      image: "/zelda-tears-of-the-kingdom-game.jpg",
    },
    {
      id: 7,
      title: "Hogwarts Legacy",
      platform: "Steam",
      price: 2,
      image: "/hogwarts-legacy-magical-castle.jpg",
    },
    {
      id: 8,
      title: "God of War Ragnarok",
      platform: "PlayStation",
      price: 3,
      image: "/god-of-war-ragnarok-norse-mythology.jpg",
    },
    {
      id: 9,
      title: "Resident Evil 4",
      platform: "Steam",
      price: 2,
      image: "/resident-evil-4-horror-survival.jpg",
    },
    {
      id: 10,
      title: "Final Fantasy XVI",
      platform: "PlayStation",
      price: 3,
      image: "/final-fantasy-xvi-epic-fantasy.jpg",
    },
    {
      id: 11,
      title: "Diablo IV",
      platform: "Steam",
      price: 2,
      image: "/diablo-iv-dark-fantasy-dungeon.jpg",
    },
    {
      id: 12,
      title: "Super Mario Bros Wonder",
      platform: "Nintendo",
      price: 1,
      image: "/super-mario-bros-wonder-colorful-platformer.jpg",
    },
  ]

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#F5A45B] rounded-full blur-[120px] opacity-10" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#2B67F6] rounded-full blur-[120px] opacity-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Game{" "}
            <span className="bg-gradient-to-r from-[#F5A45B] via-[#5E3BFF] to-[#2B67F6] bg-clip-text text-transparent">
              Store
            </span>
          </h1>
          <p className="text-white/60 text-lg">Browse and purchase the latest games with crypto</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

              <div className="p-5 space-y-4">
                <h3 className="text-lg font-bold text-white group-hover:bg-gradient-to-r group-hover:from-[#F5A45B] group-hover:to-[#5E3BFF] group-hover:bg-clip-text group-hover:text-transparent transition-all line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">{product.price} USDT</div>
                  </div>

                  <Button className="bg-gradient-to-r from-[#F5A45B] via-[#5E3BFF] to-[#2B67F6] hover:opacity-90 text-white border-0">
                    Buy Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
