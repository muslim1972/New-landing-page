"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    toggleLanguage: () => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en")

    useEffect(() => {
        // Update HTML dir and lang attributes
        document.documentElement.lang = language
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    }, [language])

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "ar" : "en"))
    }

    // Simple translation helper (placeholder for now, will connect to content.ts later or used directly)
    const t = (key: string) => {
        return key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
