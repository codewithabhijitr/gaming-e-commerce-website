"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-[#F5A45B] via-[#5E3BFF] to-[#2B67F6] bg-clip-text text-transparent">
            GAME-BOOK
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/#about" className="text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/store" className="text-white/80 hover:text-white transition-colors">
            Store
          </Link>
          <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#F5A45B] to-[#5E3BFF] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>
          <Button className="bg-gradient-to-r from-[#F5A45B] via-[#5E3BFF] to-[#2B67F6] hover:opacity-90 text-white border-0">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  )
}
