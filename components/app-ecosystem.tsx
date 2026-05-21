"use client"

import React, { useState, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import { CONTENT } from "@/lib/content"
import Link from "next/link"
import {
  LayoutGrid,
  MessageSquare,
  PhoneCall,
  Camera,
  Play,
  BookOpen,
  Copy,
  Check,
  ArrowRight,
  ArrowLeft,
  X,
  Sparkles,
  ExternalLink
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutGrid: LayoutGrid,
  MessageSquare: MessageSquare,
  PhoneCall: PhoneCall,
  Camera: Camera,
  Play: Play,
  BookOpen: BookOpen
}

export default function AppEcosystem() {
  const { language } = useLanguage()
  const text = CONTENT[language].ecosystem
  const isRtl = language === "ar"

  // Modal State for InfTeleKarbala demo login details
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [copiedField, setCopiedField] = useState<"username" | "password" | null>(null)

  // Carousel scroll ref for mobile view
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const { scrollLeft, clientWidth } = scrollRef.current
    const scrollAmount = clientWidth * 0.8
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth"
    })
  }

  const handleCopy = (value: string, field: "username" | "password") => {
    navigator.clipboard.writeText(value)
    setCopiedField(field)
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case "cyan":
        return {
          glow: "shadow-[0_0_30px_rgba(6,182,212,0.12)] border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]",
          iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
          badge: "bg-cyan-500/10 text-cyan-400",
          btn: "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/40"
        }
      case "indigo":
        return {
          glow: "shadow-[0_0_30px_rgba(99,102,241,0.12)] border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]",
          iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
          badge: "bg-indigo-500/10 text-indigo-400",
          btn: "bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border-indigo-500/40"
        }
      case "emerald":
        return {
          glow: "shadow-[0_0_30px_rgba(16,185,129,0.12)] border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]",
          iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
          badge: "bg-emerald-500/10 text-emerald-400",
          btn: "bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border-emerald-500/40"
        }
      case "violet":
        return {
          glow: "shadow-[0_0_30px_rgba(139,92,246,0.12)] border-violet-500/20 hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]",
          iconBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
          badge: "bg-violet-500/10 text-violet-400",
          btn: "bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 border-violet-500/40"
        }
      case "rose":
        return {
          glow: "shadow-[0_0_30px_rgba(244,63,94,0.12)] border-rose-500/20 hover:border-rose-500/50 hover:shadow-[0_0_40px_rgba(244,63,94,0.3)]",
          iconBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
          badge: "bg-rose-500/10 text-rose-400",
          btn: "bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border-rose-500/40"
        }
      case "amber":
      default:
        return {
          glow: "shadow-[0_0_30px_rgba(245,158,11,0.12)] border-amber-500/20 hover:border-amber-500/50 hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]",
          iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
          badge: "bg-amber-500/10 text-amber-400",
          btn: "bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/40"
        }
    }
  }

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden border-t border-border">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {language === "ar" ? "الابتكار الرقمي" : "Digital Innovation"}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
            {text.title}
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            {text.subtitle}
          </p>
        </div>

        {/* Carousel Navigation Buttons for Tablet/Desktop */}
        <div className="flex items-center justify-end gap-3 mb-6 lg:hidden">
          <button
            onClick={() => handleScroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all active:scale-95"
            aria-label="Scroll Left"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all active:scale-95"
            aria-label="Scroll Right"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Grid/Carousel Wrapper */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 snap-x snap-mandatory no-scrollbar"
        >
          {text.apps.map((app) => {
            const Icon = iconMap[app.iconName] || LayoutGrid
            const classes = getColorClasses(app.color)

            return (
              <div
                key={app.id}
                className={`
                  snap-center shrink-0 w-[85%] sm:w-[50%] md:w-[45%] lg:w-auto
                  rounded-3xl glass-panel ${classes.glow} p-8
                  flex flex-col justify-between min-h-[380px]
                  transition-all duration-300 ease-out group/card
                `}
              >
                {/* Card Top Row */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl border ${classes.iconBg} transition-transform duration-300 group-hover/card:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full ${classes.badge}`}>
                      {app.subtitle}
                    </span>
                  </div>

                  {/* Card Info */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover/card:text-indigo-650 dark:group-hover/card:text-indigo-300 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-6">
                    {app.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-3">
                  {app.demoCredentials ? (
                    <button
                      onClick={() => {
                        setCopiedField(null) // reset copy status
                        setIsDemoModalOpen(true)
                      }}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold border ${classes.btn} transition-all cursor-pointer`}
                    >
                      {language === "ar" ? "بيانات الدخول التجريبي" : "Demo Account"}
                    </button>
                  ) : (
                    <div className="h-8" /> // Spacer to align buttons
                  )}

                  <Link
                    href={app.href}
                    target={app.href.startsWith("http") ? "_blank" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2 px-1"
                  >
                    {language === "ar" ? "عرض التطبيق" : "View App"}
                    {app.href.startsWith("http") ? (
                      <ExternalLink className="w-3.5 h-3.5" />
                    ) : isRtl ? (
                      <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover/card:-translate-x-1" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/card:translate-x-1" />
                    )}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Glassmorphic Modal for Demo Login Details (InfTeleKarbala) */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-md rounded-3xl glass-panel border border-slate-200 dark:border-slate-700/50 p-8 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-emerald-400" />
                {text.demoTitle}
              </h3>
              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4">
              {/* Username field */}
              <div className="p-4 rounded-2xl bg-slate-50/60 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                    {text.usernameLabel}
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white font-mono select-all">
                    tajribi 1
                  </span>
                </div>
                <button
                  onClick={() => handleCopy("tajribi 1", "username")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs text-slate-750 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-800"
                >
                  {copiedField === "username" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{text.copiedMsg}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{text.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Password field */}
              <div className="p-4 rounded-2xl bg-slate-50/60 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                    {text.passwordLabel}
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white font-mono select-all">
                    123456
                  </span>
                </div>
                <button
                  onClick={() => handleCopy("123456", "password")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs text-slate-750 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-800"
                >
                  {copiedField === "password" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{text.copiedMsg}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{text.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-black font-semibold text-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer border border-slate-900 dark:border-transparent"
              >
                {language === "ar" ? "حسناً" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
