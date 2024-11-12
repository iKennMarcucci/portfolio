import { NextResponse } from "next/server"

const footer = {
   "text": "Kenn Marcucci. This portfolio was inspired by design approaches found on"
}

export function GET() {
   try {
      return NextResponse.json(footer)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}