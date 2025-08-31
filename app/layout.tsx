import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Nunito_Sans, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Студия хореографических экспериментов Ключи",
  description: "Творческая лаборатория для раскрытия личности через акробатику, хореографию и актёрское мастерство",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${playfairDisplay.variable} ${nunitoSans.variable} ${cormorantGaramond.variable}`}>
        {children}
      </body>
    </html>
  )
}
