"use client"

import * as React from "react"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: "dark" | "light"
  storageKey?: string
}

type ThemeProviderState = {
  theme: "dark" | "light"
  setTheme: (theme: "dark" | "light") => void
}

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<"dark" | "light">(() => {
    if (typeof window === 'undefined') {
      return defaultTheme
    }
    return (localStorage.getItem(storageKey) as "dark" | "light") || defaultTheme
  })

  React.useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  const value = {
    theme,
    setTheme: (theme: "dark" | "light") => {
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
