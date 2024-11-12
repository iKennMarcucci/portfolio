import { NextResponse } from "next/server"

const navbar = {
   "experience": "Experiencia",
   "projects": "Proyectos",
   "aboutus": "Sobre mí",
   "contactus": "Contacto"
}

export function GET() {
   try {
      return NextResponse.json(navbar)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}