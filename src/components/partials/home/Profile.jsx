import { LinkedInIcon, PDFIcon } from "@/components/assets/svg/SvgIcon"
import AnimatedButton from "@/components/utils/AnimatedButton"
import PrimaryButton from "@/components/utils/PrimaryButton"
import profile from "@/components/assets/img/profile.webp"
import Image from "next/image"

export default function Profile({ data, locale }) {
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
            <AnimatedButton data={data.AnimatedButton} />
         </div>
         <h1 className="font-bold text-5xl max-sm:text-4xl">{data.greeting}</h1>
         <div className="flex flex-col gap-4">
            <p className="text-xl lg:max-w-[500px]">
               {data.exp_years} <b className="text-yellow-200">{data.job}</b> {data.specialization}
            </p>
         </div>
         <div className="flex gap-2.5">
            <PrimaryButton Icon={<PDFIcon size={20} />} text={'Curriculum Vitae'} attach={locale === "es" ? '/pdf/Kenn_Marcucci_es.pdf' : '/pdf/Kenn_Marcucci_en.pdf'} />
            <PrimaryButton Icon={<LinkedInIcon size={20} />} text={"LinkedIn"} type={"link"} attach={'https://www.linkedin.com/in/kennmarcucci'} />
         </div>
      </section>
   )
}
