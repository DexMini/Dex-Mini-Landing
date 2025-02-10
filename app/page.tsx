import { Header } from "./components/header"
import { Footer } from "./components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { COMPANY_NAME } from "@/config/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dex Mini - Discover and Invest in DeFi Yields",
  description:
    "Discover and Invest in DeFi Yields with Dex Mini. Our platform offers a range of yield-generating strategies across multiple chains, including Ethereum, Avalanche, and Binance Smart Chain.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="mb-8 relative w-32 h-32 md:w-48 md:h-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dex%20Mini%20logo.jpg-hKiH31lTTX8j4ipF4WarMGdI4gwbmA.jpeg"
                alt={`${COMPANY_NAME} Logo`}
                fill
                className="dark:invert animate-rotate-slow"
                priority
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">Welcome to Dex Mini</h1>
            <p className="text-xl text-muted-foreground mb-8">Discover and Invest in DeFi Yields.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-gray-900"
              >
                <Link href="http://github.com/DexMini/" target="_blank" rel="noopener noreferrer">
                  DOCS
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InvestmentPlatform",
            name: "Dex Mini",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            description:
              "Discover and Invest in DeFi Yields with Dex Mini. Our platform offers a range of yield-generating strategies across multiple chains, including Ethereum, Avalanche, and Binance Smart Chain.",
            offers: {
              "@type": "Offer",
              category: "Investment Platform",
            },
            author: {
              "@type": "Organization",
              name: "Dex Mini Team",
              url: "https://dexmini.com",
            },
          }),
        }}
      />
    </div>
  )
}

