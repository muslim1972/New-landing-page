"use client"

import { useLanguage } from "@/lib/language-context"
import { CONTENT } from "@/lib/content"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
    LayoutGrid,
    Smartphone,
    ArrowUpRight,
    Sparkles,
    Zap,
    Globe,
    Lock,
} from "lucide-react"
import Link from "next/link"

export default function AppsPage() {
    const { language } = useLanguage()
    const text = CONTENT[language].apps
    const dir = language === "ar" ? "rtl" : "ltr"

    const items = [
        {
            id: "shamil-main",
            size: "large", // 2x2
            title: text.items.shamil.title,
            subtitle: text.items.shamil.subtitle,
            description: text.items.shamil.description,
            icon: <LayoutGrid className="h-8 w-8" />,
            color: "bg-slate-900 text-white",
            href: "https://shamelapp.com/dashboard",
            hasImage: true,
        },
        {
            id: "stats-placeholder",
            size: "small", // 1x1
            title: text.stats.users,
            subtitle: "",
            color: "bg-teal-500 text-white",
            icon: <Globe className="h-6 w-6" />,
        },
        {
            id: "inftele",
            size: "wide", // 2x1
            title: text.items.inftele.title,
            subtitle: text.items.inftele.subtitle,
            description: text.items.inftele.description,
            icon: <Smartphone className="h-6 w-6" />,
            color: "bg-white border-2 border-slate-100 text-slate-900",
            href: "#",
        },
        {
            id: "security-feature",
            size: "small", // 1x1
            title: text.items.security.title,
            subtitle: text.items.security.subtitle,
            color: "bg-slate-100 text-slate-600",
            icon: <Lock className="h-6 w-6" />,
        },
        {
            id: "future-project-1",
            size: "tall", // 1x2 -> standard for grid simplicity
            title: text.items.future.title,
            subtitle: text.items.future.subtitle,
            color: "bg-gradient-to-br from-indigo-500 to-purple-600 text-white",
            icon: <Sparkles className="h-6 w-6" />,
        },
        {
            id: "performance",
            size: "small",
            title: text.items.performance.title,
            subtitle: text.items.performance.subtitle,
            color: "bg-slate-900 text-white",
            icon: <Zap className="h-6 w-6" />,
        },
        {
            id: "placeholder-2",
            size: "wide",
            title: text.items.ad.title,
            subtitle: text.items.ad.subtitle,
            color: "bg-slate-200 text-slate-400",
            icon: <ArrowUpRight className="h-6 w-6" />,
        },
    ]

    const getGridClasses = (size: string) => {
        switch (size) {
            case "large":
                return "md:col-span-2 md:row-span-2"
            case "wide":
                return "md:col-span-2 md:row-span-1"
            case "tall":
                return "md:col-span-1 md:row-span-2"
            default:
                return "md:col-span-1 md:row-span-1"
        }
    }

    return (
        <div className="min-h-screen bg-background" dir={dir}>
            <Header />

            <main className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    {/* Hero Section */}
                    <div className="mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <h1 className="mb-6 text-6xl font-black tracking-tight text-foreground md:text-8xl">
                            {language === 'ar' ? "بوابة" : "The Portal of"}<br />
                            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                                {text.title}
                            </span>
                        </h1>
                        <p className="max-w-2xl text-xl font-light text-muted-foreground md:text-2xl">
                            {text.subtitle}
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid auto-rows-[250px] grid-cols-1 gap-6 md:grid-cols-4">
                        {items.map((item, index) => (
                            <div
                                key={item.id}
                                className={`
                  ${getGridClasses(item.size)}
                  ${item.color}
                  group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
                `}
                            >
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />

                                {/* Top Row */}
                                <div className="z-10 flex items-start justify-between">
                                    <div className="rounded-full border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
                                        {item.icon}
                                    </div>
                                    {item.href && (
                                        <Link
                                            href={item.href}
                                            target={item.href.startsWith("http") ? "_blank" : undefined}
                                            className="translate-x-2 transform rounded-full bg-white p-3 text-slate-900 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                        >
                                            <ArrowUpRight className="h-5 w-5" />
                                        </Link>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="z-10 mt-auto">
                                    {item.subtitle && (
                                        <h3 className="mb-2 text-sm font-bold uppercase tracking-wider opacity-70">
                                            {item.subtitle}
                                        </h3>
                                    )}
                                    <h2 className="mb-2 text-3xl font-bold leading-tight">
                                        {item.title}
                                    </h2>
                                    {item.description && (
                                        <p className="line-clamp-2 max-w-md text-sm opacity-80 md:line-clamp-none">
                                            {item.description}
                                        </p>
                                    )}
                                </div>

                                {/* Decor for large item */}
                                {item.id === "shamil-main" && (
                                    <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-gradient-to-tr from-teal-500/20 to-transparent blur-3xl transition-colors group-hover:bg-teal-500/30" />
                                )}
                            </div>
                        ))}

                        {/* CTA Card */}
                        <div className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border border-border bg-card p-8 text-center transition-colors hover:border-teal-500/50 md:col-span-1 md:row-span-1">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary transition-transform group-hover:scale-110">
                                <span className="text-4xl text-teal-500">+</span>
                            </div>
                            <h3 className="font-bold text-foreground">{text.stats.addIdea}</h3>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
