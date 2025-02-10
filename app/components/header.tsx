"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/app/hooks/use-theme"
import { COMPANY_NAME } from "@/config/constants"

export function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-12 items-center px-4">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dex%20Mini%20logo.jpg-hKiH31lTTX8j4ipF4WarMGdI4gwbmA.jpeg"
              alt={`${COMPANY_NAME} Logo`}
              width={24}
              height={24}
              className="dark:invert animate-rotate-slow"
              priority
            />
          </Link>
        </div>

        <div className="flex-1" />

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  )
}

