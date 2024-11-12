"use client"

import { DesktopIcon } from "@/components/assets/svg/SvgIcon"
import LinkNavbar from "@/components/utils/LinkNavbar"
import { useState, useEffect } from "react"

export default function Navbar() {
   const [activeSection, setActiveSection] = useState("")
   const [isScrolled, setIsScrolled] = useState(false)
   const [isVisible, setIsVisible] = useState(false)
   const [data, setData] = useState(null)

   useEffect(() => {
      async function fetchData() {
         let lang = "es"
         if (localStorage.getItem("languaje") !== null) lang = localStorage.getItem("languaje")
         const res = await fetch(`/api/navbar/${lang}`)
         const data = await res.json()
         setData({
            experience: data.experience,
            projects: data.projects,
            aboutus: data.aboutus,
            contactus: data.contactus
         })
      }
      fetchData()
   }, [localStorage])

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsVisible(true)
      }, 750)

      return () => clearTimeout(timer)
   }, [])

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

   return data && isVisible && (
      <ul className="fade-in sweep-up fixed justify-center backdrop-blur-lg overflow-hidden items-center font-medium rounded-full duration-300 text-sm flex top-2.5 px-4 py-2 gap-4 z-40"
         style={{ backgroundColor: isScrolled ? "#18181B" : "#00000000" }}>
         <LinkNavbar text={data.experience} to={"/#experience"} isActive={activeSection === "experience"} />
         <LinkNavbar text={data.projects} to={"/#projects"} isActive={activeSection === "projects"} />
         <LinkNavbar text={data.aboutus} to={"/#aboutus"} isActive={activeSection === "aboutus"} />
         <LinkNavbar text={data.contactus} to={"/#contactus"} isActive={activeSection === "contactus"} />
         <button className="hover:scale-125 duration-150"
            onClick={async () => {
               const currentLang = localStorage.getItem("languaje")
               const newLang = currentLang === "es" ? "en" : "es"
               localStorage.setItem("languaje", newLang)
               setTimeout(() => {
                  window.location.reload()
               }, 1000)
            }}>
            <DesktopIcon size={20} />
         </button>
      </ul>
   )
}