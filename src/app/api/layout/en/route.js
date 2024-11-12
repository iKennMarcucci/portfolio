import { NextResponse } from "next/server"

const layout = {
   "title": "Kenn's Portfolio",
   "description": "Portfolio made by Kenn Marcucci"
}

export function GET() {
   try {
      return NextResponse.json(layout)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}