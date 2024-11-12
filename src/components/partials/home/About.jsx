import { AboutIcon } from "@/components/assets/svg/SvgIcon"
import profile from "@/components/assets/img/profile2.webp"
import Image from "next/image"

export default function About() {
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
            <h2 className="font-bold text-3xl">Sobre Mí</h2>
         </div>
         <div className="flex max-md:flex-col items-center gap-10">
            <div className="md:w-3/5 flex flex-col gap-4 max-md:order-2">
               <p>
                  Mi nombre es Kenn Marcucci y tengo {calcularEdad('2000-12-01')} años. Inicié en el mundo de la programación en 2019 al comenzar mis estudios en Ingeniería de Sistemas. Actualmente, me desempeño como <b className="text-yellow-200">desarrollador Full Stack freelancer</b>, especializado en el <b className="text-yellow-200">stack MERN</b> (MySQL, ExpressJS, ReactJS y NodeJS).
               </p>
               <p>
                  Disfruto trabajar con el stack en el que estoy familiarizado, pero eso no limita mi afán de <b className="text-yellow-200">aprendizaje continuo</b>. Actualmente, estoy estudiando <b className="text-yellow-200">ASP.NET y Angular</b> para ampliar mis conocimientos y fortalecer mis habilidades en el desarrollo web.
               </p>
               <p>
                  Siempre en busca de nuevos desafíos, estoy comprometido con seguir <b className="text-yellow-200">perfeccionando mis habilidades</b> y contribuir a <b className="text-yellow-200">proyectos innovadores</b>. Estoy listo para seguir creciendo y aportar valor en cada oportunidad que se presente.               </p>
            </div>
            <aside className="border-zinc-800 overflow-hidden aspect-square rounded-xl rotate-6 border-4 
            md:w-2/5 md:h-2/5 max-md:w-3/5 max-md:self-center max-md:order-1 lg:max-w-[300px]">
               <Image
                  src={profile}
                  alt={"Foto de perfil"}
                  className="object-cover aspect-square -rotate-6 scale-150"
               />
            </aside>
         </div>
      </section>
   )
}