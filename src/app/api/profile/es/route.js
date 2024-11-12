import { NextResponse } from "next/server"

const profile = {
   "greeting": "¡Hola, Soy Kenn!",
   "exp_years": "+3 años de experiencia.",
   "job": "Ingeniero de Sistemas y Desarrollador FullStack",
   "specialization": "en Colombia. Especializado en el desarrollo de aplicaciones web y móviles únicas.",
   "button_1": "Descargar CV",
}

export function GET() {
   try {
      return NextResponse.json(profile)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}