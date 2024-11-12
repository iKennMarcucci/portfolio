import About from "@/components/partials/home/About"
import Experience from "@/components/partials/home/Experience"
import Profile from "@/components/partials/home/Profile"
import Projects from "@/components/partials/home/Projects"

export default function HomePage() {
	return (
		<div className="mx-auto px-4 lg:max-w-[1000px] max-lg:max-w-[900px]">
			<Profile />
			<Experience />
			<Projects />
			<About />
		</div>
	)
}
