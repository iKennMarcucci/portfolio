import ExperienceRow from "@/components/utils/ExperienceRow"
import { CaseIcon } from "@/components/assets/svg/SvgIcon"

export default function Experience() {
   return (
      <section id={"experience"} className="flex flex-col gap-5 pt-40">
         <div className="flex items-center gap-2.5 mb-10">
            <CaseIcon size={30} />
            <h2 className="font-bold text-3xl">Experiencia Laboral</h2>
         </div>
         <div className="border-zinc-700 border-l-2 px-10 py-2">
            <div className="grid grid-cols-12 w-full gap-y-10">
               <ExperienceRow
                  puesto={"Desarrollador Frontend"}
                  empresa={"Mazzi Arquitectos"}
                  fecha={"Agosto, 2024 - Septiembre, 2024"}
                  pais="CO"
                  desc={"Mazzi Arquitectos soñaba con una mayor presencia en el mercado, mejorar la interacción con potenciales clientes y destacar sus proyectos realizados. Junto a ellos desarrollé una Landing Page que cumpliera todos los requerimientos técnicos, lo cual resultó en una notable mejora en los objetivos de la empresa."}
               />
               <ExperienceRow
                  puesto={"Analista QA"}
                  empresa={"UFPS - Prácticas"}
                  fecha={"Abril, 2024 - Julio, 2024"}
                  pais="CO"
                  desc={"Realicé un análisis detallado de un Sistema de Nómina de Pagos de Personal y Administración de Recursos Humanos basado en JBoss 4.2.3, su arquitectura, sus funcionalidades existentes y los errores detectados. Documenté toda la información para establecer las bases del desarrollo de una nueva versión del software de nómina."}
               />
               <ExperienceRow
                  puesto={"Desarrollador Frontend"}
                  empresa={"GetMoney"}
                  fecha={"Octubre, 2023 - Abril, 2024"}
                  pais="MX"
                  desc={"GetMoney aspiraba a permitir a los usuarios reservar divisas en más de 2000 centros cambiarios y 5000 sucursales bancarias. En colaboración con una startup, desarrollamos una aplicación web que integró funcionalidades como la posibilidad de agendar citas de forma conveniente y un sistema de geolocalización para localizar las ubicaciones más cercanas, garantizando siempre la mejor opción."}
               />
               <ExperienceRow
                  puesto={"Desarrollador FullStack"}
                  empresa={"Calzado Andrea Navarro"}
                  fecha={"Marzo, 2023 - Julio, 2023"}
                  pais="CO"
                  desc={"Calzado Andrea Navarro deseaba un e-commerce para fortalecer su presencia en el mercado, automatizar la gestión de pedidos, integrar el seguimiento de envíos y una pasarela de pagos, todo mientras garantizaba una excelente experiencia de usuario. Como Desarrollador Full Stack, realicé una plataforma que cumplió con todos los requisitos, superando las expectativas de la empresa y de sus clientes."}
               />
               <ExperienceRow
                  puesto={"Desarrollador Frontend"}
                  empresa={"Sanarte IPS"}
                  fecha={"Agosto, 2022 - Noviembre, 2022"}
                  pais="CO"
                  desc={"Sanarte IPS aspiraba publicar información sobre sus servicios y una solución eficiente para gestionar y agendar citas. Para resolver esto, desarrollé una Landing Page informativa que centralizara todos los detalles relevantes sobre la institución. Además, implementé un sistema de envío de correos para facilitar el agendamiento de citas, mejorando la interacción con los pacientes y optimizando su gestión."}
               />
            </div>
         </div>
      </section>
   )
}
