import type { Metadata } from "next"

// Make the baseUrl dynamic based on the deployment environment
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "https://dexmini.com"

export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Dex Mini - Discover and Invest in DeFi Yields",
    template: "%s | Dex Mini - Discover and Invest in DeFi Yields",
  },
  description: "Dex Mini is a platform for discovering and investing in DeFi yields. We offer a range of yield-generating strategies across multiple chains, including Ethereum, Avalanche, and Binance Smart Chain.",
  // ... rest remains the same
}

