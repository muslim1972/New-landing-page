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
  title: "Dribbble - Portfolio Shot",
  description:
    "Marketing Experience Challenge - Ibizan Hounds by Studio Termini",
  icons: {
    icon: '/images/Logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: "#2b2049",
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
