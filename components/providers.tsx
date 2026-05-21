"use client"

import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/components/theme-provider"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </ThemeProvider>
    )
}
