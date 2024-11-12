import { NextResponse } from "next/server"

const experiences = {
   "title": "Work Experience",
   "first_experience": {
      "puesto": "Frontend Developer",
      "empresa": "Mazzi Arquitectos",
      "fecha": "August, 2024 - September, 2024",
      "desc": "Mazzi Arquitectos dreamed of a greater presence in the market, improving interaction with potential clients and highlighting their completed projects. Together with them, I developed a Landing Page that met all the technical requirements, which resulted in a significant improvement in the company's objectives."
   },
   "second_experience": {
      "puesto": "QA Analyst",
      "empresa": "UFPS - Internship",
      "fecha": "Abril, 2024 - Julio, 2024",
      "desc": "I performed a detailed analysis of a JBoss 4.2.3-based Payroll and Human Resources Administration System, its architecture, existing functionalities and detected errors. I documented all the information to establish the basis for the development of a new version of the payroll software."
   },
   "third_experience": {
      "puesto": "Frontend Developer",
      "empresa": "GetMoney",
      "fecha": "October, 2023 - April, 2024",
      "desc": "GetMoney aimed to enable users to reserve foreign currency at over 2,000 exchange centers and 5,000 bank branches. In collaboration with a startup, we developed a web application that integrated functionalities such as the possibility of convenient appointment scheduling and a geolocation system to locate the nearest locations, always guaranteeing the best option."
   },
   "fourth_experience": {
      "puesto": "FullStack Developer",
      "empresa": "Calzado Andrea Navarro",
      "fecha": "Marzo, 2023 - Julio, 2023",
      "desc": "Calzado Andrea Navarro wanted an e-commerce to strengthen its presence in the market, automate order management, integrate shipment tracking and a payment gateway, all while ensuring an excellent user experience. As a FullStack Developer, I created a platform that met all requirements, exceeding the expectations of the company and its customers."
   },
   "fifth_experience": {
      "puesto": "Frontend Developer",
      "empresa": "Sanarte IPS",
      "fecha": "August, 2022 - November, 2022",
      "desc": "Sanarte IPS wanted to publish information about its services and an efficient solution to manage and schedule appointments. To solve this, I developed an informative Landing Page that centralized all the relevant details about the institution. In addition, I implemented an email sending system to facilitate appointment scheduling, improving interaction with patients and optimizing their management."
   }
}

export function GET() {
   try {
      return NextResponse.json(experiences)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}