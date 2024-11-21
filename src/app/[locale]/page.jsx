import AuroraBg from "@/components/partials/AuroraBg"
import Footer from "@/components/partials/Footer"
import About from "@/components/partials/home/About"
import Experience from "@/components/partials/home/Experience"
import Profile from "@/components/partials/home/Profile"
import Projects from "@/components/partials/home/Projects"
import Navbar from "@/components/partials/Navbar"
import es from "@/components/langs/es"
import en from "@/components/langs/en"

export default async function Home({ params }) {
  const { locale } = await params
  const data = locale === "es" ? es : en

  return (
    <main className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
      <header className="flex justify-center items-center">
        <Navbar data={data.Navbar} locale={locale} />
      </header>

      <div className="container mx-auto">
        <AuroraBg />
        <div className="fade-in sweep-up mx-auto px-4 lg:max-w-[1000px] max-lg:max-w-[900px]">
          <Profile data={data.Profile} locale={locale} />
          <Experience data={data.Experience} />
          <Projects data={data.Projects} locale={locale} />
          <About data={data.About} />
        </div>
      </div>

      <footer className="flex justify-center items-center container mx-auto">
        <Footer data={data.Footer} />
      </footer>
    </main>
  )
}