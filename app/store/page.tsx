import Header from "@/components/header"
import Footer from "@/components/footer"
import StoreProducts from "@/components/store-products"

export default function StorePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24">
        <StoreProducts />
      </main>
      <Footer />
    </div>
  )
}
