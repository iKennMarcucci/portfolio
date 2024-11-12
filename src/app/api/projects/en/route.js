import { NextResponse } from "next/server"

const projects = {
   "title": "My Projects",
   "first_project": {
      "title": "Round Robin Scheduling Algorithm - Graphical Representation",
      "desc": "This project aims to explain the concept of the Round Robin Scheduling Algorithm, detailing what Quantum is, the type of queue it uses and its general operation."
   },
   "second_project": {
      "title": "Search and Sort Algorithms - All Languajes",
      "desc": "This repository contains search (Linear, Fibonacci, Binary) and sorting (BubbleSort, Insertion, Quicksort, Selectionsort, Shellsort) algorithms implemented in four different programming languages."
   }
}

export function GET() {
   try {
      return NextResponse.json(projects)
   } catch (error) {
      return NextResponse.json({ message: error.message })
   }
}