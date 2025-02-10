"use client"

import { useEffect, useState } from "react"

type Theme = "dark" | "light"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    // Get stored theme or default to light
    const storedTheme = localStorage.getItem("theme") as Theme | null
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList.toggle("dark", storedTheme === "dark")
    }
  }, [])

  const setMode = (mode: Theme) => {
    localStorage.setItem("theme", mode)
    setTheme(mode)
    document.documentElement.classList.toggle("dark", mode === "dark")
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setMode(newTheme)
  }

  return { theme, setTheme: setMode, toggleTheme }
} 