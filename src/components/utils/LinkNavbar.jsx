import Link from "next/link"

export default function LinkNavbar({ text = "Link", to = "/", isActive = false }) {
   return (
      <Link href={to} className={`duration-150 whitespace-nowrap select-none ${isActive ? "text-blue-500" : "hover:text-blue-500"}`}>
         {text}
      </Link>
   )
}