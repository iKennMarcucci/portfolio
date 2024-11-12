import { NextResponse } from "next/server"

const layout = {
   "title": "Portfolio de Kenn",
   "description": "Portfolio hecho por Kenn Marcucci"
}

export function GET() {
   try {
      return NextResponse.json(layout)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}