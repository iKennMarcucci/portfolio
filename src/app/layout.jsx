import { Analytics } from "@vercel/analytics/react"
import { Onest } from "next/font/google"
import "./globals.css"

const onest = Onest({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"]
})

export const metadata = {
  title: 'Kenn Marcucci - Portfolio',
  description: 'This portfolio was developed by Kenn Marcucci',
  keywords: ["Kenn Marcucci Portfolio", "Kenn Marcucci", "kenn marcucci",
    "Kenn", "kenn", "Marcucci", "marcucci", "Portfolio", "portfolio", "NextJS", "nextjs"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${onest.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
