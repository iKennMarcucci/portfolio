"use client"

import About from "@/components/partials/home/About"
import Experience from "@/components/partials/home/Experience"
import Profile from "@/components/partials/home/Profile"
import Projects from "@/components/partials/home/Projects"

export default async function HomePage() {
	await new Promise(resolve => setTimeout(resolve, 750))
	return (
		<div className="fade-in sweep-up mx-auto px-4 lg:max-w-[1000px] max-lg:max-w-[900px]">
			<Profile />
			<Experience />
			<Projects />
			<About />
		</div>
	)
}