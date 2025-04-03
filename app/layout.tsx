import "./globals.css"
import type { ReactNode } from "react"
import { baseMetadata } from "./config/metadata"

export const metadata = baseMetadata

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/Dex Mini Logo.jpg"
          type="image/jpeg"
          sizes="32x32"
        />
        <link
          rel="shortcut icon"
          href="/Dex Mini Logo.jpg"
          type="image/jpeg"
        />
        <link
          rel="apple-touch-icon"
          href="/Dex Mini Logo.jpg"
          type="image/jpeg"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}

