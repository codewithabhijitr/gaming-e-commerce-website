import { Gamepad2, Twitter, Diamond as Discord, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-6 w-6 text-[#5E3BFF]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#F5A45B] via-[#5E3BFF] to-[#2B67F6] bg-clip-text text-transparent">
                GAMESTORE
              </span>
            </div>
            <p className="text-white/60 text-sm">The future of gaming commerce. Buy games with crypto.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-white/60 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/60 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-white/60 hover:text-white transition-colors text-sm">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4 text-white">Connect</h3>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
              >
                <Discord className="h-5 w-5 text-white" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
              >
                <Youtube className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} GameStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
