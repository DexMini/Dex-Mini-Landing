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
    <header className="sticky top-0 z-50 w-full border-b border-[#0048BA]/30 dark:border-[#1e2b63] bg-background/80 backdrop-blur-sm">
      <div className="flex h-12 items-center px-4">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Dex Mini Logo blue.png"
              alt={`${COMPANY_NAME} Logo`}
              width={144}
              height={144}
              className="dark:hidden -my-20 hover:scale-105 transition-transform"
              priority
            />
            <Image
              src="/Dex Mini Logo White.png"
              alt={`${COMPANY_NAME} Logo`}
              width={144}
              height={144}
              className="hidden dark:block -my-20 hover:scale-105 transition-transform"
              priority
            />
          </Link>
        </div>

        <div className="flex-1" />

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleTheme()}
            className="w-9 h-9 text-[#0048BA] hover:bg-[#0048BA] hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-[#080e24]"
          >
            {theme === "light" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}

