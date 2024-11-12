import { NextResponse } from "next/server"

const footer = {
   "text": "Kenn Marcucci. Este portfolio se inspiró en enfoques de diseño encontrados en"
}

export function GET() {
   try {
      return NextResponse.json(footer)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}