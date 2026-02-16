"use client"

import { Search, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { CONTENT } from "@/lib/content"

export default function Header() {
  const { language, toggleLanguage } = useLanguage()
  const text = CONTENT[language].header
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null)

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown(prev => prev === label ? null : label)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 lg:px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-border group-hover:border-primary transition-colors">
            <Image
              src="/images/Logo.png"
              alt={text.appName}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold italic text-foreground group-hover:text-primary transition-colors">
            {text.appName}
          </span>
        </Link>

        {/* Search Bar - hidden on small screens */}
        <div className="mx-4 hidden flex-1 items-center md:flex lg:mx-8 lg:max-w-xl">
          <div className="relative flex w-full items-center">
            <input
              type="text"
              placeholder={text.searchPlaceholder}
              className="w-full rounded-full border border-border bg-secondary py-2.5 pl-4 pr-28 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent rtl:pl-28 rtl:pr-4"
            />
            <div className={`absolute flex items-center border-border px-3 ${language === 'ar' ? 'left-12 border-r' : 'right-12 border-l'}`}>
              <button
                type="button"
                className="flex items-center gap-1 text-sm text-foreground"
              >
                {text.shots}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
            <button
              type="button"
              className={`absolute flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground transition-opacity hover:opacity-90 ${language === 'ar' ? 'left-1.5' : 'right-1.5'}`}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {text.nav.map((item) => (
            <div key={item.label} className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />}
              </button>

              {/* Dropdown Menu */}
              {item.hasDropdown && item.dropdownItems && (
                <div className="absolute top-full left-0 z-50 hidden w-48 pt-2 group-hover:block rtl:right-0 rtl:left-auto">
                  <div className="rounded-xl border border-border bg-background p-1 shadow-lg backdrop-blur-sm">
                    {item.dropdownItems.map((subItem, index) => (
                      subItem === "ShamilChat" ? (
                        <Link
                          key={index}
                          href="/shamil-chat"
                          className="block w-full rounded-lg px-3 py-2 text-start text-sm text-foreground hover:bg-secondary"
                        >
                          {subItem}
                        </Link>
                      ) : subItem === "InfTeleKarbala" ? (
                        <Link
                          key={index}
                          href="/inftelekarbala"
                          className="block w-full rounded-lg px-3 py-2 text-start text-sm text-foreground hover:bg-secondary"
                        >
                          {subItem}
                        </Link>
                      ) : subItem === "ShaGram" ? (
                        <Link
                          key={index}
                          href="/shagram"
                          className="block w-full rounded-lg px-3 py-2 text-start text-sm text-foreground hover:bg-secondary"
                        >
                          {subItem}
                        </Link>
                      ) : subItem === "ShamaTube" ? (
                        <Link
                          key={index}
                          href="/shamatube"
                          className="block w-full rounded-lg px-3 py-2 text-start text-sm text-foreground hover:bg-secondary"
                        >
                          {subItem}
                        </Link>
                      ) : (
                        <button
                          key={index}
                          className="w-full rounded-lg px-3 py-2 text-start text-sm text-foreground hover:bg-secondary"
                        >
                          {subItem}
                        </button>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Toggle (Hamburger) */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground lg:hidden"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground md:hidden"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 min-w-[80px]"
          >
            {text.toggleButton}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-border bg-background p-4 shadow-lg lg:hidden h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {text.nav.map((item) => (
              <div key={item.label} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => item.hasDropdown && toggleMobileDropdown(item.label)}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-bold text-foreground transition-colors hover:bg-secondary w-full text-start"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMobileDropdown === item.label ? 'rotate-180' : ''}`} />}
                </button>
                {/* Mobile Dropdown Items */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col gap-1 px-4 pb-2 rtl:pr-4 rtl:pl-0 ltr:pl-4 ltr:pr-0 border-l border-border rtl:border-l-0 rtl:border-r">
                      {item.dropdownItems.map((subItem, index) => (
                        subItem === "ShamilChat" ? (
                          <Link
                            key={index}
                            href="/shamil-chat"
                            className="block py-2 text-start text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem}
                          </Link>
                        ) : subItem === "InfTeleKarbala" ? (
                          <Link
                            key={index}
                            href="/inftelekarbala"
                            className="block py-2 text-start text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem}
                          </Link>
                        ) : subItem === "ShaGram" ? (
                          <Link
                            key={index}
                            href="/shagram"
                            className="block py-2 text-start text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem}
                          </Link>
                        ) : subItem === "ShamaTube" ? (
                          <Link
                            key={index}
                            href="/shamatube"
                            className="block py-2 text-start text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem}
                          </Link>
                        ) : (
                          <button key={index} className="py-2 text-start text-sm text-muted-foreground hover:text-foreground">
                            {subItem}
                          </button>
                        )
                      ))}
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
