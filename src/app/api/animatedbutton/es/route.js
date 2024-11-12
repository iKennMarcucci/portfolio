import { NextResponse } from "next/server"

const animatedbutton = {
   "text": "Disponible para trabajar"
}

export function GET() {
   try {
      return NextResponse.json(animatedbutton)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}