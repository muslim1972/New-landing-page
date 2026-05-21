import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Providers } from "@/components/providers"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "شامل آب | المنظومة الرقمية الذكية",
  description:
    "منظومة شامل الرقمية المتكاملة - نقدم تطبيقات ذكية وآمنة بمفهوم جديد للخصوصية والأداء، تشمل شامل شات وشاغرام ونظام الاتصالات الموحد لكربلاء.",
  icons: {
    icon: '/images/Logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
