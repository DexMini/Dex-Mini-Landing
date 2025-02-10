import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function WidgetsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Widgets</h1>
        <p className="text-gray-600 max-w-2xl">
          Discover interactive widgets to enhance your Figma designs. From data visualization to prototyping tools, find the perfect widgets to bring your designs to life.
        </p>
      </main>
      <Footer />
    </div>
  )
}

