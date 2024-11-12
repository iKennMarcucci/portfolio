import Link from "next/link"

export default function Footer() {
   return (
      <footer className="text-gray-400 text-sm w-full pt-40 pb-10 mx-auto
      lg:max-w-[1000px] max-lg:max-w-[900px] max-lg:text-center">
         © {new Date().getFullYear()} Kenn Marcucci. Este portfolio se inspiró en enfoques de diseño encontrados en&nbsp;
         <Link href={"https://porfolio.dev"} target="_blank" className="hover:underline font-semibold">
            midudev
         </Link>
      </footer>
   )
}