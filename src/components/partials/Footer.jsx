import Link from "next/link"

export default function Footer({ data }) {
   return (
      <footer className="text-gray-400 fade-in sweep-up text-sm pt-40 pb-10 text-center lg:max-w-[1000px] max-lg:max-w-[900px]">
         © {new Date().getFullYear()} {data.text}&nbsp;
         <Link href={"https://porfolio.dev"} target="_blank" className="hover:underline font-semibold">
            midudev
         </Link>
      </footer>
   )
}