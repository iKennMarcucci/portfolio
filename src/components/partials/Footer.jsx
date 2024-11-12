import Link from "next/link"
import { useEffect, useState } from "react"

export default function Footer() {
   const [isVisible, setIsVisible] = useState(false)
   const [data, setData] = useState(null)

   useEffect(() => {
      async function fetchData() {
         let lang = "es"
         if (localStorage.getItem("languaje") !== null) lang = localStorage.getItem("languaje")
         const res = await fetch(`/api/footer/${lang}`)
         const data = await res.json()
         setData({
            text: data.text,
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

   return data && isVisible && (
      <footer className="text-gray-400 fade-in sweep-up text-sm pt-40 pb-10
      lg:max-w-[1000px] max-lg:max-w-[900px] text-center">
         © {new Date().getFullYear()} {data.text}&nbsp;
         <Link href={"https://porfolio.dev"} target="_blank" className="hover:underline font-semibold">
            midudev
         </Link>
      </footer>
   )
}