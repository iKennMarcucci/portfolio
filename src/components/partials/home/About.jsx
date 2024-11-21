import profile from "@/components/assets/img/profile2.webp"
import { AboutIcon } from "@/components/assets/svg/SvgIcon"
import Image from "next/image"

export default function About({ data }) {
   const calcularEdad = (fecha) => {
      const hoy = new Date()
      const nacimiento = new Date(fecha)
      let edad = hoy.getFullYear() - nacimiento.getFullYear()
      const mes = hoy.getMonth() - nacimiento.getMonth()
      mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate()) && edad--
      return edad
   }

   return (
      <section id={"aboutus"} className="flex flex-col gap-5 max-md:gap-10 pt-40">
         <div className="flex items-center gap-2.5">
            <AboutIcon size={30} />
            <h2 className="font-bold text-3xl">{data.title}</h2>
         </div>
         <div className="flex max-md:flex-col items-center gap-10">
            <div className="md:w-3/5 flex flex-col gap-4 max-md:order-2">
               <p>
                  {data.first_paragraph.line_1} {calcularEdad('2000-12-01')} {data.first_paragraph.line_2} <b className="text-yellow-200">{data.first_paragraph.line_3}</b>{data.first_paragraph.line_4} <b className="text-yellow-200">{data.first_paragraph.line_5}</b> {data.first_paragraph.line_6}
               </p>
               <p>
                  {data.second_paragraph.line_1} <b className="text-yellow-200">{data.second_paragraph.line_2}</b>{data.second_paragraph.line_3} <b className="text-yellow-200">{data.second_paragraph.line_4}</b> {data.second_paragraph.line_5}
               </p>
               <p>
                  {data.third_paragraph.line_1} <b className="text-yellow-200">{data.third_paragraph.line_2}</b> {data.third_paragraph.line_3} <b className="text-yellow-200">{data.third_paragraph.line_4}</b>{data.third_paragraph.line_5}
               </p>
            </div>
            <aside className="border-zinc-800 overflow-hidden aspect-square rounded-xl rotate-6 border-4 
            md:w-2/5 md:h-2/5 max-md:w-3/5 max-md:self-center max-md:order-1 lg:max-w-[300px]">
               <Image
                  src={profile}
                  alt={"profile"}
                  className="object-cover aspect-square -rotate-6 scale-150"
               />
            </aside>
         </div>
      </section>
   )
}