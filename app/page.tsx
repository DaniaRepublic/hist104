import Header from "./components/Header"
import Footer from "./components/Footer"
import EssayContent from "./components/EssayContent"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <EssayContent />
      </main>
      <Footer />
    </div>
  )
}

