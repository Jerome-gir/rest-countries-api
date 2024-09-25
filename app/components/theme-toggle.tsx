"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
    >
      {theme === "dark" ? (
        <>
          <Sun className="w-5 h-5" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="w-5 h-5" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  )
}
