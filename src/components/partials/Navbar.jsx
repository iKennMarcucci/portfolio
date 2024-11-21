"use client"

import { DesktopIcon } from "@/components/assets/svg/SvgIcon"
import LinkNavbar from "@/components/utils/LinkNavbar"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'

export default function Navbar({ data, locale }) {
   const [activeSection, setActiveSection] = useState("")
   const [isScrolled, setIsScrolled] = useState(false)
   const router = useRouter()

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) setIsScrolled(true)
         else setIsScrolled(false), setActiveSection("")
      }
      window.addEventListener("scroll", handleScroll)
      const sections = document.querySelectorAll("section[id]")
      const observer = new IntersectionObserver(entries => { entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id)) }, { threshold: 0.4 })
      sections.forEach(section => observer.observe(section))
      return () => { window.removeEventListener("scroll", handleScroll), sections.forEach((section) => observer.unobserve(section)) }
   }, [])

   return (
      <ul className="fade-in sweep-up fixed justify-center backdrop-blur-lg overflow-hidden items-center font-medium rounded-full 
      duration-300 text-sm flex top-2.5 px-4 py-2 gap-4 z-40" style={{ backgroundColor: isScrolled ? "#18181B" : "#00000000" }}>
         <LinkNavbar text={data.experience} to={`/${locale}/#experience`} isActive={activeSection === "experience"} />
         <LinkNavbar text={data.projects} to={`/${locale}/#projects`} isActive={activeSection === "projects"} />
         <LinkNavbar text={data.aboutus} to={`/${locale}/#aboutus`} isActive={activeSection === "aboutus"} />
         <LinkNavbar text={data.contactus} to={`/${locale}/#`} isActive={activeSection === "contactus"} />
         <button title={locale === "es" ? 'Translate to English' : 'Traducir a Español'} className="hover:scale-125 duration-150 flex gap-2" onClick={() => locale === "es" ? router.push("/en") : router.push("/es")}>
            <DesktopIcon size={20} />
         </button>
      </ul>
   )
}