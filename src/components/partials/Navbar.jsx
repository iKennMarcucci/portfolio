"use client"

import { DesktopIcon } from "@/components/assets/svg/SvgIcon"
import LinkNavbar from "@/components/utils/LinkNavbar"
import { useState, useEffect } from "react"

export default function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false)
   const [activeSection, setActiveSection] = useState("")

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
      <ul className="fixed justify-center backdrop-blur-lg overflow-hidden items-center font-medium rounded-full duration-300 text-sm flex top-2.5 px-4 py-2 gap-4 z-40"
         style={{ backgroundColor: isScrolled ? "#18181B" : "#00000000" }}>
         <LinkNavbar text={"Experiencia"} to={"/#experience"} isActive={activeSection === "experience"} />
         <LinkNavbar text={"Proyectos"} to={"/#projects"} isActive={activeSection === "projects"} />
         <LinkNavbar text={"Sobre mí"} to={"/#aboutus"} isActive={activeSection === "aboutus"} />
         <LinkNavbar text={"Contacto"} to={"/#contactus"} isActive={activeSection === "contactus"} />
         <button className="hover:scale-125 duration-150">
            <DesktopIcon size={16} />
         </button>
      </ul>
   )
}