import { NextResponse } from "next/server"

const navbar = {
   "experience": "Experience",
   "projects": "Projects",
   "aboutus": "About me",
   "contactus": "Contact"
}

export function GET() {
   try {
      return NextResponse.json(navbar)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}