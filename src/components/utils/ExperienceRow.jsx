import Image from "next/image"

export default function ExperienceRow({ puesto, empresa, fecha, desc, pais = "CO" }) {
   return (
      <>
         <div className="relative flex flex-col lg:col-span-4 max-lg:col-span-5 max-md:col-span-12">
            <span className="bg-yellow-400 absolute rounded-full p-1.5 -left-[47px] top-2" />
            <h3 className="text-yellow-400 font-semibold text-xl">{puesto}</h3>
            <span className="flex items-center gap-2">
               <Image
                  width={22}
                  height={22}
                  alt={"Foto de perfil"}
                  className="object-cover"
                  src={`https://flagsapi.com/${pais}/flat/64.png`}
               />
               <h4 className="font-semibold text-lg">{empresa}</h4>
            </span>
            <p className="text-xs">{fecha}</p>
         </div>
         <div className="text-sm lg:col-span-8 max-xl:col-span-7 max-md:col-span-12">{desc}</div>
      </>
   )
}
