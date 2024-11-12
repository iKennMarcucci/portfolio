import Navbar from "@/components/partials/Navbar"
import Footer from "@/components/partials/Footer"
import { Onest } from "next/font/google"
import "./globals.css"
import AuroraBg from "@/components/partials/AuroraBg"

export const metadata = {
	title: "Portfolio de Kenn - Inicio",
	description: "Portfolio hecho por Kenn Marcucci",
	viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
	themeColor: "#3498db"
}

const onest = Onest({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin", "latin-ext"]
})

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/png" sizes="32x32" />
				<meta name="theme-color" content="#050f28" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black" />
			</head>
			<body className={`${onest.className} grid min-h-[100dvh] grid-rows-[auto_1fr_auto] antialiased`}>
				<header className="flex justify-center items-center">
					<Navbar />
				</header>
				<main className="container mx-auto">
					<AuroraBg />
					{children}
				</main>
				<footer className="flex justify-center items-center container mx-auto">
					<Footer />
				</footer>
			</body>
		</html>
	)
}