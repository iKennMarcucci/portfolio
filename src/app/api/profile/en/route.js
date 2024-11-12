import { NextResponse } from "next/server"

const profile = {
   "greeting": "Hi, I'm Kenn!",
   "exp_years": "+3 years of experience.",
   "job": "Systems Engineer and FullStack Developer",
   "specialization": "in Colombia. Specialized in the development of unique web and mobile applications.",
   "button_1": "Download CV",
}

export function GET() {
   try {
      return NextResponse.json(profile)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}