"use client"

import AuroraBg from "@/components/partials/AuroraBg"
import Navbar from "@/components/partials/Navbar"
import Footer from "@/components/partials/Footer"
import { useEffect, useState } from "react"
import { Onest } from "next/font/google"
import "./globals.css"

const onest = Onest({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin", "latin-ext"]
})

export default function RootLayout({ children }) {
	const [metadata, setMetadata] = useState(null)

	useEffect(() => {
		async function fetchMetadata() {
			let lang = "es"
			if (localStorage.getItem("languaje") !== null) lang = localStorage.getItem("languaje")
			const res = await fetch(`/api/layout/${lang}`)
			const data = await res.json()
			setMetadata({
				title: data.title,
				description: data.description,
				viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
				themeColor: "#3498db"
			})
		}

		fetchMetadata()
	}, [localStorage])

	return metadata && (
		<html lang="es">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/png" sizes="32x32" />
				<meta name="theme-color" content={metadata.themeColor} />
				<meta name="apple-mobile-web-app-status-bar-style" content="black" />
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
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
