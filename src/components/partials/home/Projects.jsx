import { BootstrapIcon, CSSIcon, GoIcon, HTMLIcon, JavaIcon, JSIcon, ProjectIcon, PythonIcon } from "@/components/assets/svg/SvgIcon"
import roundrobin from "@/components/assets/img/projects/roundrobin.png"
import searchsort from "@/components/assets/img/projects/searchsort.png"
import ProjectRow from "@/components/utils/ProjectRow"

export default function Projects({ data, locale }) {
   return (
      <section id={"projects"} className="flex flex-col gap-5 pt-40">
         <div className="flex items-center gap-2.5 mb-10">
            <ProjectIcon size={30} />
            <h2 className="font-bold text-3xl">{data.title}</h2>
         </div>
         <div className="flex flex-col gap-10">
            <ProjectRow linkPreview={"https://ikennmarcucci.github.io/Round_Robin/RoundRobin.html"}
               title={data.first_project.title}
               desc={data.first_project.desc}
               locale={locale}
               linkCode={"https://github.com/iKennMarcucci/Round_Robin"}
               img={roundrobin}
               hasLink={true}
               tecnologies={[{
                  title: "HTML",
                  color: "e34f26",
                  Icon: HTMLIcon
               }, {
                  title: "Javascript",
                  color: "f0db4f",
                  Icon: JSIcon
               }, {
                  title: "CSS",
                  color: "0a66a5",
                  Icon: CSSIcon
               }, {
                  title: "Bootstrap",
                  color: "7e13f8",
                  Icon: BootstrapIcon
               }]} />

            <ProjectRow linkCode={"https://github.com/iKennMarcucci/Search-and-Sort-Algorithms"}
               title={data.second_project.title}
               desc={data.second_project.desc}
               locale={locale}
               img={searchsort}
               tecnologies={[{
                  title: "Go",
                  color: "000000",
                  Icon: GoIcon
               }, {
                  title: "Java",
                  color: "733324",
                  Icon: JavaIcon
               }, {
                  title: "Javascript",
                  color: "f0db4f",
                  Icon: JSIcon
               }, {
                  title: "Python",
                  color: "7e13f8",
                  Icon: PythonIcon
               }]} />
         </div>
      </section>
   )
}
