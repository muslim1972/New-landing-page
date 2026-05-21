"use client"

import { Search, ChevronDown, Menu, X, Sparkles, ExternalLink, Sun, Moon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { CONTENT } from "@/lib/content"
import { useTheme } from "next-themes"

export default function Header() {
  const { language, toggleLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const text = CONTENT[language].header
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown(prev => prev === label ? null : label)
  }

  const appLinks: Record<string, string> = {
    ShamilChat: "/shamil-chat",
    InfTeleKarbala: "/inftelekarbala",
    ShaGram: "/shagram",
    ShamaTube: "/shamatube",
    ShamilArticles: "/shamil-articles"
  }

  const appLinksAr: Record<string, string> = {
    "ShamilChat": "/shamil-chat",
    "InfTeleKarbala": "/inftelekarbala",
    "ShaGram": "/shagram",
    "ShamaTube": "/shamatube",
    "ShamilArticles": "/shamil-articles"
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/75 dark:bg-slate-950/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3.5 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-slate-200 dark:border-slate-800 group-hover:border-indigo-500/50 transition-all duration-300">
            <Image
              src="/images/Logo.png"
              alt={text.appName}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <span className="text-xl font-black italic tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {text.appName}
          </span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden items-center gap-2 lg:flex">
          {text.nav.map((item) => (
            <div key={item.label} className="relative group">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-900/60"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />}
              </button>

              {/* Dropdown Menu */}
              {item.hasDropdown && item.dropdownItems && (
                <div className="absolute top-full left-0 z-50 hidden w-52 pt-2.5 group-hover:block rtl:right-0 rtl:left-auto animate-in fade-in duration-200">
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 p-1.5 shadow-2xl backdrop-blur-md">
                    {item.dropdownItems.map((subItem, index) => {
                      const href = appLinks[subItem] || appLinksAr[subItem] || "#"
                      return (
                        <Link
                          key={index}
                          href={href}
                          className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-all"
                        >
                          <span>{subItem}</span>
                          {href.startsWith("http") && <ExternalLink className="w-3.5 h-3.5 opacity-60" />}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all active:scale-95 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-4.5 w-4.5 text-amber-400" /> : <Moon className="h-4.5 w-4.5 text-indigo-500" />}
            </button>
          )}

          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full bg-indigo-600 px-5 py-2 text-xs font-bold text-white transition-all hover:bg-indigo-500 active:scale-95 min-w-[70px] cursor-pointer"
          >
            {text.toggleButton}
          </button>

          {/* Mobile Menu Toggle (Hamburger) */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 lg:hidden hover:text-slate-900 dark:hover:text-white active:scale-95"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-slate-200 dark:border-slate-900 bg-white/95 dark:bg-slate-950/95 p-4 shadow-2xl lg:hidden h-[calc(100vh-68px)] overflow-y-auto backdrop-blur-md animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-2.5">
             {text.nav.map((item) => (
              <div key={item.label} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => item.hasDropdown && toggleMobileDropdown(item.label)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-slate-900 dark:text-white transition-all hover:bg-slate-100 dark:hover:bg-slate-900 w-full text-start"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMobileDropdown === item.label ? 'rotate-180' : ''}`} />}
                </button>
                 
                {/* Mobile Dropdown Items */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileDropdown === item.label ? 'max-h-[350px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col gap-1.5 px-4 pb-2 rtl:pr-4 rtl:pl-0 ltr:pl-4 ltr:pr-0 border-l border-slate-200 dark:border-slate-800 rtl:border-l-0 rtl:border-r">
                      {item.dropdownItems.map((subItem, index) => {
                        const href = appLinks[subItem] || appLinksAr[subItem] || "#"
                        return (
                          <Link
                            key={index}
                            href={href}
                            className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/40 dark:hover:bg-slate-900/40"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span>{subItem}</span>
                            {href.startsWith("http") && <ExternalLink className="w-3.5 h-3.5 opacity-60" />}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
