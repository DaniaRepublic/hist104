import Header from "./components/Header"
import Footer from "./components/Footer"
import EssayContent from "./components/EssayContent"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto px-2 lg:px-0 py-8">
        <EssayContent />
      </main>
      <Footer />
    </div>
  )
}

