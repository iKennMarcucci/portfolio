import { NextResponse } from "next/server"

const about = {
   "title": "Sobre Mí",
   "first_paragraph": {
      "line_1": "Mi nombre es Kenn Marcucci y tengo",
      "line_2": "años. Inicié en el mundo de la programación en 2019 al comenzar mis estudios en Ingeniería de Sistemas. Actualmente, me desempeño como",
      "line_3": "desarrollador Full Stack freelancer",
      "line_4": ", especializado en el",
      "line_5": "stack MERN",
      "line_6": "(MySQL, ExpressJS, ReactJS y NodeJS)."
   },
   "second_paragraph": {
      "line_1": "Disfruto trabajar con el stack en el que estoy familiarizado, pero eso no limita mi afán de",
      "line_2": "aprendizaje continuo",
      "line_3": ". Actualmente, estoy estudiando",
      "line_4": "ASP.NET y Angular",
      "line_5": "para ampliar mis conocimientos y fortalecer mis habilidades en el desarrollo web."
   },
   "third_paragraph": {
      "line_1": "Siempre en busca de nuevos desafíos, estoy comprometido con seguir",
      "line_2": "perfeccionando mis habilidades",
      "line_3": "y contribuir a",
      "line_4": "proyectos innovadores",
      "line_5": ". Estoy listo para seguir creciendo y aportar valor en cada oportunidad que se presente."
   }
}

export function GET() {
   try {
      return NextResponse.json(about)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}