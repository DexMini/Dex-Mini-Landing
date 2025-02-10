import type { Metadata } from "next"

// Make the baseUrl dynamic based on the deployment environment
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "https://dexmini.com"

export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Dex Mini - AI-Powered DeFi Liquidity Management Platform",
    template: "%s | Dex Mini - Institutional-Grade DeFi",
  },
  // ... rest remains the same
}

