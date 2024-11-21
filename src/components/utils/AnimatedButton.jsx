export default function AnimatedButton({ data }) {
   return (
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px] z-0">
         <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]" />
         <div className="text-green-800 bg-green-100 dark:bg-zinc-900 dark:text-white/80 inline-flex items-center justify-center w-full px-3 py-1 text-sm rounded-full cursor-pointer backdrop-blur-3xl whitespace-nowrap">
            {data.text}
         </div>
      </span>
   )
}