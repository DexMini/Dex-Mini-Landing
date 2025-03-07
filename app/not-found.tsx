import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "./components/header"
import { Footer } from "./components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">404 - Page Not Found</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Oops! The page you're looking for doesn't exist.</p>
          <Button className="bg-black hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90" asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

