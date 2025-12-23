import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}
