import { LinkedInIcon, PDFIcon } from "@/components/assets/svg/SvgIcon"
import AnimatedButton from "@/components/utils/AnimatedButton"
import PrimaryButton from "@/components/utils/PrimaryButton"
import profile from "@/components/assets/img/profile.webp"
import Image from "next/image"

export default function Profile() {
   return (
      <section className="flex flex-col gap-5 mt-36">
         <div className="flex items-center gap-4">
            <aside className="overflow-hidden rounded-full w-20 h-20 border-2 border-zinc-800">
               <Image
                  src={profile}
                  width={250}
                  height={250}
                  alt={"Foto de perfil"}
                  className="object-cover"
               />
            </aside>
            <AnimatedButton />
         </div>
         <h1 className="font-bold text-5xl max-sm:text-4xl">¡Hola, Soy Kenn!</h1>
         <div className="flex flex-col gap-4">
            <p className="text-xl lg:max-w-[500px]">
               +3 años de experiencia. <b className="text-yellow-200">Ingeniero de Sistemas y Desarrollador FullStack</b> en Colombia. Especializado en el desarrollo de aplicaciones web y móviles únicas.
            </p>
         </div>
         <div className="flex gap-2.5">
            <PrimaryButton Icon={<PDFIcon size={20} />} text={"Descargar CV"} attach={'/pdf/kennmarcucci_CV.pdf'} />
            <PrimaryButton Icon={<LinkedInIcon size={20} />} text={"LinkedIn"} type={"link"} attach={'https://www.linkedin.com/in/kennmarcucci'} />
         </div>
      </section>
   )
}
