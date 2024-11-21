import ExperienceRow from "@/components/utils/ExperienceRow"
import { CaseIcon } from "@/components/assets/svg/SvgIcon"

export default function Experience({ data }) {
   return (
      <section id={"experience"} className="flex flex-col gap-5 pt-40">
         <div className="flex items-center gap-2.5 mb-10">
            <CaseIcon size={30} />
            <h2 className="font-bold text-3xl">{data.title}</h2>
         </div>
         <div className="border-zinc-700 grid grid-cols-12 w-full border-l-2 px-10 py-2 gap-y-10">
            <ExperienceRow
               puesto={data.first_experience.puesto}
               empresa={data.first_experience.empresa}
               fecha={data.first_experience.fecha}
               desc={data.first_experience.desc}
               pais={"CO"}
            />
            <ExperienceRow
               puesto={data.second_experience.puesto}
               empresa={data.second_experience.empresa}
               fecha={data.second_experience.fecha}
               desc={data.second_experience.desc}
               pais={"CO"}
            />
            <ExperienceRow
               puesto={data.third_experience.puesto}
               empresa={data.third_experience.empresa}
               fecha={data.third_experience.fecha}
               desc={data.third_experience.desc}
               pais={"MX"}
            />
            <ExperienceRow
               puesto={data.fourth_experience.puesto}
               empresa={data.fourth_experience.empresa}
               fecha={data.fourth_experience.fecha}
               desc={data.fourth_experience.desc}
               pais={"CO"}
            />
            <ExperienceRow
               puesto={data.fifth_experience.puesto}
               empresa={data.fifth_experience.empresa}
               fecha={data.fifth_experience.fecha}
               desc={data.fifth_experience.desc}
               pais={"CO"}
            />
         </div>
      </section>
   )
}
