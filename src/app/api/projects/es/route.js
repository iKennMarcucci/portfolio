import { NextResponse } from "next/server"

const projects = {
   "title": "Mis Proyectos",
   "first_project": {
      "title": "Round Robin Scheduling Algorithm - Graphical Representation",
      "desc": "Este proyecto tiene como objetivo explicar el concepto del Algoritmo de Planificación Round Robin, detallando qué es el Quantum, el tipo de cola que utiliza y su funcionamiento general."
   },
   "second_project": {
      "title": "Search and Sort Algorithms - All Languajes",
      "desc": "Este repositorio contiene algoritmos de búsqueda (Lineal, Fibonacci, Binaria) y ordenamiento (BubbleSort, Insertion, Quicksort, Selectionsort, Shellsort) implementados en cuatro lenguajes de programación diferentes."
   }
}

export function GET() {
   try {
      return NextResponse.json(projects)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}