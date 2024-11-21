import { GithubIcon, LinkIcon } from "../assets/svg/SvgIcon"
import PrimaryButton from "./PrimaryButton"
import Image from "next/image"
import Link from "next/link"

export default function ProjectRow({ tecnologies = null, hasLink = null, linkPreview = null, linkCode, desc, title, img, locale }) {
   return (
      <section className="flex justify-center gap-5
      max-lg:flex-col">
         <Link href={linkPreview ? linkPreview : linkCode} target={"_blank"}
            className="border-zinc-700 overflow-hidden h-fit rounded-xl border-2 lg:w-1/2">
            <Image
               src={img}
               alt={img}
               className="object-cover hover:scale-110 duration-700 aspect-video"
            />
         </Link>
         <div className="flex flex-col lg:w-1/2 gap-2">
            <h3 className="font-semibold text-2xl">{title}</h3>
            <div className="flex justify-start items-center gap-2">
               {
                  tecnologies && tecnologies.map((t, i) =>
                     <span key={i} style={{ backgroundColor: `#${t.color}75` }} className={`flex justify-center items-center rounded-full font-medium gap-2 py-1 px-2.5 text-xs`}>
                        <t.Icon size={16} />
                        <p>{t.title}</p>
                     </span>
                  )
               }
            </div>
            <p className="text-gray-300 flex-grow">{desc}</p>
            <div className="flex gap-2 mt-auto">
               <PrimaryButton Icon={<GithubIcon size={20} />} text={locale === "es" ? "Código" : "Code"} attach={linkCode} />
               {hasLink && <PrimaryButton Icon={<LinkIcon size={20} />} text={locale === "es" ? "Ver Proyecto" : "See Project"} attach={linkPreview} />}
            </div>
         </div>
      </section>
   )
}
