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
      <main className="flex-1 relative overflow-hidden">
        <div className="cloud one"><span></span></div>
        <div className="cloud two"><span></span></div>
        <div className="cloud three"><span></span></div>
        <div className="cloud right-one"><span></span></div>
        <div className="cloud right-two"><span></span></div>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start gap-12 max-w-7xl mx-auto">
            {/* Left Side - Hero Section */}
            <div className="w-full md:w-5/12 md:sticky md:top-24">
              <div className="flex flex-col items-center text-center relative">
                {/* Hero cloud decoration - removing the blur circle */}

                <div className="relative w-64 h-64 md:w-[350px] md:h-[350px] mb-6">
                  <Image
                    src="/Dex Mini icon blue.png"
                    alt={`${COMPANY_NAME} Logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="dark:hidden animate-float"
                    priority
                  />
                  <Image
                    src="/Dex Mini icon white.png"
                    alt={`${COMPANY_NAME} Logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="hidden dark:block animate-float"
                    priority
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0048BA] dark:text-white animate-fade-in">
                  Hello to Dex Mini
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-[#0048BA] dark:text-white animate-fade-in">
                  Trade, Borrow, Earn, Leverage<br />
                  All Powered by Uniswap v4 Hooks.
                </p>
                <div className="flex gap-4 mb-6">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-[#0048BA] text-[#0048BA] hover:bg-[#0048BA] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#080e24] transition-all hover:scale-105"
                  >
                    <Link href="http://github.com/DexMini/" target="_blank" rel="noopener noreferrer">
                      DOCS
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-[#0048BA] text-[#0048BA] hover:bg-[#0048BA] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#080e24] transition-all hover:scale-105"
                  >
                    <Link href="https://projects.atrium.academy/Dex-Mini-1c65f0444abe81348d3afe3d68fd62e1" target="_blank" rel="noopener noreferrer">
                      UHI4
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - Products */}
            <div className="w-full md:w-7/12 md:pt-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Swap */}
                <div className="bg-white dark:bg-[#080e24] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-[#1e2b63] hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 overflow-hidden rounded-lg">
                      <Image
                        src="/Dex Mini gasless Hook.png"
                        alt="Gasless Hook"
                        width={40}
                        height={40}
                        className="object-cover product-icon animate-pulse-slow"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0048BA] dark:text-white">Swap</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-24 text-sm leading-relaxed">
                    Execute gasless trades with zero fees, slippage, and MEV exposure. Our hook combines limit order
                    functionality with Toxic MEV filtering.
                  </p>
                </div>

                {/* Earn */}
                <div className="bg-white dark:bg-[#080e24] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-[#1e2b63] hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 overflow-hidden rounded-lg">
                      <Image
                        src="/Dex Mini trade Hook.png"
                        alt="Trade Hook"
                        width={40}
                        height={40}
                        className="object-cover product-icon animate-float"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0048BA] dark:text-white">Earn</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-24 text-sm leading-relaxed">
                    Maximize returns by providing liquidity to Uniswap pools. Our dynamic fee hook adjusts swap fees in
                    real-time based on market volatility.
                  </p>
                </div>

                {/* Automate */}
                <div className="bg-white dark:bg-[#080e24] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-[#1e2b63] hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 overflow-hidden rounded-lg">
                      <Image
                        src="/Dex Mini auto Hook.png"
                        alt="Auto Hook"
                        width={40}
                        height={40}
                        className="object-cover product-icon animate-rotate-slow"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0048BA] dark:text-white">Automate</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-24 text-sm leading-relaxed">
                    Enjoy fully automated liquidity management. Our hook automatically sets, rebalances, and compounds
                    your positions, reinvesting accrued LP fees.
                  </p>
                </div>

                {/* Mitigate */}
                <div className="bg-white dark:bg-[#080e24] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-[#1e2b63] hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 overflow-hidden rounded-lg">
                      <Image
                        src="/Dex Mini Mev Hook.png"
                        alt="MEV Hook"
                        width={40}
                        height={40}
                        className="object-cover product-icon animate-glow"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0048BA] dark:text-white">Mitigate</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-24 text-sm leading-relaxed">
                    Safeguard your investments with our MEV Hook. It optimizes liquidity by enforcing cooldown periods,
                    protecting against attacks.
                  </p>
                </div>

                {/* Borrow */}
                <div className="bg-white dark:bg-[#080e24] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-[#1e2b63] hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 overflow-hidden rounded-lg">
                      <Image
                        src="/Dex Mini Borrow Hook.png"
                        alt="Borrow Hook"
                        width={40}
                        height={40}
                        className="object-cover product-icon animate-float"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0048BA] dark:text-white">Borrow</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-24 text-sm leading-relaxed">
                    Strategically select a price range for your collateral to earn Uniswap trading fees, transforming your
                    debt into income.
                  </p>
                </div>

                {/* Leverage */}
                <div className="bg-white dark:bg-[#080e24] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-[#1e2b63] hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 overflow-hidden rounded-lg">
                      <Image
                        src="/Dex Mini Leverage Hook.png"
                        alt="Leverage Hook"
                        width={40}
                        height={40}
                        className="object-cover product-icon animate-pulse-slow"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0048BA] dark:text-white">Leverage</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-24 text-sm leading-relaxed">
                    Trade with leverage in a single click. Our hook allows you to long or short assets with up to 10x
                    leverage using JIT loans.
                  </p>
                </div>
              </div>
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

