"use client"

export default function PrimaryButton({ Icon = null, action = null, attach = null, text = "Button", type = "button" }) {
   const handleClick = () => action && action()
   return !attach ? (
      <button className="bg-zinc-900 hover:bg-slate-100 hover:text-zinc-900 border-zinc-800
         justify-center items-center rounded-full duration-150 border flex gap-2 px-4 py-1"
         type={type} onClick={handleClick}>
         {Icon && Icon} {text}
      </button>
   ) : (
      <a className="bg-zinc-900 hover:bg-slate-100 hover:text-zinc-900 border-zinc-800
         justify-center items-center rounded-full duration-150 border flex gap-2 px-4 py-1"
         href={attach} target={"_blank"} download={type !== "link" && attach ? attach.split('/').pop() : undefined}>
         {Icon && Icon} {text}
      </a>
   )
}
