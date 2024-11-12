import { NextResponse } from "next/server"

const about = {
   "title": "About Me",
   "first_paragraph": {
      "line_1": "My name is Kenn Marcucci and I'm",
      "line_2": "years old. I started in the world of programming in 2019 when I began my studies in Systems Engineering. Currently, I work as a",
      "line_3": "freelance Full Stack developer",
      "line_4": ", specialized in the",
      "line_5": "MERN stack",
      "line_6": "(MySQL, ExpressJS, ReactJS and NodeJS)."
   },
   "second_paragraph": {
      "line_1": "I enjoy working with the stack I am familiar with, but that does not limit my desire for",
      "line_2": "continuous learning",
      "line_3": ". Currently, I am studying  ",
      "line_4": "ASP.NET and Angular",
      "line_5": "to expand my knowledge and strengthen my skills in web development."
   },
   "third_paragraph": {
      "line_1": "Always looking for new challenges, I am committed to continuing to",
      "line_2": "hone my skills",
      "line_3": "and contribute to",
      "line_4": "innovative projects",
      "line_5": ". I am ready to continue growing and adding value at every opportunity that presents itself."
   }
}

export function GET() {
   try {
      return NextResponse.json(about)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}